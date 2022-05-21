const Birthday = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const check = document.querySelector('#check');
const result = document.querySelector('.result');

function sumDate(dob)
{
    let sum =0;
    dob=dob.replaceAll("-","");
    for(let i=0;i<dob.length;i++)
    {
        sum =sum + Number(dob[i]);
    }
    return sum;
}

function showMessage(msg)
{
    result.innerText=msg;
}

function checkIsNumberLucky(sumOfDate,numberToCheck)
{
   if(sumOfDate%numberToCheck===0)
   {   
       result.style.color="lightGreen";
       result.style.border="2px solid lightGreen";
       showMessage("It is a lucky number :)")
   }
   else
   {
       result.style.color="red";
       result.style.border="2px solid red";
    showMessage("It is not a lucky number :(")
}
}


check.addEventListener('click', function isBirthdayLucky(){
    console.log('clicked');
    let dob = Birthday.value;
    let numberToCheck = luckyNumber.value;
    console.log(dob,numberToCheck);


    if(dob && numberToCheck)
    {
        const sumOfDate = sumDate(dob);
        console.log(sumOfDate);
        checkIsNumberLucky(sumOfDate,numberToCheck);
    }
    else
    {
       result.style.color="red";
       result.style.border="2px solid red";

        showMessage("Both Fields are Required");
        
    }

});