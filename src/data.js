// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
// Obtener data principal de Pokemon (Historia de usuario #01)
const getDataMainOfPokemon = (arr) => {
  let newArr = [];
  arr.forEach(function(element) {
    newArr.push({name: element.name, img: element.img, type: element.type, height: element.height, weight: element.weight, weaknesses: element.weaknesses});
  });
  return newArr;
};

const getTypes = () => {};
const uniqueTypes = () => {};
// const getTypes = (data) => {
//   let onlyType = [];
//   const getDataType = data.filter(obj => obj.type);
//   for ( let i = 0; i < getDataType.length; i++) {
//     if(condicional para no repetir)
//   }
//   onlyType.push(getDataType);
//   return onlyType;
// };


// const uniqueTypes = (data) => {
//   const acumType = data.reduce((acum, ele) => {
//     if (ele.type !== '' && acum.indexOf(ele.type) === -1) {
//       acum.push(ele.type);
//     }
//     return acum;
//   }, []);
//   return acumType;
// };

// const getTypes = (data) => {
//   let onlyType = [];
//   data.forEach(function(element) {
//     onlyType.push({type: element.type});
//   });
//   return onlyType;
// };

const filterForType = () => {};

window.pokemon = {
  getDataMainOfPokemon,
  getTypes,
  uniqueTypes,
  filterForType,
};
 
 
