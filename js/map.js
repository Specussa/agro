
// map
// start search map
const mapсmapcity = document.querySelectorAll('.map__container .map__city');
const mapscroll = document.querySelectorAll('.map__city .scroll-content');
const maphead = document.querySelectorAll('.map__search_city .map__search_head');
const mapinfo = document.querySelectorAll('.map__search_city .map__search_info');
const mapmargin = document.querySelectorAll('.map__city .map__search_city');
const mapback = document.querySelector('.map__search_back');
const mapselect = document.querySelector('.map__search_select');
function filterFunction() {
  var mapinput, filter, i;
  mapinput = document.getElementById("map__input");
  filter = mapinput.value.toUpperCase();
  mapsearch = document.getElementById("map__search");
  searchp = mapsearch.getElementsByTagName("p");
  for (i = 0; i < searchp.length; i++) {
    txtValue = searchp[i].textContent || searchp[i].innerText;
    maphead.forEach(n => n.classList.remove('active'));
    maphead.forEach(n => n.classList.remove('close'));
    mapinfo.forEach(n => n.classList.remove('active'));
    mapinfo.forEach(n => n.style.maxHeight = null);
    mapscroll.forEach(n => n.classList.remove('active'));
    mapсmapcity.forEach(n => n.classList.remove('active'));
    mapcity.onmouseover = function(e) {scroll.stop();};
    mapcity.style.overflow = "hidden";
    mapmargin.forEach(n => n.style.margin = null);
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      searchp[i].style.display = "";
    } else {
      searchp[i].style.display = "none";
    }
  }
}
// end search map

// start map mobile
if(oldWidth <= 800){
  if(mapcity){
    if (!mapcity.classList.contains("active")) {
      mapcity.classList.add('active');
      mapcity.style.overflow = "visible";
      maphead.forEach(n => n.classList.add('close'));
      mapmargin.forEach(n => n.style.margin = '0');
      document.querySelector('.map__city').classList.add('active');
      mapscroll.forEach(n => n.classList.add('active'));
      mapselect.classList.add('active');
      mapcity.addEventListener("touchstart", function (e) {scroll.start()});
      mapcity.addEventListener("touchmove", function (e) {scroll.start()});
      mapcity.addEventListener("touched", function (e) {scroll.start()});
    }
  }
}
if(mapcity){
  mapselect.addEventListener('click', (event) => {
    mapcity.classList.remove('active');
    mapcity.style.overflow = "hidden";
    maphead.forEach(n => n.classList.remove('close'));
    mapmargin.forEach(n => n.style.margin = null);
    document.querySelector('.map__city').classList.remove('active');
    mapscroll.forEach(n => n.classList.remove('active'));
    mapselect.classList.remove('active');
    mapcity.onmouseover = function(e) {scroll.stop();};
    mapcity.addEventListener("touchstart", function (e) {scroll.stop()});
    mapcity.addEventListener("touchmove", function (e) {scroll.stop()});
    mapcity.addEventListener("touched", function (e) {scroll.stop()});
    myMap.setCenter([55.253215,37.622504],5);
    delmappoint();
  });
}
// end map mobile

// start del active points
function delmappoint() {
  document.querySelector('#mapmoscow').classList.remove("map__point_active");
  document.querySelector('#mappeterburg').classList.remove("map__point_active");
  document.querySelector('#mapvoronezh').classList.remove("map__point_active");
  document.querySelector('#mapkursk').classList.remove("map__point_active");
  document.querySelector('#maplipetsk').classList.remove("map__point_active");
  document.querySelector('#maporel').classList.remove("map__point_active");
  document.querySelector('#mappavlovsck').classList.remove("map__point_active");
  document.querySelector('#mappenza').classList.remove("map__point_active");
  document.querySelector('#mappskov').classList.remove("map__point_active");
  document.querySelector('#mapryazan').classList.remove("map__point_active");
  document.querySelector('#maptambov').classList.remove("map__point_active");
  document.querySelector('#mapyaroslavl').classList.remove("map__point_active");
}
// end

// start search back
if(mapback){
  mapback.addEventListener('click', (event) => {
    mapback.classList.add('close');
    maphead.forEach(n => n.classList.remove('active'));
    maphead.forEach(n => n.classList.remove('close'));
    mapinfo.forEach(n => n.classList.remove('active'));
    mapinfo.forEach(n => n.style.maxHeight = null);
    mapmargin.forEach(n => n.style.margin = null);
    mapcity.style.overflow = "hidden";
    mapscroll.forEach(n => n.classList.remove('active'));
    mapсmapcity.forEach(n => n.classList.remove('active'));
    mapcity.onmouseover = function(e) {scroll.stop();};
    myMap.setCenter([55.253215,37.622504],5);
    delmappoint();
  });
}
// end search back

// start map accordion href
function moscow() {
  if (maphead[0].classList.contains("active")) {
    myMap.setCenter([55.88088924541,37.423524915344],12);
    document.querySelector('#mapmoscow').classList.add("map__point_active");
  } else {
    myMap.setCenter([55.253215,37.622504],5);
    delmappoint();
  };
}
function peterburg() {
  if (maphead[1].classList.contains("active")) {
    myMap.setCenter([59.618243,30.172631],12);
    document.querySelector('#mappeterburg').classList.add("map__point_active");
  } else {
    myMap.setCenter([55.253215,37.622504],5);
    delmappoint();
  };
}
function voronezh() {
  if (maphead[2].classList.contains("active")) {
    myMap.setCenter([51.639685,39.324973],12);
    document.querySelector('#mapvoronezh').classList.add("map__point_active");
  } else {
    myMap.setCenter([55.253215,37.622504],5);
    delmappoint();
  };
}
function kursk() {
  if (maphead[3].classList.contains("active")) {
    myMap.setCenter([51.627834,36.117242],12);
    document.querySelector('#mapkursk').classList.add("map__point_active");
  } else {
    myMap.setCenter([55.253215,37.622504],5);
    delmappoint();
  };
}
function lipetsk() {
  if (maphead[4].classList.contains("active")) {
    myMap.setCenter([52.597220203418,39.458276316873],12);
    document.querySelector('#maplipetsk').classList.add("map__point_active");
  } else {
    myMap.setCenter([55.253215,37.622504],5);
    delmappoint();
  };
}
function orel() {
  if (maphead[5].classList.contains("active")) {
    myMap.setCenter([52.923587,36.078570],12);
    document.querySelector('#maporel').classList.add("map__point_active");
  } else {
    myMap.setCenter([55.253215,37.622504],5);
    delmappoint();
  };
}
function pavlovsck() {
  if (maphead[6].classList.contains("active")) {
    myMap.setCenter([50.452752,40.148549],12);
    document.querySelector('#mappavlovsck').classList.add("map__point_active");
  } else {
    myMap.setCenter([55.253215,37.622504],5);
    delmappoint();
  };
}
function penza() {
  if (maphead[7].classList.contains("active")) {
    myMap.setCenter([53.270195255583,45.024497906746],12);
    document.querySelector('#mappenza').classList.add("map__point_active");
  } else {
    myMap.setCenter([55.253215,37.622504],5);
    delmappoint();
  };
}
function pskov() {
  if (maphead[8].classList.contains("active")) {
    myMap.setCenter([56.9816779,29.9243012],12);
    document.querySelector('#mappskov').classList.add("map__point_active");
  } else {
    myMap.setCenter([55.253215,37.622504],5);
    delmappoint();
  };
}
function ryazan() {
  if (maphead[9].classList.contains("active")) {
    myMap.setCenter([54.647213,39.638701],12);
    document.querySelector('#mapryazan').classList.add("map__point_active");
  } else {
    myMap.setCenter([55.253215,37.622504],5);
    delmappoint();
  };
}
function tambov() {
  if (maphead[10].classList.contains("active")) {
    myMap.setCenter([52.650429,41.407760],12);
    document.querySelector('#maptambov').classList.add("map__point_active");
  } else {
    myMap.setCenter([55.253215,37.622504],5);
    delmappoint();
  };
}
// end map accordion href

// start map accordion
var mapsh = document.getElementsByClassName("map__search_head");
for (i = 0; i < mapsh.length; i++) {
  mapsh[i].onclick = function(e) {
    var accordion = this.nextElementSibling;
    var courseAccordion = document.getElementsByClassName("map__search_info");
    var courseAccordionButton = document.getElementsByClassName("map__search_head");
    var courseAccordionActive = document.getElementsByClassName("map__search_head active");

    if (mapcity.classList.contains("active")) {
      accordion.style.maxHeight = null;
      mapmargin.forEach(n => n.style.margin = null);
      mapback.classList.add('close');
      this.classList.remove("active");
      accordion.classList.remove("active");
      mapcity.style.overflow = "hidden";
      mapscroll.forEach(n => n.classList.remove('active'));
      mapсmapcity.forEach(n => n.classList.remove('active'));
      mapcity.onmouseover = function(e) {scroll.stop();};
      mapcity.addEventListener("touchstart", function (e) {scroll.stop()});
      mapcity.addEventListener("touchmove", function (e) {scroll.stop()});
      mapcity.addEventListener("touched", function (e) {scroll.stop()});
      for (var b = 0; b < courseAccordionButton.length; b++) {
        courseAccordionButton[b].classList.remove("close");
      }
    } else {
      for (var q = 0; q < courseAccordionActive.length; q++) {
        courseAccordionActive[q].classList.remove("active");
        courseAccordion[q].classList.remove("active");
      }
      for (var b = 0; b < courseAccordionButton.length; b++) {
        courseAccordionButton[b].classList.add("close");
      }
      for (var p = 0; p < courseAccordion.length; p++) {
        this.classList.remove("active");
        courseAccordion[p].classList.remove("active");
        courseAccordion[p].style.maxHeight = null;
      }
      accordion.style.maxHeight = (accordion.scrollHeight * 2) + "px";
      accordion.classList.add("active");
      this.classList.add("active");
      accordion.classList.remove("close");
      this.classList.remove("close");
      mapmargin.forEach(n => n.style.margin = 0);
      mapback.classList.remove('close');
      mapcity.style.overflow = "visible";
      mapscroll.forEach(n => n.classList.add('active'));
      mapсmapcity.forEach(n => n.classList.add('active'));
      mapcity.onmouseover = function(e) {scroll.start();};
      mapcity.addEventListener("touchstart", function (e) {scroll.start()});
      mapcity.addEventListener("touchmove", function (e) {scroll.start()});
      mapcity.addEventListener("touched", function (e) {scroll.start()});
    }
  };
}
// end accordion

// start yandex map
const map = document.querySelectorAll('.map');
const maps = document.querySelector('.map');
if(maps) {
  var myMap,ymaps;
  function init() {
    myMap = document.getElementById("map");
    if (!myMap) return;
    myMap = new ymaps.Map(myMap, {
      center: [55.253215, 37.622504],
      zoom: 5, 
      controls: []
      },{
      zoomControlPosition: { right: 0, top: 0 },
      zoomControlSize: 'auto'
    });

    if(oldWidth <= 1200){
        myMap.behaviors.disable('drag');
    }

    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');

    zoomInBtn.addEventListener('click', zoomIn);
    zoomOutBtn.addEventListener('click', zoomOut);

    function zoomIn() {
      const currentZoom = myMap.getZoom();
      myMap.setZoom(currentZoom + 1);
    }
  
    function zoomOut() {
      const currentZoom = myMap.getZoom();
      myMap.setZoom(currentZoom - 1);
    }

    var data = {
      'points': [{
        "infoPoint": '<div id="mapmoscow" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">ул. Бабакина, д. 5-А, оф. 707</div>\
          </div>\
        </div>',
        "latitude": 55.88088924541,
        "longitude": 37.423524915344,
        },
        {
        "infoPoint": '<div id="mappeterburg" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">ул. Кутышева, д. 5, стр. 5</div>\
          </div>\
        </div>',
        "latitude": 59.618243,
        "longitude": 30.172631,
        },
        {
        "infoPoint": '<div id="mapvoronezh" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">ул. Автодорожная, д. 7</div>\
          </div>\
        </div>',
        "latitude": 51.639685,
        "longitude": 39.324973,
        },
        {
        "infoPoint": '<div id="mapkursk" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">Промышленный пер., 4а</div>\
          </div>\
        </div>',
        "latitude": 51.627834,
        "longitude": 36.117242,
        },
        {
        "infoPoint": '<div id="maplipetsk" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">ул. Ангарская, д. 26Д</div>\
          </div>\
        </div>',
        "latitude": 52.597220203418,
        "longitude": 39.458276316873,
        },
        {
        "infoPoint": '<div id="maporel" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">ул. Итальянская, д. 1 Г</div>\
          </div>\
        </div>',
        "latitude": 52.923587,
        "longitude": 36.078570,
        },
        {
        "infoPoint": '<div id="mappavlovsck" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">ул. Транспортная, д. 2</div>\
          </div>\
        </div>',
        "latitude": 50.452752,
        "longitude": 40.148549,
        },
        {
        "infoPoint": '<div id="mappenza" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">ул. Ухтинка, д. 1Б</div>\
          </div>\
        </div>',
        "latitude": 53.270195255583,
        "longitude": 45.024497906746,
        },
        {
        "infoPoint": '<div id="mappskov" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">ул. Философовой, д. 13</div>\
          </div>\
        </div>',
        "latitude": 56.9816779,
        "longitude": 29.9243012,
        },
        {
        "infoPoint": '<div id="mapryazan" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">184 км (Окружная дор.), стр. 8</div>\
          </div>\
        </div>',
        "latitude": 54.647213,
        "longitude": 39.638701,
        },
        {
        "infoPoint": '<div id="maptambov" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">Промышленная зона, стр. 1</div>\
          </div>\
        </div>',
        "latitude": 52.650429,
        "longitude": 41.407760,
        },
      ],
    };

    var mapCoordinates = new ymaps.GeoObjectCollection();

    var results = [];
    data.points.forEach(function(item, index){
      results.push(createPlacemark(item));
    });
    myMap.geoObjects.add(mapCoordinates);
    myMap.behaviors.disable('scrollZoom');

  // Создать метку
    function createPlacemark(item) {
      var options = Object();
      var squareLayout = ymaps.templateLayoutFactory.createClass(item.infoPoint);
      var place = new ymaps.Placemark([item.latitude, item.longitude],{hintContent: false}, {
        iconLayout: squareLayout,
        iconShape: {   
          type: 'Rectangle',
          coordinates: [
            [-12, -20], [30, 30]
          ]
        }
      });
      mapCoordinates.add(place);
    }
    var thatCoordinates;
    mapCoordinates.events.add('click', function (e) {
      var that = e.get('target').properties.get('active');
      mapCoordinates.each(function(item, index){
        item.properties.set('active', false);
        if(e.get('target') == item && !that){
          e.get('target').properties.set('active', true);
          thatCoordinates = e.get('coords');
        }
      });
      var idmap = document.querySelectorAll('.map__search_city');
      var thismapinfo = document.querySelector('.map__search_info');
      var mapmoscow = document.getElementById('mapmoscow');
      const maphead = document.querySelectorAll('.map__search_city .map__search_head');
      const mapinfo = document.querySelectorAll('.map__search_city .map__search_info');

      // start map__point function
      function mappoint() {
        document.querySelectorAll('.map .map__city').forEach(n => n.classList.add('active'));
        mapscroll.forEach(n => n.classList.add('active'));
        mapсmapcity.forEach(n => n.classList.add('active'));
        mapсmapcity.forEach(n => n.style.overflow = null);
        maphead.forEach(n => n.classList.remove('active'));
        maphead.forEach(n => n.classList.remove('close'));
        maphead.forEach(n => n.classList.add('close'));
        mapinfo.forEach(n => n.classList.remove('active'));
        mapinfo.forEach(n => n.style.maxHeight = null);
        mapmargin.forEach(n => n.style.margin = 0);
        mapback.classList.remove('close');
        idmap.forEach(n => n.style.display = null);
        if (mapcity.classList.contains("active")) {
          mapselect.classList.remove('active');
        }
        mapcity.onmouseover = function(e) {scroll.start();};
        mapcity.onmouseout = function(e) {scroll.start();};
        mapcity.addEventListener("touchstart", function (e) {scroll.start()});
        mapcity.addEventListener("touchmove", function (e) {scroll.start()});
        mapcity.addEventListener("touched", function (e) {scroll.start()});
      }
      // end
      
      if (mapmoscow.classList.contains("map__point_active")) {
        mappoint();
        myMap.setCenter([55.88088924541,37.423524915344],12);
        var idmapi = idmap[0].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {
        mapсmapcity.forEach(n => n.classList.remove('active'));
        mapсmapcity.forEach(n => n.style.overflow = 'hidden');
        mapscroll.forEach(n => n.classList.remove('active'));
        maphead.forEach(n => n.classList.remove('active'));
        maphead.forEach(n => n.classList.remove('close'));
        mapinfo.forEach(n => n.classList.remove('active'));
        mapinfo.forEach(n => n.style.maxHeight = null);
        mapmargin.forEach(n => n.style.margin = null);
        mapback.classList.add('close');
        mapсmapcity.forEach(n => n.classList.remove('active'));
        myMap.setCenter([55.253215,37.622504],5);
        if (mapcity.classList.contains("active")) {
          mapselect.classList.remove('active');
          scroll.start();
        }
        mapcity.onmouseover = function(e) {scroll.stop();};
        mapcity.addEventListener("touchstart", function (e) {scroll.stop()});
        mapcity.addEventListener("touchmove", function (e) {scroll.stop()});
        mapcity.addEventListener("touched", function (e) {scroll.stop()});
        if(oldWidth <= 800){
          if(mapcity){
            if (!mapcity.classList.contains("active")) {
              mapcity.classList.add('active');
              mapcity.style.overflow = "visible";
              maphead.forEach(n => n.classList.add('close'));
              mapmargin.forEach(n => n.style.margin = '0');
              document.querySelector('.map__city').classList.add('active');
              mapscroll.forEach(n => n.classList.add('active'));
              mapselect.classList.add('active');
              mapcity.onmouseout = function(e) {scroll.start();};
              mapcity.addEventListener("touchstart", function (e) {scroll.start()});
              mapcity.addEventListener("touchmove", function (e) {scroll.start()});
              mapcity.addEventListener("touched", function (e) {scroll.start()});
            }
          }
        }
      };
      var mappeterburg = document.getElementById('mappeterburg');
      if (mappeterburg.classList.contains("map__point_active")) {
        mappoint();
        myMap.setCenter([59.618243,30.172631],12);
        var idmapi = idmap[1].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
      var mapvoronezh = document.getElementById('mapvoronezh');
      if (mapvoronezh.classList.contains("map__point_active")) {
        mappoint();
        myMap.setCenter([51.639685,39.324973],12);
        var idmapi = idmap[2].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
      var mapkursk = document.getElementById('mapkursk');
      if (mapkursk.classList.contains("map__point_active")) {
        mappoint();
        myMap.setCenter([51.627834,36.117242],12);
        var idmapi = idmap[3].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
      var maplipetsk = document.getElementById('maplipetsk');
      if (maplipetsk.classList.contains("map__point_active")) {
        mappoint();
        myMap.setCenter([52.597220203418,39.458276316873],12);
        var idmapi = idmap[4].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
      var maporel = document.getElementById('maporel');
      if (maporel.classList.contains("map__point_active")) {
        mappoint();
        myMap.setCenter([52.923587,36.078570],12);
        var idmapi = idmap[5].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
      var mappavlovsck = document.getElementById('mappavlovsck');
      if (mappavlovsck.classList.contains("map__point_active")) {
        mappoint();
        myMap.setCenter([50.452752,40.148549],12);
        var idmapi = idmap[6].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
      var mappenza = document.getElementById('mappenza');
      if (mappenza.classList.contains("map__point_active")) {
        mappoint();
        myMap.setCenter([53.270195255583,45.024497906746],12);
        var idmapi = idmap[7].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
      var mappskov = document.getElementById('mappskov');
      if (mappskov.classList.contains("map__point_active")) {
        mappoint();
        myMap.setCenter([56.9816779,29.9243012],12);
        var idmapi = idmap[8].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
      var mapryazan = document.getElementById('mapryazan');
      if (mapryazan.classList.contains("map__point_active")) {
        mappoint();
        myMap.setCenter([54.647213,39.638701],12);
        var idmapi = idmap[9].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
      var maptambov = document.getElementById('maptambov');
      if (maptambov.classList.contains("map__point_active")) {
        mappoint();
        myMap.setCenter([52.650429,41.407760],12);
        var idmapi = idmap[10].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
    });
  }
  if (ymaps != undefined) ymaps.ready(init);
}
// end yandex map
// map