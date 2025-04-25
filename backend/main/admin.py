from django.contrib import admin

from main.models import Expense, ExpenseLin, Label
from main.forms import ExpenseLinForm


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
    form = ExpenseLinForm

    list_display = (
        "description",
        "expense",
        "amount",
        "get_labels",
        "date",
    )
    list_filter = ("expense",)
    search_fields = ("description",)
    list_editable = ("amount",)

    def get_labels(self, obj):
        # Devuelve una lista de etiquetas separadas por comas
        return ", ".join([label.name for label in obj.labels.all()])
    get_labels.short_description = "Labels"  # Nombre de la columna en el admin
    
class LabelAdmin(admin.ModelAdmin):
    list_display = ("name", "user", "date") 
    search_fields = ("name",) 
    list_filter = ("user", "date") 



admin.site.register(Expense, ExpenseAdmin)
admin.site.register(ExpenseLin, ExpenseLinAdmin)
admin.site.register(Label, LabelAdmin)
