require("jquery-ui-browserify");
const $ = require('jquery')
const confirm = require('jquery-confirm')

module.exports = class {

	errors(html){
		$.confirm({
			title: 'Tu Registro NO pudo ser almacenado',
			content : html,
			icon:'fa fa-times-circle',
			type:'red',
			columnClass: 'col-md-5 col-md-offset-1',
			draggable:false,
			buttons:{
				confirm:{
					text:'Aceptar',
					btnClass:'btn-primary'
				}
			}
		})	
	}
}