from django.shortcuts import render
from main.controllers import get_expenses,get_expenses_total

# Create your views here.

#Vista personalizada para ver gastos (Listado y suma de expenses)
def index(request):

    """
    View function for the index page.
    """
    #Obtengo el listado de expenses de mi controlador (junto con sus totales)
    expenses=get_expenses()

    # y suma de los importes de todos los pedidos ¿Es dinámico?
    total_pedidos=get_expenses_total()

    #En el contexto meto un diccionario
    context={"expenses":expenses,"total_expense":total_pedidos}

    #Le mando a la request la template con la informacion correspondiente en el contexto
    return  render(request, "index.html", context)

