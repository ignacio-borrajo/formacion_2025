from main.models import Expense,ExpenseLin,Tags
from django.db.models import Q,Subquery

def get_expenses(connected_user):
    if connected_user.is_authenticated:
        expenses = Expense.with_totals.filter(Q(Q(user__isnull=True) | Q(user=connected_user)))
    else:
        expenses = Expense.with_totals.filter(user__isnull=True)

    return expenses

def get_lines(expense_pk):
    lines = ExpenseLin.objects.filter(expense=expense_pk)
    return lines





def get_tags(expenselin_pk,connectedUser):
    tags = Tags.objects.filter(expenselin=expenselin_pk,user=connectedUser)
    return tags

def post_lines(expenselin_pk,post_tag):
    related_lin_tag = Tags.objects.filter(expenselin=expenselin_pk,id=post_tag)
    lines = ''
    if related_lin_tag:
        lines = ExpenseLin.objects.filter(id=expenselin_pk)
    return lines