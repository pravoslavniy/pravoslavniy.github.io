export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "new-fpv-course",
    title: "New Advanced FPV Course Launching Next Month",
    excerpt: "We're excited to announce our new advanced FPV drone piloting course starting next month.",
    content: "We're thrilled to announce the launch of our most advanced FPV drone piloting course yet. Starting next month, experienced pilots can take their skills to the next level with our comprehensive program covering cinematic techniques, advanced maneuvers, and professional-grade equipment. The course will be led by internationally recognized FPV pilot and filmmaker, Adrian Munteanu, whose work has been featured in major productions worldwide. Limited spots available, so register early to secure your place!",
    image: "https://img.heroui.chat/image/drone?w=800&h=500&u=news1",
    date: "May 15, 2023",
    category: "Courses"
  },
  {
    id: "drone-competition-winners",
    title: "Drone Academy Students Win National Competition",
    excerpt: "Our students took home top prizes at this year's National Drone Racing Championship.",
    content: "We're incredibly proud to announce that Drone Academy students dominated this year's National Drone Racing Championship, taking home first, second, and fourth places in the professional category. Led by coach Mihai Dragomir, our racing team demonstrated exceptional skill, strategy, and sportsmanship throughout the three-day event. Special congratulations to Alexandru Ionescu for his gold medal performance, setting a new national record in the obstacle course. This achievement highlights the quality of our Sports Drone Piloting program and the dedication of our students and instructors.",
    image: "https://img.heroui.chat/image/drone?w=800&h=500&u=news2",
    date: "April 28, 2023",
    category: "Achievements"
  },
  {
    id: "agricultural-partnership",
    title: "New Partnership with Agricultural Research Institute",
    excerpt: "Drone Academy partners with the National Agricultural Research Institute for innovative drone applications.",
    content: "We're excited to announce our new strategic partnership with the National Agricultural Research Institute. This collaboration will focus on developing innovative drone applications for precision agriculture, crop monitoring, and environmental assessment. As part of this partnership, our Agro Drone students will have unique opportunities to participate in real-world research projects, gaining invaluable experience while contributing to advancements in sustainable farming practices. The institute will also provide specialized equipment and expertise to enhance our agricultural drone training programs.",
    image: "https://img.heroui.chat/image/drone?w=800&h=500&u=news3",
    date: "April 10, 2023",
    category: "Partnerships"
  },
  {
    id: "summer-camp",
    title: "Summer Drone Camp for Teenagers Announced",
    excerpt: "Registration now open for our popular summer drone camp program for ages 13-17.",
    content: "Registration is now open for our annual Summer Drone Camp for teenagers aged 13-17! This two-week program introduces young enthusiasts to the exciting world of drones through hands-on activities, basic flight training, simple programming, and fun competitions. Participants will learn from our experienced instructors in a safe, supportive environment while making friends who share their passion for technology. The camp runs in two sessions: July 10-21 and August 7-18. Early bird discounts available until May 31. Spaces fill quickly, so secure your spot today!",
    image: "https://img.heroui.chat/image/drone?w=800&h=500&u=news4",
    date: "March 22, 2023",
    category: "Events"
  },
  {
    id: "new-facility",
    title: "Drone Academy Opens New Training Facility",
    excerpt: "Our state-of-the-art training center features indoor flying areas, simulation labs, and more.",
    content: "We're proud to announce the grand opening of our new state-of-the-art training facility in Bucharest. The 2,500 square meter complex features a large indoor flying arena, advanced simulation labs, engineering workshops, classrooms equipped with the latest technology, and a dedicated FPV course. This expansion allows us to accommodate more students while providing an even higher quality of training across all our programs. The facility also includes a drone retail shop and service center. Join us for the official opening ceremony on June 1st, featuring demonstrations, workshops, and special enrollment offers.",
    image: "https://img.heroui.chat/image/drone?w=800&h=500&u=news5",
    date: "March 5, 2023",
    category: "Facilities"
  },
  {
    id: "regulatory-update",
    title: "Important Drone Regulation Updates for 2023",
    excerpt: "Stay informed about the latest changes to drone regulations affecting pilots in Romania.",
    content: "The Romanian Civil Aviation Authority has announced significant updates to drone regulations effective July 1, 2023. These changes affect registration requirements, operational limitations, and certification processes for both recreational and commercial drone pilots. To help our community navigate these changes, we're hosting a free informational webinar on June 15th at 6:00 PM. Our regulatory experts will explain the new rules, answer questions, and provide guidance on compliance. All current and prospective drone pilots are encouraged to attend. Registration for the webinar is available on our website.",
    image: "https://img.heroui.chat/image/drone?w=800&h=500&u=news6",
    date: "February 18, 2023",
    category: "Regulations"
  }
];

