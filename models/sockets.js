const BandList  = require ('./band-list');

class Sockets {

    constructor( io ) {

        this.io = io;

        this.BandList = new BandList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log('cliente conectado');

            //emitir al cliente conectado a todas las bandas actuales
            socket.emit ('hola', this.bandList.getBands());
        
        });
    }


}


module.exports = Sockets;