var assortmentData = [
    {
      inStock: true
    },
    {
      inStock: false
    },
    {
      inStock: true
    },
    {
      inStock: true
    },
    {
      inStock: false
    },
     {
      inStock: false
    }
  ];


var books = document.querySelectorAll('.book');
console.log(books);

var classBook = document.querySelectorAll('.book');

for (let i = 0; i < assortmentData.length; i++)
{
    if (assortmentData[i].inStock)
    {
        var newEl = document.createElement('span');
        newEl.textContent = "В наличии";
        newEl.classList.add('inStock');
        classBook[i].appendChild(newEl);
    }
    else 
    {
        var newEl = document.createElement('span');
        newEl.textContent = "Не в наличии";
        newEl.classList.add('notInStock');
        classBook[i].appendChild(newEl);
    }
    
}