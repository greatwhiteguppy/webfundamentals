var HOUR = 3;
var MINUTE = 32;
var PERIOD = "AM";

if (MINUTE < 30)
{
    if (PERIOD == "AM")
    {
        console.log("It's just after", (HOUR), "in the morning");
    }
    else
    {
        console.log("It's just after", (HOUR), "in the evening");
    }
}
else if (MINUTE > 30)
{
    if (PERIOD == "AM")
    {
        console.log("It's almost", (HOUR+1), "in the morning");
    }
    else
    {
        console.log("It's almost", (HOUR+1), "in the evening");
    }
}
