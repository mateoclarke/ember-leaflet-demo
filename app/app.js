var App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_VIEW_LOOKUPS: true,
  LOG_ACTIVE_GENERATION: true,
  rootElement: "#map"
});

L.Icon.Default.imagePath = "/images";
