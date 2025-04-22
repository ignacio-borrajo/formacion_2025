from main.models import Expense
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



   