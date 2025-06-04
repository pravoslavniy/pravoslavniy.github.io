export interface Course {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  duration: string;
  level: string;
  price: string;
  features: string[];
  curriculum: {
    title: string;
    lessons: string[];
  }[];
}

export const courses: Course[] = [
  {
    id: "agro-drone",
    title: "Agro Drone",
    description: "Learn how to use drones for agricultural monitoring, crop analysis, and precision farming.",
    fullDescription: "Our Agro Drone course is designed for agricultural professionals who want to leverage drone technology to improve farming efficiency. You'll learn how to use specialized drones for crop monitoring, soil analysis, irrigation planning, and more. The course covers both theoretical knowledge and practical skills needed to implement drone technology in agricultural settings.",
    image: "https://img.heroui.chat/image/drone?w=600&h=400&u=agro1",
    duration: "4 Weeks",
    level: "Intermediate",
    price: "€1,200",
    features: [
      "Drone-based crop health assessment",
      "Multispectral imaging analysis",
      "Precision agriculture techniques",
      "Data processing and interpretation",
      "Regulatory compliance for agricultural drones",
      "Practical field exercises"
    ],
    curriculum: [
      {
        title: "Introduction to Agricultural Drones",
        lessons: [
          "Overview of drone technology in agriculture",
          "Types of agricultural drones",
          "Benefits and limitations",
          "Case studies and success stories"
        ]
      },
      {
        title: "Drone Operation for Agriculture",
        lessons: [
          "Flight planning for field surveys",
          "Weather considerations",
          "Battery management",
          "Emergency procedures"
        ]
      },
      {
        title: "Data Collection and Analysis",
        lessons: [
          "Multispectral and thermal imaging",
          "NDVI and other vegetation indices",
          "Data processing software",
          "Creating prescription maps"
        ]
      },
      {
        title: "Practical Applications",
        lessons: [
          "Crop monitoring and assessment",
          "Irrigation management",
          "Pest and disease detection",
          "Yield estimation"
        ]
      }
    ]
  },
  {
    id: "sports-drone",
    title: "Sports Drone Piloting Club",
    description: "Join our sports drone piloting club to master high-speed drone racing and aerial stunts.",
    fullDescription: "The Sports Drone Piloting Club is perfect for thrill-seekers who want to experience the excitement of drone racing and freestyle flying. Our comprehensive program covers everything from basic flight maneuvers to advanced racing techniques. You'll join a community of passionate drone pilots, participate in regular practice sessions, and even compete in local and national events.",
    image: "https://img.heroui.chat/image/drone?w=600&h=400&u=sports1",
    duration: "Ongoing",
    level: "All Levels",
    price: "€75/month",
    features: [
      "Weekly training sessions",
      "Access to racing tracks",
      "Drone maintenance workshops",
      "Competition preparation",
      "Community events and races",
      "Discounts on equipment"
    ],
    curriculum: [
      {
        title: "Beginner Level",
        lessons: [
          "Basic flight controls",
          "Safety procedures",
          "Equipment overview",
          "Simple maneuvers"
        ]
      },
      {
        title: "Intermediate Level",
        lessons: [
          "Advanced flight techniques",
          "Racing fundamentals",
          "Course navigation",
          "Speed optimization"
        ]
      },
      {
        title: "Advanced Level",
        lessons: [
          "Competitive racing strategies",
          "Freestyle tricks and stunts",
          "Custom drone building",
          "FPV system optimization"
        ]
      },
      {
        title: "Competition Training",
        lessons: [
          "Race simulation",
          "Time trials",
          "Team racing tactics",
          "Mental preparation"
        ]
      }
    ]
  },
  {
    id: "fpv-drone",
    title: "FPV Drone Specialized Courses",
    description: "Immerse yourself in the world of First Person View drone flying with our specialized courses.",
    fullDescription: "Our FPV Drone Specialized Courses offer an immersive experience in the exciting world of First Person View drone flying. From basic FPV principles to advanced cinematic techniques, these courses will transform you into a skilled FPV pilot. Learn to capture breathtaking aerial footage, navigate complex environments, and experience the thrill of seeing the world from your drone's perspective.",
    image: "https://img.heroui.chat/image/drone?w=600&h=400&u=fpv1",
    duration: "6 Weeks",
    level: "Intermediate to Advanced",
    price: "€1,500",
    features: [
      "High-quality FPV equipment provided",
      "Simulator training",
      "Real-world flying scenarios",
      "Video production techniques",
      "Custom drone building workshop",
      "Post-processing skills"
    ],
    curriculum: [
      {
        title: "FPV Fundamentals",
        lessons: [
          "Introduction to FPV systems",
          "Equipment selection and setup",
          "Safety considerations",
          "Simulator training"
        ]
      },
      {
        title: "Basic FPV Flight",
        lessons: [
          "Line-of-sight to FPV transition",
          "Orientation and spatial awareness",
          "Basic maneuvers",
          "Flight practice sessions"
        ]
      },
      {
        title: "Advanced FPV Techniques",
        lessons: [
          "Proximity flying",
          "Obstacle navigation",
          "Speed runs",
          "Freestyle movements"
        ]
      },
      {
        title: "Cinematic FPV",
        lessons: [
          "Camera settings and techniques",
          "Smooth movements",
          "Shot planning and execution",
          "Post-processing workflow"
        ]
      }
    ]
  },
  {
    id: "engineering",
    title: "Engineering School",
    description: "Dive deep into drone engineering, design, and custom building with our comprehensive program.",
    fullDescription: "Our Engineering School is designed for those who want to understand the technical aspects of drone technology. From aerodynamics to electronics, you'll learn everything needed to design, build, and customize your own drones. The program combines theoretical knowledge with hands-on projects, giving you the skills to innovate in this rapidly evolving field.",
    image: "https://img.heroui.chat/image/drone?w=600&h=400&u=engineering1",
    duration: "12 Weeks",
    level: "Advanced",
    price: "€2,200",
    features: [
      "Comprehensive drone building kits",
      "Electronics and soldering workshops",
      "3D design and printing",
      "Flight controller programming",
      "Custom firmware development",
      "Final project showcase"
    ],
    curriculum: [
      {
        title: "Drone Physics and Design",
        lessons: [
          "Aerodynamics fundamentals",
          "Frame design principles",
          "Propulsion systems",
          "Weight distribution and balance"
        ]
      },
      {
        title: "Electronics and Components",
        lessons: [
          "Motors and ESCs",
          "Flight controllers",
          "Power systems",
          "Communication protocols"
        ]
      },
      {
        title: "Assembly and Integration",
        lessons: [
          "Component selection",
          "Soldering techniques",
          "Wiring and connections",
          "Testing procedures"
        ]
      },
      {
        title: "Software and Calibration",
        lessons: [
          "Flight controller configuration",
          "Parameter tuning",
          "Custom firmware options",
          "Telemetry and data logging"
        ]
      }
    ]
  },
  {
    id: "piloting",
    title: "Drone Piloting",
    description: "Master the fundamentals of drone piloting with our comprehensive training program for beginners.",
    fullDescription: "Our Drone Piloting course is the perfect starting point for anyone new to drones. This comprehensive program covers everything from basic controls to advanced maneuvers, safety protocols, and regulatory requirements. By the end of the course, you'll have the confidence and skills to operate drones safely and effectively for both recreational and professional purposes.",
    image: "https://img.heroui.chat/image/drone?w=600&h=400&u=piloting1",
    duration: "3 Weeks",
    level: "Beginner",
    price: "€800",
    features: [
      "Training drones provided",
      "Simulator sessions",
      "Hands-on flight practice",
      "Safety and regulations training",
      "Basic photography techniques",
      "Certification preparation"
    ],
    curriculum: [
      {
        title: "Getting Started",
        lessons: [
          "Drone types and components",
          "Pre-flight checks",
          "Basic controls",
          "Safety procedures"
        ]
      },
      {
        title: "Basic Flight Skills",
        lessons: [
          "Takeoff and landing",
          "Hovering and positioning",
          "Basic maneuvers",
          "Emergency procedures"
        ]
      },
      {
        title: "Intermediate Techniques",
        lessons: [
          "Precision flying",
          "Flight patterns",
          "Environmental awareness",
          "Battery management"
        ]
      },
      {
        title: "Regulations and Best Practices",
        lessons: [
          "Local drone laws",
          "Airspace restrictions",
          "Registration requirements",
          "Insurance considerations"
        ]
      }
    ]
  }
];

