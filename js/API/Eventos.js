//eventos
$(document).ready(function(e) {
	if(!isLogin ())	
	window.location.href = "#login";
	
	//Funcionalidad Login
	$('#regSubmit').click(function (){
		/*if($('#regNombre').val()!='' && $('#regLugar').val()!='' && $('#regEmail').val()!='' && $('#regTel').val()!=''){
			var nom=$('#regNombre').val();
			var lug=$('#regLugar').val();
			var ema=$('#regEmail').val();
			var tel=$('#regTel').val();
			
			alert(nom+'\n'+lug+'\n'+ema+'\n'+tel);
		}else{
			
			alert('Todos los campos son requeridos');
		}*/
		alert('hola'); 
	});
	
	
});

function isLogin() {
	return true;	
}