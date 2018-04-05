var CanIHaveTheTime;
var Hour="8";
var MINUTE="50";
var PERIOD="AM";
    if (Hour==8 && MINUTE==50 && PERIOD=="AM")
    {
        console.log("It's almost 9 in the morning");
    }

/* Second one*/

var EveningTime;
var HOUR=7;
var MINUTE=15;
var PERIOD="PM";
    if(HOUR==7 && MINUTE==15 && PERIOD=="PM")
    {
        console.log("It's just after 7 in the evening");
    }

/*Another one, just for the kicks*/

var ItsGettingLate;
var HOUR=7;
var MINUTE=20;
var PERIOD="PM";
if(HOUR>7 || MINUTE>15 || PERIOD=="PM")
{
    console.log("It's getting late!");
}