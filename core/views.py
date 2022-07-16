from django.http import JsonResponse
from django.core.paginator import Paginator
from django.shortcuts import render

from .forms import PhotoForm
from .models import Photo

def index(request):
    form = PhotoForm()
    photos_list = Paginator(Photo.objects.all().order_by('-pk'), 6)
    page = request.GET.get('page')
    photos = photos_list.get_page(page)    
    return render(request, "core/index.html", {'form': form, 'photos': photos})

def upload(request):
    if request.method == "POST":
        form = PhotoForm(request.POST, request.FILES)
        if form.is_valid():
            photo : Photo = form.save()
            return JsonResponse(photo.to_json(), status=201)
        else:
            return JsonResponse(form.errors, status=422)
    else:
        return JsonResponse({'error': "POST Method Only"}, status=400)