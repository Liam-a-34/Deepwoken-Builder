var statTotal = 0
var chosenArr = []

$("#roll-btn").on("click", () => {

    statTotal = 0

    chosenArr = []


    $("#weapon-stats-numbs").children().html("0")
    $("#main-stats-numbs").children().html("0")
    $("#mantra-stats-numbs").children().html("0")


let randomWeapon = Math.floor(Math.random() * 3)

let randomStat = Math.floor(Math.random() * 101)

    statTotal += randomStat;

    console.log(statTotal)

$(`#weapon-${randomWeapon}`).html(randomStat)


    console.log("weapon working?")

    genStats()

    return statTotal;
})


function genStats(){

    let randomCat = Math.floor(Math.random() * 10)

    let randomStat = Math.floor(Math.random() * 101)

    if(chosenArr.includes(randomCat)){
        console.log("matched")
       return genStats();
    }
        console.log("No match")
        chosenArr.push(randomCat)

        if((statTotal + randomStat) >= 327){
            let remainder = 327 - statTotal;
            $(`#stat-${randomCat}`).html(remainder);
            console.log(`remainder in ${randomCat}`)
            console.log(statTotal + remainder)
            return;
        } else {
            statTotal += randomStat;
            $(`#stat-${randomCat}`).html(randomStat)
            console.log(`${randomCat}`)
            console.log(statTotal)
            return genStats();
        }
    
    }
