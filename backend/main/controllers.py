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


def get_lines(expense_pk, user):
    """
    Retrieves lines for a specific expense, filtering tags by user if not a superuser.
    """
    # Obtén todas las líneas del gasto
    lines = ExpenseLin.objects.filter(expense=expense_pk, amount__gt=0).prefetch_related('tags')

    if not user.is_superuser:
        # Filtrar los tags de cada línea para que solo se muestren los del usuario actual
        for line in lines:
            line.tags.set(  line.tags.filter(user=user))

    return lines
