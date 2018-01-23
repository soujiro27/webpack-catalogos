const $ = require('jquery')
const validator = require('validator')
const bases = require('./base')
const base = new bases()

const modals = require('./modals')
const modal = new modals()

module.exports = class Caracteres {

	form_submit(){
		$('form#Caracteres').submit(function(e){
			e.preventDefault()
			let datos = $(this).serializeArray()
			let validacion = base.valida_string(datos,[2,10])
			let tabla = base.construct_table_errors(validacion)
			if(validacion.length > 0){
				modal.errors(tabla)				
			} else {
				base.new_insert(datos,'Caracteres')
			}
		})
	}

	form_update(){
		$('form#Caracteres-update').submit(function(e){
			e.preventDefault()
			let datos = $(this).serializeArray()
			let campos = base.campos_update_validation(datos,['nombre','siglas'])
			let validacion = base.valida_string(campos,[2,10])
			let tabla = base.construct_table_errors(validacion)
			if(validacion.length > 0){
				modal.errors(tabla)				
			} else {
				base.new_update(datos,'Caracteres')
			}
		})
	}
}