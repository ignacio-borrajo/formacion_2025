from main.models import Expense, ExpenseLin, Tags

# Importa la clase Q, que permite hacer consultas complejas en Django, como ORs y ANDs entre filtros.
from django.db.models import Q


def get_expenses(connected_user):

    if connected_user.is_authenticated:
        expenses = Expense.with_totals.filter(
            Q(Q(user__isnull=True) | Q(user=connected_user))
        )
    else:
        expenses = Expense.with_totals.filter(user__isnull=True)

    return expenses


def get_lines(expense_pk):
    lines = ExpenseLin.objects.filter(expense=expense_pk, amount__gt=0)
    return lines


def get_tags(expenseLin_pk):
    tag = ExpenseLin.objects.get(pk=expenseLin_pk)
    return tag
