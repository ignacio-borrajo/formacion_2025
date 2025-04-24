from rest_framework import viewsets
from main.controllers import get_expenses
from main.serializers import ExpenseSerializer
from rest_framework import permissions


class ExpenseViewSet(viewsets.ModelViewSet):
    #Los serialio para convertir a json o xml con los serializers
    serializer_class = ExpenseSerializer

    #Utilizo la propiedad self para acceder a los datos de la request
    def get_queryset(self):
        queryset = get_expenses(self.request.user)
        return queryset

    