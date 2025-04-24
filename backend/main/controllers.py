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


def get_lines(request, expense_pk):

    tag_param = request.GET.get("tag")

    lines = ExpenseLin.objects.filter(expense=expense_pk, amount__gt=0, tag__name__icontains=tag_param).all
    return lines


def get_all_lines():
        lines = ExpenseLin.objects
        return lines
