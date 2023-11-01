from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.


from . import serializers

@api_view(['POST'])
def register_user(request):
    serializer = serializers.UserSerializer(data= request.data)
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data , status= 201)
    
    return Response(serializer.errors , status=400)