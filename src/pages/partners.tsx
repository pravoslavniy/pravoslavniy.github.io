import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import SectionHeading from '../components/ui/section-heading';
import PartnerCard from '../components/ui/partner-card';
import { partners } from '../data/partners';

const PartnersPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-content2 py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img.heroui.chat/image/drone?w=1920&h=600&u=partners1" 
            alt="Our Partners" 
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
              Our Partners
            </motion.h1>
            <motion.p 
              className="text-xl mb-6 text-foreground-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Collaborating with industry leaders to advance drone technology and education.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Industry Partnerships" 
            subtitle="We work with leading organizations to provide our students with the best resources, opportunities, and industry connections."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {partners.map((partner, index) => (
              <PartnerCard 
                key={partner.id}
                name={partner.name}
                logo={partner.logo}
                description={partner.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-content2">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading 
                title="Partnership Benefits" 
                subtitle="Our collaborative approach creates value for partners and students alike."
              />
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Icon icon="lucide:users" className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Access to Talent</h4>
                    <p className="text-foreground-500">Connect with skilled drone operators, engineers, and specialists trained to industry standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Icon icon="lucide:lightbulb" className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Innovation Collaboration</h4>
                    <p className="text-foreground-500">Participate in research projects and technology development initiatives with our faculty and students.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Icon icon="lucide:megaphone" className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Brand Visibility</h4>
                    <p className="text-foreground-500">Gain exposure through our events, website, and promotional materials reaching the drone community.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Icon icon="lucide:book-open" className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Customized Training</h4>
                    <p className="text-foreground-500">Develop specialized training programs for your organization's specific drone technology needs.</p>
                  </div>
                </div>
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
                src="https://img.heroui.chat/image/drone?w=600&h=400&u=partnership1" 
                alt="Partnership Benefits" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Partnership Success Stories" 
            subtitle="Real-world examples of how our collaborations create impact."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-content1 p-6 rounded-lg h-full">
                <img 
                  src="https://img.heroui.chat/image/ai?w=200&h=100&u=agrotech1" 
                  alt="AgroTech Solutions" 
                  className="h-12 mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">Agricultural Innovation</h3>
                <p className="text-foreground-500 mb-4">
                  Our partnership with AgroTech Solutions led to the development of specialized drone applications for crop monitoring that increased yield by 18% for participating farms.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Icon icon="lucide:external-link" />
                  <a href="#" className="text-primary">Read Case Study</a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-content1 p-6 rounded-lg h-full">
                <img 
                  src="https://img.heroui.chat/image/ai?w=200&h=100&u=dji1" 
                  alt="DJI Romania" 
                  className="h-12 mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">Equipment Access Program</h3>
                <p className="text-foreground-500 mb-4">
                  Through our partnership with DJI Romania, students gain hands-on experience with the latest drone technology, while DJI benefits from direct feedback for product improvement.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Icon icon="lucide:external-link" />
                  <a href="#" className="text-primary">Read Case Study</a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-content1 p-6 rounded-lg h-full">
                <img 
                  src="https://img.heroui.chat/image/ai?w=200&h=100&u=ecosurvey1" 
                  alt="EcoSurvey" 
                  className="h-12 mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">Environmental Monitoring</h3>
                <p className="text-foreground-500 mb-4">
                  Our collaboration with EcoSurvey has created new methodologies for wildlife tracking and habitat assessment using specialized drone technology and imaging systems.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Icon icon="lucide:external-link" />
                  <a href="#" className="text-primary">Read Case Study</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
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
              Become a Partner
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-white/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join our network of industry leaders and help shape the future of drone technology and education.
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
                Partnership Opportunities
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

export default PartnersPage;

