//archivos
function subirArchivo(ruta) {
	var ft = new FileTransfer();

        ft.upload(ruta,
            "http://igitsoft.com/pgtest.php",
            function(result) {
				crearUsuario();
				iniciarBD();
                
            },
            function(error) {
                pgAlert('Error al subir imagen',error.code);
            },
            { filekey: 'archivo', fileName: 'cliente.jpg' }
			);   
    }