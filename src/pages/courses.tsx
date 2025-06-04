import React from 'react';
import { Tabs, Tab, Card, CardBody, Input, Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import SectionHeading from '../components/ui/section-heading';
import CourseCard from '../components/ui/course-card';
import { courses } from '../data/courses';

const CoursesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === 'all') return matchesSearch;
    
    const categoryMap: {[key: string]: string[]} = {
      'beginner': ['Beginner'],
      'intermediate': ['Intermediate'],
      'advanced': ['Advanced', 'All Levels'],
    };
    
    return matchesSearch && categoryMap[selectedCategory]?.includes(course.level);
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-content2 py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img.heroui.chat/image/drone?w=1920&h=600&u=courses1" 
            alt="Our Courses" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-content2 via-content2/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Courses
            </motion.h1>
            <motion.p 
              className="text-xl mb-6 text-foreground-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Comprehensive drone training programs designed for all skill levels and interests.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="w-full md:w-2/3">
              <Input
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                startContent={<Icon icon="lucide:search" className="text-default-400" />}
                clearable
                onClear={() => setSearchQuery('')}
              />
            </div>
            <div className="w-full md:w-1/3">
              <Tabs 
                selectedKey={selectedCategory} 
                onSelectionChange={(key) => setSelectedCategory(key as string)}
                variant="light"
                color="primary"
                fullWidth
              >
                <Tab key="all" title="All Levels" />
                <Tab key="beginner" title="Beginner" />
                <Tab key="intermediate" title="Intermediate" />
                <Tab key="advanced" title="Advanced" />
              </Tabs>
            </div>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
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
          ) : (
            <Card className="w-full">
              <CardBody className="py-12 text-center">
                <Icon icon="lucide:search-x" className="text-4xl text-foreground-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                <p className="text-foreground-500 mb-6">
                  We couldn't find any courses matching your search criteria.
                </p>
                <Button 
                  color="primary" 
                  variant="flat"
                  onPress={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                >
                  Clear Filters
                </Button>
              </CardBody>
            </Card>
          )}
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-20 bg-content2">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why Choose Our Courses" 
            subtitle="We offer a comprehensive approach to drone education that sets us apart."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
                      <Icon icon="lucide:users" className="text-3xl text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
                  <p className="text-foreground-500">Learn from certified professionals with years of real-world experience in drone operations across various industries.</p>
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
                      <Icon icon="lucide:book-open" className="text-3xl text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Comprehensive Curriculum</h3>
                  <p className="text-foreground-500">Our courses cover both theoretical knowledge and practical skills, ensuring you're fully prepared for real-world applications.</p>
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
                  <h3 className="text-xl font-semibold mb-3">Latest Technology</h3>
                  <p className="text-foreground-500">Train with the most current drone models and equipment, keeping you at the forefront of technological advancements.</p>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our courses and enrollment process."
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <Card className="mb-4">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-2">Do I need my own drone to take a course?</h3>
                <p className="text-foreground-500">
                  No, we provide all necessary equipment for our courses. However, if you have your own drone, you're welcome to bring it and learn with the equipment you'll be using after the course.
                </p>
              </CardBody>
            </Card>
            
            <Card className="mb-4">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-2">Are there any prerequisites for the courses?</h3>
                <p className="text-foreground-500">
                  Our beginner courses have no prerequisites. For intermediate and advanced courses, we recommend having basic drone piloting skills or completing our beginner courses first.
                </p>
              </CardBody>
            </Card>
            
            <Card className="mb-4">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-2">Do you offer certification?</h3>
                <p className="text-foreground-500">
                  Yes, all our courses include certificates of completion. Additionally, we offer preparation for official drone pilot licenses in accordance with Romanian and EU regulations.
                </p>
              </CardBody>
            </Card>
            
            <Card className="mb-4">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-2">How long are the courses?</h3>
                <p className="text-foreground-500">
                  Course duration varies from 3 weeks for beginner programs to 12 weeks for advanced engineering courses. We also offer flexible scheduling options for working professionals.
                </p>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-2">What payment options do you offer?</h3>
                <p className="text-foreground-500">
                  We accept one-time payments and installment plans. We also offer scholarships for qualified applicants and special rates for group enrollments from the same organization.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Start Your Drone Journey?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-white/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Enroll today and take the first step toward mastering drone technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button 
                color="default"
                variant="solid"
                size="lg"
                className="bg-white text-primary"
              >
                Enroll Now
              </Button>
              <Button 
                variant="bordered"
                size="lg"
                className="border-white text-white"
              >
                Request Information
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
