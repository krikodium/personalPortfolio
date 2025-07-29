import React from 'react';
import { GraduationCap, Briefcase, Code2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AboutSection = () => {
  const skills = [
    { name: 'HTML', level: 95, icon: '🌐' },
    { name: 'CSS', level: 90, icon: '🎨' },
    { name: 'JavaScript', level: 88, icon: '⚡' },
    { name: 'React', level: 85, icon: '⚛️' },
    { name: 'React Native', level: 80, icon: '📱' },
    { name: 'Node.js', level: 82, icon: '🟢' },
    { name: 'Express', level: 78, icon: '🚀' },
    { name: 'PostgreSQL', level: 75, icon: '🐘' },
    { name: 'Firebase', level: 70, icon: '🔥' },
    { name: 'GitHub', level: 90, icon: '🐙' },
    { name: 'Python', level: 72, icon: '🐍' }
  ];

  const education = [
    {
      school: 'Universidad de Palermo',
      period: '2022 - Present',
      status: 'Currently Studying',
      icon: '🎓'
    },
    {
      school: 'UDESA San Andrés',
      period: '2020 - 2022',
      status: 'Completed',
      icon: '📚'
    },
    {
      school: 'Belgrano Uno',
      period: 'High School',
      status: 'Completed',
      icon: '🏫'
    }
  ];

  const experience = [
    {
      company: 'Tres HC',
      period: 'July 2025 - Present',
      role: 'Admin & Management',
      icon: '💼'
    },
    {
      company: 'Satoracompany',
      period: '6 months',
      role: 'Admin & Management',
      icon: '🏢'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about technology and building impactful web solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-gray-700 flex items-center justify-center">
                <div className="w-64 h-64 rounded-xl bg-gray-800 flex items-center justify-center">
                  <Code2 className="w-32 h-32 text-blue-400" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm currently studying at <span className="text-blue-400 font-semibold">Universidad de Palermo</span>, 
                passionate about technology and building impactful web solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With experience in administration, project management, and web development, 
                I combine <span className="text-cyan-400 font-semibold">creativity and logic</span> to deliver results 
                that make a difference.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                  <div className="text-gray-400">Completed Projects</div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                  <div className="text-gray-400">Years Learning Tech</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Timeline Sections */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Education */}
          <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-500/30 pl-4 pb-4">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">{edu.icon}</span>
                      <div>
                        <h4 className="font-semibold text-white">{edu.school}</h4>
                        <p className="text-sm text-gray-400">{edu.period}</p>
                        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Experience</h3>
              </div>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-blue-500/30 pl-4 pb-4">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">{exp.icon}</span>
                      <div>
                        <h4 className="font-semibold text-white">{exp.company}</h4>
                        <p className="text-sm text-blue-400">{exp.role}</p>
                        <p className="text-xs text-gray-400">{exp.period}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skills Preview */}
          <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Code2 className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Top Skills</h3>
              </div>
              <div className="space-y-3">
                {skills.slice(0, 5).map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white text-sm flex items-center">
                        <span className="mr-2">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Full Skills Grid */}
        <div className="bg-gray-800/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-700/50 rounded-xl p-4 transition-all duration-300 hover:bg-gray-700/80 hover:scale-105">
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <h4 className="text-white font-semibold mb-2">{skill.name}</h4>
                  <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-blue-400 text-sm">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;