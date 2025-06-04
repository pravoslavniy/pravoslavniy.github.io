import React from 'react';
import { Card, CardBody, Button } from '@heroui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  index?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  id, 
  title, 
  description, 
  image, 
  duration, 
  level,
  index = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card 
        className="course-card overflow-hidden h-full"
        isPressable
        as={Link}
        to={`/courses/${id}`}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="course-image w-full h-full object-cover"
          />
        </div>
        <CardBody className="p-5">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-foreground-500 text-sm mb-4 line-clamp-2">{description}</p>
          
          <div className="flex items-center justify-between text-sm text-foreground-500 mb-4">
            <div className="flex items-center gap-1">
              <Icon icon="lucide:clock" className="text-primary" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon icon="lucide:bar-chart-2" className="text-primary" />
              <span>{level}</span>
            </div>
          </div>
          
          <Button 
            color="primary" 
            variant="flat" 
            fullWidth
            className="mt-auto"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            Learn More
          </Button>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
