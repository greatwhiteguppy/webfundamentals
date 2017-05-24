var daysUntil = 80;
while (daysUntil > 0)
{
    if (daysUntil > 30)
    {
        console.log("It's still", daysUntil, "days until my birthday. It's taking too long!");
    }
    else if (daysUntil <= 30 && daysUntil > 5)
    {
        console.log ("It's now", daysUntil, "days until my birthday. So yay!");
    }
    else if (daysUntil <= 5)
    {
        console.log ("It's only", daysUntil, "days until my birthday. WOO HOO!");
    }
    daysUntil = daysUntil - 1;
}
    console.log("It's my birthday! Break out the cake and all the prezzies!");
