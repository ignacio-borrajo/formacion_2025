from main.controllers import get_expenses, get_lines
from main.serializers import ExpenseLinSerializer, ExpenseSerializer
from rest_framework import viewsets


class ExpenseViewSet(viewsets.ModelViewSet):

    serializer_class = ExpenseSerializer

    def get_queryset(self):
        queryset = get_expenses(self.request.user)
        return queryset


class ExpenseLineViewSet(viewsets.ModelViewSet):
    serializer_class = ExpenseLinSerializer

    def get_queryset(self):
        queryset = get_lines(self.kwargs["expense"])
        return queryset
