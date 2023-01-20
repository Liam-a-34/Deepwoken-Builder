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
    genBoons()

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

    function genBoons(){

        $("#boon-1").html("")
        $("#boon-2").html("")
        $("#flaw-1").html("")

        const boons = ["Gourmet", "Maverick", "Steadfast", "Packmule", "Autodidact", "Survivalist", "Scrapper", "Sly"]
        const flaws = ["Vegetarian", "Obvious", "Deficient", "Fugitive", "Glutton", "Squeamish", "Haemophilia", "Blind", "Manic", "Simple"]

        let randomBoon = Math.floor(Math.random() * boons.length)
        let randomFlaw = Math.floor(Math.random() * flaws.length)

        if(flaws[randomFlaw] == "Simple"){
            $("#boon-1").html(`- ${boons[randomBoon]}`)

            randomBoon = Math.floor(Math.random() * boons.length)

            $("#boon-2").html(`- ${boons[randomBoon]}`)

            $("#flaw-1").html(`- ${flaws[randomFlaw]}`)
        } else {
            $("#boon-1").html(`- ${boons[randomBoon]}`)
            $("#flaw-1").html(`- ${flaws[randomFlaw]}`)
        }


    }



    let bingoArray = []

    const bingoText = ["Knock a Freshie", "Get Five Dentifillos", "Find an Egg", "Get a One Star Weapon", "Get a Two Star Weapon",
    "Get a One Star Armor", "Get a Two Star Armor", "Get a Three Star Armor", "Get Four Browncaps", "Make Mushroom Soup", "Catch a Fish",
    "Catch a Mudskipper", "Talk To an Etrean", "Talk to an Ignition Union", "Talk to an Authority","Talk to a Navaean", "Kill an Etrean",
    "Kill an Ignition Union", "Kill an Authority", "Kill a Song Seeker", "Kill a Navaean", "Kill a Thundercall NPC", "Kill a Galebreath NPC",
    "Kill a Frostdraw NPC", "Kill a Flamecharm NPC", "Kill a ShadowCast NPC", "Get two sticks", "Chop Down a Tree", "Get One Iron", "Get One Rock",
    "Get One Gold", "Get One Pure Iron", "Get One Pure Gold", "Get One Irithine", "Get One Erisore", "Get a Cloudstone", "Get a Stratus Stone",
    "Get a Crystal Lense", "Get a Perfect Lense", "Get an Aeon Logstone", "Get an Eternal Logstone", "Get a Drift Shard", "Get a Rush Shard", "Get an Amnesic Drifwood",
    "Get a Glass Stone", "Get a Magnifying Stone", "Get a Vibrant Gem", "Recall a Mantra", "Power Up", "Upgrade a Mantra", "Apply a Mantra Modifier",
    "Buy a Training Item", "Buy a New Ship", "Sink a Ship", "Shoot a Ship With a Cannon", "Kill a Megalodaunt", "Kill a Mudskipper", "Kill a Thresher", "Kill a Lionfish",
    "Kill a Bandit", "Kill a Blade Temple Guard", "Buy Food", "Loot a Body", "Find an Enchanted Weapon", "Find an Enchanted Armor", "Craft an Outfit",
    "Sell an Item to an Antiquarian", "Repair Your Armor", "Light a Campfire", "Sail Through a Sea Highway", "Gather Wheat", "Gather Bamboo",
    "Pick a Calabash", "Pick a Redd", "Pick a Plumfruit", "Pick a Pomar", "Pick a Lotus", "Craft an Attribute Flask", "Craft One Chum", "Get One Coal", "Buy an Axe", "Buy a Pickaxe",
    "Use a Support Mantra", "Damage Someone With an Attack Mantra", "Kill a Random Event", "Put on a Blindfold", "Equip Four Gold or Silver Rings", "Attack an Etrean Player",
    "Attack a Celtor Player", "Attack an Adret Player", "Attack a Canor Player", "Attack a Gremor Player", "Attack a Khan Player", "Attack a Felinor Player",
    "Attack a Vesperian Player", 'Attack a Chrysid Player', "Attack a Capra Player", "Attack a Ganymede Player", "Attack a Tiran Player", "Attack a Bell User", "Attack a Player With an Enchant",
    "Attack a Celtor NPC", "Attack an Adret NPC", "Attack a Canor NPC", "Attack a Gremor NPC", "Attack a Khan NPC", "Attack a Felinor NPC", "Attack a Vesperian NPC", "Attack a Chrysid NPC", 'Attack a Capra NPC',
    "Attack a Ganymede NPC", 'Attack a Tiran NPC', 'Attack a Krulian NPC', "Recall All Your Mantras", "Kill a Mechalodaunt", "Kill a Bat", "Kill a Summer Company Member",
    "Stack Three Barrels", "Highjack a Ship", "Enter Someone's Guild Base", "Deposit all Your Money in Your Base", "Open a Chest", "Pick up a Mob Drop",
    "Take a Bar of Fall Damage", "Use a Launch Pad", "Kill a Guild Mate", "Kill a Bandit Leader", "Grip a Freshie", "Drown an NPC", "Obtain a Weapon You Cannot Use",
    "Jump Out of a Moving Boat", "Repair a Boat", "Catch a Chest on a Fishing Rod", "Obtain a Cloak", "Obtain Earrings", "Obtain a Cape", "Hitch a Ride on Someone's Boat",
    "Travel to Tower Struck Lands", "Travel to Miners Landing", 'Travel to Fort Merit', "Travel to Lower Erisia", "Travel to Upper Erisia", "Travel to Isle of Vigils",
    "Travel to Etrea", "Travel to Great Hive Aratel", "Travel to The Hive", 'Travel to Starswept Valley', "Travel to Minytirsa", "Travel to Valley of Heroes",
    "Flourish a Player", "Hit a Player with a Crit", "Carry an NPC to a Different Island", "Have Fun (Hard)"]

    function generateBingo(){

        for(let i = 1; i < 25; i++){
    
            let randomText = Math.floor(Math.random() * bingoText.length)
    
            if(bingoArray.includes(randomText)){
                randomText = Math.floor(Math.random() * bingoText.length)
            }
    
            // console.log(bingoArray)
    
            $(`#grid-${i}`).children("p").empty()
            $(`#grid-${i}`).children("p").html(bingoText[randomText])
    
            bingoArray.push(randomText)
        }
    }

    let userEmail = $("#email-box").val()
    let userText = $("#text-box").val()

    function sendEmail() {
        Email.send({
          Host: "smtp.gmail.com",
          Username: `allenliam343@gmail.com`,
          Password: "liamallen34",
          To: 'liamallen343@gmail.com',
          From: `${userEmail}`,
          Subject: "Feeback",
          Body: `${userText}`,
        })
          .then(function (message) {
            alert("mail sent successfully")
          });
      }

    generateBingo()

    $("#bingo-btn").on("click", () => {
        location.assign("./bingo.html")
    })

    $(".back-button").on("click", function(){
        history.back()
    })

    $(".rerollBtn").on("click", generateBingo)

    $(".gridSquare").on("click", function(){

        if($(this).hasClass("green")){
            $(this).css("background-image", 'url("./images/Deepwoken\ Beige.PNG")')
            $(this).removeClass("green")
        } else {
            $(this).css("background-image", 'url("./images/Deepwoken\ green.PNG")')
            $(this).addClass("green")
        }
    })

    $("#feedbackBtn").on("click", () => {
        location.assign("./feedback.html")
    })

    $("#submitBtn").on("click", sendEmail)