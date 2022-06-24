let sec = 0;
let min = 0;
let hor = 0;
let interval;

function start() {
  interval = setInterval(watch, 1000);
}
function pause() {
  clearInterval(interval);
}
function stop() {
  clearInterval(interval);
  sec = 0;
  min = 0;
  hor = 0;
  document.getElementById("watch").innerHTML = "00:00:00";
}

function watch() {
  sec++;
  if (sec >= 10) {
    document.getElementById("watch").innerText =
    "0" + hor + ":" + "0" + min + ":" + sec;
  } else {
    document.getElementById("watch").innerText =
      "0" + hor + ":" + "0" + min + ":"+ "0" + sec;
  }
  if ((min < 10) & (sec < 10) ) {
    document.getElementById("watch").innerText =
    "0" + hor + ":" + "0" + min + ":" + "0" + sec;
  } else if ((min < 10) & (sec >= 10)){
    document.getElementById("watch").innerText =
    "0" + hor + ":" + "0" + min + ":" + sec;
  }else if ((min >= 10) & (sec < 10)){
    document.getElementById("watch").innerText = 
    "0" + hor + ":" + min + ":" + "0" + sec;
  }else if ((min >= 10) & (sec >= 10) ) {
    document.getElementById("watch").innerText = 
    "0" + hor + ":" + min + ":" +  sec;
  } else if ((hor >= 10)) {
    document.getElementById("watch").innerText = 
    hor + ":" + '0'+ min + ":" + "0" + sec;
  }
  if (sec == 60) {
    min++;
    sec = 0;
  }
  else if(min==60){
    hor++
    min=0
  }
    
}
