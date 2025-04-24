
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout

#Vista de login
def login_view(request):
    """
    Handles the login functionality for the application.
    """
    context = {}

    # de la request pillo me llega cuando me hacen una peticion
    if request.method == "POST": #miro si la peticion es post
        user = authenticate( #Authentico (Segun la tenga configurada en settings)
            username=request.POST["username"],#cojo el username y el password del mismo
            password=request.POST["password"],
        )

       

        if user is not None:#Si el user se autentica bien  
            print(request.POST["username"],request.POST["password"])
            login(request, user)# hago login usa la funcion de Django
            return redirect("/")# Y me envía al home
        else:#sino da error
            context = {
                "error": "Invalid username or password.",
            }

    #renderizo la templete de login (Mi response ) con la variable request para recibir las peticiones
    return render(request, "login.html", context)


def logout_view(request):
    logout(request)
    return redirect("login")#Te devuelve al login