var timestamp = 0
var intervalRef = null;
document.getElementById('start-btn').addEventListener("click",startHandler)
document.getElementById('pause-btn').addEventListener("click",pauseHandler)
document.getElementById('reset-btn').addEventListener("click",resetHandler)
function startHandler(){
  intervalRef=setInterval(()=>{
    timestamp +=1
    updateDom()
  },10)
}
function pauseHandler(){
  clearInterval(intervalRef);
}
function resetHandler(){
  clearInterval(intervalRef);
  timestamp=0;
  updateDom();
}
const updateDom = ()=>{

  let seconds = timestamp/100;
  seconds= Math.floor(seconds)%60
  seconds = seconds<10?'0'+seconds:seconds

  let minutes = Math.floor(seconds / 60);
  let extraSeconds = seconds % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;

  document.getElementById("stopwatch").innerText = `${minutes}:${seconds}:${timestamp%100}`
}