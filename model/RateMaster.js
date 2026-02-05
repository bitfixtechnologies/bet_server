// models/RateMaster.js
// const mongoose = require('mongoose');

// const rateSchema = new mongoose.Schema({
//   name: String,
//   rate: String,
//   assignRate: String,
// });

// const rateMasterSchema = new mongoose.Schema({
//   user: String,
//   draw: String,
//   rates: [rateSchema],
// }, { timestamps: true });

// // module.exports = mongoose.model('RateMaster', rateMasterSchema);
// module.exports =
//   mongoose.models.RateMaster ||
//   mongoose.model('RateMaster', rateMasterSchema);
const mongoose = require('mongoose');

const rateSchema = new mongoose.Schema({
  name: String,
  rate: String,
  assignRate: String,
});

const rateMasterSchema = new mongoose.Schema(
  {
    user: String,
    draw: String,
    rates: [rateSchema],
  },
  { timestamps: true }
);

/* 🔥 PERFORMANCE INDEXES */
rateMasterSchema.index({ user: 1, draw: 1 }); // MOST IMPORTANT
rateMasterSchema.index({ user: 1 });
rateMasterSchema.index({ draw: 1 });


// module.exports = mongoose.model('RateMaster', rateMasterSchema);
module.exports =
  mongoose.models.RateMaster ||
  mongoose.model('RateMaster', rateMasterSchema);
