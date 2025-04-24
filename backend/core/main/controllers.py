from main.models import Expense,ExpenseLin
from django.db.models import Sum
#Importo para usar or
from django.db.models import Q

#Utility para obtener un array con todas las expenses y total de la suma de sus amount de linea
def get_expenses(connected_user):


    if connected_user.is_authenticated:
        #Cojo las expenses del manager con los totales de expense line calculados
        expenses = Expense.with_totals.filter(
            Q(Q(user__isnull=True) | Q(user=connected_user))
        )
    else:
        expenses = Expense.with_totals.filter(user__isnull=True)

    return expenses

   
    
   

    # los devuelvo
    return expenses

#Alternativa en funcion
def get_expenses_total():

   #Para hacer el sumatorio total de tdos loa amount de las expenses. Va con ternaria para evitar none types
   total=sum( (i.total if i.total is not None else 0) for i in Expense.objects.all().annotate(total=Sum("lines__amount")))
    #Podría hacerse con el custom manager withtotals
   return total

#Cojo las lineas de la expense proporcionada
def get_lines(expense_pk):
    #Filtro por las lineas de la expense deseada con amount>0
    lines = ExpenseLin.objects.filter(expense=expense_pk, amount__gt=0) 
    return lines



   