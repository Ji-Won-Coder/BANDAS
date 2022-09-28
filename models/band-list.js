const Band = require('./band');

class BandList {
    constructor(){ //arreglo de bandas

        this.bands = [
            new Band('GATO'),
            new Band('OTAG'),
            new Band('TAGO'),
            new Band('TOGA'),
        ];

    }

    addBand (name){ // añado bandas

        const newBand = new Band (name);
        this.bands.push(newBand);
        return this.bands;

    }
    removeBand (id){ // remuevo las bandas
        this.bands = this.bands.filter(band => band.id !== id);
    }

    getBands(){ //obtengo las bandas 
       return this.bands;
    }

    increaseVotes(id){ // incremento los votos
        this.bands = this.bands.map(band => {

            if (band.id == id){
                band.votes +=1;
            }
            return band;
        })
    }

    changeName(id, newName){ // incremento el nombre
        this.bands =this.bands.map(band => {

            if (band.id === id){
                band.name = newName;
            }
            return newBand;
        })
    }


}
module.exports = BandList;