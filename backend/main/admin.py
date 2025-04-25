from django.contrib import admin
from main.models import Expense, ExpenseLin, Tags


## Con esta clase podemos modificar la interfaz del admin. Hereda de admin.ModelAdmin
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


class TagsAdmin(admin.ModelAdmin):
    fields = (
        "name",
        "user",
    )
    list_display = ("name",)
    search_fields = (
        "name",
        "user",
    )


admin.site.register(Expense, ExpenseAdmin)
admin.site.register(ExpenseLin, ExpenseLinAdmin)
admin.site.register(Tags, TagsAdmin)
