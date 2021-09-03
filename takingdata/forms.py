from django import forms
from .models import User
class takingtext(forms.ModelForm):
    class Meta:
        model= User
        fields =('text1','text2','text3')
        labels= {'text1':"Enter something:",'text2':"Kuch bhi daal",'text3':"Chal yahin kar"}
        widgets={
            'text1':forms.TextInput(attrs={'class':'text1','placeholder':'Enter something:'}),
            'text2':forms.TextInput(attrs={'class':'text2','placeholder':'Kuch bhi daal'}),
            'text3':forms.TextInput(attrs={'class':'text3','placeholder':'Chal yahin kar'}),
        }