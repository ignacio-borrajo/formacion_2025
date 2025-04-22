from rest_framework_simplejwt.authentication import JWTAuthentication


class CustomAuth(JWTAuthentication):
    def authenticate(self, request):

        # Intenta autenticar normalmente
        user, access = super().authenticate(request)

        print(user)
        print(access)

        return user, access
