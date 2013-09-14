App.StartupsView = EmberLeaflet.MapView.extend({
  center: L.latLng(54.97002930, -1.61809220),
  zoom: 11,
  childLayers: [
    EmberLeaflet.DefaultTileLayer,
    App.MarkerCollectionLayer
  ]
});
