from django.contrib import admin
from mainp.models import Expense, ExpenseLin, ExpenseTags # type: ignore

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
        "get_tags",
    )

    def get_tags(self, obj):
        tg = ExpenseTags.objects.filter(expense_lines=obj)
        return ", ".join([str(tag_eo) for tag_eo in tg])

    list_filter = ("expense",)
    search_fields = ("description",)
    ordering = ("amount",)

class ExpenseTagAdmin(admin.ModelAdmin):

    list_display = (
        "description",
        "get_lin",
    )
    search_fields = ("description",)
    ordering = ("description",)

    def get_lin(self, obj):
        return "," .join([expense_lines.description for expense_lines in obj.expense_lines.all()])

admin.site.register(Expense, ExpenseAdmin)
admin.site.register(ExpenseLin, ExpenseLinAdmin)
admin.site.register(ExpenseTags, ExpenseTagAdmin)