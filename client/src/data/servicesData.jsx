import { Users, GraduationCap, Plane, Home, FileText, MapPin } from 'lucide-react';
import React from 'react';

export const coreServices = [
  {
    icon: <Users className="w-12 h-12" />,
    title: "Career Counseling",
    description: "Helping students identify the right path based on passion, strength, and goals.",
    features: [
      "Personality assessment",
      "Career path mapping",
      "Goal setting sessions",
      "Industry insights"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: "University Application",
    description: "School selection, documentation, and deadline management.",
    features: [
      "University selection guidance",
      "Application strategy",
      "Document preparation",
      "Deadline management"
    ],
    color: "from-green-500 to-green-600"
  },
  {
    icon: <Plane className="w-12 h-12" />,
    title: "Visa Application",
    description: "End-to-end visa support, including coaching and paperwork help.",
    features: [
      "Visa documentation",
      "Interview preparation",
      "Application submission",
      "Follow-up support"
    ],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: <Home className="w-12 h-12" />,
    title: "Accommodation",
    description: "Safe and budget-friendly housing options arranged before departure.",
    features: [
      "Housing research",
      "Booking assistance",
      "Safety verification",
      "Budget optimization"
    ],
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: <FileText className="w-12 h-12" />,
    title: "Pre-Departure Briefing",
    description: "Travel checklists, cultural insights, and settling-in guidance.",
    features: [
      "Travel preparation",
      "Cultural orientation",
      "Document checklists",
      "Local area guidance"
    ],
    color: "from-red-500 to-pink-500"
  },
  {
    icon: <MapPin className="w-12 h-12" />,
    title: "Flight Arrangement",
    description: "Booking assistance with student-friendly pricing.",
    features: [
      "Flight comparison",
      "Student discounts",
      "Booking support",
      "Travel insurance"
    ],
    color: "from-indigo-500 to-purple-500"
  }
];