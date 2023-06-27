const allzone=document.getElementById('allzone');
const currentTime=document.getElementById('currentTime');
const currentDate = document.getElementById('currentDate');
currentDate.innerText = new Date().toDateString('en-us', { timeStyle: 'full' })
currentTime.innerText=new Date().toLocaleString('en-us',{timeStyle:'full'})

fetch('timezone.json')
.then(response => response.json())
.then(data => {
  data.map(e => {
    const option=document.createElement('option')
    option.innerText=e.timezone
    allzone.appendChild(option)
  })
})
.catch(err =>console.log(err))
allzone.oninput = ()=> time()
function time(){
  console.log(allzone.value);
  const ctime=new Date().toLocaleString('en-us',{timeZone:allzone.value,timeStyle:'full'})
  const dateString = new Date().toDateString('en-us', { timeZone: allzone.value, timeStyle: 'full' })
  currentTime.innerText=ctime;
  currentDate.innerText = dateString;

}
setInterval(time, 1000);