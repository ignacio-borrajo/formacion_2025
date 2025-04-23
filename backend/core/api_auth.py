from django.contrib.auth.models import AnonymousUser
from rest_framework_simplejwt.authentication import JWTAuthentication

class CustomAuth(JWTAuthentication):
    def authenticate(self, request):
        user, access = super().authenticate(request)
        return user,access