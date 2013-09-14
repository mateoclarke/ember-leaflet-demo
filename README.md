# Ember Leaflet Demo

A simple demonstration of [Ember.js](http://emberjs.com/) in combination with [Leaflet.js](http://leafletjs.com/), using @gabesmed’s [EmberLeaflet](http://gabesmed.github.io/ember-leaflet/). [See the demo](http://crossingtheruby.com/ember-leaflet-demo/).

It plots markers for different startups in the North East of England (chosen arbitrarily).

## Libraries

- Ember.js 1.0.0
- Ember Data 1.0.0 beta 2
- Handlebars.js 1.0.0 (Runtime)
- jQuery 2.0.2
- Leaflet.js 0.6.4
- EmberLeaflet ~~(Ember.js 1.0.0 compatible, built from @codefox421’s fork, now merged)~~

## Build

Checkout the `gh-pages` branch to see the built code.

### Notes

I’ve used [Rake Pipeline](https://github.com/livingsocial/rake-pipeline) for the build process along with a modified version of [Barber](https://github.com/tchak/barber) for Handlebars template pre-compilation. (The modification is simply to the ember-source and handlebars-source dependencies to bring them up to 1.0.0).

I would probably have used [Ember-App-Kit](https://github.com/stefanpenner/ember-app-kit) if it had been around when I started. It looks like it will become the _de facto_ standard for building Ember.js applications.

## License

MIT
