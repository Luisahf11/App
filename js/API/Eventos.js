//eventos
$(document).ready(function(e) {
	//alert('Funciona');
	document.addEventListener("deviceready", function() {
		if(!isLogin())	
	window.location.href = "#login";
	//Funcionalidad de tomar foto
		$('#regFoto').click(function(){
			capturaImg();
		});
		//Funcionalidad de login
		$('#regSubmit').click(function(){
	/*if($('#regNombre').val()!='' && $('#regLugar').val()!='' && $('#regEmail').val()!='' && $('#regTel').val()!=''){ 
			var nom=$('#regNombre').val();
			var lug=$('#regLugar').val();
			var ema=$('#regEmail').val();
			var tel=$('#regTel').val();
			
			//pgAlert("Valores",nom+'\n'+lug+'\n'+ema+'\n'+tel);
			logSend(nom,lug,ema,tel);
		}else{
			
			pgAlert("Error",'Todos los campos son requeridos');
		}*/
		alert('Funciona2');
		 
	});
		
	}, false);
		
});

function isLogin() {
	return false;	
}