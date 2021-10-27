$('a').each(function(){

    var linkaddress = $(this).attr('href');
    console.log(linkaddress);
    $(this).attr('href',"https://www.eff.org");

});

//update all image addresses