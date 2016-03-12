//console.log('Hello everyone!');
var Year = function (year){

	function isLeap(){
		var resultado = false;

		if (year % 4 == 0){
			Resultado = true
		}
		elseif (year % 100 == 0 &&  year % 400 == 0){
			Resultado = true
		}

		return resultado ;
	}
}

// Forma de uso
var year = new Year(2016);
year.isLeap(); // Debe retornar verdadero.
