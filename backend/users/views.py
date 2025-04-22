from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout


def login_view(request):

    context = {}

    if request.method == 'POST':
        user = authenticate(username=request.POST['username'], password=request.POST['password'])

        if user is not None:
            login(request, user)
            return redirect('/')
        else:
            context = {
                'error': 'Invalid username or password.'
            }
            return render(request, 'login.html', context)

    return render(request, 'login.html', context)

def logout_views(request):
    logout(request)
    return redirect('/login/')

#crear tabla etiquetas para poner en los gastos si es mensual y tal