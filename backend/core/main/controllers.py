from main.models import Expense,ExpenseLin
from django.db.models import Sum

#Utility para obtener un array con todas las expenses
def get_expenses():

    #En el controlador usando el related_name hace un "join" y suma los 
    # amount de las lineas del pedido guardadolo como total
    expenses=Expense.objects.all().annotate(total=Sum("lines__amount"))

    return expenses

#Alternativa en funcion
def get_expenses_total():

   
   total=sum( i.total for i in Expense.objects.all().annotate(total=Sum("lines__amount")))
    
   return total

#Cojo las lineas de la expense proporcionada
def get_lines(expense_pk):
    #Filtro por las lineas de la expense deseada con amount>0
    lines = ExpenseLin.objects.filter(expense=expense_pk, amount__gt=0) 
    return lines



   