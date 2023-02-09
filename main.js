let day=document.getElementById('date');
let times=document.getElementById('time');
let days=new Date();
day.innerText=`${days.getDate()}: ${days.getMonth()}:${days.getFullYear()}`
setInterval(()=>
{
    let date=new Date();
    times.innerText=`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    let amid=document.getElementById('am');
    let pmid=document.getElementById('pm');
    if(date.getHours()<12)
    {
        amid.style.backgroundColor="red";
    }
    else
    {
        pmid.style.backgroundColor="red";
    }
},);
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