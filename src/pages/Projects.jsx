import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectCategories = ['All', 'Web Apps', 'Mobile Apps', 'UI/UX', 'Backend'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Apps',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1664&auto=format&fit=crop',
    description: 'A modern e-commerce platform with real-time inventory, AI-powered recommendations, and seamless payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Analytics Dashboard',
    category: 'Web Apps',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
    description: 'Real-time analytics dashboard with interactive charts, customizable widgets, and predictive insights.',
    technologies: ['Next.js', 'Firebase', 'TailwindCSS', 'D3.js'],
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Fitness Companion App',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=1470&auto=format&fit=crop',
    description: 'AI-powered fitness app with personalized workout plans, nutrition tracking, and real-time progress monitoring.',
    technologies: ['React Native', 'Redux', 'TensorFlow', 'Node.js'],
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Design System Framework',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1470&auto=format&fit=crop',
    description: 'Comprehensive design system with reusable components, documentation, and theme customization.',
    technologies: ['Figma', 'Storybook', 'React', 'styled-components'],
    link: '#',
    github: '#'
  },
  {
    id: 5,
    title: 'Cloud Infrastructure',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1470&auto=format&fit=crop',
    description: 'Scalable microservices architecture with automated deployment, monitoring, and security features.',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    link: '#',
    github: '#'
  },
  {
    id: 6,
    title: 'AI Content Generator',
    category: 'Web Apps',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop',
    description: 'Advanced content generation platform using GPT-4 for creating marketing copy, blog posts, and social media content.',
    technologies: ['OpenAI API', 'Vue.js', 'Python', 'FastAPI'],
    link: '#',
    github: '#'
  },
  {
    id: 7,
    title: 'Smart Home Hub',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1470&auto=format&fit=crop',
    description: 'IoT-based smart home control system with voice commands, automation rules, and energy optimization.',
    technologies: ['Flutter', 'MQTT', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#'
  },
  {
    id: 8,
    title: 'Blockchain Explorer',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1632&auto=format&fit=crop',
    description: 'Real-time blockchain data explorer with transaction tracking, smart contract analysis, and network statistics.',
    technologies: ['Web3.js', 'Node.js', 'GraphQL', 'PostgreSQL'],
    link: '#',
    github: '#'
  },
  {
    id: 9,
    title: 'AR Product Viewer',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1470&auto=format&fit=crop',
    description: 'Augmented reality product visualization tool for e-commerce, with 3D model support and interactive features.',
    technologies: ['Three.js', 'WebXR', 'React', 'WebGL'],
    link: '#',
    github: '#'
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0
    },
    project: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      opacity: 1,
      backgroundColor: 'rgba(124, 58, 237, 0.2)',
      mixBlendMode: 'difference'
    }
  };

  return (
    <div className="pt-20">
      <motion.div
        ref={cursorRef}
        className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 backdrop-blur-sm"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Header Section */}
      <section className="bg-glass backdrop-blur-sm border-b border-white/10 py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my work, featuring web applications, mobile apps, and design projects.
              Each project represents a unique challenge and solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Filters */}
      <section className="py-8">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-4">
            {projectCategories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]'
                    : 'bg-glass backdrop-blur-sm text-gray-400 hover:text-white hover:shadow-[0_0_10px_rgba(124,58,237,0.3)]'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="card card-hover cursor-glow"
                  onMouseEnter={() => setCursorVariant('project')}
                  onMouseLeave={() => setCursorVariant('default')}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video overflow-hidden rounded-lg mb-4 group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
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
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-morphism p-6 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video overflow-hidden rounded-lg mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-display font-bold mb-4 gradient-text">
                {selectedProject.title}
              </h2>
              <p className="text-gray-400 mb-6">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-primary/10 rounded-full text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-button"
                >
                  View Live
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg border border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                >
                  Source Code
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects; 