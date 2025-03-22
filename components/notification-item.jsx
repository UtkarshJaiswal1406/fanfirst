"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy, Gift, Bell, AlertTriangle, MoreVertical, Check, Trash } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function NotificationItem({ notification }) {
  const [isRead, setIsRead] = useState(notification.read)
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  const getIcon = () => {
    switch (notification.type) {
      case "event":
        return <Calendar className="h-5 w-5 text-blue-400" />
      case "fanScore":
        return <Trophy className="h-5 w-5 text-purple-400" />
      case "reward":
        return <Gift className="h-5 w-5 text-yellow-400" />
      case "system":
        return <AlertTriangle className="h-5 w-5 text-red-400" />
      default:
        return <Bell className="h-5 w-5 text-gray-400" />
    }
  }

  const getBadgeText = () => {
    switch (notification.type) {
      case "event":
        return "Event"
      case "fanScore":
        return "Fan Score"
      case "reward":
        return "Reward"
      case "system":
        return "System"
      default:
        return "Notification"
    }
  }

  const getBadgeColor = () => {
    switch (notification.type) {
      case "event":
        return "bg-blue-900 text-blue-300 border-blue-800"
      case "fanScore":
        return "bg-purple-900 text-purple-300 border-purple-800"
      case "reward":
        return "bg-yellow-900 text-yellow-300 border-yellow-800"
      case "system":
        return "bg-red-900 text-red-300 border-red-800"
      default:
        return "bg-gray-900 text-gray-300 border-gray-800"
    }
  }

  const markAsRead = () => {
    setIsRead(true)
    // Here you would typically call an API to update the notification status
  }

  const deleteNotification = () => {
    setIsVisible(false)
    // Here you would typically call an API to delete the notification
  }

  return (
    <Card className={`bg-gray-900 border-gray-800 ${!isRead ? "border-l-4 border-l-purple-600" : ""}`}>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div
            className={`w-10 h-10 rounded-full ${getBadgeColor().split(" ")[0]} flex items-center justify-center shrink-0`}
          >
            {getIcon()}
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold">{notification.title}</h3>
                  <Badge variant="outline" className={`text-xs ${getBadgeColor()}`}>
                    {getBadgeText()}
                  </Badge>
                </div>
                <p className="text-gray-400 text-sm mb-3">{notification.message}</p>
                <p className="text-xs text-gray-500">{notification.date}</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {!isRead && (
                    <DropdownMenuItem onClick={markAsRead}>
                      <Check className="mr-2 h-4 w-4" />
                      <span>Mark as read</span>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={deleteNotification}>
                    <Trash className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {notification.actionUrl && notification.actionText && (
              <div className="mt-4">
                <Link href={notification.actionUrl}>
                  <Button size="sm">{notification.actionText}</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

