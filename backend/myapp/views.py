from django.http import HttpResponse, HttpResponseNotAllowed, HttpResponseNotFound, JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from .models import MyModel
import json

# Create your views here.
def myModelList(request):
    if request.method == 'GET':
        return JsonResponse(list(MyModel.objects.all().values()), safe=False)
    else:
        return HttpResponseNotAllowed(['GET'])
