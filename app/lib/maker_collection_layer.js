App.MarkerLayer = EmberLeaflet.MarkerLayer.extend({
  click: function(e) {
    this.controller.transitionToRoute('startup', this.get('content'));
  }
});

App.MarkerCollectionLayer = EmberLeaflet.MarkerCollectionLayer.extend({
  contentBinding: 'controller',
  itemLayerClass: App.MarkerLayer
});
