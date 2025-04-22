from django.contrib import admin

#Aqui es la vista de /admin. Lo que quiero que se muestre ahí

# Register your models here.
from main.models import Expense
from main.models import Category

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


#Mismo procedimiento para mostrar en admin los datos de las categorias
class CategoryAdmin(admin.ModelAdmin):
    fields=(
        "name",
        "code",
        "descripcion"
    )
    list_display=(
        "name",
        "code",
        "descripcion"
    )


admin.site.register(Category,CategoryAdmin)
