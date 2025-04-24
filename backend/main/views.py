from django.shortcuts import render
from main.controllers import get_expenses, get_lines
from django.db.models import Sum
from main.models import ExpenseLin, Tag

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
    user = request.user
    selected_tags = request.GET.getlist('tags')  # Obtener las etiquetas seleccionadas por el usuario
    lines = get_lines(expense_pk=expense,user=user)
    
    #Eliminar valores vacíos de la lista de etiquetas seleccionadas
    selected_tags = [tag for tag in selected_tags if tag]
    
    if selected_tags:
        # Filtrar las líneas que tienen las etiquetas seleccionadas
        lines = lines.filter(tags__id__in=selected_tags).distinct()
    # Obtener las etiquetas disponibles para el usuario
    available_tags = Tag.objects.filter(user=user, lines__expense=expense).distinct()

    context = {
        "lines": lines,
        "available_tags": available_tags,
        "selected_tags": selected_tags,
    }
    return render(request, "lines.html", context)
