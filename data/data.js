
define([], function () {

	var exports = {};
	
	exports.names = ["Maradona", "Zidane", "Ruggeri", "Passarella", "Ronaldo", "Rivaldo","Cafú", "Kempes", "Burruchaga", "Bertoni", "Tostao", "Sócrates", "Beckenbauer", "Maldini", "Kluivert", "Pelé","Cantona","Baresi","Pirlo","Valderrama","Higuita"];

	exports.chatColors = ["#24FC2F", "#E09AFF", "#7BD6FF", "#FF2B7C", "#FF9543"]; 

	exports.consoleColor = "#FCF34B";

	//muy probablemente haya que pasarlo a un archivo de configuracion
	exports.constants = {
		"PLAYER_MINIMUM" : 2
	};

	exports.characters = [{
			name: "Gorch",
			image: "frodo",
			//aca tendria que ir su habilidad especial
		},
		{
			name: "Murch",
			image: "sam",
			//aca tendria que ir su habilidad especial
		},
		{
			name: "Tronch",
			image: "merry",
			//aca tendria que ir su habilidad especial
		},
		{
			name: "Litch",
			image: "pippin",
			//aca tendria que ir su habilidad especial
		},
		{
			name: "Furch",
			image: "fatty",
			//aca tendria que ir su habilidad especial
		}];
		
	exports.worldPositions=[{x:126, y:0},{x:116, y:-44},{x:60, y:0},{x:60, y:0},{x:60, y:0}];

	exports.storyTiles = ["Friendship","Friendship","Friendship","Travelling","Travelling","Travelling","Hiding","Hiding","Hiding","Fighting","Fighting","Fighting","Next Event","Next Event","Next Event","Next Event","Next Event","Next Event","Ring Influence","Ring Influence","Sauron Will","Out Of Options","Losing Ground"];

	exports.hobbitCards = [];

	for (var i=0; i<7; i++){
		exports.hobbitCards.push({symbol : "Fighting", color : "White", image:"fight_card_white", amount:1});
		exports.hobbitCards.push({symbol : "Friendship", color : "White", image:"friend_card_white", amount:1});
		exports.hobbitCards.push({symbol : "Hiding", color : "White", image:"hiding_card_white", amount:1});
		exports.hobbitCards.push({symbol : "Travelling", color : "White", image:"travel_card_white", amount:1});
	}
	for (var i=0; i<5; i++){
		exports.hobbitCards.push({symbol : "Fighting", color : "Gray", image:"fight_card_gray", amount:1});
		exports.hobbitCards.push({symbol : "Friendship", color : "Gray", image:"friend_card_gray", amount:1});
		exports.hobbitCards.push({symbol : "Hiding", color : "Gray", image:"hiding_card_gray", amount:1});
		exports.hobbitCards.push({symbol : "Travelling", color : "Gray", image:"travel_card_gray", amount:1});
	}
	for (var i=0; i<12; i++){
		exports.hobbitCards.push({symbol : "Joker", color : "None", image:"joker_card", amount:1});
	}

	exports.gandalfCards = [{name: "Previsión", description: "El jugador activo puede ver los 3 eventos del tope de la pila y reordenarlos como desee."}, {name: "Guía", description: "El jugador activo puede mover dos espacios en la pista que desee."}, {name: "Sanación", description:"El jugador activo puede mover a su aventurero dos espacios hacia atrás en la Línea de Corrupción."}, {name: "Magia", description: "El jugador activo puede evitar la ejecución del próximo evento."}, {name: "Persistencia", description: "El jugador activo puede sacar 4 cartas del mazo."}];

	return exports;
});