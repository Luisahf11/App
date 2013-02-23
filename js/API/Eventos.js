//eventos
$(document).ready(function(e) {
	document.addEventListener("deviceready", function() {
		if(!isLogin())	
	window.location.href = "#login";
		$('#regSubmit').tap(function (){
			if($('#regNombre').val()!='' && $('#regLugar').val() !='' && $('#regEmail').val() !='' && $('#regTel').val()!=''){
			var nom=$('#regNombre').val();
			var lug=$('#regLugar').val();
			var ema=$('#regEmail').val();
			var tel=$('#regTel').val();
			
			pgAlert("Valores",nom+'\n'+lug+'\n'+ema+'\n'+tel);
			logSeng(nom,lug,ema,tel);
		}else{
			
			pgAlert("Error",'Todos los campos son requeridos');
		}
		 
	});
		
	}, false);
		
});

function isLogin() {
	return false;	
}