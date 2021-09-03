from django.db import models
from django import forms
# Create your models here.
class User(models.Model):
    text1=models.CharField(max_length=60,blank=True) 
    text2=models.CharField(max_length=60,blank=True) 
    text3=models.CharField(max_length=60,blank=True) 
    def __str__(self):
        return self.text1