from django.contrib import admin
from main.models import Expense, ExpenseLin, ExpenseTag


class ExpenseAdmin(admin.ModelAdmin):
    fields = (
        "description",
        "category",
        "limit",
        "tag",
    )
    list_display = (
        "description",
        "category",
        "limit",
        "date",
        "tag",
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


class ExpenseTagAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "description",
    )

admin.site.register(Expense, ExpenseAdmin)
admin.site.register(ExpenseLin, ExpenseLinAdmin)
admin.site.register(ExpenseTag, ExpenseTagAdmin)