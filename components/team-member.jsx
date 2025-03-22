import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TeamMember({ member }) {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <CardContent className="pt-4">
        <h3 className="font-semibold text-lg">{member.name}</h3>
        <p className="text-purple-400 text-sm mb-2">{member.role}</p>
        <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Twitter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Mail className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

