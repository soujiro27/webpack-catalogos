const $ = require('jquery')
const validator = require('validator')
const bases = require('./base')
const base = new bases()

const modals = require('./modals')
const modal = new modals()

module.exports = class subDocumentos {

	form_submit(){
		$('form#SubTiposDocumentos').submit(function(e){
			e.preventDefault()
			let datos = $(this).serializeArray()
			let validacion = base.valida_string(datos,[20,50,2])
			let tabla = base.construct_table_errors(validacion)
			if(validacion.length > 0){
				modal.errors(tabla)				
			} else {
				base.new_insert(datos,'SubTiposDocumentos')
			}
			

		})
	}

	form_update(){
		$('form#SubTiposDocumentos-update').submit(function(e){
			e.preventDefault()
			let datos = $(this).serializeArray()
			let campos_validar = base.campos_update_validation(datos,['documento','nombre','auditoria','estatus'])
			let validacion = base.valida_string(campos_validar,[20,50,2,10])
			let tabla = base.construct_table_errors(validacion)
			if(validacion.length > 0){
				modal.errors(tabla)				
			} else {
				base.new_update(datos,'SubTiposDocumentos')
			}
		})
	}
}