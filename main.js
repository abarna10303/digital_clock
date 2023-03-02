let day=document.getElementById('date');
let months=document.getElementById('month');
let years=document.getElementById('year');
let hours=document.getElementById('hour');
let minutes=document.getElementById('minute');
let seconds=document.getElementById('second');
let days=new Date();
setInterval(()=>
{
    let date=new Date();
    day.innerText=date.getDate()<10?`0${date.getDate()}`:`${date.getDate()}`; 
    months.innerHTML=date.getMonth()+1<10?`0${date.getMonth()}`:`${date.getMonth()}`;
    years.innerHTML=date.getFullYear();
    minutes.innerHTML=date.getMinutes()<10?`0${date.getMinutes()}`:`${date.getMinutes()}`;
    seconds.innerHTML=date.getSeconds()<10?`0${date.getSeconds()}`:`${date.getSeconds()}`;
    let amid=document.getElementById('am');
    let pmid=document.getElementById('pm');
    if(date.getHours()<12)
    {
        amid.style.backgroundColor="red";
        hours.innerText=date.getHours()<10?`0${date.getHours()}`:`${date.getHours()}`;
    }
    else
    {
        pmid.style.backgroundColor="red";
        hours.innerText=date.getHours()-12<10?`0${date.getHours()-12}`:`${date.getHours()-12}`;
    }
},1000);
let date1=document.getElementById('day1');
let date2=document.getElementById('day2');
let date3=document.getElementById('day3');
let date4=document.getElementById('day4');
let date5=document.getElementById('day5');
let date6=document.getElementById('day6');
let date7=document.getElementById('day7');
switch(days.getDay())
{
    case 0:
        date1.style.backgroundColor="red";
    break;
    case 1:
        date2.style.backgroundColor="red";
    break;
    case 2:
        date3.style.backgroundColor="red";
    break;
    case 3:
        date4.style.backgroundColor="red";
    break;
    case 4:
        date5.style.backgroundColor="red";
    break;
    case 5:
        date6.style.backgroundColor="red";
    break;
    case 6:
        date7.style.backgroundColor="red";
    break;
}



