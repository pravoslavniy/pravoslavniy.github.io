import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import CoursesPage from './pages/courses';
import PartnersPage from './pages/partners';
import NewsPage from './pages/news';
import ContactPage from './pages/contact';
import CourseDetailPage from './pages/course-detail';

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route path="/courses/:id" component={CourseDetailPage} />
        <Route path="/partners" component={PartnersPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Layout>
  );
};

export default App;
