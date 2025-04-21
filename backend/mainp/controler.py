from mainp.models import Expense

def get_expenses():
    expenses = Expense.objects.all()

    return expenses