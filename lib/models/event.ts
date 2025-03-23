import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  fanScore: { type: Number, required: true },
  tier: { type: String, required: true },
  price: { type: String, required: true },
});

export const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);
