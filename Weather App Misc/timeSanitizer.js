
var timeFix = function(time){
    if (time[time.length-2] === "p"){
        time = time[0] + time[1] + "00";
    } else if (time[time.length-2] === "a"){
        time = "0" + time[0] + "00";
    }
    return time;
};

timeFix("12 pm"); //=> "1200"
timeFix("9 am"); //=> "0900"
