from django.contrib.auth.models import AnonymousUser
from rest_framework_simplejwt.authentication import JWTAuthentication


class CustomAuthentication(JWTAuthentication):
    #Defino método de autenticación customizado
    def authenticate(self, request):
        try:
            #llamo al metodo que heredo de JWTAuthentication, podría añadirle más cosas si quisiera.
            authenticated = super().authenticate(request)

            if authenticated:
                return authenticated

            return (AnonymousUser(), None)
        except Exception:
            return (AnonymousUser(), None)