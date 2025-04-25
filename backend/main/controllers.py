from django.db.models import Q
from django.db.models.manager import BaseManager
from main.models import Expense, ExpenseLin


def get_expenses(connected_user):

    if connected_user.is_authenticated:
        expenses = Expense.with_totals.filter(
            Q(Q(user__isnull=True) | Q(user=connected_user))
        )
    else:
        expenses = Expense.with_totals.filter(user__isnull=True)

    return expenses


def get_lines(expense_pk, tags=None):
    lines = ExpenseLin.objects.filter(expense=expense_pk, amount__gt=0)

    if tags:
        lines = lines.filter(tags__id__in=tags).distinct()

    return lines
