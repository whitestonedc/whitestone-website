import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  appointmentDateTime: {
    type: Date,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  approved: {
    type: Boolean,
    required: true,
  }
}, { timestamps: true });

export default mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema);