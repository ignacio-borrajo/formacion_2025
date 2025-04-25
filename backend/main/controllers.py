
from main.models import Expense, ExpenseLin, Label
from django.db.models import Q


def get_expenses(connected_user):

    if connected_user.is_authenticated:
        expenses = Expense.with_totals.filter(
            Q(Q(user__isnull=True) | Q(user=connected_user))
        )
    else:
        expenses = Expense.with_totals.filter(user__isnull=True)
    
    return expenses


def get_lines(expense_pk, label_ids=None):
    lines = ExpenseLin.objects.filter(expense=expense_pk, amount__gt=0).prefetch_related("labels")
    if label_ids:
        lines = lines.filter(labels__id__in=label_ids).distinct()
    return lines


