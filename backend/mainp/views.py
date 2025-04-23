from django.shortcuts import render
from mainp.controler import get_expenses
from django.db.models import Sum

def index(request):
    """
    View function for the index page.
    """

    user = request.user

    expenses = get_expenses(user)

    query = expenses.aggregate(total_expense=Sum('total'))
    total_expense = query["total_expense"]
    
    context = {"expenses": expenses, "total_expense": total_expense}

    return render(request, "index.html", context)

def lines(request, expense):
    """
    View function for the lines page.
    """

    lines = get_expenses(expense_pk=expense)
    context = {"lines": lines}

    return render(request, "lines.html", context)

