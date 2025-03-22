"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Youtube, Music, Film, Mail, Lock, User, ArrowRight, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"

export default function SignUp() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    platforms: {
      youtube: false,
      spotify: false,
      hotstar: false,
      netflix: false,
    },
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === "checkbox") {
      if (name.startsWith("platform-")) {
        const platform = name.replace("platform-", "")
        setFormData({
          ...formData,
          platforms: {
            ...formData.platforms,
            [platform]: checked,
          },
        })
      } else {
        setFormData({
          ...formData,
          [name]: checked,
        })
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    // Redirect to dashboard or show success message
    window.location.href = "/dashboard"
  }

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-white font-bold">PP</span>
            </div>
            <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              PriorityPass
            </span>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
          <p className="text-gray-400">Join PriorityPass and get priority access to your favorite events.</p>
        </div>

        <div className="mb-8">
          <Progress value={(step / 3) * 100} className="h-2" />
          <div className="flex justify-between mt-2 text-sm text-gray-400">
            <span className={step >= 1 ? "text-purple-400" : ""}>Account</span>
            <span className={step >= 2 ? "text-purple-400" : ""}>Connect</span>
            <span className={step >= 3 ? "text-purple-400" : ""}>Complete</span>
          </div>
        </div>

        <Card className="bg-gray-900 border-gray-800">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Enter your details to create an account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeTerms"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked })}
                      required
                    />
                    <label htmlFor="agreeTerms" className="text-sm text-gray-400">
                      I agree to the{" "}
                      <Link href="/terms" className="text-purple-400 hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-purple-400 hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="button"
                    className="w-full"
                    onClick={nextStep}
                    disabled={
                      !formData.firstName ||
                      !formData.lastName ||
                      !formData.email ||
                      !formData.password ||
                      !formData.confirmPassword ||
                      !formData.agreeTerms ||
                      formData.password !== formData.confirmPassword
                    }
                  >
                    Next Step
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </>
            )}

            {step === 2 && (
              <>
                <CardHeader>
                  <CardTitle>Connect Your Accounts</CardTitle>
                  <CardDescription>Link your streaming platforms to calculate your Fan Score</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-400 text-sm">
                    Connect your streaming accounts to help us calculate your Fan Score. The more platforms you connect,
                    the more accurate your score will be.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                      <Checkbox
                        id="platform-youtube"
                        name="platform-youtube"
                        checked={formData.platforms.youtube}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            platforms: { ...formData.platforms, youtube: checked },
                          })
                        }
                      />
                      <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                        <Youtube className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <Label htmlFor="platform-youtube" className="font-medium">
                          YouTube
                        </Label>
                        <p className="text-sm text-gray-400">Connect to analyze your viewing habits</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                      <Checkbox
                        id="platform-spotify"
                        name="platform-spotify"
                        checked={formData.platforms.spotify}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            platforms: { ...formData.platforms, spotify: checked },
                          })
                        }
                      />
                      <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                        <Music className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <Label htmlFor="platform-spotify" className="font-medium">
                          Spotify
                        </Label>
                        <p className="text-sm text-gray-400">Connect to analyze your music preferences</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                      <Checkbox
                        id="platform-hotstar"
                        name="platform-hotstar"
                        checked={formData.platforms.hotstar}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            platforms: { ...formData.platforms, hotstar: checked },
                          })
                        }
                      />
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                        <Film className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <Label htmlFor="platform-hotstar" className="font-medium">
                          Disney+ Hotstar
                        </Label>
                        <p className="text-sm text-gray-400">Connect to analyze your sports and movie preferences</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                      <Checkbox
                        id="platform-netflix"
                        name="platform-netflix"
                        checked={formData.platforms.netflix}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            platforms: { ...formData.platforms, netflix: checked },
                          })
                        }
                      />
                      <div className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center">
                        <Film className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <Label htmlFor="platform-netflix" className="font-medium">
                          Netflix
                        </Label>
                        <p className="text-sm text-gray-400">Connect to analyze your movie and show preferences</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm text-gray-300">
                      <strong>Privacy Note:</strong> We only analyze your viewing habits to calculate your Fan Score. We
                      don't store or share your content data.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button type="button" variant="outline" className="border-gray-700" onClick={prevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button type="button" onClick={nextStep}>
                    Next Step
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </>
            )}

            {step === 3 && (
              <>
                <CardHeader>
                  <CardTitle>Complete Your Registration</CardTitle>
                  <CardDescription>Review your information and complete signup</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-400">Personal Information</h3>
                      <div className="bg-gray-800 p-4 rounded-lg mt-2">
                        <div className="flex items-center gap-3 mb-2">
                          <User className="h-5 w-5 text-purple-400" />
                          <p>
                            <span className="font-medium">
                              {formData.firstName} {formData.lastName}
                            </span>
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-purple-400" />
                          <p>{formData.email}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-400">Connected Platforms</h3>
                      <div className="bg-gray-800 p-4 rounded-lg mt-2">
                        <div className="flex flex-wrap gap-3">
                          {formData.platforms.youtube && (
                            <div className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-full">
                              <Youtube className="h-4 w-4 text-red-400" />
                              <span className="text-sm">YouTube</span>
                            </div>
                          )}
                          {formData.platforms.spotify && (
                            <div className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-full">
                              <Music className="h-4 w-4 text-green-400" />
                              <span className="text-sm">Spotify</span>
                            </div>
                          )}
                          {formData.platforms.hotstar && (
                            <div className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-full">
                              <Film className="h-4 w-4 text-blue-400" />
                              <span className="text-sm">Disney+ Hotstar</span>
                            </div>
                          )}
                          {formData.platforms.netflix && (
                            <div className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-full">
                              <Film className="h-4 w-4 text-red-400" />
                              <span className="text-sm">Netflix</span>
                            </div>
                          )}
                          {!formData.platforms.youtube &&
                            !formData.platforms.spotify &&
                            !formData.platforms.hotstar &&
                            !formData.platforms.netflix && (
                              <p className="text-sm text-gray-400">
                                No platforms connected. You can connect them later.
                              </p>
                            )}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-lg border border-purple-800">
                      <div className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-400 mt-0.5" />
                        <div>
                          <p className="text-sm text-purple-200">By completing registration, you'll get:</p>
                          <ul className="text-sm text-purple-200 list-disc list-inside mt-2 space-y-1">
                            <li>Your initial Fan Score calculation</li>
                            <li>Access to browse and book events</li>
                            <li>Personalized event recommendations</li>
                            <li>Priority access based on your tier</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button type="button" variant="outline" className="border-gray-700" onClick={prevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button type="submit">Complete Registration</Button>
                </CardFooter>
              </>
            )}
          </form>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-purple-400 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

