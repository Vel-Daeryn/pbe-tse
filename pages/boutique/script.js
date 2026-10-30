const categoryArray = document.querySelectorAll(".category-link")

for(i = 0; i < categoryArray.length; i++){
    categoryArray[i].setAttribute("href", `categories.html?category=${categoryArray[i].id}`);
}
