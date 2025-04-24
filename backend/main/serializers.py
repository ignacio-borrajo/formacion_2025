from rest_framework import serializers
from main.models import Expense, ExpenseLin


class ExpenseLinSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpenseLin
        fields = (
            "id",
            "description",
            "amount",
            "date",
             "tags",
        )


class ExpenseSerializer(serializers.ModelSerializer):
    """
    Serializer for the Expense model.
    """

    lines = ExpenseLinSerializer(many=True, required=False)
    total = serializers.DecimalField(
        max_digits=10, decimal_places=2, read_only=True
    )
    total_pedidos = serializers.DecimalField(
        max_digits=10, decimal_places=2, read_only=True
    )

    class Meta:
        model = Expense
        fields = (
            "id",
            "description",
            "category",
            "limit",
            "date",
            "total",
            "total_pedidos",
            "lines",
        )
