 let myMap;
const init = () => {
 myMap = new ymaps.Map("map__ya", {
   center: [55.03143602203169,82.91512407412706],
   zoom: 18,   
 });
}

ymaps.ready(init);
