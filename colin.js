
const makeDino = function (newName, newTime, newDiet, newExtinct = false) {
    // in real life must check type of input
    // if (typeof newExtinct !== 'boolean' && newDiet !== 'boolean' )  {
    //   throw Error(`canrnivore and extinct must be a 'boolean'`) 
    // } else if (typeof newName !== 'string' && typeof newTime !== 'string') {
    //   throw Error(`speices and period must be string`)
    // }
    return {
        species: newName,
        period: newTime,
        carnivore: newDiet,
        extinct: newExtinct
      }
  }
  
  
  
  const makeSingular = function (obj) {
    if(obj.species.endsWith('us')) {
      return makeDino(obj.species.slice(0,-2), obj.period, obj.carnivore, obj.extinct)
    } else {
      return obj
    }
  }
  
  
  const truncateSpecies = function (obj) {
    const newDino = makeDino(obj.species, obj.period, obj.carnivore, obj.extinct)
    if(newDino.species.length >= 10) {
      newDino.species = newDino.species.slice(0,7) + '...'
    }
    return newDino
  }
  
  
  
  
  const makeExtinct = function (obj) {
    return makeDino(obj.species, obj.period, obj.carnivore, true)
  }
  
  
  
  module.exports = {
    makeDino,
    makeSingular,
    truncateSpecies,
    makeExtinct
  }