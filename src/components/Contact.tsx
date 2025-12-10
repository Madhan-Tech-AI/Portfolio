import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, View, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import Waves from './Waves';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link as fallback
    const mailtoLink = `mailto:madhankumar070406@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1BTBeBWzGgqJoJ6GnMdNFNxlhl4m8N8-K/view?usp=sharing';
    link.download = 'Madhan_Kumar_P_Resume.pdf';
    link.click();
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark relative">
      {/* Contact Waves Background */}
      <div className="absolute inset-0 h-full w-full pointer-events-none opacity-50">
        <Waves
          lineColor="rgba(20, 184, 166, 0.1)"
          backgroundColor="transparent"
          waveSpeedX={0.01}
          waveSpeedY={0.006}
          waveAmpX={20}
          waveAmpY={12}
          friction={0.93}
          tension={0.006}
          maxCursorMove={60}
          xGap={18}
          yGap={45}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8 px-4 lg:px-0"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-dark dark:text-white mb-4 sm:mb-6">
                Get in Touch
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with fellow developers and designers.
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:madhankumar070406@gmail.com"
                className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-dark-light rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group border border-transparent hover:border-primary/20"
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-dark dark:text-white">Email</h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 break-all">madhankumar070406@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919342745299"
                className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-dark-light rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group border border-transparent hover:border-teal-500/20"
              >
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-dark dark:text-white">Phone</h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">+91 93427 45299</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-dark-light rounded-xl border border-transparent">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-dark dark:text-white">Location</h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Chennai, India</p>
                </div>
              </div>
            </div>

            {/* Social Links & Resume */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col gap-3 sm:gap-4">
                <a
                  href="https://www.linkedin.com/in/madhan-kumar-p-759402324/"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors group w-full shadow-lg shadow-primary/30"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Madhan-Tech-AI"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-dark dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors group w-full shadow-lg"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>
                <button
                  onClick={handleResumeDownload}
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors group w-full shadow-lg shadow-accent/30"
                >
                  <View className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>View Resume</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-dark-light p-6 sm:p-8 rounded-2xl mx-4 lg:mx-0 shadow-xl border border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-dark dark:text-white mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-dark border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:text-white transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-dark border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:text-white transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-dark border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:text-white resize-none transition-colors"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg shadow-primary/30"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            <p className="text-xs text-gray-500 dark:text-gray-500 mt-3 sm:mt-4 text-center">
              * This form will open your default email client
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Madhan Kumar P. Built with <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> using React & Tailwind.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
