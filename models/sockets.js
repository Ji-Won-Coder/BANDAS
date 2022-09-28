const BandList  = require ('./band-list');

class Sockets {

    constructor( io ) {

        this.io = io;

        this.bandList = new BandList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log('cliente conectado');

            //emitir al cliente conectado a todas las bandas actuales
            socket.emit ('hola', this.bandList.getBands());


            //votar por la banda
            socket.on ('votar-banda',(id) =>{
                this.bandList.increaseVotes(id);
                this.io.emit('hola',this.bandList.getBands() );
            });

            //borrar banda
            socket.on ('borrar-banda',(id) =>{
                this.bandList.removeBand(id);
                this.io.emit('hola',this.bandList.getBands() );
            });
            
            //cambiar nombre de banda
            socket.on ('cambiar-nombre-banda',({id , nombre}) =>{
                this.bandList.changeName(id,nombre);
                this.io.emit('hola', this.bandList.getBands() );
            });

            //crear nueva banda
            socket.on( 'crear-banda', ({ nombre }) => {
                this.bandList.addBand( nombre );
                this.io.emit( 'hola' , this.bandList.getBands() );
            });
           
        
        });
    }


}


module.exports = Sockets;