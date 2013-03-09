//Almacenamiento
function crearUsuario(){
	window.localStorage.setItem("Usuario",$('#regNombre').val());
	window.localStorage.setItem("id",dispositivo()['id']);
}
function isLogin() {
	if(window.localStorage.getItem('usuario')!=undefined && window.localStorage.getItem('Id')!=undefined)
	return true
else
	return false;	
}

function accesoBD(){
	var db = window.openDatabase("hotel", "1.0", "Hotel DB", 2000000);
	return db;
}
function iniciarBD(){
accesoBD().transaction(function(tx) {
     tx.executeSql('CREATE TABLE IF NOT EXISTS reserva (rid unique, fecha, habitaciones, personas, dias, tipo)');
	  tx.executeSql('CREATE TABLE IF NOT EXISTS historial (hId unique, fecha, habitaciones, personas, dias)');
	}, function (err) {
    pgAlert('Error en la Base de Datos',err.code);
	}, function () {
    pgAlert('Registro Satisfactorio','Se ha registrado');
	window.location.href="#page";
	});
}
function getId(){
	var regreso=0;
	accesoBD().transaction(function(tx){
		tx.excuteSql('SELEC * FROM reserva',[], function(tx1,resultado){
			regreso = resultado.rows.length;
			//var registrosCount = resuldato.rows.length;
			
			//var registro1=resultado.rows.item(0).rId;
		}, function(err){
			alert(err.code);
		});
	}, function(){
	alert('ok')
	});rows
	return regreso+1;
}
function guardarReservaciones(id,habs,pers,dias,tipo){
	//Insertar registro en la tabla de reservas
	var f=new Date();
	var fecha = f.getDate()+'/'+f.getMonth()+'/'+f.getFullYear();
	accesoBD().transaction(function(tx) {
		tx.executeSql('INSERT INTO reservas (rid fecha, habitaciones, personas, dias, tipo) VALUES ('+id+',"'+fecha+'","'+habs+'","'+pers+'","'+dias+'","'+tipo+'")');
		
	}, function (err) {
    pgAlert('Error al guardar la Reservacion',err.code);
	}, function () {
    pgAlert('Reservacion Guardada','Esperando por la conexion a Internet');
	});
	
	
}