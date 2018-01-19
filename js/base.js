const $ = require('jquery')
const validator = require('validator')

module.exports = class Base {

	cancel(){

		$('button#cancelar').click(function(e) {
			e.preventDefault()
			let ruta = $(this).data('ruta')
			location.href = `/SIA/juridico/${ruta}`
		})
	}


	valida_string(datos,max){
		let resultados = new Array()
		$.each(datos, function(index, val) {
			 if(!validator.isAlpha(datos[index].value)){
			 	resultados.push({
			 		campo:datos[index].name,
			 		message:'El campo solo puede contener Letras'
			 	})
			 }

			if(!validator.isLength(datos[index].value,{min:1,max:max[index]})){
				 resultados.push({
			 		campo:datos[index].name,
			 		message:`El campo NO puede tener mas de ${max} caracteres`
			 	})	
			}

			if(validator.isEmpty(datos[index].value)){
				 resultados.push({
			 		campo:datos[index].name,
			 		message:'El campos NO puede estar vacio'
			 	})	
			}
			
		})
		
		return resultados
	}


	valida_number(datos) {
		let resultados = new Array()
		$.each(datos,function(index,el){
			if(validator.isNumeric(datos[index].value)){
				resultados.push({
			 		campo:datos[index].name,
			 		message:'El campos solo puede contener numeros'
			 	})	
			}

			if(validator.isEmpty(datos[index].value)){
				 resultados.push({
			 		campo:datos[index].name,
			 		message:'El campos NO puede estar vacio'
			 	})	
			}

		})
		return resultados
	}

	construct_table_errors(datos) {
		let ul = ''

		$.each(datos, function(index, val) {
			 ul += `<ul>
			 		<li><strong>Campo:</strong> ${datos[index].campo}</li>
			 		<li><strong>Error:</strong> ${datos[index].message}</li>
			 		</ul>`
		})	
		//ul += '</ul>'
		
		return ul
	}


	async new_insert(datos,ruta){
		let test = await this.send_data(datos,ruta)
		for(let x in test){
			for(let y in test[x]){
				console.log(test[x][y])
			}
		}	
	}

	send_data(datos,ruta) {
		let promesa = new Promise(resolve => {
			$.post({
				url:`/SIA/juridico/${ruta}/create`,
				data:datos,
				success:function(res) {
					resolve(JSON.parse(res))
				}
			})
		})

		return promesa
	}
}