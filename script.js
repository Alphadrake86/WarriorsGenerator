var rand = function(a, b){
    b+=1
    return Math.floor((Math.random() * Math.abs(a-b)) + Math.min(a, b));
}

var $ = function(id){
    return document.getElementById(id)
}

var generateIdentity = function(){
var identity = [];
    rand(1,2)==1?
        identity.push("Tom"):
        identity.push("She-cat")
    
    var i = rand(1,110)
    a = "ThunderClan"
    if(i>20) a = "ShadowClan"
    if(i>40) a = "RiverClan"
    if(i>60) a = "WindClan"
    if(i>80) a = "Rogue"
    if(i>90) a = "Kittypet"
    if(i>100) a = "Skyclan"
    if(i>110) a = "Tribe of Rushing Waters"
    identity.push(a)

    var age = rand(1,18)
    
    if(identity[1] == "Kittypet" || identity[1] == "Rogue"){
        rank = "Old"
        if(age<=15) identity[2] = "Adult"
        if(age<=5) identity[2] = "Kitten"
    } else {
        if(age<=1) rank = "Kit"
        else if (age<=4) rank = "Apprentice"
        else if (age<=14) rank = "Warrior"
        else if (age<=17) rank = "Senior warrior"
        else rank = "Elder"

        if(age<13 && age>6 && identity[0]=="She-cat" && i%10 < 5) rank = "Queen"

        if(age>10 && age<17 && rand(1,3)<2){
            if(i%10<=3) {rank = "Medicine cat"}
            else if(i%10<=6) {rank = "Deputy"}
            else {rank = "Leader"}
        }
    }
    identity.push(rank)
    return identity
}

var displayIdentity = function(identity){
    $("gender").innerHTML = "  Gender: " + identity[0]
    $("clan").innerHTML =   "    Clan: " + identity[1]
    $("age").innerHTML =    "     Age/Rank: " + identity[2]
}

var generateStats = function(){
    var avg = 0
    var stats = [rand(1,20),rand(1,20),rand(1,20),rand(1,20),rand(1,20),rand(1,20)]
    stats.forEach(function(item) {
        avg+=item
    });
    stats.push(avg/6)
    var statdata = stats
    stats.forEach(function(item, index, arr) {
        lvl = "Terrible"
        if(item>=3) lvl = "Bad"
        if(item>=6) lvl = "Poor"
        if(item>=9) lvl = "Average"
        if(item>=13) lvl = "Good"
        if(item>=16) lvl = "Great"
        if(item>=19) lvl = "Excellent"
        arr[index] = lvl
    });
    return [stats,statdata]
}

var displayStats = function(stats){
    $("str").innerHTML= "Strength: " + stats[0][0]
    $("spd").innerHTML= "Speed: " + stats[0][1]
    $("end").innerHTML= "Endurance: " + stats[0][2]
    $("atk").innerHTML= "Attack: " + stats[0][3]
    $("def").innerHTML= "Defense " + stats[0][4]
    $("tac").innerHTML= "Tactics:  " + stats[0][5]
    $("avg").innerHTML= "Total: " + stats[0][6]
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
    if(i>17) {dbts = 2}

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
    if(disabilities.includes("Blind") && disabilities.includes("Facial Scars")){
        eyecolors[0] = "Missing"
    }
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
        $("scars").innerHTML = "Scars/Disabilities: None"
    }
    else if(features[2].length == 1){
        $("scars").innerHTML = "Scars/Disabilities: " + features[2][0]
    }
    else{
        $("scars").innerHTML = "Scars/Disabilities: " + features[2][0] + " and " + features[2][1]
    }
}
var generatePersonalities = function(){
    var personality = [[],[],[]]

    var positive = [
        "Attractive",
        "Brave",
        "Anticipative",
        "Positive",
        "Subtle",
        "Shrewd",
        "Spontaneous",
        "Suave",
        "Tolerant",
        "Consistent",
        "Kind",
        "Uncomplaining"
    ]
    
    var neutral = [
        "Enigmatic",
        "Cautious",
        "Competitive",
        "Modest",
        "Unpredictable",
        "Determined",
        "Physical",
        "Proud",
        "Lively",
        "Unsentimental",
        "Solitary"
    ]
    
    var negative = [
        "Abrasive",
        "Conceited",
        "Cold",
        "Crass",
        "Extreme",
        "Foolish",
        "Greedy",
        "Gullible",
        "Hateful",
        "Impatient",
        "Naive",
        "Violent"
    ]

    var picktraits = function(disposition){
        var traits = []
        var num = rand(1,2)
        while(traits.length<num){
            var trait = disposition[rand(1,disposition.length-1)]
            if(!traits.includes(trait)){
                traits.push(trait)
            }
        }
        return traits;
    }

    personality[0] = picktraits(positive)
    personality[1] = picktraits(neutral)
    personality[2] = picktraits(negative)

    return personality
}

var displayPersonalities = function(personality){
    var stringgen = function(arr){
        if(arr.length == 2) return arr[0] + " and " + arr[1]
        return arr[0]
    }
    $("pos").innerHTML = "Positive traits: " + stringgen(personality[0])
    $("neu").innerHTML = "Neutral traits: " + stringgen(personality[1])
    $("neg").innerHTML = "Negative traits: " + stringgen(personality[2])
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
