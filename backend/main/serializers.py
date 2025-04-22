from rest_framework import serializers
from main.models import Expense


class ExpenseSerializer(serializers.ModelSerializer):
    """
    Serializer for the Expense model.
    """

    class Meta:
        model = Expense
        fields = (
            "id",
            "description",
            "category",
            "limit",
            "date",
        )
