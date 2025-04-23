
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout

#Vista de login
def login_view(request):
    """
    Handles the login functionality for the application.
    """
    context = {}
    if request.method == "POST":# de la request pillo si me hicieron un post
        user = authenticate(
            username=request.POST["username"],#cojo el username y el password del mismop
            password=request.POST["password"],
        )

        if user is not None:
            login(request, user)
            return redirect("/")
        else:
            context = {
                "error": "Invalid username or password.",
            }

    return render(request, "login.html", context)


def logout_view(request):
    logout(request)
    return redirect("login")