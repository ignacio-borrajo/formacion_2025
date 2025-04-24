from django.contrib import admin
from django.db.models import Subquery,Q
from main.models import Expense,ExpenseLin,Tags


class ExpenseAdmin(admin.ModelAdmin):
    fields = (
        "description",
        "category",
        "limit",
        "user"
    )
    list_display = (
        "description",
        "category",
        "limit",
        "date",
        "user",
    )
    list_filter = ("category", "limit")
    search_fields = ("description", "category")
    ordering = ("-date", "description")

class ExpenseLinAdmin(admin.ModelAdmin):
    list_display = (
        "description",
        "amount",
        "date",
        "expense",
        "get_tagslin",
        )

    def get_tagslin(self,obj):
        tg = Tags.objects.filter(expenselin=obj)
        return ",".join([str(ins_tag) for ins_tag in tg])
    
    list_filter = ("date", "description")
    search_fields = ("description", "date")
    ordering = ("-date", "description")

class TagsAdmin(admin.ModelAdmin):
    list_display=(
        'tag',
        'get_expenselin',
        'user',
    )
    def get_expenselin(self,object):
        return ",".join([expenselin.description for expenselin in object.expenselin.all()])

admin.site.register(Expense, ExpenseAdmin)
admin.site.register(ExpenseLin,ExpenseLinAdmin)
admin.site.register(Tags,TagsAdmin)