from django.shortcuts import render
from main.controllers import get_expenses,get_lines
from django.db.models import Sum

def index(request):
    """
    View function for the index page.
    """
    expenses = get_expenses()
    total = expenses.aggregate(total=Sum("total"))["total"]
    context = {"expenses": expenses, "total_expense": total}

    return render(request, "index.html", context)

def lines(request, expense_pk_get): 
    lines = get_lines(expense_pk=expense_pk_get)
    context = {"lineas":lines}

    return render(request, "lines.html", context)