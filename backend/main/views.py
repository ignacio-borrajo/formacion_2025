from django.db.models import Sum
from django.shortcuts import render
from main.controllers import get_expenses, get_lines


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
    tag_codes = request.GET.getlist("tags")  # Get tag codes from
    # query parameters
    lines = get_lines(expense_pk=expense, tag_codes=tag_codes)
    context = {"lines": lines}

    return render(request, "lines.html", context)
