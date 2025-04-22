from rest_framework import viewsets
from mainp.serializers import ExpenseSerializer
from mainp.controler import get_expenses



class ExpenseViewSet(viewsets.ModelViewSet):

    queryset = get_expenses()
    serialize_class = ExpenseSerializer