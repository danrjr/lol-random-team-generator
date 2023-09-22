// let _ = require("lodash");

const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 

// let tops = ["Aatrox", "Camille", "Cho'gath", "Darius", "Dr Mundo", "Fiora", "Gangplank", "Garen", 
// "Gnar", "Gwen", "Illaoi", "Irelia", "Jax", "Jayce", "K'sante", "Kayle", "Kennen", "Kled", "Malphite",
// "Morderkaiser", "Nasus", "Olaf", "Ornn", "Pantheon", "Poppy", "Quinn", "Renekton", "Riven",
// "Rumble", "Sett", "Shen", "Shyvana", "Singed", "Sion", "Tahm Kench", "Teemo", "Trundle", "Tryndamere",
// "Urgot", "Volibear", "Yorick"]
let link = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/"
let tops = [
    {name: "Aatrox", icon: link + "5992.jpg"},
    {name: "Camille", icon: link + "6010.jpg"},
    {name: "Cho'gath", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6012.jpg"},
    {name: "Darius", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6014.jpg"},
    {name: "Dr Mundo", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6016.jpg"},
    {name: "Fiora", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6023.jpg"},
    {name: "Gangplank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6026.jpg"},
    {name: "Garen", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6027.jpg"},
    {name: "Gnar", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6028.jpg"},
    {name: "Gwen", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6031.jpg"},
    {name: "Illaoi", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6034.jpg"},
    {name: "Irelia", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6035.jpg"},
    {name: "Jax", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6039.jpg"},
    {name: "Jayce", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6040.jpg"},
    {name: "K'sante", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6043.jpg"},
    {name: "Kayle", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6050.jpg"},
    {name: "Kennen", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6052.jpg"},
    {name: "Kled", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6055.jpg"},
    {name: "Malphite", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6065.jpg"},
    {name: "Mordekaiser", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6071.jpg"},
    {name: "Nasus", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6075.jpg"},
    {name: "Olaf", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6082.jpg"},
    {name: "Ornn", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6084.jpg"},
    {name: "Pantheon", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6085.jpg"},
    {name: "Poppy", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6086.jpg"},
    {name: "Quinn", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6089.jpg"},
    {name: "Renekton", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6095.jpg"},
    {name: "Riven", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6097.jpg"},
    {name: "Rumble", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6098.jpg"},
    {name: "Sett", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6104.jpg"},
    {name: "Shen", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6106.jpg"},
    {name: "Singed", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6108.jpg"},
    {name: "Sion", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6109.jpg"},
    {name: "Tahm Kench", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6207.jpg"},
    {name: "Teemo", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6211.jpg"},
    {name: "Trundle", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6214.jpg"},
    {name: "Tryndamere", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6215.jpg"},
    {name: "Urgot", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6219.jpg"},
    {name: "Volibear", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6229.jpg"},
    {name: "Yorick", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6237.jpg"},
]

let jgs = [
    {name: "Amumu", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/5997.jpg"},
    {name: "Bel'veth", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6005.jpg"},
    {name: "Diana", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6015.jpg"},
    {name: "Ekko", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6018.jpg"},
    {name: "Elise", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6019.jpg"},
    {name: "Evelynn", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6020.jpg"},
    {name: "Fiddlesticks", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6022.jpg"},
    {name: "Gragas", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6029.jpg"},
    {name: "Graves", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6030.jpg"},
    {name: "Hecarim", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6032.jpg"},
    {name: "Ivern", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6036.jpg"},
    {name: "Jarvan IV", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6038.jpg"},
    {name: "Karthus", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6047.jpg"},
    {name: "Kayn", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6051.jpg"},
    {name: "Kha'zix", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6053.jpg"},
    {name: "Kindred", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6054.jpg"},
    {name: "Lee Sin", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6058.jpg"},
    {name: "Lillia", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6060.jpg"},
    {name: "Maokai", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6067.jpg"},
    {name: "Master Yi", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6068.jpg"},
    {name: "Nidalee", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6078.jpg"},
    {name: "Nocturne", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6080.jpg"},
    {name: "Nunu & W", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6081.jpg"},
    {name: "Rammus", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6091.jpg"},
    {name: "Rek'sai", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6092.jpg"},
    {name: "Rengar", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6096.jpg"},
    {name: "Sejuani", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6101.jpg"},
    {name: "Shaco", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6105.jpg"},
    {name: "Shyvana", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6107.jpg"},
    {name: "Skarner", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6201.jpg"},
    {name: "Udyr", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6218.jpg"},
    {name: "Vi", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6225.jpg"},
    {name: "Viego", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6226.jpg"},
    {name: "Warwick", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6230.jpg"},
    {name: "Wukong", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6231.jpg"},
    {name: "Xin Zhao", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6234.jpg"},
    {name: "Zac", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6239.jpg"},
    {name: "Briar", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6283.jpg"},
]

// let jgs = ["Amumu", "Bel'veth", "Diana", "Ekko", "Elise", "Evelynn", "Fiddlesticks", "Gragas", "Graves",
// "Hecarim", "Ivern", "Jarvan IV", "Karthus", "Kayn", "Kha'zix", "Kindred", "Lee Sin", "Lillia", "Maokai", 
// "Master Yi", "Nidalee", "Nocturne", "Nunu & Willump", "Rammus", "Rek'sai", "Rengar", "Sejuani", "Shaco",
// "Shyvana", "Skarner", "Udyr", "Vi", "Viego", "Warwick", "Wukong", "Xin Zhao", "Zac"]

let mids = [
    {name: "Ahri", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/5993.jpg" },
    {name: "Akali", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/5994.jpg" },
    {name: "Akshan", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/5995.jpg" },
    {name: "Anivia", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/5998.jpg" },
    {name: "Annie", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/5999.jpg" },
    {name: "Aurelion Sol", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6002.jpg" },
    {name: "Azir", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6003.jpg" },
    {name: "Cassiopeia", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6011.jpg" },
    {name: "Corki", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6013.jpg" },
    {name: "Fizz", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6024.jpg" },
    {name: "Galio", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6025.jpg" },
    {name: "Heimerdinger", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6033.jpg" },
    {name: "Kassadin", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6048.jpg" },
    {name: "Katarina", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6049.jpg" },
    {name: "LeBlanc", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6057.jpg" },
    {name: "Lissandra", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6061.jpg" },
    {name: "Lux", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6064.jpg" },
    {name: "Malzahar", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6066.jpg" },
    {name: "Naafiri", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6073.jpg" },
    {name: "Neeko", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6077.jpg" },
    {name: "Orianna", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6083.jpg" },
    {name: "Qiyana", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6088.jpg" },
    {name: "Ryze", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6099.jpg" },
    {name: "Sylas", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6205.jpg" },
    {name: "Syndra", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6206.jpg" },
    {name: "Swain", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6204.jpg" },
    {name: "Taliyah", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6208.jpg" },
    {name: "Talon", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6209.jpg" },
    {name: "Twisted Fate", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6216.jpg" },
    {name: "Veigar", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6222.jpg" },
    {name: "Vel'koz", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6223.jpg" },
    {name: "Vex", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6224.jpg" },
    {name: "Viktor", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6227.jpg" },
    {name: "Vladimir", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6228.jpg" },
    {name: "Xerath", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6233.jpg" },
    {name: "Yasuo", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6235.jpg" },
    {name: "Yone", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6236.jpg" },
    {name: "Zed", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6240.jpg" },
    {name: "Ziggs", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6242.jpg" },
    {name: "Zoe", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6244.jpg" }]

// let mids = ["Ahri", "Akali", "Akshan", "Anivia", "Annie", "Aurelion Sol", "Azir", "Cassiopeia", "Corki",
// "Fizz", "Galio", "Heimendiger", "Kassadin", "Katarina", "LeBlanc", "Lissandra", "Lux", "Malzahar", "Naafiri", "Neeko", 
// "Orianna","Qiyana", "Ryze", "Sylas", "Syndra", "Swain", "Taliyah", "Talon", "Twisted Fate", "Veigar", "Vel'koz", "Vex", "Viktor", "Vladimir",
// "Xerath", "Yasuo", "Yone",  "Zed", "Ziggs", "Zoe"];

let adcs = [
    {name: "Aphelios", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6000.jpg"},
    {name: "Ashe", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6001.jpg"},
    {name: "Caitlyn", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6009.jpg"},
    {name: "Draven", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6017.jpg"},
    {name: "Ezreal", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6021.jpg"},
    {name: "Jhin", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6041.jpg"},
    {name: "Jinx", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6042.jpg"},
    {name: "Kai'sa", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6044.jpg"},
    {name: "Kalista", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6045.jpg"},
    {name: "Kog'maw", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6056.jpg"},
    {name: "Lucian", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6062.jpg"},
    {name: "Miss Fortune", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6070.jpg"},
    {name: "Nilah", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6079.jpg"},
    {name: "Samira", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6100.jpg"},
    {name: "Sivir", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6200.jpg"},
    {name: "Tristana", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6213.jpg"},
    {name: "Twitch", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6217.jpg"},
    {name: "Varus", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6220.jpg"},
    {name: "Vayne", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6221.jpg"},
    {name: "Xayah", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6232.jpg"},
    {name: "Zeri", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6241.jpg"},
    ]
// let adcs = ["Aphelios", "Ashe", "Caitlyn", "Draven", "Ezreal", "Jhin", "Jinx", "Kai'sa", "Kalista", "Kog'maw",
// "Lucian", "Miss Fortune", "Nilah", "Samira", "Sivir", "Tristana", "Twitch", "Varus", "Vayne", "Xayah", "Zeri"]
let sups = [
    {name: "Alistar", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/5996.jpg"},
    {name: "Bardo", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6004.jpg"},
    {name: "Blitzcrank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6006.jpg"},
    {name: "Brand", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6007.jpg"},
    {name: "Braum", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6008.jpg"},
    {name: "Janna", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6037.jpg"},
    {name: "Karma", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6046.jpg"},
    {name: "Leona", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6059.jpg"},
    {name: "Lulu", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6063.jpg"},
    {name: "Milio", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6069.jpg"},
    {name: "Morgana", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6072.jpg"},
    {name: "Nami", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6074.jpg"},
    {name: "Nautilus", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6076.jpg"},
    {name: "Pyke", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6087.jpg"},
    {name: "Rakan", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6090.jpg"},
    {name: "Rell", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6093.jpg"},
    {name: "Renata G", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6094.jpg"},
    {name: "Senna", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6102.jpg"},
    {name: "Seraphine", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6103.jpg"},
    {name: "Sona", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6202.jpg"},
    {name: "Soraka", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6203.jpg"},
    {name: "Taric", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6210.jpg"},
    {name: "Thresh", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6212.jpg"},
    {name: "Yuumi", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6238.jpg"},
    {name: "Zilean", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6243.jpg"},
    {name: "Zyra", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6258.jpg"},
    ]
    
// let sups = ["Alistar", "Bardo", "Blitzcrank", "Brand", "Braum", "Janna", "Karma", "Leona", "Lulu", "Lux",
// "Milio", "Morgana", "Nami", "Nautilus", "Pyke", "Rakan", "Rell", "Renata Glasc", "Senna", "Seraphine", "Sona",
// "Soraka", "Taric", "Thresh", "Yuumi", "Zilean", "Zyra"]

let topsMod = shuffle(tops)
let jgsMod = shuffle(jgs)
let midsMod = shuffle(mids)
let adcsMod = shuffle(adcs)
let supsMod = shuffle(sups)

const timeA = []
const timeB = [];

timeA.push(topsMod[0], jgsMod[0], midsMod[0], adcsMod[0], supsMod[0]); 
timeB.push(topsMod[1], jgsMod[1], midsMod[1], adcsMod[1], supsMod[1]); 

console.log(timeA);
console.log(timeB);

const unList = document.createElement("ul");  

timeA.forEach(t => {
    const lista = document.createElement("li");
    const paragrafo = document.createElement("p");
    const imagem = document.createElement("img");
    imagem.setAttribute("src", t.icon);
    imagem.setAttribute("alt", t.name);
    imagem.setAttribute("width", "100px");
    imagem.setAttribute("height", "100px");
    paragrafo.innerHTML = t.name;
    lista.appendChild(imagem);
    lista.appendChild(paragrafo);
    unList.appendChild(lista);
})

const team1 = document.querySelector('.team-1');
team1.appendChild(unList);

const unList2 = document.createElement("ul");  

timeB.forEach(t => {
    const lista = document.createElement("li");
    const paragrafo = document.createElement("p");
    const imagem = document.createElement("img");
    imagem.setAttribute("src", t.icon);
    imagem.setAttribute("alt", t.name);
    imagem.setAttribute("width", "100px");
    imagem.setAttribute("height", "100px");
    paragrafo.innerHTML = t.name;
    lista.appendChild(imagem);
    lista.appendChild(paragrafo);
    unList2.appendChild(lista);
})

const team2 = document.querySelector('.team-2');
team2.appendChild(unList2);






