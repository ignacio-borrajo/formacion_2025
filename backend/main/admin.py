from django.contrib import admin
from main.models import Expense
from main.models import ExpenseLin


class ExpenseAdmin(admin.ModelAdmin):
    fields = (
        "description",
        "category",
        "limit",
    )
    list_display = (
        "description",
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
        "amount",
        "date",
        )
    list_filter = ("date", "description")
    search_fields = ("description", "date")
    ordering = ("-date", "description")

admin.site.register(Expense, ExpenseAdmin)
admin.site.register(ExpenseLin,ExpenseLinAdmin)