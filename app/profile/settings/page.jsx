"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
  Bell,
  Shield,
  Save,
  Smartphone,
  Mail,
  Globe,
  Moon,
  Sun,
  Zap,
  Lock,
  CreditCard,
  Trash2,
  AlertTriangle,
} from "lucide-react"
import CyberButton from "@/components/cyber-button"
import CyberCard from "@/components/cyber-card"
import ParticleBackground from "@/components/particle-background"

export default function Settings() {
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    push: true,
    sms: false,
    eventReminders: true,
    fanScoreUpdates: true,
    promotionalEmails: false,
    newEvents: true,
    priceDrops: true,
  })

  const [appearanceSettings, setAppearanceSettings] = useState({
    darkMode: true,
    animations: true,
    highContrast: false,
    reducedMotion: false,
  })

  const [securitySettings, setSecuritySettings] = useState({
    twoFactor: false,
    loginAlerts: true,
    sessionTimeout: "30",
  })

  const handleNotificationChange = (key) => {
    setNotificationSettings({
      ...notificationSettings,
      [key]: !notificationSettings[key],
    })
  }

  const handleAppearanceChange = (key) => {
    setAppearanceSettings({
      ...appearanceSettings,
      [key]: !appearanceSettings[key],
    })
  }

  const handleSecurityChange = (key) => {
    setSecuritySettings({
      ...securitySettings,
      [key]: !securitySettings[key],
    })
  }

  const handleSessionTimeoutChange = (e) => {
    setSecuritySettings({
      ...securitySettings,
      sessionTimeout: e.target.value,
    })
  }

  return (
    <ParticleBackground className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 neon-text-glow neon-cyan">Settings</h1>

        <Tabs defaultValue="notifications" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mb-8 bg-gray-900/50 p-1 neon-glow neon-cyan">
            <TabsTrigger
              value="notifications"
              className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-300"
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="appearance"
              className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-300"
            >
              Appearance
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-300"
            >
              Security
            </TabsTrigger>
            <TabsTrigger
              value="payment"
              className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-300"
            >
              Payment
            </TabsTrigger>
          </TabsList>

          <TabsContent value="notifications">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CyberCard variant="gradient">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-cyan-400" />
                    Notification Channels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-notif" className="text-base">
                          Email Notifications
                        </Label>
                        <p className="text-sm text-gray-400">Receive notifications via email</p>
                      </div>
                      <Switch
                        id="email-notif"
                        checked={notificationSettings.email}
                        onCheckedChange={() => handleNotificationChange("email")}
                        className="data-[state=checked]:bg-cyan-600"
                      />
                    </div>
                    <Separator className="bg-gray-800" />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="push-notif" className="text-base">
                          Push Notifications
                        </Label>
                        <p className="text-sm text-gray-400">Receive notifications on your device</p>
                      </div>
                      <Switch
                        id="push-notif"
                        checked={notificationSettings.push}
                        onCheckedChange={() => handleNotificationChange("push")}
                        className="data-[state=checked]:bg-cyan-600"
                      />
                    </div>
                    <Separator className="bg-gray-800" />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="sms-notif" className="text-base">
                          SMS Notifications
                        </Label>
                        <p className="text-sm text-gray-400">Receive notifications via SMS</p>
                      </div>
                      <Switch
                        id="sms-notif"
                        checked={notificationSettings.sms}
                        onCheckedChange={() => handleNotificationChange("sms")}
                        className="data-[state=checked]:bg-cyan-600"
                      />
                    </div>
                  </div>
                </CardContent>
              </CyberCard>

              <CyberCard variant="gradient">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-cyan-400" />
                    Notification Types
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="event-reminders" className="text-base">
                          Event Reminders
                        </Label>
                        <p className="text-sm text-gray-400">Reminders about upcoming events</p>
                      </div>
                      <Switch
                        id="event-reminders"
                        checked={notificationSettings.eventReminders}
                        onCheckedChange={() => handleNotificationChange("eventReminders")}
                        className="data-[state=checked]:bg-cyan-600"
                      />
                    </div>
                    <Separator className="bg-gray-800" />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="fan-score-updates" className="text-base">
                          Fan Score Updates
                        </Label>
                        <p className="text-sm text-gray-400">Updates about your Fan Score changes</p>
                      </div>
                      <Switch
                        id="fan-score-updates"
                        checked={notificationSettings.fanScoreUpdates}
                        onCheckedChange={() => handleNotificationChange("fanScoreUpdates")}
                        className="data-[state=checked]:bg-cyan-600"
                      />
                    </div>
                    <Separator className="bg-gray-800" />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="promotional-emails" className="text-base">
                          Promotional Emails
                        </Label>
                        <p className="text-sm text-gray-400">Marketing and promotional content</p>
                      </div>
                      <Switch
                        id="promotional-emails"
                        checked={notificationSettings.promotionalEmails}
                        onCheckedChange={() => handleNotificationChange("promotionalEmails")}
                        className="data-[state=checked]:bg-cyan-600"
                      />
                    </div>
                    <Separator className="bg-gray-800" />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="new-events" className="text-base">
                          New Events
                        </Label>
                        <p className="text-sm text-gray-400">Notifications about new events matching your interests</p>
                      </div>
                      <Switch
                        id="new-events"
                        checked={notificationSettings.newEvents}
                        onCheckedChange={() => handleNotificationChange("newEvents")}
                        className="data-[state=checked]:bg-cyan-600"
                      />
                    </div>
                    <Separator className="bg-gray-800" />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="price-drops" className="text-base">
                          Price Drops
                        </Label>
                        <p className="text-sm text-gray-400">Alerts when ticket prices drop for saved events</p>
                      </div>
                      <Switch
                        id="price-drops"
                        checked={notificationSettings.priceDrops}
                        onCheckedChange={() => handleNotificationChange("priceDrops")}
                        className="data-[state=checked]:bg-cyan-600"
                      />
                    </div>
                  </div>
                </CardContent>
              </CyberCard>
            </div>

            <div className="flex justify-end mt-8">
              <CyberButton variant="cyan">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </CyberButton>
            </div>
          </TabsContent>

          <TabsContent value="appearance">
            <CyberCard variant="gradient" className="max-w-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-cyan-400" />
                  Appearance Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="dark-mode" className="text-base flex items-center gap-2">
                        <Moon className="h-4 w-4 text-cyan-400" />
                        Dark Mode
                      </Label>
                      <p className="text-sm text-gray-400">Use dark theme throughout the application</p>
                    </div>
                    <Switch
                      id="dark-mode"
                      checked={appearanceSettings.darkMode}
                      onCheckedChange={() => handleAppearanceChange("darkMode")}
                      className="data-[state=checked]:bg-cyan-600"
                    />
                  </div>
                  <Separator className="bg-gray-800" />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="animations" className="text-base flex items-center gap-2">
                        <Zap className="h-4 w-4 text-cyan-400" />
                        Animations
                      </Label>
                      <p className="text-sm text-gray-400">Enable animations and transitions</p>
                    </div>
                    <Switch
                      id="animations"
                      checked={appearanceSettings.animations}
                      onCheckedChange={() => handleAppearanceChange("animations")}
                      className="data-[state=checked]:bg-cyan-600"
                    />
                  </div>
                  <Separator className="bg-gray-800" />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="high-contrast" className="text-base flex items-center gap-2">
                        <Sun className="h-4 w-4 text-cyan-400" />
                        High Contrast
                      </Label>
                      <p className="text-sm text-gray-400">Increase contrast for better visibility</p>
                    </div>
                    <Switch
                      id="high-contrast"
                      checked={appearanceSettings.highContrast}
                      onCheckedChange={() => handleAppearanceChange("highContrast")}
                      className="data-[state=checked]:bg-cyan-600"
                    />
                  </div>
                  <Separator className="bg-gray-800" />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="reduced-motion" className="text-base flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-cyan-400" />
                        Reduced Motion
                      </Label>
                      <p className="text-sm text-gray-400">Minimize animations for accessibility</p>
                    </div>
                    <Switch
                      id="reduced-motion"
                      checked={appearanceSettings.reducedMotion}
                      onCheckedChange={() => handleAppearanceChange("reducedMotion")}
                      className="data-[state=checked]:bg-cyan-600"
                    />
                  </div>
                </div>
              </CardContent>
            </CyberCard>

            <div className="flex justify-end mt-8">
              <CyberButton variant="cyan">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </CyberButton>
            </div>
          </TabsContent>

          <TabsContent value="security">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CyberCard variant="gradient">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-cyan-400" />
                    Password Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input
                        id="current-password"
                        type="password"
                        className="bg-gray-900/50 border-gray-700 focus:border-cyan-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input
                        id="new-password"
                        type="password"
                        className="bg-gray-900/50 border-gray-700 focus:border-cyan-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        className="bg-gray-900/50 border-gray-700 focus:border-cyan-500"
                      />
                    </div>
                    <CyberButton variant="cyan" className="w-full">
                      Update Password
                    </CyberButton>
                  </form>
                </CardContent>
              </CyberCard>

              <CyberCard variant="gradient">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-cyan-400" />
                    Security Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="2fa" className="text-base">
                          Two-Factor Authentication
                        </Label>
                        <p className="text-sm text-gray-400">Add an extra layer of security to your account</p>
                      </div>
                      <Switch
                        id="2fa"
                        checked={securitySettings.twoFactor}
                        onCheckedChange={() => handleSecurityChange("twoFactor")}
                        className="data-[state=checked]:bg-cyan-600"
                      />
                    </div>
                    <Separator className="bg-gray-800" />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="login-alerts" className="text-base">
                          Login Alerts
                        </Label>
                        <p className="text-sm text-gray-400">Get notified of new login attempts</p>
                      </div>
                      <Switch
                        id="login-alerts"
                        checked={securitySettings.loginAlerts}
                        onCheckedChange={() => handleSecurityChange("loginAlerts")}
                        className="data-[state=checked]:bg-cyan-600"
                      />
                    </div>
                    <Separator className="bg-gray-800" />
                    <div className="space-y-2">
                      <Label htmlFor="session-timeout" className="text-base">
                        Session Timeout (minutes)
                      </Label>
                      <p className="text-sm text-gray-400 mb-2">Automatically log out after inactivity</p>
                      <select
                        id="session-timeout"
                        value={securitySettings.sessionTimeout}
                        onChange={handleSessionTimeoutChange}
                        className="w-full h-10 px-3 rounded-md bg-gray-900/50 border border-gray-700 focus:border-cyan-500"
                      >
                        <option value="15">15 minutes</option>
                        <option value="30">30 minutes</option>
                        <option value="60">1 hour</option>
                        <option value="120">2 hours</option>
                        <option value="never">Never</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </CyberCard>
            </div>

            <CyberCard variant="gradient" className="mt-8 max-w-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-400">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                  Danger Zone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <Button
                  variant="destructive"
                  className="bg-red-900/30 hover:bg-red-900/50 text-red-300 border border-red-900/50"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Account
                </Button>
              </CardContent>
            </CyberCard>
          </TabsContent>

          <TabsContent value="payment">
            <CyberCard variant="gradient" className="max-w-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-cyan-400" />
                  Payment Methods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-cyan-900/30 flex items-center justify-center neon-glow neon-cyan">
                        <CreditCard className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-sm text-gray-400">Expires 12/25</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="h-8 border-gray-700">
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 border-gray-700 text-red-400 hover:text-red-300 hover:bg-red-900/20"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>

                  <Button className="w-full bg-cyan-900/30 hover:bg-cyan-900/50 text-cyan-300 border border-cyan-900/50">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Add Payment Method
                  </Button>
                </div>
              </CardContent>
            </CyberCard>

            <CyberCard variant="gradient" className="mt-8 max-w-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  Billing Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="billing-name">Full Name</Label>
                    <Input
                      id="billing-name"
                      defaultValue="John Doe"
                      className="bg-gray-900/50 border-gray-700 focus:border-cyan-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="billing-email">Email</Label>
                    <Input
                      id="billing-email"
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="bg-gray-900/50 border-gray-700 focus:border-cyan-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="billing-address">Address</Label>
                    <Input
                      id="billing-address"
                      defaultValue="123 Main Street"
                      className="bg-gray-900/50 border-gray-700 focus:border-cyan-500"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="billing-city">City</Label>
                      <Input
                        id="billing-city"
                        defaultValue="Mumbai"
                        className="bg-gray-900/50 border-gray-700 focus:border-cyan-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billing-state">State</Label>
                      <Input
                        id="billing-state"
                        defaultValue="Maharashtra"
                        className="bg-gray-900/50 border-gray-700 focus:border-cyan-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billing-zip">Postal Code</Label>
                      <Input
                        id="billing-zip"
                        defaultValue="400001"
                        className="bg-gray-900/50 border-gray-700 focus:border-cyan-500"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <CyberButton variant="cyan">
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </CyberButton>
                  </div>
                </form>
              </CardContent>
            </CyberCard>
          </TabsContent>
        </Tabs>
      </div>
    </ParticleBackground>
  )
}

