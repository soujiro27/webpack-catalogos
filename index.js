const bases = require('./js/base')
const acciones = require('./js/acciones')
const textos = require('./js/textos')

const base = new bases()
const accion = new acciones()
const texto = new textos()

base.cancel()
base.load_update_form()

accion.validateForm()
accion.update()

texto.load_subdocumentos()
texto.form_submit()
