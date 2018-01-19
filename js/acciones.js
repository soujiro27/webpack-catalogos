const $ = require('jquery')
const validator = require('validator')
const bases = require('./base')
const base = new bases()

const modals = require('./modals')
const modal = new modals()

module.exports = class Acciones {

	validateForm(){
		
		$('form#Acciones').submit(function(e) {
			e.preventDefault()
			let datos = $(this).serializeArray()
			/*let validacion = base.valida_string(datos,[50])
			let tabla = base.construct_table_errors(validacion)
			if(validacion.length > 0){
				modal.errors(tabla)				
			} else {
				base.new_insert(datos,'Acciones')
			}*/
			base.new_insert(datos,'Acciones')
		})
	}
}