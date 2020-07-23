const makeDino = function (name, time, diet, extinct) {
  if (extinct === undefined) {
    return {
      species: name,
      period: time,
      carnivore: diet,
      extinct: false
    }
  } else {
    return {
      species: name,
      period: time,
      carnivore: diet,
      extinct: extinct
    }
  }
}



const makeSingular = function (obj) {
  let cloneObj = Object.assign({}, obj)
  let name = cloneObj.species
  if (name.slice(name.length - 2) === 'us') {
    cloneObj.species = name.slice(0, name.length - 2)
  }
  return cloneObj
}



const truncateSpecies = function (obj) {
  let cloneObj = Object.assign({}, obj)
  let name = cloneObj.species
  if (name.length > 7) {
    cloneObj.species = name.slice(0, 7) + '...'
  }
  return cloneObj
}



const makeExtinct = function (obj) {
  let cloneObj = Object.assign({}, obj)
  cloneObj.extinct = true
  return cloneObj
}



module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}