export let state;

export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case ("ADD_PET"):
      if(action.pet.name && action.pet.species && action.pet.id) {
        let stateCopy = Object.assign({}, state);
        stateCopy.pets.push(action.pet);
        return stateCopy;
      }
    case ("REMOVE_PET"):
      if(action.id){
        let stateCopy = Object.assign({}, state);
        stateCopy.pets = stateCopy.pets.filter(e => e.id != action.id);
        return stateCopy;
      }
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  let container = document.getElementById('container');
  state.pets.forEach( e => container.innerHTML = `<ul><li>${e.name}</li></ul>`);
}
