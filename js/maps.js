///maps
let myMap;
const init = () => {
  myMap = new ymaps.Map("map__ya", {
    center: [55.03143602203169, 82.91512407412706],
    zoom: 18,
    controls: [],
  });

  let coords = [[55.03143602203169, 82.91512407412706]],
    myCollection = new ymaps.GeoObjectCollection(
      {},
      {
        draggable: false,
        iconLayout: "default#image",
        iconImageHref: "../img/icon/icons8-map-marker-64.png",
        iconImageSize: [60, 60],
        iconImageOffset: [-35, -52],
      }
    );

  for (let i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
  }

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable("scrollZoom");
};

ymaps.ready(init);
