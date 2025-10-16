ml.onStart(ml.event.Neutral, function () {
    radio.sendString("" + team_name + "," + last_known_action)
    serial.writeLine(last_known_action)
    basic.showString(last_known_action)
    basic.pause(2000)
    basic.clearScreen()
})
ml.onStop(ml.event.ActionB, function () {
    last_known_action = "B"
})
ml.onStop(ml.event.ActionA, function () {
    last_known_action = "A"
})
let team_name = ""
let last_known_action = ""
last_known_action = ""
team_name = "**PUT YOUR TEAM NAME HERE, e.g. G8-8**"
radio.setGroup(88)
basic.showString(team_name)
basic.pause(2000)
basic.clearScreen()
