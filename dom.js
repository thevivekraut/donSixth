
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = "darkgreen";
secondItem.style.color = "green";

var all = document.querySelectorAll('items');
console.log(all);

var item = document.querySelectorAll('.list-group-item');
item[2].style.display = 'none';
console.log(item);

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i = 0; i < odd.length; i++){
  odd[i].style.backgroundColor = 'green'; 
}
