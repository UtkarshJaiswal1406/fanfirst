"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, MapPin, CreditCard, CheckCircle, Lock, Shield, Zap } from "lucide-react"
import Link from "next/link"
import CyberButton from "@/components/cyber-button"
import CyberCard from "@/components/cyber-card"
import ParticleBackground from "@/components/particle-background"

export default function Payment({ params }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    saveCard: false,
  })

  // Sample event data
  const event = {
    id: params.eventId,
    title: "IPL 2024: Mumbai Indians vs Chennai Super Kings",
    category: "Sports",
    date: "April 12, 2024",
    time: "7:30 PM",
    location: "Wankhede Stadium, Mumbai",
    image: "/placeholder.svg?height=300&width=500",
    price: 5000,
    serviceFee: 500,
    fanScoreDiscount: 750,
    totalAmount: 4750,
    ticketType: "Platinum",
    seat: "Block A, Row 5, Seat 23",
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false)
      setPaymentSuccess(true)
    }, 2000)
  }

  if (paymentSuccess) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center">
        <ParticleBackground color="rgba(0, 255, 255, 0.2)">
          <CyberCard variant="gradient" className="max-w-md mx-auto p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center bg-gray-900/80 rounded-full neon-glow neon-cyan">
                <CheckCircle className="h-10 w-10 text-green-400" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4 neon-text-glow neon-cyan">Payment Successful!</h1>
            <p className="text-gray-300 mb-8">
              Your ticket for {event.title} has been confirmed. You can view your ticket in the My Tickets section.
            </p>
            <div className="flex flex-col gap-4">
              <Link href="/my-tickets">
                <CyberButton variant="cyan" className="w-full">
                  View My Tickets
                </CyberButton>
              </Link>
              <Link href="/events">
                <Button variant="outline" className="w-full border-cyan-900/50 hover:bg-cyan-900/20">
                  Browse More Events
                </Button>
              </Link>
            </div>
          </CyberCard>
        </ParticleBackground>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 neon-text-glow neon-cyan">Secure Checkout</h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <CyberCard variant="gradient" className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-cyan-400" />
                  Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <div className="relative">
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          className="bg-gray-900/50 border-gray-700 focus:border-cyan-500 pl-10"
                          required
                        />
                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 h-4 w-4" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        placeholder="John Doe"
                        value={formData.cardName}
                        onChange={handleChange}
                        className="bg-gray-900/50 border-gray-700 focus:border-cyan-500"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          name="expiryDate"
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          className="bg-gray-900/50 border-gray-700 focus:border-cyan-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={handleChange}
                          className="bg-gray-900/50 border-gray-700 focus:border-cyan-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <input
                        type="checkbox"
                        id="saveCard"
                        name="saveCard"
                        checked={formData.saveCard}
                        onChange={handleChange}
                        className="w-4 h-4 rounded border-gray-700 text-cyan-500 focus:ring-cyan-500"
                      />
                      <Label htmlFor="saveCard" className="text-sm">
                        Save card for future payments
                      </Label>
                    </div>

                    <div className="flex items-center gap-2 p-3 bg-cyan-900/20 rounded-lg border border-cyan-900/30">
                      <Lock className="h-5 w-5 text-cyan-400 shrink-0" />
                      <p className="text-sm text-cyan-300">
                        Your payment information is encrypted and secure. We use industry-standard security measures to
                        protect your data.
                      </p>
                    </div>

                    <CyberButton type="submit" variant="cyan" className="w-full" disabled={loading}>
                      {loading ? (
                        <>
                          <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                          Processing...
                        </>
                      ) : (
                        <>Pay ₹{event.totalAmount.toLocaleString()}</>
                      )}
                    </CyberButton>
                  </div>
                </form>
              </CardContent>
            </CyberCard>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Lock className="h-4 w-4 text-cyan-400" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-cyan-400" />
                <span>Encrypted Data</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <CyberCard variant="neon" className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{event.title}</h3>
                      <div className="flex items-center text-sm text-gray-400 mt-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>
                          {event.date}, {event.time}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400 mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span>Ticket Type</span>
                      <Badge className="bg-cyan-900 text-cyan-300">{event.ticketType}</Badge>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span>Seat</span>
                      <span>{event.seat}</span>
                    </div>
                  </div>

                  <Separator className="bg-gray-800" />

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Ticket Price</span>
                      <span>₹{event.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Service Fee</span>
                      <span>₹{event.serviceFee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-green-400">
                      <span>Fan Score Discount</span>
                      <span>-₹{event.fanScoreDiscount.toLocaleString()}</span>
                    </div>
                  </div>

                  <Separator className="bg-gray-800" />

                  <div className="flex justify-between items-center font-semibold">
                    <span>Total</span>
                    <span className="text-xl neon-text-glow neon-cyan">₹{event.totalAmount.toLocaleString()}</span>
                  </div>

                  <div className="bg-cyan-900/20 p-3 rounded-lg border border-cyan-900/30">
                    <p className="text-sm text-cyan-300">
                      Your Platinum tier Fan Score saved you ₹{event.fanScoreDiscount.toLocaleString()} on this
                      purchase!
                    </p>
                  </div>
                </div>
              </CardContent>
            </CyberCard>
          </div>
        </div>
      </div>
    </div>
  )
}

