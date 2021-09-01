const express = require('express');

class ServidorModelo{
    constructor(){
        this.app = express();
        this.llamarRutas();
    }

    levantarServidor(){
        this.app.listen(process.env.PUERTO,function(){
            console.log("servidor encendido en el puerto "+process.env.PUERTO);
        });
    }

    llamarRutas(){
        this.app.get('/facturas/consultar', function (req, res) {
            res.send('Buenas Tardes Juan Pablo');
        });

        this.app.post('/facturas/nuevo', function (req, res) {
            res.send('Buenas Tardes Juan Pablo');
        });
           
        this.app.put('/facturas/cambiar', function (req, res) {
            res.send('Buenas Tardes Juan Pablo');
        });
          
        this.app.delete('/facturas/borrar', function (req, res) {
            res.send('Buenas Tardes Juan Pablo');
        }); 
    }
}

module.exports=ServidorModelo;