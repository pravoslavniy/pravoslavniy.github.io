import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { motion } from 'framer-motion';

interface PartnerCardProps {
  name: string;
  logo: string;
  description: string;
  index?: number;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ 
  name, 
  logo, 
  description,
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
        <CardBody className="p-6 flex flex-col items-center">
          <img 
            src={logo} 
            alt={name} 
            className="h-16 object-contain mb-4"
          />
          <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
          <p className="text-foreground-500 text-center">{description}</p>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default PartnerCard;
