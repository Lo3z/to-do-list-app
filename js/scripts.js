
function newItem(){

//javascript
//Adding a new item to the list of items: 
   let list = $('#list');
   let li = $('<li></li>');
   let inputValue = $('#input').val();
   console.log(inputValue);

   if (inputValue === '') {
     alert("You must write something!");
     return;
   } else {
     list.append(li);
     li.append(inputValue);
   }

 //Crossing out an item from the list of items:

   li.on('dblclick', function(){
    if (li.hasClass('strike')) {
        li.removeClass('strike');
    } else {
        li.addClass('strike');
    }
   });

 //3(i). Adding the delete button "X": 
    let crossOutButton = $('<crossOutButton></crossOutButton>');
 	crossOutButton.append(document.createTextNode('X'));
 	li.append(crossOutButton);
 	crossOutButton.on('click', deleteListItem);

 //3(ii). Adding CLASS DELETE from the css:
   function deleteListItem(){
 		li.addClass("delete");
 	}
 // 4. Reordering the items: 
   list.sortable();

}