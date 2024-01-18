

const Dati = {
    name: 'Dati',
    address: 'Tbilisi',
    year: 2005,
    calcAge: function(){
        return 2023 - this.year
    }
}

console.log(Dati.calcAge());