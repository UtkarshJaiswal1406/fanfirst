import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQAccordion() {
  const faqs = [
    {
      question: "What is PriorityPass?",
      answer:
        "PriorityPass is an AI-powered ticketing platform that ensures true fans get priority access to events they love. By analyzing your streaming habits and event participation, we calculate a Fan Score that determines your access tier for ticket purchases.",
    },
    {
      question: "How is my Fan Score calculated?",
      answer:
        "Your Fan Score is calculated based on your engagement with content across connected streaming platforms like Spotify, YouTube, and Disney+ Hotstar. We analyze factors like viewing time, listening habits, and event attendance to generate a score that reflects your genuine interest in artists, teams, or genres.",
    },
    {
      question: "What are the different Fan Score tiers?",
      answer:
        "There are four tiers: Platinum (900+ points), Gold (700+ points), Silver (500+ points), and General (0+ points). Higher tiers get earlier access to ticket sales, with Platinum members getting access 48 hours before general sale.",
    },
    {
      question: "Is my streaming data secure?",
      answer:
        "Yes, we take data privacy very seriously. Your streaming data is only used to calculate your Fan Score and is never sold to third parties. We use industry-standard encryption and security practices to protect your information.",
    },
    {
      question: "How does blockchain ticketing work?",
      answer:
        "Our tickets are secured using blockchain technology, which creates a unique, tamper-proof digital ticket for each purchase. This prevents duplication, scalping, and fraud, ensuring that only legitimate ticket holders can attend events.",
    },
    {
      question: "Can I transfer my tickets to someone else?",
      answer:
        "Tickets are linked to your PriorityPass account and cannot be transferred to prevent scalping. However, we offer an official resale platform where you can list your ticket at face value if you can't attend an event.",
    },
    {
      question: "What happens if I can't attend an event?",
      answer:
        "While tickets are non-refundable, you can list them on our official resale platform at face value. This maintains ticket integrity while giving you an option if you can't attend.",
    },
    {
      question: "How can I improve my Fan Score?",
      answer:
        "Connect more streaming platforms, engage with content related to your favorite artists/teams, attend events, and participate in the PriorityPass community to increase your Fan Score over time.",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-gray-800">
          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

