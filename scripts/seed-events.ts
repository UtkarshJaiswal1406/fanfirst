import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/priority-pass';

const events = [
  {
    title: "IPL 2024: Mumbai Indians vs Chennai Super Kings",
    category: "Sports",
    date: "April 12, 2024",
    location: "Wankhede Stadium, Mumbai",
    image: "/images/events/MI-vs-CSK.avif",
    fanScore: 97,
    tier: "Platinum",
    price: "₹1,500 - ₹8,000",
  },
  {
    title: "Coldplay World Tour",
    category: "Music",
    date: "May 15, 2024",
    location: "DY Patil Stadium, Mumbai",
    image: "/images/events/maxresdefault.jpg",
    fanScore: 95,
    tier: "Platinum",
    price: "₹2,500 - ₹12,000",
  },
  {
    title: "Avengers: Secret Wars Premiere",
    category: "Movies",
    date: "May 3, 2024",
    location: "PVR IMAX, Mumbai",
    image: "/images/events/avengers-secret-wars.png",
    fanScore: 90,
    tier: "Gold",
    price: "₹500 - ₹1,200",
  },
  {
    title: "Ed Sheeran Live",
    category: "Music",
    date: "June 8, 2024",
    location: "Jawaharlal Nehru Stadium, Delhi",
    image: "/images/events/202310203071947.jpeg",
    fanScore: 88,
    tier: "Gold",
    price: "₹2,000 - ₹10,000",
  },
  {
    title: "World Cup T20 Final",
    category: "Sports",
    date: "July 3, 2024",
    location: "Narendra Modi Stadium, Ahmedabad",
    image: "/images/events/uh7op6arhhnprscg18mv.jpeg",
    fanScore: 92,
    tier: "Platinum",
    price: "₹2,000 - ₹15,000",
  },
  {
    title: "Dune: Part Three IMAX Release",
    category: "Movies",
    date: "August 15, 2024",
    location: "PVR IMAX, Bangalore",
    image: "/placeholder.svg?height=300&width=500",
    fanScore: 85,
    tier: "Gold",
    price: "₹600 - ₹1,500",
  },
  {
    title: "Taylor Swift: The Eras Tour",
    category: "Music",
    date: "September 20, 2024",
    location: "DY Patil Stadium, Mumbai",
    image: "/placeholder.svg?height=300&width=500",
    fanScore: 98,
    tier: "Platinum",
    price: "₹3,500 - ₹15,000",
  },
  {
    title: "NBA India Games 2024",
    category: "Sports",
    date: "October 5, 2024",
    location: "Indira Gandhi Arena, Delhi",
    image: "/placeholder.svg?height=300&width=500",
    fanScore: 89,
    tier: "Gold",
    price: "₹1,000 - ₹5,000",
  },
];

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

async function seedEvents() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
    
    // Clear existing events
    await Event.deleteMany({});
    console.log('Cleared existing events');
    
    // Insert new events
    await Event.insertMany(events);
    console.log('Successfully seeded events data');
    
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding events:', error);
    process.exit(1);
  }
}

seedEvents();
