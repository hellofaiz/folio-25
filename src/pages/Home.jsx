import { motion } from 'framer-motion';
import DevelopmentIcon from '../components/icons/DevelopmentIcon';
import InnovationIcon from '../components/icons/InnovationIcon';
import ValueIcon from '../components/icons/ValueIcon';
import CodeDisplay from '../components/CodeDisplay';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const featuredProjects = [
  {
    id: 1,
    title: 'AI-Powered Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
    description: 'Next-generation analytics platform with machine learning insights and predictive modeling.',
    technologies: ['React', 'TensorFlow.js', 'Python', 'D3.js']
  },
  {
    id: 2,
    title: 'Smart IoT Platform',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1470&auto=format&fit=crop',
    description: 'Comprehensive IoT management system with real-time monitoring and automation capabilities.',
    technologies: ['Node.js', 'MQTT', 'React', 'MongoDB']
  }
];

const valuePropositions = [
  {
    icon: DevelopmentIcon,
    title: "Expert Development",
    description: "Transform your ideas into reality with cutting-edge web solutions that drive real business growth. Affordable, scalable, and built for success."
  },
  {
    icon: InnovationIcon,
    title: "Innovation First",
    description: "Stay ahead of the curve with AI-powered features, responsive designs, and performance-optimized applications that set you apart."
  },
  {
    icon: ValueIcon,
    title: "Exceptional Value",
    description: "Get enterprise-grade development at competitive rates. Flexible payment plans and customized solutions to fit your budget."
  }
];

const skills = [
  {
    name: 'React',
    icon: '⚛️',
    level: 'Advanced',
    experience: '5+ years'
  },
  {
    name: 'TypeScript',
    icon: '📘',
    level: 'Advanced',
    experience: '4+ years'
  },
  {
    name: 'Node.js',
    icon: '🟢',
    level: 'Advanced',
    experience: '5+ years'
  },
  {
    name: 'Tailwind CSS',
    icon: '🎨',
    level: 'Advanced',
    experience: '3+ years'
  },
  {
    name: 'Next.js',
    icon: '▲',
    level: 'Advanced',
    experience: '3+ years'
  },
  {
    name: 'MongoDB',
    icon: '🍃',
    level: 'Advanced',
    experience: '4+ years'
  },
  {
    name: 'GraphQL',
    icon: '📊',
    level: 'Advanced',
    experience: '3+ years'
  },
  {
    name: 'AWS',
    icon: '☁️',
    level: 'Advanced',
    experience: '4+ years'
  },
  {
    name: 'Docker',
    icon: '🐳',
    level: 'Advanced',
    experience: '3+ years'
  },
  {
    name: 'Python',
    icon: '🐍',
    level: 'Advanced',
    experience: '4+ years'
  }
];

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-secondary/20 rounded-full blur-[120px]" />
          <div className="absolute -bottom-1/4 left-1/3 w-1/2 h-1/2 bg-accent/20 rounded-full blur-[120px]" />
        </div>

        <div className="section-container relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="gradient-text inline-block"
                >
                  Innovative Solutions
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="inline-block"
                >
                  That Drive Growth
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-400 mb-8"
              >
                Elevate your business with custom web solutions that combine cutting-edge technology, 
                stunning design, and affordable pricing. Experience the perfect blend of innovation 
                and value.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glow-button"
                >
                  Start Your Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-lg border-2 border-primary/50 text-primary hover:bg-primary/10 transition-colors"
                >
                  View Pricing
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden md:block"
            >
              <CodeDisplay />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-glass backdrop-blur-sm" />
        <div className="section-container relative">
          <div className="grid md:grid-cols-3 gap-8">
            {valuePropositions.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6">
                  <prop.icon />
                </div>
                <h3 className="text-xl font-semibold mb-4">{prop.title}</h3>
                <p className="text-gray-400">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-glass backdrop-blur-sm" />
        <div className="section-container relative">
          <motion.div
            {...fadeIn}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-bold">
                Why Choose <span className="gradient-text">Us</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-400">
                  With over a decade of experience in delivering high-impact digital solutions, 
                  we understand that every business is unique. Our approach combines technical 
                  excellence with cost-effective development strategies.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                    Competitive pricing with flexible payment options
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                    Rapid development with quality assurance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                    24/7 support and maintenance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                    Future-proof solutions with latest technologies
                  </li>
                </ul>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glow-button"
              >
                Schedule Consultation
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop"
                alt="Modern Development Process"
                className="relative rounded-2xl shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="section-container">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit that enables me to tackle diverse projects and deliver
              exceptional results.
            </p>
          </motion.div>
          
          <div className="skills-container">
            <div className="skills-track">
              {/* First set of skills */}
              {skills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-1`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="skill-card text-center"
                >
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{skill.level}</p>
                  <p className="text-primary text-xs">{skill.experience}</p>
                </motion.div>
              ))}
              {/* Duplicate set of skills for seamless scrolling */}
              {skills.map((skill) => (
                <motion.div
                  key={`${skill.name}-2`}
                  className="skill-card text-center"
                >
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{skill.level}</p>
                  <p className="text-primary text-xs">{skill.experience}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-glass backdrop-blur-sm" />
        <div className="section-container relative">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work showcasing my expertise in web development
              and design.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card card-hover cursor-glow overflow-hidden"
              >
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/10 rounded-full text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            {...fadeIn}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-4xl font-display font-bold">
              Ready to <span className="gradient-text">Work Together</span>?
            </h2>
            <p className="text-gray-400">
              Let's collaborate to bring your ideas to life and create something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glow-button"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 