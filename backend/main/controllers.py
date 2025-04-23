
from main.models import Expense, ExpenseLin
from django.db.models import Sum, Subquery, Q


def get_expenses(connected_user):

    if connected_user.is_authenticated:
        expenses = Expense.objects.filter(
            Q(user__isnull=True) | Q(user=connected_user))
    else:
        expenses = Expense.objects.filter(user__isnull=True)
    
    return expenses


def get_lines(expense_pk):
    lines = ExpenseLin.objects.filter(expense=expense_pk, amount__gt=0)
    return lines

