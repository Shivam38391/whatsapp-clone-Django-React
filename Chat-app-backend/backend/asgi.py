"""
ASGI config for backend project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/asgi/


"""


from channels.routing import ProtocolTypeRouter, URLRouter
from accounts.route import websocket_urlpatterns


import os

from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")

application = get_asgi_application()


application = ProtocolTypeRouter({
    "http":application,
    "websocket": URLRouter(websocket_urlpatterns),
})