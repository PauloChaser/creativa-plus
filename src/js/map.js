export function initMap() {
  const mapElement = document.getElementById('map');

  if (!mapElement) {
    return;
  }

  const center = { lat: 58.5976664, lng: 49.6458434 };

  const map = new google.maps.Map(
    mapElement,
    {
      zoom: 16,
      center: center,
      gestureHandling: 'greedy',
      styles: [
        {
          'featureType': 'administrative',
          'elementType': 'all',
          'stylers': [
            {
              'saturation': '-100',
            },
          ],
        },
        {
          'featureType': 'administrative.province',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off',
            },
          ],
        },
        {
          'featureType': 'landscape',
          'elementType': 'all',
          'stylers': [
            {
              'saturation': -100,
            },
            {
              'lightness': 65,
            },
            {
              'visibility': 'on',
            },
          ],
        },
        {
          'featureType': 'poi',
          'elementType': 'all',
          'stylers': [
            {
              'saturation': -100,
            },
            {
              'lightness': '50',
            },
            {
              'visibility': 'simplified',
            },
          ],
        },
        {
          'featureType': 'road',
          'elementType': 'all',
          'stylers': [
            {
              'saturation': '-100',
            },
          ],
        },
        {
          'featureType': 'road.highway',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'simplified',
            },
          ],
        },
        {
          'featureType': 'road.arterial',
          'elementType': 'all',
          'stylers': [
            {
              'lightness': '30',
            },
          ],
        },
        {
          'featureType': 'road.local',
          'elementType': 'all',
          'stylers': [
            {
              'lightness': '40',
            },
          ],
        },
        {
          'featureType': 'transit',
          'elementType': 'all',
          'stylers': [
            {
              'saturation': -100,
            },
            {
              'visibility': 'simplified',
            },
          ],
        },
        {
          'featureType': 'water',
          'elementType': 'geometry',
          'stylers': [
            {
              'hue': '#ffff00',
            },
            {
              'lightness': -25,
            },
            {
              'saturation': -97,
            },
          ],
        },
        {
          'featureType': 'water',
          'elementType': 'labels',
          'stylers': [
            {
              'lightness': -25,
            },
            {
              'saturation': -100,
            },
          ],
        },
      ],
    },
  );

  const marker = new google.maps.Marker({
    position: center,
    map: map,
  });
}
