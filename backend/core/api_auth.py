from django.contrib.auth.models import AnonymousUser
from rest_framework_simplejwt.authentication import JWTAuthentication

class CustomAuth(JWTAuthentication):
    def authenticate(self, request):
        try:
            authenticated = super().authenticate(request)
            if authenticated:
                return authenticated

            return (AnonymousUser(), None)
        except Exception:
            return (AnonymousUser(), None)
    
    