//archivos
function subirArchivo(ruta) {
	var ft = new FileTransfer();

        ft.upload(path,
            "http://igitsoft.com/pgtest.php",
            function(result) {
				crearUsuario();
				iniciarDB();
                
            },
            function(error) {
                pgAlert('Error al subir imagen',error.code);
            },
            { filekey: 'archivo', fileName: 'cliente.jpg' }
			);   
    }