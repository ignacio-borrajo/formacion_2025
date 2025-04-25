from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from .serializers import UserSerializer, ExpenseSerializer, RegisterSerializer, ExpenseLinSerializer
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import Expense, ExpenseLin , Tag


# Vista para obtener las líneas de gasto
@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def get_expense_lines(request, expense_id):
    if not request.user.is_authenticated:
        return Response({"detail": "Authentication required."}, status=status.HTTP_401_UNAUTHORIZED)

    try:
        # Obtener el gasto (Expense) usando el expense_id y asegurarse de que el usuario autenticado sea el propietario
        expense = Expense.objects.get(id=expense_id, user=request.user)
    except Expense.DoesNotExist:
        return Response({"detail": "Expense not found or you do not have permission."}, status=status.HTTP_404_NOT_FOUND)

    # Obtener las líneas de gasto asociadas al gasto
    expense_lines = ExpenseLin.objects.filter(expense=expense)
    
    # Serializar las líneas de gasto
    serializer = ExpenseLinSerializer(expense_lines, many=True)
    
    # Retornar las líneas de gasto serializadas
    return Response(serializer.data, status=status.HTTP_200_OK)



@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def create_expense_line(request, expense_id):
    # Verificar que el gasto (Expense) existe y pertenece al usuario autenticado
    try:
        expense = Expense.objects.get(id=expense_id, user=request.user)
    except Expense.DoesNotExist:
        return Response({"detail": "Expense not found or you do not have permission to edit it."}, status=status.HTTP_404_NOT_FOUND)

    # Deserializar los datos de la línea de gasto, pasando el contexto con el request
    serializer = ExpenseLinSerializer(data=request.data, context={'request': request})
    
    if serializer.is_valid():
        # Guardar la línea de gasto
        expense_line = serializer.save(expense=expense)
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)





@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def create_expense(request):
    serializer = ExpenseSerializer(data=request.data, context={'request': request})
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def get_expenses(request):
    """
    Obtiene los gastos del usuario autenticado.
    """
    expenses = Expense.objects.filter(user=request.user)  # Filtramos por el usuario autenticado

    # Serializamos los gastos
    serializer = ExpenseSerializer(expenses, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


# Vista para hacer login
@api_view(['POST'])
def login(request):
    # Obtenemos el username y password del request
    username = request.data.get('username')
    password = request.data.get('password')

    # Verificamos que ambos parámetros estén presentes
    if not username or not password:
        return Response({"detail": "Username and password are required."}, status=status.HTTP_400_BAD_REQUEST)

    # Intentamos autenticar al usuario
    user = authenticate(username=username, password=password)

    if user is not None:
        # Si la autenticación es exitosa, generamos el token
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'user': {'id': user.id, 'username': user.username, 'email': user.email}}, status=status.HTTP_200_OK)
    else:
        # Si las credenciales no son válidas
        return Response({"detail": "Invalid credentials."}, status=status.HTTP_401_UNAUTHORIZED)

# Vista para registrar un nuevo usuario
@api_view(['POST'])
def register(request):
    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.save()  # Creamos el usuario
        token = Token.objects.create(user=user)  # Creamos el token para ese usuario
        return Response({'token': token.key, 'user': {'id': user.id, 'username': user.username}}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
