import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/priority-pass';

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

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);

export async function GET(request: Request) {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI);
    }
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const date = searchParams.get('date');

    // Build query
    const query: any = {};

    if (category && category !== 'all') {
      query.category = new RegExp(category, 'i');
    }

    if (search) {
      query.$or = [
        { title: new RegExp(search, 'i') },
        { location: new RegExp(search, 'i') }
      ];
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = parseInt(minPrice);
      if (maxPrice) query.price.$lte = parseInt(maxPrice);
    }

    if (date) {
      query.date = date;
    }

    const events = await Event.find(query);
    console.log('Found events:', events); // Debug log
    return NextResponse.json(events);
  } catch (error) {
    console.error('Error in events API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI);
    }
    
    const body = await request.json();
    const event = await Event.create(body);
    
    return NextResponse.json(event);
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
