"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
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

from django.contrib import admin
from django.urls import path
from main.views import index, lines, tags
from users.views import login_view, logout_view
from main.api import ExpenseViewSet, ExpenseLinViewSet
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

# Esta lista tiene todas las rutas que acepta el sitio web. Django las recorre hasta encontrar una coincidencia
urlpatterns = [
    ## Al visitar admin, cargamos la interfaz de administración
    path("admin/", admin.site.urls),
    ## Ruta vacía a localhost, función que definimos en views, nombre identificador de la ruta
    path("", index, name="lista_gastos"),
    path("tags/<int:expenseLin>/", tags, name="lista_tags"),
    path(
        "api/gastos/",
        ExpenseViewSet.as_view({"get": "list", "post": "create"}),
        name="lista_gastos_api",
    ),
    path(
        "api/gastos/<int:pk>/",
        ExpenseLinViewSet.as_view(
            {"get": "retrieve", "put": "update", "delete": "destroy"}
        ),
        name="gasto_api",
    ),
    path("lines/<int:expense>/", lines, name="lista_lineas_gasto"),
    path("login/", login_view, name="login"),
    path("logout/", logout_view, name="logout"),
    path(
        "api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"
    ),
    path(
        "api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"
    ),
]
