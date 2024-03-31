from rest_framework.decorators import api_view , permission_classes
from django.contrib.auth import get_user_model
from chatapp.serializer import UserGetSerializer
from rest_framework.response import Response 
from rest_framework import status
from rest_framework.permissions import IsAuthenticated 

# Create your views here.
User = get_user_model()

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_user_list(request ):
    try:
        user_obj = User.objects.exclude(id=request.user.id)
        serializer = UserGetSerializer(user_obj, many=True)
        return Response(serializer.data)
    except Exception as e:
        print("Error getting", str(e))
        return Response({"error":"Error getting on user list" } , status= status.HTTP_400_BAD_REQUEST)    