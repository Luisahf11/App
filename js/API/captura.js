// captura
function capturaImg(){
	var ruta='';
	navigator.device.capture.captureImage(function(mediaFiles){
		//Imagen caturada
		pgAlert('Captura de Imagen','Foto tomada Satisfactoriamente');
		$('#regFoto').attr('rel',mediaFiles[0].fullPath).css('background-color','#0F0');
		$('#login div[data-role=content] #regSubmit').prepend('<img src="'+mediaFiles[0].fullPath+'" style="width:100%" />');
		},function(err){//error de captura
	pgAlert('Error de captura' + err.code);
	}, {limit:1});
	//Retorno
	//return ruta;
}