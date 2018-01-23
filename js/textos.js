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
		$('form#DoctosTextos').submit(function(e){
			e.preventDefault()
			let datos = $(this).serializeArray()
			console.log(datos)
			var contenido = CKEDITOR.instances['ckeditor'].getData();
			console.log(contenido)
			let campos_string = base.campos_update_validation(datos,['documento'])
			let valida = base.valida_string(campos_string,[50])
			console.log(valida)
		})
	}
}