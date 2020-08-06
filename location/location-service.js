const LocationService = {

  getAllLocation(db) {
    return db.from('location_flavor').select('*');
  },

};

module.exports = LocationService;
