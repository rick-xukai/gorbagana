'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import {
  Brain,
  Cpu,
  Eye,
  Zap,
  Database,
  Network,
  ArrowRight,
  Menu,
  X,
  Star,
  Play,
  Users,
  Shield,
  Lightbulb,
  Bot,
  ChevronDown,
  Globe,
  TrendingUp,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Facebook,
  BarChart3,
  Car,
  Factory,
  Stethoscope,
  DollarSign,
  Briefcase,
  Settings,
  Beaker,
} from 'lucide-react';
import Modal from './components/Modal';

interface ModalState {
  isOpen: boolean;
  title: string;
  message: string;
  type?: 'success' | 'warning' | 'info' | 'action';
  actionText?: string;
  onAction?: () => void;
}

// Update the showModal function type
type ShowModalFunction = (
  title: string, 
  message: string, 
  type?: 'success' | 'warning' | 'info' | 'action', 
  actionText?: string, 
  onAction?: () => void
) => void;

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    title: '',
    message: ''
  });

  const showModal = (title: string, message: string, type: ModalState['type'] = 'info', actionText?: string, onAction?: () => void) => {
    setModal({
      isOpen: true,
      title,
      message,
      type,
      actionText,
      onAction
    });
  };

  const closeModal = () => {
    console.log('closeModal called'); // Debug log
    setModal(prev => ({ ...prev, isOpen: false }));
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Technology', href: '#technology' },
    { name: 'Products', href: '#products' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="bg-gray-900 text-white overflow-hidden relative">
      {/* 3D Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-float" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer"
              onClick={() =>
                showModal(
                  'Welcome to Gorbagana!',
                  'Thank you for visiting our AI platform. We are revolutionizing the future of artificial intelligence.',
                  'action',
                  'Explore More'
                )
              }
            >
              <div className="relative flex items-center">
                <div className="relative mr-3">
                  {/* <img
                    src="/logo.webp"
                    alt="Gorbagana AI Logo"
                    className="h-10 w-10 relative z-10"
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-lg rounded-full animate-glow" />
                </div>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                GORBAGANA
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition-all duration-200 hover:bg-blue-400/10"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-800/50 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-gray-800/95 backdrop-blur-md border-t border-gray-700/50"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium hover:text-blue-400 hover:bg-gray-700/50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/30" />

        {/* 3D Floating Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -10, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
            className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-shift">
                The Future of AI
              </span>
              <br />
              <span className="text-white">Starts Here</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Discover revolutionary AI solutions that transform industries,
            empower innovation, and shape the future of technology. Welcome to
            the next generation of artificial intelligence powered by
            cutting-edge research and breakthrough innovations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 50px rgba(59, 130, 246, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                showModal(
                  'Get Started with Gorbagana AI',
                  'Ready to revolutionize your business with AI? Our platform offers cutting-edge solutions tailored to your needs.',
                  'action',
                  'Schedule Demo',
                  () =>
                    showModal(
                      'Demo Scheduled!',
                      'Our team will contact you within 24 hours to schedule your personalized demo.',
                      'success'
                    )
                )
              }
              className="group bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center transition-all duration-300 shadow-2xl hover:shadow-blue-500/30"
            >
              Get Started
              <ArrowRight
                className="ml-2 group-hover:translate-x-2 transition-transform duration-300"
                size={24}
              />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(75, 85, 99, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                showModal(
                  'AI Technology Demo',
                  'Experience the power of our AI platform through an interactive demonstration showcasing real-world applications.',
                  'info',
                  'Watch Now'
                )
              }
              className="group border-2 border-gray-400 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center hover:bg-gray-800/30 transition-all duration-300 backdrop-blur-sm"
            >
              <Play
                className="mr-2 group-hover:scale-110 transition-transform duration-300"
                size={24}
              />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {[
              { label: 'AI Models', value: '500+', icon: Brain },
              { label: 'Active Users', value: '1M+', icon: Users },
              { label: 'Success Rate', value: '99.7%', icon: TrendingUp },
              { label: 'Countries', value: '50+', icon: Globe },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                className="text-center group"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16"
          >
            <ChevronDown
              className="mx-auto animate-bounce text-blue-400"
              size={32}
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection showModal={showModal} />

      {/* Technology Section */}
      <TechnologySection showModal={showModal} />

      {/* Products Section - New */}
      <ProductsSection showModal={showModal} />

      {/* Solutions Section */}
      <SolutionsSection showModal={showModal} />

      {/* Team Section - New */}
      <TeamSection showModal={showModal} />

      {/* Testimonials Section - New */}
      <TestimonialsSection showModal={showModal} />

      {/* Pricing Section - New */}
      <PricingSection showModal={showModal} />

      {/* News Section - New */}
      <NewsSection showModal={showModal} />

      {/* Contact Section */}
      <ContactSection showModal={showModal} />

      {/* Enhanced Footer with Social Media */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="relative flex items-center">
                  <div className="relative mr-3">
                    {/* <img
                      src="/logo.webp"
                      alt="Gorbagana AI Logo"
                      className="h-10 w-10 relative z-10"
                    /> */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-lg rounded-full animate-glow" />
                  </div>
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  GORBAGANA
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering the future with revolutionary artificial intelligence
                solutions that transform industries and drive innovation.
              </p>
              {/* Social Media Links */}
              <div className="flex space-x-4 pt-4">
                {[
                  {
                    icon: Twitter,
                    url: 'https://twitter.com',
                    name: 'Twitter',
                  },
                  {
                    icon: Facebook,
                    url: 'https://facebook.com',
                    name: 'Facebook',
                  },
                  {
                    icon: Linkedin,
                    url: 'https://linkedin.com',
                    name: 'LinkedIn',
                  },
                  { icon: Github, url: 'https://github.com', name: 'GitHub' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 rounded-lg transition-all duration-300 group border border-gray-700/50 hover:border-blue-500/50"
                    onClick={(e) => {
                      e.preventDefault();
                      showModal(
                        `Connect on ${social.name}`,
                        `Visit our ${social.name} page to stay updated with the latest AI innovations and company news.`,
                        'info',
                        'Visit Page',
                        () => window.open(social.url, '_blank')
                      );
                    }}
                  >
                    <social.icon className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">
                Products
              </h3>
              <ul className="space-y-2">
                {[
                  'AI Platform',
                  'Machine Learning',
                  'Computer Vision',
                  'Natural Language',
                  'Predictive Analytics',
                  'Automation Suite',
                ].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() =>
                        showModal(
                          'Product Information',
                          `Learn more about our ${item} solution and how it can transform your business.`,
                          'info'
                        )
                      }
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                {[
                  'About Us',
                  'Careers',
                  'News',
                  'Investors',
                  'Partners',
                  'Research',
                ].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() =>
                        showModal(
                          `${item}`,
                          `Discover more about our ${item.toLowerCase()} and join our mission to revolutionize AI.`,
                          'info'
                        )
                      }
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>contact@gorbagana.ai</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 Gorbagana AI. All rights reserved. Pioneering the future of
              artificial intelligence.
            </p>
            <div className="flex space-x-6 text-sm">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Cookie Policy',
                'Security',
              ].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    showModal(
                      item,
                      `Our ${item.toLowerCase()} ensures your data protection and user rights.`,
                      'info'
                    )
                  }
                  className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Component */}
      <Modal
        isOpen={modal.isOpen}
        onClose={closeModal}
        title={modal.title}
        message={modal.message}
        type={modal.type}
        actionText={modal.actionText}
        onAction={modal.onAction}
      />
    </div>
  );
}

function FeaturesSection({ showModal }: { showModal: ShowModalFunction }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      icon: Brain,
      title: "Advanced Neural Networks",
      description: "State-of-the-art deep learning algorithms that adapt and evolve with your data.",
      details: "Our neural networks utilize transformer architectures and attention mechanisms for superior performance.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Revolutionary image recognition and processing capabilities for visual intelligence.",
      details: "Real-time object detection, facial recognition, and scene understanding with 99.9% accuracy.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast AI inference with millisecond response times for critical applications.",
      details: "Optimized CUDA kernels and distributed computing for ultra-low latency processing.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description: "Process massive datasets with intelligent pattern recognition and predictive insights.",
      details: "Handle petabytes of data with advanced clustering and machine learning algorithms.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Network,
      title: "Distributed Computing",
      description: "Scalable AI infrastructure that grows with your business needs.",
      details: "Auto-scaling cloud architecture with global edge computing capabilities.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade security with privacy-first AI solutions you can trust.",
      details: "End-to-end encryption, zero-knowledge architecture, and GDPR compliance.",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge AI capabilities designed to transform your business and unlock new possibilities 
            through revolutionary technology and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
              }}
              className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 cursor-pointer"
              style={{
                transform: "perspective(1000px)",
                transformStyle: "preserve-3d"
              }}
              onClick={() => showModal(
                feature.title,
                feature.details,
                'action',
                'Learn More',
                () => showModal('Feature Details', 'Our team will provide you with detailed technical specifications and implementation guide.', 'success')
              )}
            >
              {/* 3D Floating Icon */}
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                  rotateX: [0, 15, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className={`relative mb-6 w-16 h-16 mx-auto bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="h-8 w-8 text-white" />
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300`} />
              </motion.div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                {feature.description}
              </p>
              
              {/* Hover reveal additional info */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                whileHover={{ opacity: 1, height: "auto" }}
                className="text-sm text-blue-300 border-t border-gray-700/50 pt-4 overflow-hidden"
              >
                {feature.details}
              </motion.div>

              {/* 3D Depth indicator */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent transform translate-z-2 group-hover:via-white/10 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologySection({ showModal }: { showModal: ShowModalFunction }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const technologies = [
    {
      icon: Cpu,
      title: "Neural Processing Units",
      description: "Custom-designed hardware optimized for AI workloads",
      details: "Built on 5nm process technology with 10,000+ CUDA cores for parallel processing.",
      metrics: "100x faster than traditional CPUs"
    },
    {
      icon: Bot,
      title: "Machine Learning Frameworks",
      description: "TensorFlow, PyTorch, and custom neural architectures",
      details: "Optimized for both training and inference with automatic model optimization.",
      metrics: "Support for 50+ model architectures"
    },
    {
      icon: Lightbulb,
      title: "Adaptive Learning",
      description: "Self-improving algorithms that learn from experience",
      details: "Continuous learning systems that adapt to changing data patterns automatically.",
      metrics: "99.9% accuracy improvement over time"
    }
  ];

  return (
    <section
      id="technology"
      className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Built on the most advanced AI technologies and frameworks for
            maximum performance, reliability, and scalability in
            mission-critical applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-start space-x-6 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 cursor-pointer group"
                onClick={() =>
                  showModal(
                    tech.title,
                    `${tech.details} Performance: ${tech.metrics}`,
                    'action',
                    'Technical Specs',
                    () =>
                      showModal(
                        'Technical Documentation',
                        'Detailed technical specifications and implementation guides will be sent to your email.',
                        'success'
                      )
                  )
                }
              >
                <motion.div
                  animate={{ rotateY: [0, 360] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="relative"
                >
                  <tech.icon className="h-12 w-12 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-purple-400/20 blur-lg rounded-full group-hover:bg-purple-400/40 transition-colors duration-300" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {tech.title}
                  </h3>
                  <p className="text-gray-400 mb-2 leading-relaxed">
                    {tech.description}
                  </p>
                  <div className="text-sm text-purple-300 font-semibold">
                    {tech.metrics}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 p-8 rounded-2xl backdrop-blur-xl border border-gray-700/50">
              {/* 3D Grid Animation */}
              <div className="mb-8">
                <img className='rounded-2xl' src="/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg" alt='' />
              </div>

              {/* Performance Metrics */}
              <div className="text-center space-y-4">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-sm text-gray-400 mb-2"
                >
                  AI Processing Power
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 1 }}
                  className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
                >
                  99.7% Accuracy
                </motion.div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">
                      10ms
                    </div>
                    <div className="text-xs text-gray-500">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">1M+</div>
                    <div className="text-xs text-gray-500">Operations/sec</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SolutionsSection({ showModal }: { showModal: ShowModalFunction }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const solutions = [
    {
      title: "Healthcare AI",
      description: "Revolutionary diagnostic tools and treatment optimization for better patient outcomes.",
      icon: Stethoscope,
      stats: "95% accuracy in diagnosis",
      details: "AI-powered medical imaging, drug discovery, and personalized treatment recommendations.",
      caseStudy: "Reduced diagnostic time by 70% at leading hospitals worldwide."
    },
    {
      title: "Financial Intelligence",
      description: "Advanced fraud detection, risk assessment, and algorithmic trading solutions.",
      icon: DollarSign,
      stats: "99.9% fraud detection rate",
      details: "Real-time transaction monitoring, credit scoring, and market prediction algorithms.",
      caseStudy: "Prevented $500M+ in fraudulent transactions for major banks."
    },
    {
      title: "Smart Manufacturing",
      description: "Predictive maintenance, quality control, and process optimization for Industry 4.0.",
      icon: Factory,
      stats: "40% efficiency improvement",
      details: "IoT integration, predictive analytics, and automated quality assurance systems.",
      caseStudy: "Increased production efficiency by 40% while reducing waste by 30%."
    },
    {
      title: "Autonomous Systems",
      description: "Self-driving vehicles, drones, and robotic systems with advanced perception.",
      icon: Car,
      stats: "0.001% error rate",
      details: "Computer vision, sensor fusion, and real-time decision making algorithms.",
      caseStudy: "Deployed in 10+ cities with over 1M autonomous miles driven safely."
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-gray-800 via-green-900/10 to-gray-800 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-600 bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming industries with intelligent solutions tailored to specific challenges, 
            delivering measurable results and driving innovation across sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.03, 
                rotateY: 5,
                boxShadow: "0 30px 60px rgba(34, 197, 94, 0.3)"
              }}
              className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 cursor-pointer relative overflow-hidden"
              style={{
                transform: "perspective(1000px)",
                transformStyle: "preserve-3d"
              }}
              onClick={() => showModal(
                solution.title,
                `${solution.details}\n\nCase Study: ${solution.caseStudy}`,
                'action',
                'View Case Study',
                () => showModal('Case Study Access', 'Detailed case study and ROI analysis will be sent to your email.', 'success')
              )}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="w-full h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl"
                />
              </div>

              {/* 3D Icon */}
              <motion.div
                animate={{ 
                  rotateY: [0, 15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 flex items-center justify-center h-20 w-20 mx-auto bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-500/30"
              >
                <solution.icon className="h-12 w-12 text-green-400" />
              </motion.div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors duration-300 relative z-10">
                {solution.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed relative z-10">
                {solution.description}
              </p>
              
              {/* Performance Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30 relative z-10"
              >
                <span className="text-green-400 font-semibold text-sm">{solution.stats}</span>
              </motion.div>

              {/* Additional Details on Hover */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="text-sm text-gray-300 border-t border-gray-700/50 pt-4 relative z-10"
              >
                <strong className="text-green-400">Case Study:</strong> {solution.caseStudy}
              </motion.div>

              {/* 3D Depth Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-white/10 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection({ showModal }: { showModal: ShowModalFunction }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      bio: "Leading AI researcher with 15+ years in neural networks and deep learning.",
      icon: Brain,
      expertise: ["Neural Networks", "Computer Vision", "Research"]
    },
    {
      name: "Marcus Rodriguez",
      role: "VP of Engineering",
      bio: "Full-stack engineer specializing in scalable AI infrastructure and cloud solutions.",
      icon: Settings,
      expertise: ["Infrastructure", "Cloud Computing", "Scalability"]
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Research",
      bio: "PhD in Machine Learning, published researcher in top-tier AI conferences.",
      icon: Beaker,
      expertise: ["Machine Learning", "Research", "Innovation"]
    },
    {
      name: "James Liu",
      role: "Product Director",
      bio: "Product visionary with expertise in transforming AI research into market-ready solutions.",
      icon: Briefcase,
      expertise: ["Product Strategy", "Market Analysis", "UX Design"]
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
              Our Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the brilliant minds behind Gorbagana AI - a diverse team of researchers, engineers, and visionaries dedicated to advancing artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 group cursor-pointer"
              onClick={() => showModal(
                member.name,
                `${member.bio} Expertise: ${member.expertise.join(', ')}.`,
                'info'
              )}
            >
              <div className="text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center h-16 w-16 mx-auto bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl border border-orange-500/30">
                  <member.icon className="h-10 w-10 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-orange-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 rounded-full border border-orange-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ showModal }: { showModal: ShowModalFunction }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CTO, TechCorp",
      content: "Gorbagana AI transformed our data processing capabilities. The ROI was visible within the first quarter.",
      rating: 5,
      company: "TechCorp"
    },
    {
      name: "David Thompson",
      role: "Head of Innovation, StartupX",
      content: "The most intuitive AI platform we've used. Implementation was seamless and support is outstanding.",
      rating: 5,
      company: "StartupX"
    },
    {
      name: "Dr. Lisa Wang",
      role: "Research Director, BioMed Labs",
      content: "Their computer vision technology accelerated our research by 300%. Absolutely revolutionary.",
      rating: 5,
      company: "BioMed Labs"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Client Success
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how leading organizations worldwide are transforming their operations with Gorbagana AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateX: 5 }}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 cursor-pointer"
              onClick={() => showModal(
                `${testimonial.name} - ${testimonial.company}`,
                `&ldquo;${testimonial.content}&rdquo; - ${testimonial.role}`,
                'success'
              )}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-300 mb-6 italic leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  <div className="text-purple-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection({ showModal }: { showModal: ShowModalFunction }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small teams getting started with AI",
      features: ["5 AI Models", "100K API Calls", "Email Support", "Basic Analytics", "1 User"],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and development teams",
      features: ["25 AI Models", "1M API Calls", "Priority Support", "Advanced Analytics", "10 Users", "Custom Integrations"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large-scale deployments",
      features: ["Unlimited Models", "Unlimited API Calls", "24/7 Support", "Custom Analytics", "Unlimited Users", "Dedicated Manager", "SLA Guarantee"],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your AI journey. Start small and scale as your needs grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                plan.popular 
                  ? 'border-green-500/50 ring-2 ring-green-500/20' 
                  : 'border-gray-700/50 hover:border-green-500/50'
              }`}
              onClick={() => showModal(
                `${plan.name} Plan`,
                `${plan.description} Features: ${plan.features.join(', ')}.`,
                'action',
                'Get Started',
                () => showModal('Plan Selected!', 'Our team will contact you to set up your account.', 'success')
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsSection({ showModal }: { showModal: ShowModalFunction }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const news = [
    {
      title: "Gorbagana AI Raises $100M Series B Funding",
      excerpt: "Leading AI platform secures major funding to accelerate global expansion and research initiatives.",
      date: "2024-01-15",
      category: "Funding",
      readTime: "3 min read"
    },
    {
      title: "New Computer Vision Breakthrough Achieved",
      excerpt: "Our research team publishes groundbreaking paper on real-time object recognition with 99.9% accuracy.",
      date: "2024-01-10",
      category: "Research",
      readTime: "5 min read"
    },
    {
      title: "Partnership with Global Fortune 500 Company",
      excerpt: "Strategic partnership announcement to deploy AI solutions across multinational operations.",
      date: "2024-01-05",
      category: "Partnership",
      readTime: "4 min read"
    }
  ];

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/10 to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
              Latest News
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest developments, research breakthroughs, and company milestones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 cursor-pointer group"
              onClick={() => showModal(
                article.title,
                `${article.excerpt} Read the full article to learn more about this development.`,
                'info',
                'Read Full Article'
              )}
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 rounded-full border border-blue-500/30">
                  {article.category}
                </span>
                <span className="text-gray-500 text-sm ml-4">{article.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {article.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">
                  {new Date(article.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <ArrowRight className="h-4 w-4 text-blue-400 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection({ showModal }: { showModal: ShowModalFunction }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const products = [
    {
      name: "NeuralFlow AI",
      description: "Advanced neural network platform for deep learning and pattern recognition.",
      features: ["Real-time Processing", "AutoML Pipeline", "Cloud Integration"],
      icon: Brain,
      category: "Machine Learning",
      price: "From $299/month"
    },
    {
      name: "VisionCraft",
      description: "Computer vision solution for image analysis and object detection.",
      features: ["Object Recognition", "Facial Analysis", "Scene Understanding"],
      icon: Eye,
      category: "Computer Vision",
      price: "From $199/month"
    },
    {
      name: "TextMind Pro",
      description: "Natural language processing platform for text analysis and generation.",
      features: ["Sentiment Analysis", "Language Translation", "Content Generation"],
      icon: MessageSquare,
      category: "NLP",
      price: "From $149/month"
    },
    {
      name: "PredictiveCore",
      description: "Predictive analytics engine for business intelligence and forecasting.",
      features: ["Data Mining", "Trend Prediction", "Risk Assessment"],
      icon: BarChart3,
      category: "Analytics",
      price: "From $399/month"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI Products
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered products designed to accelerate your digital transformation and unlock new possibilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
              }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group cursor-pointer"
              style={{
                transform: "perspective(1000px)",
                transformStyle: "preserve-3d"
              }}
              onClick={() => showModal(
                product.name,
                `${product.description} Features include: ${product.features.join(', ')}. Starting at ${product.price}.`,
                'action',
                'Learn More',
                () => showModal('Product Details', 'Our team will provide you with detailed information and a personalized demo.', 'success')
              )}
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center h-20 w-20 mx-auto bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30">
                <product.icon className="h-12 w-12 text-blue-400" />
              </div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full border border-blue-500/30">
                  {product.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {product.description}
              </p>
              <div className="space-y-2 mb-6">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  {product.price}
                </span>
                <ArrowRight className="h-5 w-5 text-blue-400 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ showModal }: { showModal: ShowModalFunction }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Ready to Get Started?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using Gorbagana AI to transform their business. 
            Contact us today to learn how we can help you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => showModal('Contact Sales', 'Ready to revolutionize your business with AI? Our platform offers cutting-edge solutions tailored to your needs.', 'action')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-full font-semibold flex items-center justify-center"
            >
              Contact Sales
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => showModal('Start Free Trial', 'Experience the power of our AI platform through an interactive demonstration showcasing real-world applications.', 'info')}
              className="border border-gray-400 px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors"
            >
              Start Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
