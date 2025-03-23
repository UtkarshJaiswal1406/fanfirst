import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, Shield, Ticket, Star, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import TeamMember from "@/components/team-member"
import FAQAccordion from "@/components/faq-accordion"

export default function About() {
  // Sample team data
  const teamMembers = [
    {
      id: 1,
      name: "Utkarsh Jaiswal",
      role: "Ful Stack Integration",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Krishna Keshab Banik",
      role: "UI Designer",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Rashmika Das",
      role: "ML Model Developer",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Yukta Bhardwaj",
      role: "ML Model Developer",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      name: "Shaik Aftab",
      role: "Web3 Developer",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      name: "Saatvik SS",
      role: "Full Stack Developer",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 7,
      name: "Shaurya Kesarwani",
      role: "Documentation",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 8,
      name: "Sanskriti Rastogi",
      role: "Documenatation",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 9,
      name: "Sanjay Kumar Gupta",
      role: "Documenatation",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative h-[400px] top-12 md:h-[500px] overflow-hidden rounded-xl mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-black/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/placeholder.svg?height=500&width=1200')" }}
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            About PriorityPass
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            We're revolutionizing the ticketing industry by putting true fans first.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/events">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Explore Events
              </Button>
            </Link>
            <Link href="/fan-score">
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-950">
                Learn About Fan Score
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              PriorityPass was founded with a simple but powerful mission: to ensure that true fans get priority access
              to the events they love. We believe that dedication should be rewarded, and that the current ticketing
              system is broken.
            </p>
            <p className="text-gray-300 mb-6">
              Too often, tickets for popular events are snatched up by scalpers and bots, only to be resold at inflated
              prices. This leaves genuine fans priced out or unable to attend events they're passionate about.
            </p>
            <p className="text-gray-300 mb-6">
              By leveraging AI and blockchain technology, we've created a platform that measures fan engagement through
              their streaming habits and event participation, giving the most dedicated fans the first opportunity to
              purchase tickets.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center">
                <Trophy className="h-6 w-6 text-purple-300" />
              </div>
              <div>
                <h3 className="font-semibold">Our Vision</h3>
                <p className="text-gray-400">A world where true fans always get access to the events they love.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative rounded-xl overflow-hidden h-[400px]">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Fans at a concert"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="bg-purple-600 mb-2">Our Purpose</Badge>
                <p className="text-white text-lg font-medium">
                  Creating a fair ticketing ecosystem that rewards genuine fan engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How PriorityPass Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-6">
              <div className="bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect Your Accounts</h3>
              <p className="text-gray-400 mb-4">
                Link your streaming platforms like Spotify, Disney+ Hotstar, and YouTube to calculate your Fan Score.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                  <span className="text-xs font-bold">YT</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                  <span className="text-xs font-bold">SP</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-xs font-bold">DH</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                  <span className="text-xs font-bold">JC</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-6">
              <div className="bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Your Fan Score</h3>
              <p className="text-gray-400 mb-4">
                Our AI analyzes your engagement and assigns you a tier: Platinum, Gold, Silver, or General.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded bg-purple-900/30 border border-purple-800">
                  <Badge className="bg-purple-700">Platinum</Badge>
                  <span className="text-xs text-purple-300">900+ points</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-yellow-900/30 border border-yellow-800">
                  <Badge className="bg-yellow-700">Gold</Badge>
                  <span className="text-xs text-yellow-300">700+ points</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-gray-800 border border-gray-700">
                  <Badge className="bg-gray-600">Silver</Badge>
                  <span className="text-xs text-gray-300">500+ points</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-6">
              <div className="bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enjoy Priority Access</h3>
              <p className="text-gray-400 mb-4">
                Get early access to tickets, exclusive offers, and premium experiences based on your tier.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <p className="text-sm">Early access to ticket sales</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <p className="text-sm">Exclusive event experiences</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <p className="text-sm">Blockchain-secured tickets</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <p className="text-sm">Rewards and special offers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center shrink-0">
              <Trophy className="h-6 w-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Fan Score Calculation</h3>
              <p className="text-gray-400">
                Our AI analyzes your streaming history and event participation to generate a Fan Score that reflects
                your genuine engagement with artists, teams, and content.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center shrink-0">
              <Star className="h-6 w-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Priority Access</h3>
              <p className="text-gray-400">
                Based on your Fan Score, you'll be categorized into tiers that determine when you can access tickets,
                with higher tiers getting earlier access windows.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center shrink-0">
              <Ticket className="h-6 w-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Blockchain Ticketing</h3>
              <p className="text-gray-400">
                Our tickets are secured using blockchain technology, making them impossible to duplicate or scalp,
                ensuring that only legitimate fans attend events.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center shrink-0">
              <Shield className="h-6 w-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Data Privacy</h3>
              <p className="text-gray-400">
                We take your privacy seriously. Your streaming data is only used to calculate your Fan Score and is
                never sold to third parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <FAQAccordion />
      </section>

      {/* Partners */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex items-center justify-center h-32">
            <img src="/placeholder.svg?height=80&width=160" alt="Partner Logo" className="max-h-16" />
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex items-center justify-center h-32">
            <img src="/placeholder.svg?height=80&width=160" alt="Partner Logo" className="max-h-16" />
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex items-center justify-center h-32">
            <img src="/placeholder.svg?height=80&width=160" alt="Partner Logo" className="max-h-16" />
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex items-center justify-center h-32">
            <img src="/placeholder.svg?height=80&width=160" alt="Partner Logo" className="max-h-16" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-pink-900 rounded-xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Priority Access?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join PriorityPass today and never miss out on tickets to your favorite events again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                Sign Up Now
              </Button>
            </Link>
            <Link href="/events">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Browse Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

