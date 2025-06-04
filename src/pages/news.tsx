import React from 'react';
import { Input, Button, Tabs, Tab } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import SectionHeading from '../components/ui/section-heading';
import NewsCard from '../components/ui/news-card';
import { newsItems } from '../data/news';

const NewsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === 'all') return matchesSearch;
    return matchesSearch && item.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  const categories = ['all', ...new Set(newsItems.map(item => item.category.toLowerCase()))];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-content2 py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img.heroui.chat/image/drone?w=1920&h=600&u=news1" 
            alt="News & Updates" 
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
              News & Updates
            </motion.h1>
            <motion.p 
              className="text-xl mb-6 text-foreground-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Stay informed about the latest developments in drone technology and academy events.
            </motion.p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="w-full md:w-2/3">
              <Input
                placeholder="Search news..."
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
                {categories.map(category => (
                  <Tab 
                    key={category} 
                    title={category.charAt(0).toUpperCase() + category.slice(1)}
                  />
                ))}
              </Tabs>
            </div>
          </div>

          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news, index) => (
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
          ) : (
            <div className="text-center py-12">
              <Icon icon="lucide:search-x" className="text-4xl text-foreground-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No news found</h3>
              <p className="text-foreground-500 mb-6">
                We couldn't find any news matching your search criteria.
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
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-content2">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Subscribe to Our Newsletter
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 text-foreground-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get the latest news, course updates, and drone technology insights delivered directly to your inbox.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                placeholder="Enter your email"
                type="email"
                className="flex-grow"
              />
              <Button 
                color="primary"
              >
                Subscribe
              </Button>
            </motion.div>
            <motion.p 
              className="text-sm mt-4 text-foreground-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Upcoming Events" 
            subtitle="Join us for workshops, demonstrations, and community gatherings."
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-content1 p-6 rounded-lg mb-6"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-primary/10 p-4 rounded-lg text-center min-w-[100px]">
                  <div className="text-primary text-2xl font-bold">15</div>
                  <div className="text-primary">June</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Open House: Drone Academy Campus Tour</h3>
                  <p className="text-foreground-500 mb-4">
                    Join us for a comprehensive tour of our facilities, meet our instructors, and see drone demonstrations.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-foreground-500">
                      <Icon icon="lucide:clock" />
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground-500">
                      <Icon icon="lucide:map-pin" />
                      <span>Main Campus, Bucharest</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-content1 p-6 rounded-lg mb-6"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-primary/10 p-4 rounded-lg text-center min-w-[100px]">
                  <div className="text-primary text-2xl font-bold">22</div>
                  <div className="text-primary">June</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Workshop: Introduction to FPV Drone Racing</h3>
                  <p className="text-foreground-500 mb-4">
                    A hands-on workshop for beginners interested in the exciting world of FPV drone racing.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-foreground-500">
                      <Icon icon="lucide:clock" />
                      <span>4:00 PM - 7:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground-500">
                      <Icon icon="lucide:map-pin" />
                      <span>Indoor Arena, Bucharest</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-content1 p-6 rounded-lg"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-primary/10 p-4 rounded-lg text-center min-w-[100px]">
                  <div className="text-primary text-2xl font-bold">8</div>
                  <div className="text-primary">July</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Webinar: Drone Regulations Update 2023</h3>
                  <p className="text-foreground-500 mb-4">
                    Learn about the latest changes to drone regulations and how they affect pilots in Romania.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-foreground-500">
                      <Icon icon="lucide:clock" />
                      <span>6:00 PM - 7:30 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground-500">
                      <Icon icon="lucide:monitor" />
                      <span>Online (Zoom)</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="text-center mt-8">
              <Button 
                color="primary"
                variant="flat"
              >
                View All Events
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
