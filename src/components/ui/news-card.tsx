import React from 'react';
import { Card, CardBody, Button } from '@heroui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  index?: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ 
  id, 
  title, 
  excerpt, 
  image, 
  date, 
  category,
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
        className="overflow-hidden h-full"
        isPressable
        as={Link}
        to={`/news/${id}`}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-primary text-white text-xs py-1 px-2 rounded">
            {category}
          </div>
        </div>
        <CardBody className="p-5">
          <div className="flex items-center text-sm text-foreground-500 mb-2">
            <Icon icon="lucide:calendar" className="mr-1" />
            <span>{date}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-foreground-500 text-sm mb-4 line-clamp-2">{excerpt}</p>
          
          <Button 
            color="primary" 
            variant="light" 
            endContent={<Icon icon="lucide:arrow-right" />}
            className="p-0"
          >
            Read More
          </Button>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default NewsCard;
