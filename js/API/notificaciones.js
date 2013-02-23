// JavaScript Document
//Notificaciones
function pgAlert(tit,com){
	navigator.notification.alert(com, null, tit, "Confirmado");
	//otras notificaciones
	/*
	navigator.notification.confirm("Comentario", function(boton){
		switch(boton){
			case 1:
			case 2:
		}
	},"titulo","Si,No,Talvez");
	navigator,notification.beep(5);
	*/
	navigator,notification.vibrate(1000);
}