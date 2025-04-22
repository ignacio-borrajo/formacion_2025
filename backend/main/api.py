from rest_framework import viewsets
from main.controllers import get_expenses
from main.serialize import ExpenseSerializer

class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = get_expenses()
    serializer_class = ExpenseSerializer