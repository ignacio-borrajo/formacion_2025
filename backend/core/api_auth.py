# Importamos modelo AnonymousUser que representa usuario no autenticado en Django
from django.contrib.auth.models import AnonymousUser

# Importamos la clase estandar que se encarga de leer el token
from rest_framework_simplejwt.authentication import JWTAuthentication


class CustomAuthentication(JWTAuthentication):
    # Método llamado automaticamente por el framework para autenticar cada petición
    def authenticate(self, request):
        try:
            authenticated = super().authenticate(request)
            # Si todo va bien, lo devolvemos
            if authenticated:
                return authenticated
            # Si no hay token, devolvemos usuario anónimo
            return (AnonymousUser(), None)
            # Si hay excepcion, devolvemos usuario anónimo
        except Exception:
            return (AnonymousUser(), None)
