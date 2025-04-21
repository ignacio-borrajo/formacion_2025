from django.shortcuts import render
from main.controllers import get_expenses

# Create your views here.

def index(request):

    expenses = get_expenses()

    context = {"expenses": expenses, "total_expenses": 0}

    return render(request, "index.html", context)
