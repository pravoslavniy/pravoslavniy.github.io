import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Card, CardBody, Tabs, Tab } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { courses } from '../data/courses';

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(c => c.id === id);
  
  if (!course) {
    return (
      <div className="container mx-auto px-4 py-20">
        <Card>
          <CardBody className="py-12 text-center">
            <Icon icon="lucide:alert-circle" className="text-4xl text-danger mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
            <p className="text-foreground-500 mb-6">
              The course you're looking for doesn't exist or has been removed.
            </p>
            <Button 
              as={Link}
              to="/courses"
              color="primary"
            >
              Browse All Courses
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-content2 py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-content2 via-content2/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/courses" className="text-primary flex items-center gap-1">
                <Icon icon="lucide:arrow-left" />
                <span>Back to Courses</span>
              </Link>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {course.title}
            </motion.h1>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 bg-content1 px-3 py-1 rounded-full">
                <Icon icon="lucide:clock" className="text-primary" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-content1 px-3 py-1 rounded-full">
                <Icon icon="lucide:bar-chart-2" className="text-primary" />
                <span>{course.level}</span>
              </div>
              <div className="flex items-center gap-2 bg-content1 px-3 py-1 rounded-full">
                <Icon icon="lucide:tag" className="text-primary" />
                <span>{course.price}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs aria-label="Course content" variant="underlined" color="primary">
                <Tab key="overview" title="Overview">
                  <Card>
                    <CardBody className="p-6">
                      <h2 className="text-2xl font-semibold mb-4">Course Overview</h2>
                      <p className="text-foreground-600 mb-6">{course.fullDescription}</p>
                      
                      <h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {course.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Icon icon="lucide:check" className="text-primary mt-1" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3">Course Curriculum</h3>
                      <div className="space-y-4">
                        {course.curriculum.map((section, index) => (
                          <Card key={index} className="border border-divider">
                            <CardBody className="p-4">
                              <h4 className="font-semibold mb-2">{section.title}</h4>
                              <ul className="space-y-2">
                                {section.lessons.map((lesson, lessonIndex) => (
                                  <li key={lessonIndex} className="flex items-start gap-2">
                                    <Icon icon="lucide:file-text" className="text-primary mt-1" />
                                    <span>{lesson}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardBody>
                          </Card>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="instructors" title="Instructors">
                  <Card>
                    <CardBody className="p-6">
                      <h2 className="text-2xl font-semibold mb-6">Course Instructors</h2>
                      
                      <div className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <img 
                            src="https://img.heroui.chat/image/avatar?w=200&h=200&u=instructor1" 
                            alt="Instructor" 
                            className="w-32 h-32 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="text-xl font-semibold mb-1">Alexandru Dragomir</h3>
                            <p className="text-primary mb-3">Lead Instructor</p>
                            <p className="text-foreground-600 mb-3">
                              With over 10 years of experience in drone technology and operations, Alexandru specializes in advanced flight techniques and agricultural applications. He holds multiple international certifications and has trained over 500 pilots.
                            </p>
                            <div className="flex gap-3">
                              <Button 
                                isIconOnly 
                                variant="light" 
                                aria-label="LinkedIn"
                              >
                                <Icon icon="lucide:linkedin" className="text-foreground-500" />
                              </Button>
                              <Button 
                                isIconOnly 
                                variant="light" 
                                aria-label="Email"
                              >
                                <Icon icon="lucide:mail" className="text-foreground-500" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row gap-6">
                          <img 
                            src="https://img.heroui.chat/image/avatar?w=200&h=200&u=instructor2" 
                            alt="Instructor" 
                            className="w-32 h-32 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="text-xl font-semibold mb-1">Maria Ionescu</h3>
                            <p className="text-primary mb-3">Technical Specialist</p>
                            <p className="text-foreground-600 mb-3">
                              Maria is an expert in drone engineering and maintenance with a background in aerospace engineering. She specializes in custom drone building, modifications, and troubleshooting for specialized applications.
                            </p>
                            <div className="flex gap-3">
                              <Button 
                                isIconOnly 
                                variant="light" 
                                aria-label="LinkedIn"
                              >
                                <Icon icon="lucide:linkedin" className="text-foreground-500" />
                              </Button>
                              <Button 
                                isIconOnly 
                                variant="light" 
                                aria-label="Email"
                              >
                                <Icon icon="lucide:mail" className="text-foreground-500" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="reviews" title="Reviews">
                  <Card>
                    <CardBody className="p-6">
                      <h2 className="text-2xl font-semibold mb-6">Student Reviews</h2>
                      
                      <div className="space-y-6">
                        <div className="border-b border-divider pb-6">
                          <div className="flex items-center gap-3 mb-3">
                            <img 
                              src="https://img.heroui.chat/image/avatar?w=100&h=100&u=review1" 
                              alt="Student" 
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="font-semibold">Andrei Popescu</h4>
                              <div className="flex items-center text-warning">
                                <Icon icon="lucide:star" />
                                <Icon icon="lucide:star" />
                                <Icon icon="lucide:star" />
                                <Icon icon="lucide:star" />
                                <Icon icon="lucide:star" />
                              </div>
                            </div>
                          </div>
                          <p className="text-foreground-600">
                            "This course exceeded all my expectations. The instructors are incredibly knowledgeable and patient, and the hands-on approach to learning made complex concepts easy to understand. I now feel confident operating drones for my business needs."
                          </p>
                        </div>
                        
                        <div className="border-b border-divider pb-6">
                          <div className="flex items-center gap-3 mb-3">
                            <img 
                              src="https://img.heroui.chat/image/avatar?w=100&h=100&u=review2" 
                              alt="Student" 
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="font-semibold">Elena Dumitrescu</h4>
                              <div className="flex items-center text-warning">
                                <Icon icon="lucide:star" />
                                <Icon icon="lucide:star" />
                                <Icon icon="lucide:star" />
                                <Icon icon="lucide:star" />
                                <Icon icon="lucide:star-half" />
                              </div>
                            </div>
                          </div>
                          <p className="text-foreground-600">
                            "The curriculum is comprehensive and well-structured. I particularly appreciated the focus on both theoretical knowledge and practical skills. The facility is top-notch with all the latest equipment. Highly recommend for anyone serious about drone technology."
                          </p>
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <img 
                              src="https://img.heroui.chat/image/avatar?w=100&h=100&u=review3" 
                              alt="Student" 
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="font-semibold">Mihai Stanescu</h4>
                              <div className="flex items-center text-warning">
                                <Icon icon="lucide:star" />
                                <Icon icon="lucide:star" />
                                <Icon icon="lucide:star" />
                                <Icon icon="lucide:star" />
                                <Icon icon="lucide:star" />
                              </div>
                            </div>
                          </div>
                          <p className="text-foreground-600">
                            "As someone transitioning careers into drone technology, this course provided exactly what I needed. The instructors were supportive and the community of fellow students was invaluable. I've already secured my first client thanks to the skills and connections I made here."
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>
            
            <div>
              <Card className="sticky top-24">
                <CardBody className="p-6">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  
                  <div className="text-2xl font-bold mb-6 text-center">
                    {course.price}
                  </div>
                  
                  <Button 
                    color="primary"
                    size="lg"
                    fullWidth
                    className="mb-4"
                  >
                    Enroll Now
                  </Button>
                  
                  <Button 
                    variant="flat"
                    size="lg"
                    fullWidth
                    className="mb-6"
                  >
                    Download Syllabus
                  </Button>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon icon="lucide:calendar" className="text-primary" />
                      <div>
                        <p className="font-semibold">Next Start Date</p>
                        <p className="text-foreground-500">June 15, 2023</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Icon icon="lucide:users" className="text-primary" />
                      <div>
                        <p className="font-semibold">Class Size</p>
                        <p className="text-foreground-500">Maximum 12 students</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Icon icon="lucide:map-pin" className="text-primary" />
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-foreground-500">Bucharest Campus</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Icon icon="lucide:certificate" className="text-primary" />
                      <div>
                        <p className="font-semibold">Certification</p>
                        <p className="text-foreground-500">Included</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-divider">
                    <p className="text-center text-foreground-500 mb-4">
                      Have questions about this course?
                    </p>
                    <Button 
                      variant="light"
                      fullWidth
                      startContent={<Icon icon="lucide:message-circle" />}
                    >
                      Contact an Advisor
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-20 bg-content2">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Related Courses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses
              .filter(c => c.id !== course.id)
              .slice(0, 3)
              .map((relatedCourse, index) => (
                <motion.div
                  key={relatedCourse.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    isPressable
                    as={Link}
                    to={`/courses/${relatedCourse.id}`}
                    className="h-full"
                  >
                    <CardBody className="p-0">
                      <img 
                        src={relatedCourse.image} 
                        alt={relatedCourse.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-5">
                        <h3 className="text-xl font-semibold mb-2">{relatedCourse.title}</h3>
                        <p className="text-foreground-500 mb-4">{relatedCourse.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1">
                            <Icon icon="lucide:clock" className="text-primary" />
                            <span className="text-sm">{relatedCourse.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon icon="lucide:bar-chart-2" className="text-primary" />
                            <span className="text-sm">{relatedCourse.level}</span>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;
