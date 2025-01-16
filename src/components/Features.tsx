import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Share2,
  BarChart3,
  Link,
  Database,
  Shield,
  ChevronRight,
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Share2,
      title: 'Community-Based Algorithm Sharing',
      description: 'Create, share, and monetize your trading strategies with our community.',
      color: 'from-blue-500/20 to-transparent',
    },
    {
      icon: Code2,
      title: 'No-Code Fund Creator',
      description: 'Build and manage investment funds without writing a single line of code.',
      color: 'from-green-500/20 to-transparent',
    },
    {
      icon: Database,
      title: 'Custom Python Library',
      description: 'Access our powerful Python library for advanced algorithmic trading.',
      color: 'from-purple-500/20 to-transparent',
    },
    {
      icon: Link,
      title: 'Seamless Broker Integration',
      description: 'Connect with major brokers for automated trading execution.',
      color: 'from-red-500/20 to-transparent',
    },
    {
      icon: BarChart3,
      title: 'Transparent Analytics',
      description: 'Real-time performance tracking and comprehensive backtesting.',
      color: 'from-yellow-500/20 to-transparent',
    },
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Powered by Polygon and Aptos for secure, low-cost transactions.',
      color: 'from-indigo-500/20 to-transparent',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-secondary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-display font-bold mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent ml-2">
              Trade Confidently
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our comprehensive suite of tools and features empowers you to create,
            test, and deploy trading strategies with ease.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-lg bg-gradient-to-br ${feature.color} border border-primary/10 group hover:border-primary/30 transition-all duration-300`}
              >
                <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="rounded-xl overflow-hidden border border-primary/20 bg-secondary-light/50 backdrop-blur-sm p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold mb-4">
              Try Our No-Code Fund Creator
            </h3>
            <p className="text-gray-400">
              Experience how easy it is to create and manage your investment fund.
            </p>
          </div>
          <div className="aspect-video bg-secondary-dark rounded-lg flex items-center justify-center">
            <span className="text-primary/50 font-display">Interactive Demo Coming Soon</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mt-20"
        >
          <button className="group bg-primary hover:bg-primary-dark text-secondary px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center mx-auto">
            Start Building Strategies
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;