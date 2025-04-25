from django.shortcuts import render
from main.controllers import get_expenses, get_expenses_total, get_lines

# Create your views here.


# Vista personalizada para ver gastos (Listado y suma de expenses)
def index(request):
    """
    View function for the index page.
    """

    user = request.user
    # Obtengo el listado de expenses de mi controlador (junto con sus totales)
    expenses = get_expenses(user)

    # y suma de los importes de todos los pedidos ¿Es dinámico?
    total_pedidos = get_expenses_total()

    # En el contexto meto un diccionario
    context = {"expenses": expenses, "total_expense": total_pedidos}

    # Renderizo la template (Mi response) con la informacion correspondiente en el contexto (Y la request va tambien por si quiero que me mande cosas)
    return render(request, "index.html", context)


# defino una funcion para mi vista que a parte del request debe recibir el parametro de expense de la url
def lines(request, expense):

    user = request.user

    print(expense)

    # llamo al controller como corresponde usando el parametro dado por la url para el filtrado
    lines = get_lines(connected_user=user, expense_pk=expense)

    # Meto en el contexto en un diccionario los datos que necesito
    context = {"lines": lines}

    # renderizo la template (Mi response) con los datos necesarios en el contexto (Y la request va tambien)
    return render(request, "lines.html", context)
