// event click
function changeStyle(e){
    // this ---> represents the element
    // e ---> event trigger
    e.preventDefault();
    // if the class is answer, change to answer selected
    // else change back to answer
    var current = this.getAttribute('class');
    /*if (current == "answer"){
        this.setAttribute('class', "answer selected");
    }
    else{
        this.setAttribute('class', "answer");
    }*/
    this.setAttribute('class',"answer selected");
    this.children[0].children[0].checked=true;
    this.animate([{transform:'rotate(0deg)'},{transform:'rotate(180deg'}],{duration:3000,fill:"forwards"});
}

// change the style of checkbox
var elist = document.getElementsByClassName('answer');
for(var i=0; i<elist.length; i++){
    elist[i].addEventListener('click',changeStyle);
}