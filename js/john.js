function openNav(){
    document.getElementById("mysidenav").style.width = "250px";
}

function closeNav(){
    document.getElementById("mysidenav").style.width = "0px";
}


$(document).ready(function(){
    $(".counter").counterUp({
        delay:10,
        time:1200
    })
})