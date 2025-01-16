import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Users, Zap, ChevronRight, LineChart, History, Rocket, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    { label: 'Early Testers', value: '500+' },
    { label: 'Cost Reduction', value: '30%' },
    { label: 'Trading Pairs', value: '100+' },
    { label: 'Strategies Shared', value: '250+' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Open and honest about our technology, fees, and performance metrics.',
    },
    {
      icon: Users,
      title: 'Community-Driven',
      description: 'Built by traders, for traders. Your success is our success.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly pushing boundaries with cutting-edge technology.',
    },
  ];

  const timeline = [
    {
      year: '2023 Q2',
      title: 'Inception',
      description: 'Founded with a vision to democratize algorithmic trading.',
    },
    {
      year: '2023 Q3',
      title: 'Development',
      description: 'Built core infrastructure and trading engine.',
    },
    {
      year: '2023 Q4',
      title: 'Private Beta',
      description: 'Launched beta testing with select traders.',
    },
    {
      year: '2024 Q1',
      title: 'Public Beta',
      description: 'Opened platform to public beta testers.',
    },
  ];

  return (
    <div className="min-h-screen bg-secondary py-24">
      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <Target className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-display font-bold mb-6">
            Our Vision
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            To democratize trading and investment for all by leveraging technology,
            transparency, and community-driven innovation.
          </p>
          <h3 className="text-2xl font-display font-bold mb-4">
            Our Mission
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            To empower individuals with tools, strategies, and insights to navigate
            the financial markets with confidence and ease.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-secondary-light/50 backdrop-blur-sm border border-primary/10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-3xl font-display font-bold text-primary mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <History className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-display font-bold mb-6">
              Our Story
            </h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-primary/20" />
            
            {/* Timeline events */}
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="w-1/2 pr-8 text-right">
                    <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-primary font-display font-bold mb-2">{event.year}</div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-400">{event.description}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="w-1/2 pl-8" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <Award className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-display font-bold mb-6">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-lg bg-secondary-light/50 backdrop-blur-sm border border-primary/10 text-center group hover:border-primary/30 transition-colors"
                >
                  <Icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <Rocket className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-display font-bold mb-6">
              Looking Ahead
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our journey is just beginning. We're committed to building the future
              of decentralized trading and investment, one innovation at a time.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center"
        >
          <div className="inline-flex gap-4">
            <Link
              to="/whitepaper"
              className="group bg-primary hover:bg-primary-dark text-secondary px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center"
            >
              Read Our Whitepaper
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/team"
              className="px-8 py-3 rounded-lg font-semibold border border-primary/20 hover:border-primary/40 transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;