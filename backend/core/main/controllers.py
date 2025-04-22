from main.models import Expense

#Utility para obtener un array con todas las expenses
def get_expenses():

    expenses=Expense.objects.all()

    return expenses

def get_expenses_total():

   
   total=sum( i.limit for i in Expense.objects.all())
    
   return total



   