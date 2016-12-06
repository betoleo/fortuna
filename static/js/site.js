
        function saludar (){
            swal("Hola chaca...");
        }

        function getFortuneFromServer(){
            //realizando una peticion get asincrona con ajax asistida por jquery
            $.get("/getacookie","",function(cookie, status) {
                //contenido del callback
                console.log('> status: ' + status);
                //presentando el mensaje
                swal(cookie.paper);
            },"json");
        }