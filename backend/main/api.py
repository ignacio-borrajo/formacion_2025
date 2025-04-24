from rest_framework import viewsets
from main.controllers import get_expenses
from main.serializers import ExpenseSerializer



class ExpenseViewSet(viewsets.ModelViewSet):

    serializer_class = ExpenseSerializer

    def get_queryset(self):
        queryset = get_expenses(self.request.user)
        return queryset
