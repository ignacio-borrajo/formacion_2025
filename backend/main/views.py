from django.shortcuts import render
from main.controllers import get_expenses, get_lines
from django.db.models import Sum
from main.models import Label


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
    label_param = request.GET.get("labels") 
    label_ids = []

    if label_param:
        try:
            label_ids = [int(label_id) for label_id in label_param.split(",")]
        except ValueError:
            return render(request, "error.html", {"message": "El parámetro 'labels' debe contener solo números separados por comas."})


    lines = get_lines(expense_pk=expense, label_ids=label_ids)
    context = {
        "lines": lines,
        "selected_labels": label_ids, 
        "all_labels": Label.objects.filter(user=request.user),}

    return render(request, "lines.html", context)



