
const statsArr = [
    [0, 1, 2, 3, 4, 5],
    [0, 1, 2, 3]
]
const statTotal = []

let randomWeapon = Math.floor(Math.random() * 3)

let randomStat = Math.floor(Math.random() * 101)

statTotal.push(randomStat)

$("#weapon-stats-numbs").children(randomWeapon).val(randomStat)