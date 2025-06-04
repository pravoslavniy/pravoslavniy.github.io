export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Popescu",
    role: "Agricultural Engineer",
    content: "The Agro Drone course completely transformed how I approach crop monitoring. The skills I learned have increased efficiency on our farm by at least 30%. Highly recommend for any agricultural professional!",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=maria1"
  },
  {
    id: 2,
    name: "Alexandru Ionescu",
    role: "Professional Drone Racer",
    content: "Joining the Sports Drone Piloting Club was the best decision I've made. The training is top-notch, and I've gone from a complete beginner to competing in national championships in just 8 months.",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=alex1"
  },
  {
    id: 3,
    name: "Elena Dumitrescu",
    role: "Videographer",
    content: "The FPV course opened up a whole new world of creative possibilities for my video production business. The instructors are incredibly knowledgeable and patient. Worth every penny!",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=elena1"
  },
  {
    id: 4,
    name: "Mihai Stanescu",
    role: "Drone Engineer",
    content: "I came to the Engineering School with basic electronics knowledge and left with the ability to design and build custom drones from scratch. The hands-on approach to learning was exactly what I needed.",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=mihai1"
  },
  {
    id: 5,
    name: "Cristina Vasile",
    role: "Real Estate Photographer",
    content: "As someone who needed drone skills for my business, the Drone Piloting course was perfect. Clear instruction, plenty of practice time, and now I'm confidently capturing stunning aerial property photos.",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=cristina1"
  },
  {
    id: 6,
    name: "Andrei Munteanu",
    role: "Environmental Scientist",
    content: "The academy's courses are exceptional. I use the skills I learned daily for environmental monitoring. The instructors' expertise and the practical approach to teaching make all the difference.",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=andrei1"
  }
];

