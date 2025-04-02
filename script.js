const box = document.getElementById("box");
function runclock(){
    var date = new Date();
    var hrs = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var txt = "AM";
    if(hrs>12){
        hrs=hrs-12;
        txt="PM";
    }else if(hrs==24){
        hrs=12;
        txt="AM";
    }
    hrs=hrs<10?'0'+hrs:hrs;
    min=min<10?'0'+min:min;
    sec=sec<10?'0'+sec:sec;
    box.innerHTML=`${hrs} : ${min} : ${sec} ${txt}`;
}
setInterval(runclock,1000);