const axios = require('axios')
const {Episode} = require("../db")

const episodios = async ()=>{
    let aux = await axios.get('https://rickandmortyapi.com/api/episode')
    let epi = await aux.data.results.map(e =>{
        return{
            id: e.id,
            name: e.name
        }

    })
    
    console.log(epi)
    
    Episode.bulkCreate(epi)
    return epi
}

module.exports ={episodios}