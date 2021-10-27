$('a').each(function(){

    var linkaddress = $(this).attr('href');
    console.log(linkaddress);
    $(this).attr('href',"https://www.eff.org");
    
});

//update all image addresses
$('img').each(function(){

    var imgaddress = $(this).attr('src');
    console.log(imgaddress);
    $(this).attr('src',"https://cdn.discordapp.com/emojis/797285120900988928.png");

});