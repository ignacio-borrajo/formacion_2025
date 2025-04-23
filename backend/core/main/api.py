from rest_framework import viewsets
from main.controllers import get_expenses
from main.serializers import ExpenseSerializer
from rest_framework import permissions


class ExpenseViewSet(viewsets.ModelViewSet):
    #Saco los datos del controlador
    queryset = get_expenses()
    #Los serialio para convertir a json o xml con los serializers
    serializer_class = ExpenseSerializer