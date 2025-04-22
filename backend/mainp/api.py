from rest_framework import viewsets, serializers
from mainp.controler import get_expenses



class ExpenseViewSet(viewsets.ModelViewSet):

    queryset = get_expenses()
    serialize_class = ExpenseSerializer