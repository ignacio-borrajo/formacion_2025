from django.shortcuts import render
from main.controllers import get_expenses,get_lines,get_tags
from django.db.models import Sum

def index(request):
    """
    View function for the index page.
    """
    user = request.user
    expenses = get_expenses(connected_user=user)
    total = expenses.aggregate(total=Sum("total"))["total"]
    context = {"expenses": expenses, "total_expense": total}

    return render(request, "index.html", context)

def lines(request, expense_pk_get):
    tags = []
    user = request.user
    lines = get_lines(expense_pk=expense_pk_get)
    for line in lines:
        tags.append(get_tags(expenselin_pk=line.id,connectedUser=user))
        
    context = {"lines":lines,"tags":tags}

    return render(request, "lines.html", context)