from django.contrib import admin
from mainp.models import Expense, ExpenseLin

class ExpenseAdmin(admin.ModelAdmin):
    fields = (
        "description",
        "category",
        "limit",
        "user",
    )
    list_display = (
        "description",
        "user",
        "category",
        "limit",
        "date",
    )
    list_filter = ("category","limit")
    search_fields = ("description", "category")
    ordering = ("-date","description")


class ExpenseLinAdmin(admin.ModelAdmin):
    fields = (
        "expense",
        "description",
        "amount",
        "date",
    )
    list_display = (
        "expense",
        "description",
        "amount",
        "date",
    )
    list_filter = ("expense",)
    search_fields = ("description",)
    ordering = ("amount",)

admin.site.register(Expense, ExpenseAdmin)
admin.site.register(ExpenseLin, ExpenseLinAdmin)