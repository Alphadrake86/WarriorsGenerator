var rand = function(a, b){
    b+=1
    return Math.floor((Math.random() * Math.abs(a-b)) + Math.min(a, b));
}

var $ = function(id){
    return document.getElementById(id)
}

var statq = function(){
    if($("q").innerHTML == "?"){
        $("q").innerHTML = "x"
        $("statbox").style.display = "none"
        $("sreroll").style.visibility = "hidden"
        $("sswap").style.visibility = "hidden"
        $("qbox").style.display = "block"
    }
    else {
        $("q").innerHTML = "?"
        $("qbox").style.display = "none"
        $("sreroll").style.visibility = "visible"
        $("sswap").style.visibility = "visible"
        $("statbox").style.display = "block"
    }
    
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

        if(age<16 && age>6 && identity[0]=="She-cat" && i%10 < 5) rank = "Queen"

        if(age>9 && age<17 && rand(1,3)<2){
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


var generateStats = function(words){
    var avg = 0
    var len = 24 // length of lvldata below
    var statdata = [rand(0,len-1),rand(0,len-1),rand(0,len-1),rand(0,len-1),rand(0,len-1),rand(0,len-1)]
    statdata.forEach(function(item) {
        avg+=item
    });
    statdata.push(Math.floor(avg/6))
    
    return [stats2words(statdata,words),statdata]
}

    
var stats2words = function(statdata, words){
    words = words%3
    lvldata = [["Terrible","F",1,], ["Terrible","F+",2,],
    ["Bad","E",3,], ["Bad","E+",4,],["Bad","E+",5,],
    ["Poor","D",6,],["Poor","D",7,],["Poor","D+",8,],["Poor","D+",9,],
    ["Average","C",10,],["Average","C",11,],["Average","C",12,],["Average","C+",13,],["Average","C+",14,],["Average","C+",15,],
    ["Good","B",16,],["Good","B",17,],["Good","B+",18,],["Good","B+",19,],
    ["Great","A",20,],["Great","A",21,],["Great","A+",22],
    ["Excellent","S",23,],["Excellent","S+",24]]
    var stats = []
    statdata.forEach(function(value) {
        stats.push(lvldata[value][words])
    });
    
    return stats
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

var generatePersonalities = function(){
    var personality = []

    var traits = [
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
        "Uncomplaining", 
        "Enigmatic",
        "Reliable",
        ["Cautious", "Reckless"],
        "Competitive",
        "Unpredictable",
        "Determined",
        "Physical",
        "Proud",
        "Lively",
        "Unsentimental",
        "Solitary",
        "Abrasive",
        "Conceited",
        "Cold",
        "Crass",
        ["Modest","Extreme"],
        "Foolish",
        "Greedy",
        "Gullible",
        "Hateful",
        "Impatient",
        "Naive",
        "Violent"
    ]

    var num = rand(1,2) + rand(1,2) + rand(1,2)

    while(personality.length<num){
        pick = traits[rand(0,traits.length-1)]
        if(!personality.includes(pick)){
            personality.push(pick) 
        }
    }

    return personality
}

var displayPersonalities = function(personality){
    var stringgen = function(){
         text = "";
        for(i = 0; i<personality.length; i++){
            if(typeof(personality[i]) != typeof("")){
                personality[i] = personality[i][rand(0,personality[i].length-1)]
            }
            text += personality[i] 
            if(i<=personality.length-2) text += ", "
            if(i == personality.length-2) text += "and "
            if(i==1||i==3) text += "<br>"
            
        }
        
        return text
    }
    $("pos").innerHTML =  stringgen()

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
    if(i>12) {
        dbts = 1
    }
    if(i>18) {
        dbts = 2
    }

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
                eyecolors[eye] = type==0 ? "Milky" : "Missing"
            } 
            else {
                if(rand(1,3)<2)eyecolors[0] = "Milky"
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
    features.push(generateFur())
    return features
}

var displayFeatures = function(features){
    $("fur").innerHTML = "Fur: " + features[3]
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

var generateFur = function(){
    var fur = []
    lengths = ["Short",
            "Medium",
            "Long",
            "Thick",
            "Scruffy",
            "Wiry",
            "Coarse"]
    fur.push(lengths[rand(1,lengths.length)-1])
    colors = [
        "black",
        "grey",
        "silver",
        "white",
        "ginger",
        "orange",
        "gold",
        "cream",
        "coffee",
        "brown",
        "tan",
        "sienna"
    ]
    fur.push(colors[rand(1,colors.length)-1])
    return fur[0] + " " + fur[1] + " fur"
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
    if(i<85) return "Lame leg"
    if(i<86) return "Missing leg"
    if(i<87) return "Hairless"
    if(i<92) return "Twisted paw"
    return "Unlucky"
}

var Cat = {
    identity:[],
    stats:[],
    features:[],
    personalities:[],
    words:0,

    reiden:function(){identity = generateIdentity()},
    restat:function(){stats = generateStats(this.words)},
    refeat:function(){features=generateFeatures()},
    repers:function(){personalities=generatePersonalities()},
    refresh:function(){
                    displayIdentity(identity)
                    displayStats(stats)
                    displayFeatures(features)
                    displayPersonalities(personalities)
                },
    swapstats:function(){
        
        stats[0] = stats2words(stats[1],++this.words)
        }

}
