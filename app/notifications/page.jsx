import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Calendar, Trophy, Gift, Settings, Star } from "lucide-react"
import Link from "next/link"
import NotificationItem from "@/components/notification-item"

export default function Notifications() {
  // Sample notification data
  const allNotifications = [
    {
      id: 1,
      type: "event",
      title: "Early Access Available",
      message: "You now have early access to IPL 2024: MI vs CSK tickets. Booking opens 48 hours before general sale.",
      date: "2 hours ago",
      read: false,
      actionUrl: "/event/1",
      actionText: "Book Now",
    },
    {
      id: 2,
      type: "fanScore",
      title: "Fan Score Milestone",
      message: "Congratulations! You've reached 875 points and achieved Platinum tier status.",
      date: "1 day ago",
      read: false,
      actionUrl: "/fan-score",
      actionText: "View Details",
    },
    {
      id: 3,
      type: "reward",
      title: "New Reward Available",
      message: "You've unlocked the 'Meet & Greet Pass' reward. Redeem it for your next event.",
      date: "2 days ago",
      read: true,
      actionUrl: "/rewards",
      actionText: "Redeem",
    },
    {
      id: 4,
      type: "event",
      title: "Price Drop Alert",
      message: "Tickets for Coldplay World Tour have been reduced by 15%. Limited time offer!",
      date: "3 days ago",
      read: true,
      actionUrl: "/event/2",
      actionText: "View Event",
    },
    {
      id: 5,
      type: "system",
      title: "Account Security",
      message: "We've detected a login from a new device. Please verify if this was you.",
      date: "5 days ago",
      read: true,
      actionUrl: "/profile/security",
      actionText: "Review",
    },
  ]

  const unreadNotifications = allNotifications.filter((notification) => !notification.read)
  const eventNotifications = allNotifications.filter((notification) => notification.type === "event")
  const fanScoreNotifications = allNotifications.filter((notification) => notification.type === "fanScore")
  const rewardNotifications = allNotifications.filter((notification) => notification.type === "reward")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <Link href="/profile/notification-settings">
          <Button variant="outline" className="border-gray-700">
            <Settings className="h-4 w-4 mr-2" />
            Notification Settings
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-5 max-w-3xl">
          <TabsTrigger value="all" className="relative">
            All
            {unreadNotifications.length > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-purple-600 h-5 w-5 flex items-center justify-center p-0">
                {unreadNotifications.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="fanScore">Fan Score</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          {allNotifications.length > 0 ? (
            <div className="space-y-4">
              {allNotifications.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <Bell className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No Notifications</h3>
              <p className="text-gray-400">You don't have any notifications yet.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="unread" className="mt-6">
          {unreadNotifications.length > 0 ? (
            <div className="space-y-4">
              {unreadNotifications.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <Bell className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No Unread Notifications</h3>
              <p className="text-gray-400">You've read all your notifications.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="events" className="mt-6">
          {eventNotifications.length > 0 ? (
            <div className="space-y-4">
              {eventNotifications.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No Event Notifications</h3>
              <p className="text-gray-400">You don't have any event notifications yet.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="fanScore" className="mt-6">
          {fanScoreNotifications.length > 0 ? (
            <div className="space-y-4">
              {fanScoreNotifications.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No Fan Score Notifications</h3>
              <p className="text-gray-400">You don't have any Fan Score notifications yet.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="rewards" className="mt-6">
          {rewardNotifications.length > 0 ? (
            <div className="space-y-4">
              {rewardNotifications.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No Reward Notifications</h3>
              <p className="text-gray-400">You don't have any reward notifications yet.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mt-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center shrink-0">
            <Star className="h-6 w-6 text-purple-300" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Get More Personalized Notifications</h3>
            <p className="text-gray-400 mb-4">
              Connect more streaming platforms and update your preferences to receive more relevant notifications about
              events and rewards that match your interests.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/profile">
                <Button variant="outline" className="border-gray-700">
                  Update Preferences
                </Button>
              </Link>
              <Link href="/connect-accounts">
                <Button>Connect Accounts</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

