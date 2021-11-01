
// On key-up -- display keycode
function showKeyCode(e){
    var lastKeyE = document.getElementById('lastKey');
    lastKeyE.textContent = "Last key in ASCII code :" + e.keyCode;
    //window.alert("You pressed "+e.keyCode);

}
// bind the action(s)
$('#message').keyup(showKeyCode);
// on ASCII key press, move '+' symbol
var posX = 100;
var posY = 10;
function moveIt(e){
    if (e.key="s"){
        //animation
        $('img').animate({left:"400px"},500,'linear');
    }
    //utilize the 'up' key to move upwards
    // "ArrowUp" == up key , "ArrowDown" == down key
    if (e.key="ArrowUp"){
        $('img').animate({up:"400px"},500,'linear');
    }

}
// binding
document.addEventListener('keydown',moveIt);

// click - show position of mouse cursor
function showMouse(e){
    var lastKeyE = document.getElementById('lastKey');
    lastKeyE.textContent = "position ("+e.pageX+" , "+e.pageY+")";
}
// listener
document.addEventListener('mousemove',showMouse);
