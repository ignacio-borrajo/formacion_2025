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
#Por defecto en django viene así
from django.contrib import admin
from django.urls import path


#Para savar la pagina del cohete
from django.views import debug

#importo mis views personalizada
from main.views import index
from main.views import lines


urlpatterns = [
    #Enruto por defecto la pagina de django
    path('', debug.default_urlconf),
    #Viene por defecto, para las gestiones como admin
    path('admin/', admin.site.urls),
    #Enruto mi vista a la que llamo index para revisar los gastos
    path('gastos/',index,name="index"),
    #Enruto mi vista a la que llamo
    path("lines/<int:expense>/", lines, name="lista_lineas_gasto")
]
