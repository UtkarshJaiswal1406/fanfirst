import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Calendar, Shield, LogOut, Edit, Save } from "lucide-react"
import ConnectedAccounts from "@/components/connected-accounts"

export default function Profile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-1">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold mb-1">John Doe</h2>
                <p className="text-gray-400 mb-2">john.doe@example.com</p>
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-purple-600">Platinum</Badge>
                  <span className="text-sm text-gray-400">875 points</span>
                </div>
                <Button variant="outline" className="w-full border-gray-700 mb-4">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
                <div className="w-full space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span className="text-sm">john.doe@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span className="text-sm">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span className="text-sm">Mumbai, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span className="text-sm">Joined January 2023</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="accounts">Connected Accounts</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="mt-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="John" className="bg-gray-800 border-gray-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Doe" className="bg-gray-800 border-gray-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue="john.doe@example.com"
                          className="bg-gray-800 border-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" defaultValue="+91 98765 43210" className="bg-gray-800 border-gray-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input id="dob" type="date" defaultValue="1990-01-15" className="bg-gray-800 border-gray-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <select id="gender" className="w-full h-10 px-3 rounded-md bg-gray-800 border border-gray-700">
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                          <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" defaultValue="123 Main Street" className="bg-gray-800 border-gray-700" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" defaultValue="Mumbai" className="bg-gray-800 border-gray-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" defaultValue="Maharashtra" className="bg-gray-800 border-gray-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pincode">Pincode</Label>
                        <Input id="pincode" defaultValue="400001" className="bg-gray-800 border-gray-700" />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="accounts" className="mt-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Connected Accounts</CardTitle>
                  <CardDescription>Manage your connected streaming platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <ConnectedAccounts />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences" className="mt-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>Customize your experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Event Preferences</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="sports">Sports Events</Label>
                            <p className="text-sm text-gray-400">Receive updates about sports events</p>
                          </div>
                          <Switch id="sports" defaultChecked />
                        </div>
                        <Separator className="bg-gray-800" />
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="music">Music Events</Label>
                            <p className="text-sm text-gray-400">Receive updates about music events</p>
                          </div>
                          <Switch id="music" defaultChecked />
                        </div>
                        <Separator className="bg-gray-800" />
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="movies">Movie Events</Label>
                            <p className="text-sm text-gray-400">Receive updates about movie premieres</p>
                          </div>
                          <Switch id="movies" defaultChecked />
                        </div>
                        <Separator className="bg-gray-800" />
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="theater">Theater Events</Label>
                            <p className="text-sm text-gray-400">Receive updates about theater shows</p>
                          </div>
                          <Switch id="theater" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="email-notif">Email Notifications</Label>
                            <p className="text-sm text-gray-400">Receive notifications via email</p>
                          </div>
                          <Switch id="email-notif" defaultChecked />
                        </div>
                        <Separator className="bg-gray-800" />
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="push-notif">Push Notifications</Label>
                            <p className="text-sm text-gray-400">Receive notifications on your device</p>
                          </div>
                          <Switch id="push-notif" defaultChecked />
                        </div>
                        <Separator className="bg-gray-800" />
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="sms-notif">SMS Notifications</Label>
                            <p className="text-sm text-gray-400">Receive notifications via SMS</p>
                          </div>
                          <Switch id="sms-notif" />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button>Save Preferences</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="mt-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Change Password</h3>
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" className="bg-gray-800 border-gray-700" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input id="new-password" type="password" className="bg-gray-800 border-gray-700" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirm New Password</Label>
                          <Input id="confirm-password" type="password" className="bg-gray-800 border-gray-700" />
                        </div>
                        <Button>Update Password</Button>
                      </form>
                    </div>

                    <Separator className="bg-gray-800" />

                    <div>
                      <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
                      <div className="flex items-center justify-between mb-4">
                        <div className="space-y-0.5">
                          <Label htmlFor="2fa">Enable Two-Factor Authentication</Label>
                          <p className="text-sm text-gray-400">Add an extra layer of security to your account</p>
                        </div>
                        <Switch id="2fa" />
                      </div>
                      <Button variant="outline" className="border-gray-700">
                        <Shield className="h-4 w-4 mr-2" />
                        Setup 2FA
                      </Button>
                    </div>

                    <Separator className="bg-gray-800" />

                    <div>
                      <h3 className="text-lg font-medium mb-4">Login Sessions</h3>
                      <div className="space-y-4">
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium">Current Session</p>
                              <p className="text-sm text-gray-400">Mumbai, India • Chrome on Windows</p>
                              <p className="text-xs text-gray-500 mt-1">Started: April 10, 2024 at 10:30 AM</p>
                            </div>
                            <Badge className="bg-green-600">Active</Badge>
                          </div>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium">Mobile App</p>
                              <p className="text-sm text-gray-400">iPhone 13 • iOS App</p>
                              <p className="text-xs text-gray-500 mt-1">Last active: April 9, 2024 at 8:15 PM</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                            >
                              Logout
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="mt-4 border-gray-700">
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout of All Devices
                      </Button>
                    </div>

                    <Separator className="bg-gray-800" />

                    <div>
                      <h3 className="text-lg font-medium mb-4 text-red-400">Danger Zone</h3>
                      <p className="text-sm text-gray-400 mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

