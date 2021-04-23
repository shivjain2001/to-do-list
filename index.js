var list=document.getElementById("todo-list");
var inputBox=document.getElementById("todo-input");
var btnAdd=document.getElementById("add-item");
var btnUpdate=document.getElementById("update-item");
var btnRemove=document.getElementById("remove-item");

var currenInputValue='';
inputBox.addEventListener('input',function(e){
   currenInputValue= e.target.value;
});
inputBox.addEventListener('keyup',function(e)
{
    if(e.keyCode === 13)
    {
        addListItem();
    }
});
btnAdd.addEventListener('click',addListItem);
function createNewNode(){
        var newListItem=document.createElement('li');
        var textNode=document.createTextNode(currenInputValue);
        newListItem.appendChild(textNode);
        newListItem.id="item" + (list.childElementCount+1);
        
        return newListItem;
}
function addListItem()
{
    if(currenInputValue!=='')
    {
        var newListItem=createNewNode();
        list.appendChild(newListItem);

        inputBox.value='';
        currenInputValue='';
    }
    else{
        alert("Please enter a valid TODO item");
    }
}
btnUpdate.addEventListener('click',function(){
    if(currenInputValue!=="")
    {
    var firstELement=list.firstElementChild;
    var newListItem=createNewNode();

    list.replaceChild(newListItem, firstELement);
    inputBox.value='';
    currenInputValue='';
    }
    else{
        alert("Please enter a valid todo item");
    }
});
btnRemove.addEventListener('click',function(){
    var firstELement=list.firstElementChild;

    list.removeChild(firstELement)
})
