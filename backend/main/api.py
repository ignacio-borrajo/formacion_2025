from rest_framework import viewsets
from main.controllers import get_expenses,get_lines
from main.serialize import ExpenseSerializer,ExpenseLinSerialize
import re

class ExpenseViewSet(viewsets.ModelViewSet):
    
    serializer_class = ExpenseSerializer
    
    def get_queryset(self):
        query=get_expenses(connected_user=self.request.user)
        return query
    
class ExpenseLinViewSet(viewsets.ModelViewSet):
    
    serializer_class = ExpenseLinSerialize
    
    def get_queryset(self):
        expense_id = str(self.request.path)
        expense_id = re.findall("\d", expense_id)
        query=get_lines(expense_pk=expense_id[0])
        return query