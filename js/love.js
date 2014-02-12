
var heart = new Array(); 
var notHeart = new Array();

function SetTime(){
    var time = $('#time');
    var now = new Date(); 
    var begin = new Date(Date.UTC(2012, 11, 23));
    time.html("We Have Been Fallen in Love for " + "<font color='#931217'>" + parseInt((now - begin) / 1000 / 3600 / 24) + "</font>" + " Days,");
    setTimeout('SetTime()', 500);
}

function SetPhotos(){
    var tds = $('td');
    for (i=0; i<tds.length; i++) {
        $(tds[i]).attr("style", "background:url(images/" + i + ".bmp)");
    }
}

function RemovePhotos(){
    var tds = $('td');
    for (i=0; i<tds.length; i++) {
        $(tds[i]).attr("style", "background:#201314");
        tds[i].style = ("background:#201314");
    }
    AddHover();
}

function HidePhotos(){
    $('table').fadeOut('slow');
    setTimeout('ShowHeart()', 1000);
    setTimeout('$("#I").fadeIn("slow")',3000);
    setTimeout('$("#U").fadeIn("slow")',3000);
    setTimeout('$("#and").fadeIn("slow")',3000);
}

function ShowHeart(){
    var tds = $('td');
    for (i=0; i<tds.length; i++) {
        $(tds[i]).attr("style", "background:#201314");
        tds[i].style = $(this).attr("style");
    }
    RemovePhotos();
    var tds = $('td'); 
    var num = [2,6,10,11,12,14,15,16,56,57,58,59,60,66,67,68,76];
    for (i=0; i<num.length; i++) {
        heart.push(tds[num[i]]);
    }
    for (i=18; i<45; i++) {
        heart.push(tds[i]);
        tds[i].style = "background:#F26694";
    }
    for (i=46; i<53; i++) {
        heart.push(tds[i]);
        tds[i].style = "background:#F26694";
    }
    for (i=0; i<heart.length; i++) {
        $(heart[i]).attr("style", "background:#F26694");
        setTimeout("$(heart[i]).fadeIn('slow')", 1000);
        $(heart[i]).addClass("heart");
    }
    $('table').fadeIn('slow');
    
    for(i=0; i<tds.length; i++){
        for(j=0; j<heart.length; j++){
            if(tds[i] == heart[j]) continue;
            notHeart.push(tds[i]);
        }
    }
}
function AddHover(){
    var tds = $('td');
    for (var j=0; j<tds.length; j++) {
        tds[j].j = j;
        $(tds[j]).mouseover(function(){
            $(this).attr("style", "background:url(images/" + this.j + ".bmp)");
        }); 
        $(tds[j]).mouseout(function(){
            $(this).attr("style", "");
        }); 
    } 
} 
$(document).ready(function(){
    setTimeout('$("table").fadeIn("slow")', 2000);
    SetTime();
    SetPhotos();
    setTimeout('HidePhotos()',4000);
});
