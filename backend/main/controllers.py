from main.models import Expense, ExpenseLin
from django.db.models import Q


def get_expenses(connected_user):

    if connected_user.is_authenticated:
        expenses = Expense.with_totals.filter(
            Q(Q(user__isnull=True) | Q(user=connected_user))
        )
    else:
        expenses = Expense.with_totals.filter(user__isnull=True)

    return expenses


def get_lines(expense_pk, tag_codes=None):
    lines = ExpenseLin.objects.filter(expense=expense_pk, amount__gt=0)

    connected_user = Expense.objects.get(pk=expense_pk).user
    if connected_user:
        lines = lines.filter(tag__user=connected_user)
    
    if tag_codes:
        lines = lines.filter(tag__code__in=tag_codes).distinct()
    
    return lines
