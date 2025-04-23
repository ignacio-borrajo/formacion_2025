from rest_framework import viewsets
from main.controllers import get_expenses
from main.serializers import ExpenseSerializer
#from rest_framework import permissions


class ExpenseViewSet(viewsets.ModelViewSet):

    #permission_classes = [permissions.IsAuthenticated]

    serializer_class = ExpenseSerializer

    def get_queryset(self):
        queryset = get_expenses(self.request.user)
        return queryset
