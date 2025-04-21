from django.contrib import admin

from main.models import Expense

class ExpenseAdmin(admin.ModelAdmin):
    fields= (
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
    list_filter = ("category","limit")
    search_fields = ("description", "category")
    ordering = ("-date", "description")

# Register your models here.

admin.site.register(Expense, ExpenseAdmin)