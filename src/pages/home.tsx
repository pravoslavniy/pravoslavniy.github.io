import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import SectionHeading from '../components/ui/section-heading';
import CourseCard from '../components/ui/course-card';
import TestimonialCard from '../components/ui/testimonial-card';
import NewsCard from '../components/ui/news-card';
import { courses } from '../data/courses';
import { testimonials } from '../data/testimonials';
import { newsItems } from '../data/news';

const HomePage: React.FC = () => {
  const featuredCourses = courses.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);
  const latestNews = newsItems.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-content2 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img.heroui.chat/image/drone?w=1920&h=1080&u=hero1" 
            alt="Drone Academy" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Master the Art of Drone Technology
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join Romania's premier drone academy and unlock new possibilities in aerial technology, from agriculture to cinematography.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                as={Link}
                to="/courses"
                color="primary" 
                size="lg"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                Explore Courses
              </Button>
              <Button 
                as={Link}
                to="/contact"
                variant="flat" 
                size="lg"
                className="bg-white/20 text-white"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why Choose Drone Academy" 
            subtitle="We combine cutting-edge technology with expert instruction to provide the best drone education experience."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardBody className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon icon="lucide:award" className="text-3xl text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Certified Instructors</h3>
                  <p className="text-foreground-500">Learn from industry professionals with years of experience and internationally recognized certifications.</p>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardBody className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon icon="lucide:layers" className="text-3xl text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Comprehensive Curriculum</h3>
                  <p className="text-foreground-500">Our courses cover everything from basic flight skills to advanced applications across multiple industries.</p>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardBody className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon icon="lucide:cpu" className="text-3xl text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Cutting-Edge Equipment</h3>
                  <p className="text-foreground-500">Train with the latest drone models and technology, ensuring you're prepared for real-world applications.</p>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardBody className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon icon="lucide:users" className="text-3xl text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Supportive Community</h3>
                  <p className="text-foreground-500">Join a network of drone enthusiasts and professionals for ongoing support and collaboration.</p>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full">
                <CardBody className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon icon="lucide:briefcase" className="text-3xl text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Industry Connections</h3>
                  <p className="text-foreground-500">Benefit from our partnerships with leading companies and organizations in the drone industry.</p>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="h-full">
                <CardBody className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon icon="lucide:certificate" className="text-3xl text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Recognized Certification</h3>
                  <p className="text-foreground-500">Earn certificates that are respected throughout the industry and comply with regulatory standards.</p>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-content2">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Featured Courses" 
            subtitle="Discover our most popular drone training programs designed to meet your specific needs and interests."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <CourseCard 
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                image={course.image}
                duration={course.duration}
                level={course.level}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              as={Link}
              to="/courses"
              color="primary" 
              size="lg"
              variant="flat"
              endContent={<Icon icon="lucide:arrow-right" />}
            >
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">1,200+</div>
              <p className="text-white/80">Graduates</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">15</div>
              <p className="text-white/80">Expert Instructors</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <p className="text-white/80">Satisfaction Rate</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <p className="text-white/80">Industry Partners</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What Our Students Say" 
            subtitle="Hear from our graduates about their experiences and success stories with Drone Academy."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                avatar={testimonial.avatar}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-content2 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img.heroui.chat/image/drone?w=1920&h=600&u=cta1" 
            alt="Drone flying" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Take Flight?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-foreground-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Start your drone journey today and unlock new career opportunities in this rapidly growing field.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                as={Link}
                to="/contact"
                color="primary" 
                size="lg"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                Enroll Now
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Latest News" 
            subtitle="Stay updated with the latest developments, events, and announcements from Drone Academy."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <NewsCard 
                key={news.id}
                id={news.id}
                title={news.title}
                excerpt={news.excerpt}
                image={news.image}
                date={news.date}
                category={news.category}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-12">
            <Button 
              as={Link}
              to="/news"
              color="primary" 
              variant="light"
              endContent={<Icon icon="lucide:arrow-right" />}
            >
              View All News
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
