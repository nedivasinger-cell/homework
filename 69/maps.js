/* global google */

// const { Map } = await google.maps.importLibrary('maps');
//const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

const [{ Map, InfoWindow }, { AdvancedMarkerElement }] = await Promise.all([
  google.maps.importLibrary('maps'),
  google.maps.importLibrary('marker'),
]);

const bmgLoc = { lat: 40.09543950426593, lng: -74.2221793333354 };
const pcsLoc = { lat: 40.108884911823516, lng: -74.21764740599487 };

const map = new /*google.maps.*/Map(document.getElementById('map'), {
  center: bmgLoc,
  zoom: 18,
  renderingType: 'VECTOR',
  mapTypeId: 'satellite',
  mapId: 'DEMO_MAP_ID'
});


map.addListener('center_changed', () => {
  const center = map.getCenter();
  console.log('map center changed', center.lat(), center.lng());
});

const bmgMarker = new /*google.maps.*/AdvancedMarkerElement({
  map,
  position: bmgLoc,
  title: 'bmg'
});

const pcsMarker = new /*google.maps.*/AdvancedMarkerElement({
  map,
  position: pcsLoc,
  title: 'pcs'
});

// BEGIN - added after class to show custom marker image
const pcsImg = document.createElement('img');
pcsImg.className = 'map-icon';
pcsImg.src = new URL('http://127.0.0.1:5500/js/68/images/chulent.jpg');
pcsMarker.append(pcsImg);
// END - added after class to show custom marker image

const infoWindow = new InfoWindow(/*{
  content: `Beth Medrash Govoha (Hebrew: בית מדרש גבוה, pronounced: Beis Medrash Gavo'ha.lit: "High House of Learning"; also known as Lakewood Yeshiva or BMG) is a Haredi Jewish Litvishe yeshiva in Lakewood Township, New Jersey.It was founded by Rabbi Aharon Kotler in 1943 and is the second - largest yeshiva in the world, after Mir Yeshiva in Jerusalem.[2][3] As of 2024, it had 9, 657 students, [1] between bochurim(unmarried members) and married with Kollel status.[4] The principal Rosh yeshiva since 1982 is Rabbi Malkiel Kotler.Talmud and halakha studies in the institution are carried in the form of over 200 small groups, Chaburos, which consist of several students mentored by a veteran, each pursuing its own specific curriculum with an emphasis on individual learning.[5]`
}*/);


bmgMarker.addListener('click', () => {
  infoWindow.setContent(`Beth Medrash Govoha (Hebrew: בית מדרש גבוה, pronounced: Beis Medrash Gavo'ha.lit: "High House of Learning"; also known as Lakewood Yeshiva or BMG) is a Haredi Jewish Litvishe yeshiva in Lakewood Township, New Jersey.It was founded by Rabbi Aharon Kotler in 1943 and is the second - largest yeshiva in the world, after Mir Yeshiva in Jerusalem. As of 2024, it had 9, 657 students, between bochurim(unmarried members) and married with Kollel status.The principal Rosh yeshiva since 1982 is Rabbi Malkiel Kotler.Talmud and halakha studies in the institution are carried in the form of over 200 small groups, Chaburos, which consist of several students mentored by a veteran, each pursuing its own specific curriculum with an emphasis on individual learning. <a href="https://en.wikipedia.org/wiki/Beth_Medrash_Govoha" target="_blank">more info</a>`)
  infoWindow.open({
    anchor: bmgMarker
  });
});

pcsMarker.addListener('click', () => {
  infoWindow.setContent('Yay!!! PCS');
  infoWindow.open({
    anchor: pcsMarker
  });
});

const bounds = new google.maps.LatLngBounds();
bounds.extend(bmgLoc);
bounds.extend(pcsLoc);
map.fitBounds(bounds);
// END - added after class to zoom map to include all markers
const infoWindow = new infoWindow();
const searchInput = document.querySelector('#search');
document.querySelector('#searchForm').addEventListener('submit', e => { 
    e.preventDefault(); 


try{
    const r = await fetch('http://api.geonames.org/wikapediaSearchJSON?q=${searchInput.value}&maxRows=10&username=demo');
    if(!response.ok){
        throw new Error(`${response.status} - ${response.statusText}`);
    }
    const results = await response.json();
    console.log(results);
const bounds = new latLngBounds();
    const {geonames} = await response.json();
    console.log(geonames);
    geonames.forEach(place => {
        const marker = new AdvancedMarkerElement({
            map, 
            position: {lat: place.lat, lng: place.lng},
            title: place.title

        });

        marker.addListener('click', () => {
            infoWindow.setContent(`<div><h5>${place.title}</h5></div>${place.summary}<a href="${place.wikipediaUrl}" target="_blank">more info</a>`);
            infoWindow.open({
                anchor: marker
            });
        });
        const imag = document.createElement('img');
            img.scr = place.thumbnail;

        bounds.extend({lat: place.lat, lng: place.lng});
        
    });
map.fitBounds(bounds);

}catch(e){
    console.log('Error fetching search results:', e);
}
});
