import React from 'react';
import { Button, Card, CardBody } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import SectionHeading from '../components/ui/section-heading';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Adrian Popescu",
      role: "Founder & CEO",
      image: "https://img.heroui.chat/image/avatar?w=300&h=300&u=adrian1",
      bio: "Former aerospace engineer with 15+ years of experience in drone technology and aviation."
    },
    {
      name: "Elena Ionescu",
      role: "Head of Training",
      image: "https://img.heroui.chat/image/avatar?w=300&h=300&u=elena2",
      bio: "Certified drone instructor with background in educational psychology and curriculum development."
    },
    {
      name: "Mihai Dragomir",
      role: "Technical Director",
      image: "https://img.heroui.chat/image/avatar?w=300&h=300&u=mihai2",
      bio: "Drone engineering expert specializing in custom builds and advanced flight systems."
    },
    {
      name: "Cristina Dumitrescu",
      role: "Operations Manager",
      image: "https://img.heroui.chat/image/avatar?w=300&h=300&u=cristina2",
      bio: "Business administration professional ensuring smooth day-to-day operations of the academy."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-content2 py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img.heroui.chat/image/drone?w=1920&h=600&u=about1" 
            alt="About Drone Academy" 
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
              About Drone Academy
            </motion.h1>
            <motion.p 
              className="text-xl mb-6 text-foreground-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Romania's premier institution for drone education, innovation, and excellence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading 
                title="Our Story" 
                subtitle="From a small workshop to Romania's leading drone training center."
              />
              <div className="space-y-4 text-foreground-600">
                <p>
                  Drone Academy was founded in 2015 by Dr. Adrian Popescu, a former aerospace engineer with a vision to make drone technology accessible to everyone. What started as a small workshop with just three students has grown into Romania's most comprehensive drone education center.
                </p>
                <p>
                  Our journey began with basic piloting courses but quickly expanded to include specialized programs in agricultural applications, aerial photography, racing, and engineering as the demand for drone expertise grew across various industries.
                </p>
                <p>
                  Today, we're proud to have trained over 1,200 students from across Eastern Europe, established partnerships with leading technology companies, and contributed to the advancement of drone applications in agriculture, environmental monitoring, and emergency services.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img 
                src="https://img.heroui.chat/image/drone?w=600&h=400&u=about2" 
                alt="Drone Academy History" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">Since 2015</p>
                <p>Leading drone education</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-content2">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Mission & Vision" 
            subtitle="Driving innovation and excellence in drone technology education."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardBody className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon icon="lucide:target" className="text-2xl text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">Our Mission</h3>
                  </div>
                  <p className="text-foreground-600">
                    To provide world-class drone education that empowers individuals and organizations to harness the full potential of aerial technology safely, ethically, and innovatively. We are committed to developing skilled pilots, engineers, and entrepreneurs who will drive the future of the drone industry.
                  </p>
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
                <CardBody className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon icon="lucide:eye" className="text-2xl text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">Our Vision</h3>
                  </div>
                  <p className="text-foreground-600">
                    To be recognized globally as a center of excellence in drone technology education and innovation. We envision a future where drones are seamlessly integrated into society, enhancing efficiency, safety, and sustainability across industries, with our graduates leading this transformation.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Values" 
            subtitle="The core principles that guide everything we do at Drone Academy."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
                      <Icon icon="lucide:shield" className="text-3xl text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Safety First</h3>
                  <p className="text-foreground-500">We prioritize safety in all aspects of our training and operations, ensuring responsible drone use.</p>
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
                      <Icon icon="lucide:lightbulb" className="text-3xl text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-foreground-500">We embrace cutting-edge technology and continuously evolve our curriculum to stay ahead of industry trends.</p>
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
                      <Icon icon="lucide:star" className="text-3xl text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                  <p className="text-foreground-500">We strive for the highest standards in education, equipment, and student outcomes.</p>
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
                  <h3 className="text-xl font-semibold mb-3">Community</h3>
                  <p className="text-foreground-500">We foster a supportive network of drone enthusiasts, professionals, and industry partners.</p>
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
                      <Icon icon="lucide:book-open" className="text-3xl text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Lifelong Learning</h3>
                  <p className="text-foreground-500">We believe in continuous education and skill development as technology evolves.</p>
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
                      <Icon icon="lucide:globe" className="text-3xl text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                  <p className="text-foreground-500">We promote environmentally responsible drone applications and operations.</p>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-content2">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Leadership Team" 
            subtitle="Meet the experts who guide our academy and shape the future of drone education."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardBody className="p-0">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 object-cover object-center"
                    />
                    <div className="p-5">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary mb-3">{member.role}</p>
                      <p className="text-foreground-500 text-sm">{member.bio}</p>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <SectionHeading 
                title="State-of-the-Art Facilities" 
                subtitle="Our campus is equipped with everything you need to master drone technology."
              />
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Icon icon="lucide:check-circle" className="text-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Indoor Flying Arena</h4>
                    <p className="text-foreground-500">A 500m² space for safe, all-weather flight practice with obstacle courses and training zones.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon icon="lucide:check-circle" className="text-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Simulation Lab</h4>
                    <p className="text-foreground-500">Advanced drone simulators with VR capabilities for risk-free training in various scenarios.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon icon="lucide:check-circle" className="text-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Engineering Workshop</h4>
                    <p className="text-foreground-500">Fully equipped space for drone building, modification, and repair with professional tools.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon icon="lucide:check-circle" className="text-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Outdoor Testing Field</h4>
                    <p className="text-foreground-500">10-acre dedicated flying area for agricultural, racing, and long-range flight training.</p>
                  </div>
                </div>
              </div>
              
              <Button 
                color="primary"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                Schedule a Tour
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://img.heroui.chat/image/drone?w=400&h=300&u=facility1" 
                  alt="Indoor Flying Arena" 
                  className="w-full h-auto rounded-lg"
                />
                <img 
                  src="https://img.heroui.chat/image/drone?w=400&h=300&u=facility2" 
                  alt="Simulation Lab" 
                  className="w-full h-auto rounded-lg"
                />
                <img 
                  src="https://img.heroui.chat/image/drone?w=400&h=300&u=facility3" 
                  alt="Engineering Workshop" 
                  className="w-full h-auto rounded-lg"
                />
                <img 
                  src="https://img.heroui.chat/image/drone?w=400&h=300&u=facility4" 
                  alt="Outdoor Testing Field" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>
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
              Join Our Drone Community
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-white/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Whether you're a beginner or an experienced pilot, we have programs designed to take your skills to the next level.
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
                Explore Courses
              </Button>
              <Button 
                variant="bordered"
                size="lg"
                className="border-white text-white"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
