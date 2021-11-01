// save the registrations on submit click
var guestGroup = new Array(); // global
function saveReg(){
    var guest={
        name: $('#name').val(),
        numberOfGuests: $('#num').val(),
        checkIn: $('#checkin').val(),
        checkOut: $('#checkout').val(),
        room: $('#room').val(),
        display: function(){
            return this.name+" reserved "+this.room+" at "+this.checkIn;
        }
    };
    guestGroup.push(guest);
    console.log(guest.display());
}
$('#submit').click(saveReg);
function displayR(){
    for(i in guestGroup){
        var guest = guestGroup[i];
        console.log(guest.display());
    }
}
$('#lists').click(displayR);