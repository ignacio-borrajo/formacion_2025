from rest_framework import viewsets
from main.controllers import get_expenses
from main.serializers import ExpenseSerializer
from rest_framework import permissions


class ExpenseViewSet(viewsets.ModelViewSet):

    permission_classes = [permissions.IsAuthenticated]

    queryset = get_expenses()
    serializer_class = ExpenseSerializer