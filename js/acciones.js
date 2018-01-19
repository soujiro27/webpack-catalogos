require("expose-loader?$!jquery");
const validator = require('validator')

const bases = require('./base')
const base = new bases()

module.exports = class Acciones {

	validateForm(){
		
		$('form#Acciones').submit(function(e) {
			e.preventDefault()
			let datos = $(this).serializeArray()
			//let validacion = base.valida_letras(datos)
			let validacion = base.valida_length(datos,[3])
			console.log(validacion)

		})
	}
}