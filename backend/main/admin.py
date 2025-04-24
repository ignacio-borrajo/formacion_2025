from django.contrib import admin
from main.models import Expense, ExpenseLin, Tag


class ExpenseAdmin(admin.ModelAdmin):
    fields = ("description", "limit", "user")
    list_display = (
        "description",
        "user",
        "limit",
        "date",
    )
    list_filter = ("limit",)
    search_fields = ("description",)
    ordering = ("-date", "description")


class ExpenseLinAdmin(admin.ModelAdmin):

    @admin.display(description="Tags")
    def get_tags(self, obj):
        return ", ".join([tag.name for tag in obj.tag.all()])

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
    search_fields = ("tag__name",)

class TagAdmin(admin.ModelAdmin):
    fields = ("code","name")
    list_display = ("code", "name", "user")
    list_filter = ("user",)
    search_fields = ("code", "name")
    ordering = ("name",)


admin.site.register(Expense, ExpenseAdmin)
admin.site.register(ExpenseLin, ExpenseLinAdmin)
admin.site.register(Tag, TagAdmin)