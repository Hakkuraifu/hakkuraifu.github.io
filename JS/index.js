

//Function

function fade(element) {
var op = 1;  // initial opacity
var timer = setInterval(function () {
    if (op <= 0.1){
        clearInterval(timer);
        document.getElementById(element).style.display = 'none';
    }
    document.getElementById(element).style.opacity = op;
    document.getElementById(element).style.filter = 'alpha(opacity=' + op * 100 + ")";
    op -= op * 1;
}, 20);
}
  
function unfade(element) {
var op = 0.1;  // initial opacity
document.getElementById(element).style.display = 'block';
var timer = setInterval(function () {
    if (op >= 1){
        clearInterval(timer);
    }
    document.getElementById(element).style.opacity = op;
    document.getElementById(element).style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 1;
}, 25);
}

function sendMail()
{
   var mailBody=document.getElementById('mailBody').innerHTML;
   window.location="mailto:hakkuraifu@gmail.com?subject=hii&body="+mailBody;
}
