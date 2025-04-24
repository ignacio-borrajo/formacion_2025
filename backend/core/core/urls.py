"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

# Por defecto en django viene así
from django.contrib import admin
from django.urls import path, include


# Para savar la pagina del cohete
from django.views import debug

# importo mis views personalizada
from main.views import index
from main.views import lines

from users.views import login_view, logout_view

# importo api
from main.api import ExpenseViewSet

# Importo para ofrecer tokens

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    # Enruto por defecto la pagina de django
    path("", debug.default_urlconf),
    # Viene por defecto, para las gestiones como admin
    path("admin/", admin.site.urls),
    # Enruto mi vista a la que llamo index para revisar los gastos
    path("gastos/", index, name="index"),
    # Enruto mi vista a la que llamo
    path("lines/<int:expense>/", lines, name="lista_lineas_gasto"),
    # Rutas api
    path(
        "api/gastos/",
        ExpenseViewSet.as_view({"get": "list", "post": "create"}),
        # Convierte la clase en una funcion el as_view
        # Que reacciona apropiadamente al verbo usado
        name="lista_gastos_api",
    ),
    path(
        "api/gastos/<int:pk>/",
        ExpenseViewSet.as_view(
            {"get": "retrieve", "put": "update", "delete": "destroy"}
        ),
        name="gasto_api",
    ),
    # Rutas que redirigen hacia las vistas para el login y el logout
    path("login/", login_view, name="login"),
    path("logout/", logout_view, name="logout"),
    # Rutas para obtener tokens de login y usar la api sin session
    path(
        "api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"
    ),
    path(
        "api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"
    ),
    # Nota, los names es como referencio a las url desde las templates
]
