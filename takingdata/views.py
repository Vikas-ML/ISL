from django.shortcuts import render,HttpResponseRedirect
from . import projectmodule as pd
# Create your views here.

def ML_model(var):
    var='__temp__.mp4'
    return var

def fast(request):
    var1="fast"
    if request.method=='POST' :
        message=request.POST.get('message')
        test=pd.model(message)
        result=ML_model(message)
        r1=result
        return render(request,'takingdata/response.html',{'variable':r1,'message':message})
    return render(request,'takingdata/fast.html')
def accurate(request):
    var2="accurate"
    if request.method=='POST':
        message=request.POST.get('message')
        test=pd.model(message)
        result=ML_model(message)
        r2=result
        return render(request,'takingdata/response.html',{'variable':r2,'message':message})
    return render(request,'takingdata/fast.html')    
def func(request):
       
    return render(request,'takingdata/index.html')
