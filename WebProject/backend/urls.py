from django.contrib import admin
from django.urls import path
from . import views
from .views import create_expense_line, get_expense_lines

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', views.login),  # Ruta para iniciar sesión
    path('register/', views.register),  # Ruta para registrar un usuario
    path('expenses/create/', views.create_expense, name='create_expense'),  # Crear gasto
    path('expenses/', views.get_expenses, name='get_expenses'),  # Obtener los gastos del usuario autenticado
   # path('expenses/<int:expense_id>/lines/', create_expense_line),  # Crear una línea de gasto asociada al gasto
path('expenses/<int:expense_id>/lines/', create_expense_line, name='create_expense_line'),  # POST para crear línea
#nuevoget
path('expenses/<int:expense_id>/lines/list/', get_expense_lines, name='get_expense_lines'),  # GET para obtener las líneas

]
