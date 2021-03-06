const $ = require('jquery')
const validator = require('validator')
const bases = require('./base')
const base = new bases()

const modals = require('./modals')
const modal = new modals()

module.exports = class Textos {

	load_subdocumentos() {
		let self = this
		$('select#idDocumento').change(function(){
			let val = $(this).val()
			self.construct_sub_documentos(val)
		})
	}

	async construct_sub_documentos(tipo){
		let response = await this.send_datos_subdocumentos(tipo,'SI')
		let option = '<option value="">Escoga una Opcion</option> '
		$.each(response,function(index,el){
			option += `<option value="${response[index].valor}">${response[index].nombre}</option>`
		})

		$('select#subDocumento').html(option)


	}

	send_datos_subdocumentos(tipo,audi){
		let promesa = new Promise(resolve =>{
			$.get({
				url: '/SIA/juridico/api/subDocumentos',
				data:{
					tipo,
					audi
				},
				success:function(res){
					resolve(JSON.parse(res))
				}
			})
		})
		return promesa
	}

	form_submit(){
		let self = this
		$('form#DoctosTextos').submit(function(e){
			e.preventDefault()
			let datos = $(this).serializeArray()
			var texto = CKEDITOR.instances['ckeditor'].getData()
			let res = self.form_valida(datos,texto)
			if(res){
				datos[2].value = texto
				base.new_insert(datos,'DoctosTextos')
			}
		})
	}

	form_valida(datos,texto){
		let res = false
		let documentos = base.campos_update_validation(datos,['documento','subDocumento'])
		let empty = base.valida_empty(documentos)
		let empty_text = base.valida_empty([{
			name:'texto',
			value:texto
		}])

		let tabla = base.construct_table_errors(empty)
		let tabla_texto = base.construct_table_errors(empty_text)
		
		if(empty.length > 0){
			modal.errors(tabla)				
		} 
		else if (empty_text.length > 0) {
			modal.errors(tabla_texto)
		}
		else {
			res = true
			
		}
		return res


	}

	form_update_submit(){
		let self = this
		$('form#DoctosTextos-update').submit(function(e){
			e.preventDefault()
			let datos = $(this).serializeArray()
			var texto = CKEDITOR.instances['ckeditor'].getData()
			let res = self.form_valida(datos,texto)
			if(res){
				datos[2].value = texto
				base.new_update(datos,'DoctosTextos')
			}
		})
	}
}