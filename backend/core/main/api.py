from rest_framework import viewsets
from main.controllers import get_expenses, get_lines
from main.serializers import ExpenseSerializer, ExpenseLinSerializer
from rest_framework import permissions
from rest_framework.response import Response


class ExpenseViewSet(viewsets.ModelViewSet):
    # Los serialio para convertir a json o xml con los serializers
    serializer_class = ExpenseSerializer

    # Utilizo la propiedad self para acceder a los datos de la request
    def get_queryset(self):
        # De ahi se que tengo el user porque rest_framework de django al autenticarme me lo mete aquí
        queryset = get_expenses(self.request.user)
        return queryset

    # Este es el método que llama el get a la url de /gastos
    # Existe por defecto y es así. Si hiciera falta podría sobreescribirlo
    def list(self, request):
        return Response(self.get_queryset())


class ExpenseLinViewSet(viewsets.ModelViewSet):

    serializer_class = ExpenseLinSerializer

    # Utilizo la propiedad self para acceder a los datos de la request
    def get_queryset(self):
        expense = self.kwargs.get("expense")

        # De ahi se que tengo el user porque rest_framework de django al autenticarme me lo mete aquí
        queryset = get_lines(
            expense_pk=expense, connected_user=self.request.user
        )
        print("hago el queryset bien")
        print(queryset)
        return queryset

    def list(self, request):
        return Response(self.get_queryset())
