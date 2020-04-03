var rand = function(a, b){
    b+=1
    return Math.floor((Math.random() * Math.abs(a-b)) + Math.min(a, b));
}

var $ = function(id){
    return document.getElementById(id)
}

var generateIdentity = function(){
    var identity = [];
    switch(rand(1,2)){
        case 1:
            identity.push("Tom")
            break
        case 2:
            identity.push("She-cat")
    }

    switch(rand(1,12)){
        case 1:
            identity.push("No Clan")
            break
        case 2:
            identity.push("Kittypet")
            break
        case 3:
        case 4:
            identity.push("ThunderClan")
            break
        case 5:
        case 6:
            identity.push("RiverClan")
            break
        case 7:
        case 8:
            identity.push("WindClan")
            break
        case 9:
        case 10:
            identity.push("ShadowClan")
            break
        case 11:
            identity.push("SkyClan")
            break
        case 12:
            identity.push("Tribe of Rushing Waters")
            break
    }
    var i = rand(1,13)
    switch(i){
        case 1:
            identity.push("Kit")
            break
        case 2:
        case 3:
            identity.push("Apprentice")
            break
        case 4:
        case 5:
        case 6:
        case 7:
            identity.push("Warrior")
            break
        case 9:
        case 8:
            identity.push(identity[0] == "Tom" ? "Warrior" : "Queen")
            break
        case 10:
            identity.push("Medicine Cat")
            break
        case 11:
            identity.push("Deputy")
            break
        case 12:
            identity.push("Leader")
            break
        case 13:
            identity.push("Elder")
    }
    if(identity[1] == "Kittypet" || identity[1] == "No Clan"){
        if(i<=12) identity[2] = "Adult"
        if(i<=3) identity[2] = "Kitten"
    }
    return identity
}

var displayIdentity = function(identity){
    $("gender").innerHTML = "  Gender: " + identity[0]
    $("clan").innerHTML =   "    Clan: " + identity[1]
    $("age").innerHTML =    "     Age: " + identity[2]
}

var generateStats = function(){
    var avg = 0
    var stats = [rand(1,12),rand(1,12),rand(1,12),rand(1,12),rand(1,12),rand(1,12)]
    stats.forEach(function(item) {
        avg+=item
    });
    stats.push(avg/6)
    stats.forEach(function(item, index, arr) {
        lvl = "Terrible"
        if(item>=2) lvl = "Poor"
        if(item>=6) lvl = "Average"
        if(item>=7) lvl = "Great"
        if(item>=10) lvl = "Excellent"
        arr[index] = lvl
    });
    return stats
}

var displayStats = function(stats){
    $("str").innerHTML= "Speed: " + stats[0]
    $("spd").innerHTML= "Speed: " + stats[1]
    $("end").innerHTML= "Endurance: " + stats[2]
    $("atk").innerHTML= "Attack: " + stats[3]
    $("def").innerHTML= "Defense " + stats[4]
    $("tac").innerHTML= "Tactics:  " + stats[5]
    $("avg").innerHTML= "Total: " + stats[6]
}