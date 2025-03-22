import { Music, Film, ClubIcon as Football, Theater, Mic } from "lucide-react"
import Link from "next/link"

export default function CategorySelector() {
  const categories = [
    {
      name: "Music",
      icon: <Music className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      link: "/events?category=music",
    },
    {
      name: "Movies",
      icon: <Film className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      link: "/events?category=movies",
    },
    {
      name: "Sports",
      icon: <Football className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      link: "/events?category=sports",
    },
    {
      name: "Theater",
      icon: <Theater className="h-6 w-6" />,
      color: "from-red-500 to-orange-500",
      link: "/events?category=theater",
    },
    {
      name: "Comedy",
      icon: <Mic className="h-6 w-6" />,
      color: "from-yellow-500 to-amber-500",
      link: "/events?category=comedy",
    },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {categories.map((category, index) => (
        <Link href={category.link} key={index}>
          <div className="flex flex-col items-center p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all cursor-pointer group">
            <div
              className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
            >
              {category.icon}
            </div>
            <span className="font-medium">{category.name}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

