from rest_framework import viewsets
from mainp.serializers import ExpenseSerializer
from mainp.controler import get_expenses
from rest_framework import permissions


class ExpenseViewSet(viewsets.ModelViewSet):

    serialize_class = ExpenseSerializer

    def get_queryset(self):
        query = get_expenses(self.request.user)
        return query

    