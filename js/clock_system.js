function clock(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    var times = h + ":" + m ;
    document.getElementById("clock").textContent = times;
    setTimeout(clock, 1000);
}
clock();