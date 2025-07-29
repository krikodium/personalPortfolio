import React, { useState } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Truco Club',
      subtitle: 'Online Card Game',
      description: 'A real-time multiplayer Argentine card game built for web browsers with animations and socket-based gameplay.',
      longDescription: 'Truco Club is a comprehensive online gaming platform that brings the traditional Argentine card game to the digital world. Built with modern web technologies, it features real-time multiplayer functionality, custom game logic, and engaging animations that create an immersive gaming experience.',
      technologies: ['React', 'Node.js', 'Socket.IO', 'PostgreSQL', 'Tailwind CSS'],
      highlights: ['Real-time interactions', 'Responsive design', 'Custom game logic'],
      images: [
        'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop'
      ],
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 2,
      title: 'CambioYA',
      subtitle: 'Currency Exchange Platform',
      description: 'A platform for exchanging currencies with a modern UI and integration with real-time exchange rates.',
      longDescription: 'CambioYA is a modern currency exchange platform that provides users with real-time exchange rates and a seamless trading experience. The platform features secure authentication, dynamic currency conversion, and a responsive dashboard designed for both desktop and mobile users.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Vercel'],
      highlights: ['Responsive dashboard', 'Secure authentication', 'Dynamic currency conversion'],
      images: [
        'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
      ],
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30'
    },
    {
      id: 3,
      title: 'ERAM E-commerce B2B',
      subtitle: 'Wholesale Business Solution',
      description: 'A scalable e-commerce solution for wholesale businesses with advanced catalog filtering and category-based UI.',
      longDescription: 'ERAM E-commerce B2B is a comprehensive wholesale platform designed to handle large-scale business operations. It features advanced catalog management, intelligent filtering systems, and optimized performance to ensure fast loading times and excellent user experience.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      highlights: ['Optimized for speed', 'SEO-ready', 'Integrated product database'],
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=500&fit=crop'
      ],
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 4,
      title: 'Chinchón Online',
      subtitle: 'Multiplayer Card Game',
      description: 'An interactive multiplayer version of the classic Chinchón card game, built for web and mobile, featuring real-time matches.',
      longDescription: 'Chinchón Online brings the beloved classic card game to the digital world with real-time multiplayer functionality. Built for both web and mobile platforms, it features live gameplay with smooth animations, room creation capabilities, and an intuitive user experience designed to keep players engaged.',
      technologies: ['React', 'Node.js', 'Socket.IO', 'Tailwind CSS', 'PostgreSQL'],
      highlights: ['Live gameplay with animations', 'Room creation', 'Smooth UX for players'],
      images: [
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1686191128892-88bf5a882c5b?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop'
      ],
      color: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/30'
    }
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`bg-gradient-to-br ${project.color} backdrop-blur-sm border ${project.borderColor} group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden`}
              onClick={() => openProjectModal(project)}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-blue-500 text-white p-2 rounded-full">
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-blue-400 font-medium">{project.subtitle}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-800/50 text-blue-400 px-3 py-1 rounded-full text-sm border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-400 text-sm px-3 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <Button 
                    className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-200"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={closeProjectModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white mb-2">
                  {selectedProject.title}
                </DialogTitle>
                <p className="text-blue-400 text-lg">{selectedProject.subtitle}</p>
              </DialogHeader>

              {/* Image Carousel */}
              <div className="relative mb-6">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <img 
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 text-white p-2 rounded-full hover:bg-gray-700/80 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 text-white p-2 rounded-full hover:bg-gray-700/80 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Image Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.longDescription}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-blue-500/20 text-blue-400 px-3 py-2 rounded-lg border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Key Highlights</h3>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, index) => (
                      <li key={index} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">
                    <Github className="mr-2" size={16} />
                    View Code
                  </Button>
                  <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white">
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;