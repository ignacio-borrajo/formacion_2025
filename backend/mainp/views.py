from django.shortcuts import render
from main.controllers import get_expenses

def index(request):
    """
    View function of the index page
    """
    expenses = get_expenses()

    for expense in expenses:
        print(expense.description)

    return render(request, "index.html")

