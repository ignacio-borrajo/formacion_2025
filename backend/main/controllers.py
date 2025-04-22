
from main.models import Expense, ExpenseLin
from django.db.models import Sum


def get_expenses():
    expenses = Expense.objects.all().annotate(total=Sum("lines__amount"))


    return expenses


def get_lines(expense_pk):
    lines = ExpenseLin.objects.filter(expense=expense_pk, amount__gt=0)
    return lines

