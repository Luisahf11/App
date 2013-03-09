// Conexion al servidor
function logSend(nombre,lugar,mail,tel){
	var disp=dispositivo();
	$.ajax({
	  type: "POST",
	  url: "http://www.igitsoft.com/pgtest.php",
	  data: "nom="+nombre+"&lug="+lugar+"&mai="+mail+"&tel="+tel+"&uuid="+dispositivo()['id']
}).done(function(msg) {
  if(msg=="0")
  	pgAlert('Error', 'Hubo un error al enviar datos');
	else{
		subirArchivo($('#regFoto').attr('ruta'));
		//pgAlert('Registrado', 'Se ha registrado satisfactoriamente');
		//Guardar Base de Datos local
	}
  
 
});
}