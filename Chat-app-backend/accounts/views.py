from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response 
from rest_framework import status
from .tokenauthentication import JWTAuthentication
# Create your views here.


from . import serializers

@api_view(['POST'])
def register_user(request):
    serializer = serializers.UserSerializer(data= request.data)
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data , status= 201)
    
    return Response(serializer.errors , status=400)


@api_view(["POST"])
def login(request):
    serializer = serializers.LoginSerializer(data = request.data)
    if serializer.is_valid():
        token = JWTAuthentication.generate_token(payload=serializer.data)
        return Response({
            "message": "login successful",
            "token": token,
            "user": serializer.data,   
         }, status=status.HTTP_201_CREATED)
        
        
        
    return Response(
            serializer.errors, status=status.HTTP_400_BAD_REQUEST
        )