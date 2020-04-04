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
    $("str").innerHTML= "Strength: " + stats[0]
    $("spd").innerHTML= "Speed: " + stats[1]
    $("end").innerHTML= "Endurance: " + stats[2]
    $("atk").innerHTML= "Attack: " + stats[3]
    $("def").innerHTML= "Defense " + stats[4]
    $("tac").innerHTML= "Tactics:  " + stats[5]
    $("avg").innerHTML= "Total: " + stats[6]
}

var generateFeatures = function(){
    var features = []
    var builds = ["Thin, lithe, light",
                "Short, stocky, broad",
                "Tall, fit, lanky",
                "Thick, muscled, heavy"]
    features.push(builds[rand(0,builds.length-1)])

    var eyecolordata = ["Navy",
                    "Blue",
                    "Ice",
                    "Aquamarine",
                    "Green",
                    "Chartreuse",
                    "Yellow",
                    "Orange",
                    "Amber",
                    "Caramel",
                    "Russet",
                    "Silver"]
    
    var eyecolors = [eyecolordata[rand(0,eyecolordata.length-1)]]

    var dbts = 0
    var i = rand(1,20)
    if(i>12) {dbts = 1}
    else if(i>17) {dbts = 2}

    var disabilities = []
    while(disabilities.length<dbts){
        var db = weightedDisability()
        if(!disabilities.includes(db)) disabilities.push(db)
    }

    disabilities.forEach(function(val, index, arr){
        if(val == "eyes"){
            var i = rand(1,20)
            if(i<= 8){
                arr[index] = "Heterochromia"
                eyecolors.push(eyecolors[0])
                var nc = eyecolordata[rand(0,eyecolordata.length-1)]
                while(eyecolors.includes(nc)) nc = eyecolordata[rand(0,eyecolordata.length-1)]
                eyecolors[rand(0,1)] = nc
            }
            else if(i<=16){
                eyecolors.push(eyecolors[0])
                var eye = rand(0,1)
                var type = rand(0,1)
                arr[index] = type==0 ? "Half Blind" : "Missing Eye"
                eyecolors[eye] = type==0 ? "Cloudy " : "Missing"
            } 
            else {
                if(rand(1,3)<2)eyecolors[0] = "Cloudy"
                arr[index] = "Blind"
            }
        }
        else if(val == "deaf"){
            var i = rand(1,10)
            arr[index] = i<8 ? "Half Deaf" : "Deaf"
        }
    })
    features.push(eyecolors)
    features.push(disabilities)
    return features
}

var displayFeatures = function(features){
    $("body").innerHTML = "Body type: " + features[0]
    if(features[1].length == 1){
        $("eyes").innerHTML = "Eye color: " + features[1][0]
    }
    else{
        $("eyes").innerHTML = "Left eye: " + features[1][0] + "<br>Right eye: " + features[1][1]
    }

    if(features[2].length == 0){
        $("scars").innerHTML = "Scars: None"
    }
    else if(features[2].length == 1){
        $("scars").innerHTML = "Scars: " + features[2][0]
    }
    else{
        $("scars").innerHTML = "Scars: " + features[2][0] + " and " + features[2][1]
    }
}

var weightedDisability = function(){
    var i = rand(0,100)
    if(i<15) return "Ear Nick"
    if(i<30) return "Facial Scars"
    if(i<45) return "Flank Scars"
    if(i<65) return "eyes"
    if(i<70) return "Tailless"
    if(i<77) return "deaf"
    if(i<80) return "Mute"
    if(i<84) return "Lame leg"
    if(i<85) return "Missing leg"
    if(i<87) return "Hairless"
    if(i<92) return "Twisted paw"
    return "Unlucky"
}
