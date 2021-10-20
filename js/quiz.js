// event click
function changeStyle(e){
    // this ---> represents the element
    // e ---> event trigger
    e.preventDefault();
    this.setAttribute('class',"answer selected");
    
}

// change the style of checkbox
var elist = document.getElementsByClassName('answer');
for(var i=0; i<elist.length; i++){
    elist[i].addEventListener('click',changeStyle);
}