from rest_framework import viewsets
from main.controllers import get_expenses, get_all_lines
from main.serializers import ExpenseSerializer, ExpenseLinSerializer


class ExpenseViewSet(viewsets.ModelViewSet):

    serializer_class = ExpenseSerializer

    def get_queryset(self):
        queryset = get_expenses(self.request.user)
        return queryset
    

class ExpenseLineViewSet(viewsets.ModelViewSet):

    serializer_class = ExpenseLinSerializer

    def get_queryset(self):
        queryset = get_all_lines(self.request)
        return queryset