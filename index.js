const bases = require('./js/base')
const acciones = require('./js/acciones')
const textos = require('./js/textos')
const subTipos = require('./js/subDocumentos')
const caracteres = require('./js/caracteres')

const base = new bases()
const accion = new acciones()
const texto = new textos()
const subTipo = new subTipos()
const caracter = new caracteres()

base.cancel()
base.load_update_form()

accion.validateForm()
accion.update()

texto.load_subdocumentos()
texto.form_submit()
texto.form_update_submit()

subTipo.form_submit()
subTipo.form_update()


caracter.form_submit()
caracter.form_update()