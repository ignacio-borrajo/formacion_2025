from django.contrib import admin
from main.models import Expense, ExpenseLin, Tag


class ExpenseAdmin(admin.ModelAdmin):
    fields = ("description", "category", "limit", "user")
    list_display = (
        "description",
        "user",
        "category",
        "limit",
        "date",
    )
    list_filter = ("category", "limit")
    search_fields = ("description", "category")
    ordering = ("-date", "description")


class ExpenseLinAdmin(admin.ModelAdmin):
    list_display = (
        "description",
        "expense",
        "amount",
        "date",
    )
    list_filter = ("expense",)
    search_fields = ("description",)
    list_editable = ("amount",)


class TagAdmin(admin.ModelAdmin):
    list_display = ("name", "user")
    search_fields = ("name",)
    list_filter = ("user",)


admin.site.register(Expense, ExpenseAdmin)
admin.site.register(ExpenseLin, ExpenseLinAdmin)
admin.site.register(Tag, TagAdmin)
