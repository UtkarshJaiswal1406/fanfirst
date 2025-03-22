"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Event Added",
      message: "Taylor Swift added a new concert in your area.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      title: "Ticket Available",
      message: "Tickets for NBA Finals are now available for purchase.",
      time: "1 day ago",
      read: false,
    },
    {
      id: 3,
      title: "Fan Score Updated",
      message: "Your fan score has increased to Platinum level!",
      time: "3 days ago",
      read: true,
    },
  ])

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full hover:bg-[#00c3ff]/10 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Bell className="h-5 w-5 text-[#00c3ff]" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-[#00c3ff] text-white text-xs flex items-center justify-center rounded-full">
            {unreadCount}
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-80 bg-gray-900/90 backdrop-blur-md border border-[#00c3ff]/20 rounded-lg shadow-lg overflow-hidden z-50"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 500, damping: 30 }}
          >
            <div className="p-4 border-b border-gray-800 flex justify-between items-center">
              <h3 className="font-medium">Notifications</h3>
              {unreadCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-[#00c3ff] hover:text-[#00c3ff] hover:bg-[#00c3ff]/10"
                  onClick={markAllAsRead}
                >
                  Mark all as read
                </Button>
              )}
            </div>

            <div className="max-h-80 overflow-y-auto">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    className={`p-4 border-b border-gray-800 hover:bg-[#00c3ff]/5 transition-colors ${
                      !notification.read ? "bg-[#00c3ff]/10" : ""
                    }`}
                    whileHover={{ x: 5 }}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-sm">{notification.title}</h4>
                      <span className="text-xs text-gray-500">{notification.time}</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{notification.message}</p>
                  </motion.div>
                ))
              ) : (
                <div className="p-4 text-center text-gray-500">No notifications</div>
              )}
            </div>

            <div className="p-3 border-t border-gray-800 text-center">
              <Link
                href="/notifications"
                className="text-sm text-[#00c3ff] hover:underline"
                onClick={() => setIsOpen(false)}
              >
                View all notifications
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

