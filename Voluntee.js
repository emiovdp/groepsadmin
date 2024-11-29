const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  role: { type: String, enum: ['Coordinator', 'Volunteer'], default: 'Volunteer' },
  availability: { type: String, required: true },
});

module.exports = mongoose.model('Volunteer', VolunteerSchema);
