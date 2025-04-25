from django.shortcuts import render
from main.controllers import get_expenses,get_lines,get_tags,post_lines
from django.db.models import Sum

def index(request):
    """
    View function for the index page.
    """
    user = request.user
    expenses = get_expenses(connected_user=user)
    total = expenses.aggregate(total=Sum("total"))["total"]
    context = {"expenses": expenses, "total_expense": total}

    return render(request, "index.html", context)

def lines(request, expense_pk_get):

    post = request.POST.get('tags')
    user = request.user
    tags = []
    lines_aux =[]

    lines = get_lines(expense_pk=expense_pk_get)
    for line in lines:
        tags.append(get_tags(expenselin_pk=line.id,connectedUser=user))
        if post:
            for key in post:
                lines_aux = post_lines(expenselin_pk=line.id,post_tag=key)
    if post:
        context = {"lines":lines_aux,"tags":tags}
    else:
        context = {"lines":lines,"tags":tags}

    print(context)
    return render(request, "lines.html", context)