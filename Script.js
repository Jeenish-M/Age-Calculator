let dob = document.getElementById("birthDate");
let currentDate = document.getElementById("currentDate");
let output = document.getElementById("output");

document.getElementById("calculateBtn").addEventListener("click", () => {
    if(dob.value == "" || currentDate.value == "")
    {
        output.innerHTML = "Please select Date...";
    }
    else
    {
        calcAgeDiff(dob.value, currentDate.value);
    }
});

function calcAgeDiff(start,end){
    let sYear = parseInt(start.substring(0,4), 10);
    let sMonth = parseInt(start.substring(5,7), 10);
    let sDate = parseInt(start.substring(8,10), 10);
    let eYear = parseInt(end.substring(0,4), 10);
    let eMonth = parseInt(end.substring(5,7), 10);
    let eDate = parseInt(end.substring(8,10), 10);

    // Year Diff
    let yearDiff = eYear - sYear;

    // Month Diff
    let monthDiff;
    if(eMonth >= sMonth)
    {
        monthDiff = eMonth - sMonth;
    }
    else{
        yearDiff--;
        monthDiff = 12 + eMonth - sMonth;
    }

    // Days Diff
    let dateDiff;
    if(eDate >= sDate)
    {
        dateDiff = eDate - sDate;
    }
    else
    {
        monthDiff--;
        noOfDaysInDob = daysInMonth(sMonth, eMonth);
        dateDiff = noOfDaysInDob + eDate - sDate;

        if(monthDiff < 0)
        {
            monthDiff = 11;
            yearDiff--;
        }
    }

    output.innerHTML = yearDiff + " Years, " + monthDiff + " Months, " + dateDiff + " Days.<br><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Developed by Jeenish";
}

function daysInMonth(month, year){
    return new Date(year, month, 0).getDate();
}