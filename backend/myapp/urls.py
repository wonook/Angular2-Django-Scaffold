from django.conf.urls import url, include
from .views import myModelList


urlpatterns = [
    url(r'^mymodel$', myModelList, name='myModelList'),
]
