import { useState } from 'react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    title: 'Email',
    value: 'faintu.tech@gmail.com',
    icon: '📧'

  },
  {
    title: 'Phone',
    value: '+91 72899 87811',
    icon: '📱'
  },
  {
    title: 'Location',
    value: 'Delhi, India',
    icon: '📍'


  }
];

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/faintu/',
    icon: '💼'
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const validateForm = () => {
    if (!formData.name.trim()) {
      throw new Error('Name is required');
    }
    if (!formData.email.trim()) {
      throw new Error('Email is required');
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      throw new Error('Please enter a valid email address');
    }
    if (!formData.subject.trim()) {
      throw new Error('Subject is required');
    }
    if (!formData.message.trim()) {
      throw new Error('Message is required');
    }
    if (formData.message.trim().length < 10) {
      throw new Error('Message must be at least 10 characters long');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // Validate form before submission
      validateForm();

      const formPayload = {
        access_key: '4ce77a5e-44f6-430c-8ac7-c8f2e532824f',
        from_name: formData.name,
        subject: `New Contact Form Submission: ${formData.subject}`,
        message: formData.message,
        email: formData.email,
        // Additional metadata
        metadata: {
          form_name: 'Portfolio Contact Form',
          page_url: window.location.href,
          submitted_at: new Date().toISOString(),
        }
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formPayload)
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          submitting: false,
          submitted: true,
          error: null
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        // Show success message for 3 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, submitted: false }));
        }, 3000);
      } else {
        throw new Error(data.message || 'Something went wrong!');
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: error.message
      });
      // Clear error after 3 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, error: null }));
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-background-light py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Feel free to reach out using the form below or through my social channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <motion.div
                      key={info.title}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4"
                    >
                      <span className="text-2xl">{info.icon}</span>
                      <div>
                        <h3 className="text-sm text-gray-400">{info.title}</h3>
                        <p className="text-white">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold">
                  Follow Me
                </h2>
                <div className="flex space-x-6">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="text-2xl"
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {status.submitted && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {status.error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
                    {status.error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background-light border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                      disabled={status.submitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background-light border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                      disabled={status.submitting}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background-light border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Project Inquiry"
                    disabled={status.submitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-background-light border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Your message here..."
                    disabled={status.submitting}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glow-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={status.submitting}
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-20 bg-background-light">
        <div className="section-container">
          <div className="aspect-[21/9] w-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl">
            Add your map component here
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact; 