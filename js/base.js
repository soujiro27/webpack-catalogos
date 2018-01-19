require("expose-loader?$!jquery");
const validator = require('validator')
module.exports = class Base {

	cancel(){

		$('button#cancelar').click(function(e) {
			e.preventDefault()
			let ruta = $(this).data('ruta')
			location.href = `/SIA/juridico/${ruta}`
		})
	}

	costruct_list_errors(errors){
		let lista = '<ul>'
		$.each(errors,function(index,el){
			lista += `<li>Campo: ${errors[index].campo} Error: ${errors[index].message}</li>`
		})
		
		lista += '</ul>'
		
		return lista
	}


	valida_string_complete(datos,max){
		let resultados = new Array()
		
		resultados.push(this.valida_empty(datos))
		//resultados.push(this.valida_letras(datos))
		//resultados.push(this.valida_length(datos,max))
		return resultados
	}

	valida_letras(datos) {
		let resultados = new Array()
		$.each(datos, function(index, val) {
			 if(!validator.isAlpha(datos[index].value)){
			 	resultados.push({
			 		campo:datos[index].name,
			 		message:'El campo solo puede contener Letras'
			 	})
			 } 

			
		});
		return resultados
	}

	valida_length(datos){
		let resultados = new Array()
		$.each(datos,function(index,el){
			 if(!validator.isLength(datos[index].value,{min:1,max:max[index]})){
				 resultados.push({
			 		campo:datos[index].name,
			 		message:`El campo NO puede tener mas de ${max} caracteres`
			 	})	
			 }
		})
		return resultados
	}
	
	valida_empty(datos) {
		let resultados = new Array()
		$.each(datos,function(index,el){
			if(validator.isEmpty(datos[index].value)){
				 resultados.push({
			 		campo:datos[index].name,
			 		message:'El campos NO puede estar vacio'
			 	})	
			}
		})
		return resultados
	}

	valida_numeros(datos) {
		let resultados = new Array()
		$.each(datos,function(index,el){
			if(validator.isNumeric(datos[index].value)){
				resultados.push({
			 		campo:datos[index].name,
			 		message:'El campos solo puede contener numeros'
			 	})	
			}
		})
		return resultados
	}
}