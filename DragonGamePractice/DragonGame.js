var slaying = true;
var totalDamage = 0;
var dragonHP = 10;
var myHP = 6;

while(slaying) {
    var youHit = Math.floor(Math.random()*2);

    if (youHit === 1){
        var damageThisRound = Math.floor(Math.random()*5+1);
        console.log("You hit the dragon!");
        totalDamage+=damageThisRound;
        console.log("You did "+damageThisRound+" damage this round. Total dragon damage is "+totalDamage+".");
        if (totalDamage>=dragonHP){
            console.log("You slayed the dragon!");
            slaying=false;
        }
    } else {
        var dragonDamageThisRound = Math.floor(Math.random()*6+1);
        myHP-=dragonDamageThisRound;
        console.log("You got hit by the dragon for "+dragonDamageThisRound+"!");
        console.log("Your health is "+myHP);
        if(myHP<=0){
          console.log("You got burned to a crisp!");
          slaying=false;
        }
    }
}
