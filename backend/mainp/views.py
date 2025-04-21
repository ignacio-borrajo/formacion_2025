from django.shortcuts import render
from mainp.controler import get_expenses

def index(request):
    """
    View function of the index page
    """
    expenses = get_expenses()
    context = {
        "expenses":expenses,
        "total_expense":0
    }

    return render(request, "index.html")

