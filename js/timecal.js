
/*
    This function use for getTime and change label in button
*/
    var start;  var shour;  var sminute;
    var end;    var ehour;  var eminute;
    var result; var hour;   var minute;
function changeValue(el) {
    if(el.value==="Start"){
        start=new Date();
        shour=start.getHours();
        sminute=start.getMinutes();
        document.getElementById("start").innerHTML = shour+":"+sminute;
        el.value="End";
    }else if(el.value==="End"){
        end=new Date();
        ehour=end.getHours();
        eminute=end.getMinutes();
        document.getElementById("end").innerHTML = ehour+":"+eminute;
        document.getElementById("results").innerHTML = calTime(); 
        document.getElementById("riel").innerHTML = calMoney(); 
        el.value="Clear";
    }else if(el.value==="Clear"){
        document.getElementById("start").innerHTML = "00:00";
        document.getElementById("end").innerHTML = "00:00";
        document.getElementById("results").innerHTML = "0";
        document.getElementById("riel").innerHTML = "0";
        el.value="Start";
    }
}
/*
    This function use for Calulate time
*/
function calTime(){
    if(eminute<sminute){
        hour=(ehour-1)-shour;
        minute=(eminute+60)-sminute;
    }else {
        hour=ehour-shour;
        minute=eminute-sminute;
    }
    result=(hour*60)+minute;
    return result;
}
/*
    This function use for Calulate money
*/
function calMoney(){
    var hours;
    var minutes;
    var resultPay;
    var payment;
    
    hour=calTime()/60;
    hours=Math.floor(hour);
    minutes=calTime()-(hour*60);
//    alert(hours+":"+minutes);
    
    if(minutes<16){
        payment=500;
    }else if(minutes<31){
        payment=700;
    }else{
        payment=1500;
    }
    resultPay=(hours*1500)+(payment);
//    alert(payment);
    
    return resultPay;
}
