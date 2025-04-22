from django.contrib.auth.models import AnonymousUser
from rest_framework_simplejwt.authentication import JWTAuthentication


class CustomAuthentication(JWTAuthentication):
    def authenticate(self, request):

        print("ENTRA")

        try:
            # Intenta autenticar normalmente
            authenticated = super().authenticate(request)
            if authenticated:

                print("AUTENTICADO")

                return authenticated

            print("NO AUTENTICADO")

            # Si falla, permite usuarios anónimos
            return (AnonymousUser(), None)
        except Exception:
            # En caso de cualquier error, permite usuarios anónimos
            return (AnonymousUser(), None)
