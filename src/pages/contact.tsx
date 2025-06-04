import React from 'react';
import { Input, Textarea, Button, Card, CardBody } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import SectionHeading from '../components/ui/section-heading';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-content2 py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img.heroui.chat/image/drone?w=1920&h=600&u=contact1" 
            alt="Contact Us" 
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
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl mb-6 text-foreground-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have questions or ready to start your drone journey? We're here to help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading 
                title="Get in Touch" 
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
              />
              
              <Card>
                <CardBody className="p-6">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                        <Icon icon="lucide:check" className="text-3xl text-success" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                      <p className="text-foreground-500">
                        Thank you for contacting us. We'll respond to your inquiry shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <Input
                          label="Full Name"
                          placeholder="Enter your name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          isRequired
                        />
                        <Input
                          label="Email"
                          placeholder="Enter your email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          isRequired
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <Input
                          label="Phone Number"
                          placeholder="Enter your phone number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        <Input
                          label="Subject"
                          placeholder="What is this regarding?"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          isRequired
                        />
                      </div>
                      
                      <div className="mb-6">
                        <Textarea
                          label="Message"
                          placeholder="How can we help you?"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          minRows={4}
                          isRequired
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        color="primary"
                        className="w-full"
                        isLoading={isSubmitting}
                      >
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading 
                title="Contact Information" 
                subtitle="Find us at our campus or reach out through any of these channels."
              />
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Icon icon="lucide:map-pin" className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                    <p className="text-foreground-500">
                      123 Drone Street<br />
                      Bucharest, Romania<br />
                      Postal Code 010101
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Icon icon="lucide:phone" className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-foreground-500">
                      Main Office: +40 123 456 789<br />
                      Student Support: +40 123 456 788<br />
                      Admissions: +40 123 456 787
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Icon icon="lucide:mail" className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-foreground-500">
                      General Inquiries: info@droneacademy.ro<br />
                      Admissions: admissions@droneacademy.ro<br />
                      Support: support@droneacademy.ro
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Icon icon="lucide:clock" className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Hours</h3>
                    <p className="text-foreground-500">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
                <div className="flex gap-4">
                  <Button 
                    isIconOnly
                    variant="flat"
                    aria-label="Facebook"
                  >
                    <Icon icon="lucide:facebook" className="text-xl" />
                  </Button>
                  <Button 
                    isIconOnly
                    variant="flat"
                    aria-label="Instagram"
                  >
                    <Icon icon="lucide:instagram" className="text-xl" />
                  </Button>
                  <Button 
                    isIconOnly
                    variant="flat"
                    aria-label="YouTube"
                  >
                    <Icon icon="lucide:youtube" className="text-xl" />
                  </Button>
                  <Button 
                    isIconOnly
                    variant="flat"
                    aria-label="LinkedIn"
                  >
                    <Icon icon="lucide:linkedin" className="text-xl" />
                  </Button>
                </div>
              </div>
              
              <Card>
                <CardBody className="p-0">
                  <div className="aspect-w-16 aspect-h-9 h-[300px]">
                    {/* This would be a Google Map in a real implementation */}
                    <div className="w-full h-full bg-content2 flex items-center justify-center">
                      <div className="text-center">
                        <Icon icon="lucide:map" className="text-4xl text-primary mb-2" />
                        <p className="text-foreground-500">Interactive Map Would Be Here</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-content2">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Find quick answers to common questions about contacting us and our programs."
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <Card className="mb-4">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-2">How quickly will I receive a response to my inquiry?</h3>
                <p className="text-foreground-500">
                  We strive to respond to all inquiries within 24-48 business hours. For urgent matters, we recommend calling our main office directly.
                </p>
              </CardBody>
            </Card>
            
            <Card className="mb-4">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-2">Can I schedule a campus tour before enrolling?</h3>
                <p className="text-foreground-500">
                  Absolutely! We encourage prospective students to visit our facilities. You can schedule a tour through the contact form or by calling our admissions office.
                </p>
              </CardBody>
            </Card>
            
            <Card className="mb-4">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-2">Do you offer consultations for businesses interested in drone services?</h3>
                <p className="text-foreground-500">
                  Yes, we provide consultations for businesses looking to implement drone technology. Please contact our business development team at business@droneacademy.ro to schedule a meeting.
                </p>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-2">How can I apply for a job or teaching position at Drone Academy?</h3>
                <p className="text-foreground-500">
                  We're always looking for talented individuals to join our team. Please send your resume and cover letter to careers@droneacademy.ro with the position you're interested in as the subject line.
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
              Ready to Take Flight?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-white/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Enroll today and begin your journey into the exciting world of drone technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                color="default"
                variant="solid"
                size="lg"
                className="bg-white text-primary"
              >
                Apply Now
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
