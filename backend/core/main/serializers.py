from rest_framework import serializers
from main.models import Expense, ExpenseLin

"""
Serializers in Django REST Framework (DRF) are components that allow complex data such as querysets 
and model instances to be converted into Python data types that can easily be rendered into JSON, XML, 
or other content types. They also provide deserialization, enabling parsed data to be converted back into 
complex types after validating the incoming data.
"""


class ExpenseLinSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpenseLin
        fields = (
            "id",
            "description",
            "amount",
            "date",
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