from django.contrib import admin
from main.models import Expense, ExpenseLin, ExpenseTag
 
 
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
        "get_tags",
    )
    list_filter = ("expense",)
    search_fields = ("description",)
    list_editable = ("amount",)

    def get_tags(self, obj):
        return ", ".join([tag.name for tag in obj.tag.all()])


class ExpenseTagAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "description",
        "user",
    )
 
admin.site.register(Expense, ExpenseAdmin)
admin.site.register(ExpenseLin, ExpenseLinAdmin)
admin.site.register(ExpenseTag, ExpenseTagAdmin)