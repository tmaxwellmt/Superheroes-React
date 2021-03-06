var mongoose = require('mongoose');

var SuperheroSchema = new mongoose.Schema({
  name: {required: true, type: String},
  superPowers: { default: [], type: Array},
  universe: String,
  img: String
});

SuperheroSchema.methods.loadData = function(data) {

  this.name = data.name ? data.name : this.name;
  this.universe = data.universe ? data.universe : this.universe;
  this.img = data.img ? data.img : this.img;
}

SuperheroSchema.methods.loadPower = function (powerN) {
  this.superPowers.push (powerN);
}
module.exports = mongoose.model('Superhero', SuperheroSchema);
