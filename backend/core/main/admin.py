from django.contrib import admin

#Aqui es la vista de /admin. Lo que quiero que se muestre ahí

# Register your models here.
from main.models import Expense
from main.models import ExpenseLin
from main.models import Category

#Creo un admin para administrar el display de mi modelo
class ExpenseAdmin(admin.ModelAdmin):
    fields=(
        "description",
        "limit",
        "category",
        "user",
    )
    list_display=(
        "description",
        "limit",
        "date",
        "category",
        "user",
    )
    list_filter=("category","limit")
    search_fields=("description","category")
    ordering=("-date","description")

#Registro el modelo con su admin correspondiente
admin.site.register(Expense,ExpenseAdmin)


#Mismo procedimiento para mostrar en admin los datos de las categorias
class CategoryAdmin(admin.ModelAdmin):
    fields=(
        "name",
        "code",
        "description"
    )
    list_display=(
        "name",
        "code",
        "description"
    )


#Registro el modelo con su admin correspondiente
admin.site.register(Category,CategoryAdmin)


class ExpenseLinAdmin(admin.ModelAdmin):
    list_display = (
        "description",
        "expense",
        "amount",
        "date",
    )
    list_filter = ("expense",)
    search_fields = ("description",)
    list_editable = ("amount",)

#Registro el modelo con su admin correspondiente
admin.site.register(ExpenseLin,ExpenseLinAdmin)