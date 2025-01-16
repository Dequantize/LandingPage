import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ChevronRight, AlertTriangle, CheckCircle2, Coins, BarChart2, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const problems = [
    { icon: AlertTriangle, text: 'High fees on traditional platforms' },
    { icon: AlertTriangle, text: 'Lack of transparency in strategy performance' },
    { icon: AlertTriangle, text: 'Complex coding requirements for algorithms' },
    { icon: AlertTriangle, text: 'Limited access to professional strategies' },
  ];

  const solutions = [
    { icon: CheckCircle2, text: 'Community-driven algorithm sharing' },
    { icon: CheckCircle2, text: 'No-code fund creation interface' },
    { icon: CheckCircle2, text: 'Seamless broker integrations' },
    { icon: CheckCircle2, text: 'Transparent performance metrics' },
  ];

  const benefits = [
    {
      icon: Coins,
      title: 'Earn by Sharing',
      description: 'Monetize your trading strategies through our marketplace',
    },
    {
      icon: BarChart2,
      title: 'Transparent Analytics',
      description: 'Real-time performance tracking and backtesting',
    },
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Low-cost transactions with Polygon and Aptos',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Learn from and collaborate with expert traders',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-secondary to-secondary-dark">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/5 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-8"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Now in Beta Testing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-display font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent animate-gradient">
              Revolutionize Trading and Investment
            </span>
            <br />
            with Dequantize
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Empowering traders and investors to create, share, and adapt strategies
            seamlessly across stocks, cryptos, and commodities with the power of Web3.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group bg-primary hover:bg-primary-dark text-secondary px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center">
              Sign Up for Beta Testing
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/features"
              className="px-8 py-3 rounded-lg font-semibold border border-primary/20 hover:border-primary/40 transition-colors"
            >
              Explore Features
            </Link>
          </motion.div>
        </div>

        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Why Dequantize?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Current Challenges</h3>
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-400"
                  >
                    <Icon className="w-5 h-5 text-red-500" />
                    <span>{problem.text}</span>
                  </motion.div>
                );
              })}
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Our Solution</h3>
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-400"
                  >
                    <Icon className="w-5 h-5 text-green-500" />
                    <span>{solution.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Core Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Core Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-lg bg-secondary-light/50 backdrop-blur-sm border border-primary/10 group hover:border-primary/30 transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Beta Testing Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 rounded-lg bg-secondary-light/50 backdrop-blur-sm border border-primary/20">
            <h2 className="text-2xl font-display font-bold text-center mb-8">
              Join the Beta Testing
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-secondary border border-primary/20 text-white focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-secondary border border-primary/20 text-white focus:outline-none focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-400 mb-2">
                  Trading Experience
                </label>
                <select
                  id="experience"
                  className="w-full px-4 py-2 rounded-lg bg-secondary border border-primary/20 text-white focus:outline-none focus:border-primary"
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                  <option value="professional">Professional Trader</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-secondary py-3 rounded-lg font-semibold transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;