from django.shortcuts import render


# Create your views here.
def view_frontend(request):
    ctx = dict(panel_title='AngularJS says:')
    return render(request, 'frontend/index.html', ctx)
