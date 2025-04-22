from django.contrib import admin


# Register your models here.
from main.models import Expense

#Creo un admin para administrar el display de mi modelo
class ExpenseAdmin(admin.ModelAdmin):
    fields=(
        "descripcion",
        "limit",
        "category"
    )
    list_display=(
        "descripcion",
        "limit",
        "category",
        "date"
    )
    list_filter=("category","limit")
    search_fields=("description","category")
    ordering=("-date","descripcion")

#Registro el modelo con su admin correspondiente
admin.site.register(Expense,ExpenseAdmin)
