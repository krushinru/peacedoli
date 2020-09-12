get_random = function (list) {
    return list[Math.floor((Math.random()*list.length))];
  }
if (window.location.pathname=="/") {
    document.getElementById("textplace").innerHTML=get_random(["Хватит ныть!","Давай работай!","Ленивая задница!","Соберись, тряпка!","Отмазки нахуй!","Хорош хитрожопить!","Займись делом!","Я всё вижу!","А давай ты не будешь тупить?"])
} else {
    document.getElementById("textplace").innerHTML=get_random(["$, хватит ныть!","Давай работай, $!","$, хорош хитрожопить!", "$, давай ты не будешь тупить!", "Я все вижу, $!"]).replace("$",decodeURI(window.location.pathname.split("/")[1]))
}