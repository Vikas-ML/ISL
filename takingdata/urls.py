from django.urls import path,include
from . import views
urlpatterns = [
    path('',views.func,name='home'),
    path('fast/',views.fast,name='fast'),
    path('accurate/',views.accurate,name='accurate'),
    
]