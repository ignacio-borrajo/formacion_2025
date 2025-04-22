from django.shortcuts import render,redirect
from django.contrib.auth import authenticate,login,logout
# Create your views here.

def login_view (request):
    context ={}
    if request.method == "POST":
        user = authenticate(username=request.POST['username'],password=request.POST['password'])

        if user is not None:
            login(request,user)
            return redirect("/")
        else:
            context = {
                "error":"Invalid Username or Password"
            }
            return render(request,'login.html',context)
    return render(request,'login.html',context)

def logout_view(request):
    logout(request)
    return redirect("")