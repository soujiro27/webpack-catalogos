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

	valida_letras(datos,max) {
		var resultados = new Array()
		$.each(datos, function(index, val) {
			 if(!validator.isAlpha(datos[index].value)){
			 	resultados.push({
			 		campo:datos[index].name,
			 		message:'EL campos solo puede contener Letras'
			 	})
			 } 

			 if(validator.isLength(datos[index].value,{min:1,max:max[index]})){
				 resultados.push({
			 		campo:datos[index].name,
			 		message:'EL campos solo puede contener Letras'
			 	})	
			 }
		});
		return resultados
	}
	
}