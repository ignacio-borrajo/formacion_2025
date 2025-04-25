from django.db.models import Sum
from django.db.models.manager import BaseManager
from django.shortcuts import render
from main.controllers import get_expenses, get_lines
from main.models import Expense, Tag


def index(request):
    """
    View function for the index page.
    """

    user = request.user

    expenses = get_expenses(user)

    total_expense = expenses.aggregate(total_expense=Sum("total"))[
        "total_expense"
    ]

    context = {"expenses": expenses, "total_expense": total_expense}

    return render(request, "index.html", context)


def lines(request, expense):
    tag_ids = request.GET.getlist("tag")

    try:
        tag_ids = [int(tag_id) for tag_id in tag_ids]
    except ValueError:
        tag_ids = []

    lines = get_lines(expense_pk=expense, tags=tag_ids)

    context = {"lines": lines}

    return render(request, "lines.html", context)
