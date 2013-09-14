App.Startup = DS.Model.extend({
  latitude: DS.attr('string'),
  longitude: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  logoUrl: DS.attr('string'),

  location: function() {
    var latitude = this.get('latitude');
    var longitude = this.get('longitude');
    
    return L.latLng(latitude, longitude);
  }.property('latitude', 'longitude')
});

App.Startup.FIXTURES = [
  { 
    id: "1",
    name: "Givey",
    latitude: "54.97002930",
    longitude: "-1.61809220",
    description: "More than 100% of the money you give and raise through Givey goes to your chosen charity. That's because we keep on adding, but don't take anything away, not a single penny!",
    url: "https://www.givey.com",
    logoUrl: "https://www.givey.com/assets/apple-touch-icon-precomposed.png"
  }, {
    id: "2",
    name: "Performance Horizon Group",
    latitude: "54.987977",
    longitude: "-1.440176",
    description: "We empower global brands, agencies and publishers to optimize and take control of their performance marketing campaigns.",
    url: "http://www.performancehorizon.com/",
    logoUrl: "http://www.performancehorizon.com/public/images/generic/logo.png"
  }, {
    id: "3",
    name: "Audacious",
    latitude: "54.580653",
    longitude: "-1.234130",
    description: "Audacious is the first Bible experience focused around a shared journey of discovery.",
    url: "http://audacious.me/",
    logoUrl: "http://img-ipad.lisisoft.com/imgmic/3/1/1513-1-audacious-bible.jpg"
  }, {
    id: "4",
    name: "CustomerSure",
    latitude: "55.065961",
    longitude: "-1.586381",
    description: "Our mission at CustomerSure is very simple. We want to make every company in the world (including yours) amazing at customer service.",
    url: "http://www.customersure.com/",
    logoUrl: "http://www.customersure.com/_assets/images/a_logo.png"
  }, {
    id: "5",
    name: "Amazing Radio",
    latitude: "54.966345",
    longitude: "-1.603692",
    description: "You heard it here first.",
    url: "http://www.amazingradio.co.uk/",
    logoUrl: "http://www.thecolinandmattshow.co.uk/wp-content/uploads/2011/02/logo.png"
  }
];
