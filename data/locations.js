define(['../classes/Activity'], function (Activity) {
	
	var exports = {}; //Lo que retorna el módulo

	/////////////////////////////////////////////////////// Bag End //////////////////////////////////////////////////////////////////////////////

	exports.BagEnd = {
		"name" : "Bag End",
		"image" : null,
		"tracks" : null,
		"events" : null,
		"isConflict" : false,
		"activities" : [],
		"featureCards" : [],
		"validTracks" : []
	};

	//Actividad principal que contiene a las demás
	
	exports.BagEnd.activities.push({
		name: 'Bag End',
		draw : null,
		subactivities : [ {'action' : "Gandalf"}, {'action': "Preparations"}, {'action': "Nazgul Appears"} ]
	});

	

	/////////////////////////////////////////////////////// Rivendell //////////////////////////////////////////////////////////////////////////////
	exports.Rivendell = {
		"name" : "Rivendell",
		"image" : null,
		"tracks" : null,
		"events" : null,
		"isConflict" : false,
		"validTracks" : [],
		"activities" : [],
		"featureCards" : []
	};

	//Actividad principal que contiene a las demás
	exports.Rivendell.activities.push({
		name: 'Rivendell',
		draw : null,
		subactivities : [ {'action' : "Elrond"}, {'action' : "Council"}, {'action': "Fellowship", 'player' : 'first'}]
		});

	//Cargar las feature cards
	exports.Rivendell.featureCards.push({symbol : "Hiding", color : "White", amount : 2, image:"hiding_card_white_2"});
	exports.Rivendell.featureCards.push({symbol : "Friendship", color : "White", amount : 2, image:"friend_card_white_2"});
	exports.Rivendell.featureCards.push({symbol : "Hiding", color : "Gray", amount : 2, image:"friend_card_white_2"})
	exports.Rivendell.featureCards.push({symbol : "Joker", color : "None", amount : 2, image:"joker_card_2"});
	exports.Rivendell.featureCards.push({symbol : "Fighting", color : "Gray", amount : 2, image:"fight_card_gray_2"});
	exports.Rivendell.featureCards.push({symbol : "Fighting", color : "Gray", amount : 2, image:"fight_card_gray_2"});
	exports.Rivendell.featureCards.push({symbol : "Travelling", color : "Gray", amount : 2, image:"travel_card_gray_2"});
	exports.Rivendell.featureCards.push({symbol : "Travelling", color : "White", amount : 2, image:"travel_card_gray_2"});
	exports.Rivendell.featureCards.push({symbol : "Joker", color : "None", amount : 2, image:"joker_card_2"});
	exports.Rivendell.featureCards.push({symbol : "Joker", color : "White", amount : 3, image:"gollum_card"});
	exports.Rivendell.featureCards.push({name:'Miruvor', symbol : "None", color : "Yellow", amount : 1, image:"no_card"});
	exports.Rivendell.featureCards.push({name: 'Staff',symbol : "None", color : "Yellow", amount : 1, image:"no_card"});


	/////////////////////////////////////////////////////// Moria //////////////////////////////////////////////////////////////////////////////
	exports.Moria = {

		"name" : "Moria",
		"image" : "MoriaBoard",
		"tracks" : {
			"Fighting" : {
				position : 0,
				startX : 230,
				startY : 160,
				isMain : true,
				spaces :  [{x: 40, y:-15, reward : "shield"}, {x: 45, y:12, reward : "shield"}, {x: 45, y:12, reward : "ring"}, {x: 45, y:12, reward : "shield"}, {x: 45, y:15, reward : "shield"}, {x: 45, y:-5, reward : "ring"}, {x: 42, y:-10, reward : "die"}, {x: 30, y:-40, reward : "shield"}, {x: 20, y:-35, reward : "die"}, {x: 10, y:-45, reward : "big-shield"} ]
			},
			"Hiding" : {
				position : 0,
				startX : 145,
				startY : 255,
				isMain : false,
				spaces :  [{reward : "Card"}, {reward : "ring"}, {reward : "life"}, {reward : "ring"}, {reward : "life"},{reward : "ring"}, {reward : "life"} ]
			},
			"Travelling" : {
				position : 0,
				startX : 470,
				startY : 255,
				isMain : false,
				spaces : [{reward : "shield"}, {reward : "shield"},{reward : "sun"},{reward : "shield"},{reward : "sun"},{reward : "shield"},{reward : "sun"}]
			},
			"Friendship" : null
		},
		"validTracks" : [{name : "Fighting", text: "Luchar"},{name: "Travelling", text:"Viajar"},{name: "Hiding", text:"Esconderse"}],
		"events" : [{'name' : "SpeakFriend"}, {'name' : "WaterWatcher"},{'name' : "WellStone"},{'name' : "Trapped"},{'name' : "OrcsAttack"},{'name' : "FlyFools"}],
		"isConflict" : true,
		"activities" : [],
		"featureCards" : []
	};

	exports.Lothlorien = {
		"name" : "Lothlorien",
		"image" : null,
		"tracks" : null,
		"events" : null,
		"isConflict" : false,
		"validTracks" : [],
		"activities" : [],
		"featureCards" : []
	};

	//Actividad principal que contiene a las demás
	exports.Lothlorien.activities.push({
		name: 'Lothlorien',
		draw : null,
		subactivities : [ {'action' : "Galardiel"}, {'action' : "Recovery", 'player': 'RingBearer'}, {'action': "GalardielTest", 'player': 'RingBearer'}]
		});

	//Cargar las feature cards
	exports.Lothlorien.featureCards.push({symbol : "Joker", color : "Gray", amount : 2, image:"joker_card_2_gray"});
	exports.Lothlorien.featureCards.push({symbol : "Joker", color : "Gray", amount : 2, image:"joker_card_2_gray"});
	exports.Lothlorien.featureCards.push({symbol : "Joker", color : "Gray", amount : 1, image:"joker_card_gray"});
	exports.Lothlorien.featureCards.push({symbol : "Hiding", color : "Gray", amount : 2, image:"joker_card_gray_2"});
	exports.Lothlorien.featureCards.push({symbol : "Friendship", color : "Gray", amount : 1, image:"friend_card_gray"});
	exports.Lothlorien.featureCards.push({symbol : "Travelling", color : "Gray", amount : 2, image:"travel_card_gray_2"});
	exports.Lothlorien.featureCards.push({symbol : "Travelling", color : "Gray", amount : 1, image:"travel_card_gray"});
	exports.Lothlorien.featureCards.push({symbol : "Fighting", color : "Gray", amount : 1, image:"fight_card_gray"});

	exports.Helm = {

		"name" : "Helms Deep",
		"image" : "HelmsDeepBoard",
		"tracks" : {
			"Fighting" : {
				position : 0,
				startX : 166,
				startY : 32,
				isMain : true,
				spaces :  [{x: 30, y:20, reward : "shield"}, {x: 35, y:22, reward : "shield"}, {x: 40, y:20, reward : "ring"}, {x: 40, y:15, reward : "shield"}, {x: 38, y:15, reward : "shield"}, {x: 45, y:15, reward : "ring"}, {x: 40, y:5, reward : "shield"}, {x: 40, y:5, reward : "shield"}, {x: 40, y:5, reward : "shield"}, {x: 40, y:0, reward : "big-shield"} ]
			},
			"Friendship" : {
				position : 0,
				startX : 110,
				startY : 255,
				isMain : false,
				spaces :  [{reward : "Card", name:"Theoden"}, {reward : "Card", name:"Shadowfax"}, {reward : "ring"}, {reward : "Card", name:"Eomer"}, {reward : "ring"},{reward : "Card", name:"RohanRiders"}, {reward : "ring"} ]
			},
			"Travelling" : {
				position : 0,
				startX : 379,
				startY : 255,
				isMain : false,
				spaces : [{reward : "shield"}, {reward : "life"},{reward : "life"},{reward : "life"},{reward : "shield"},{reward : "sun"},{reward : "shield"},{reward : "sun"},{reward : "shield"},{reward : "sun"}]
			},
			"Hiding" : null
		},
		"validTracks" : [{name : "Fighting", text: "Luchar"},{name: "Travelling", text:"Viajar"},{name: "Friendship", text:"Amistad"}],
		"events" : [{'name' : "Wormtongue"},{'name' : "RohanMen"},{'name' : "OrcsGate"},{'name' : "OrthancFire"},{'name' : "StormForward"},{'name' : "OrcsConquer"}],
		"isConflict" : true,
		"activities" : [],
		"featureCards" : []
	};

	exports.Helm.featureCards.push({name: 'Theoden',symbol : "Friendship", color : "White", amount : 2, image:"friend_card_white_2"});
	exports.Helm.featureCards.push({name: 'Shadowfax',symbol : "Travelling", color : "White", amount : 2, image:"travel_card_white_2"});
	exports.Helm.featureCards.push({name: 'Eomer',symbol : "Fighting", color : "Gray", amount : 2, image:"fight_card_gray_2"});
	exports.Helm.featureCards.push({name: 'RohanRiders',symbol : "Joker", color : "White", amount : 2, image:"joker_card_3_white"});


	return exports;

});