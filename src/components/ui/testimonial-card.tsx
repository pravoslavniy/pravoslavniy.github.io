import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  index?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  role, 
  content, 
  avatar,
  index = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <CardBody className="p-6">
          <Icon icon="lucide:quote" className="text-primary text-3xl mb-4" />
          <p className="text-foreground-500 mb-6">{content}</p>
          <div className="flex items-center gap-4">
            <img 
              src={avatar} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-foreground-500 text-sm">{role}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
