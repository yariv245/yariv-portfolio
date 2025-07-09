import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Download,
  Code,
  Server,
  Database,
  Cloud,
  Award,
  Calendar,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Shield,
  Brain,
  Wrench,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Resume() {
  const [isLoading, setIsLoading] = useState(false);

  const skills = {
    'AI & NLP': {
      items: ['ChatGPT API', 'RAG', 'VectorDB', 'HuggingFace', 'PDF parsing'],
      icon: Brain,
      color: 'bg-green-50 text-green-700 border-green-200',
    },
    'Backend & Frameworks': {
      items: [
        'Java',
        'Spring Boot',
        'FastAPI',
        'RESTful APIs',
        'Apache PdfBox',
        'Maven',
      ],
      icon: Server,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    'DevOps & Tools': {
      items: ['Docker', 'Jenkins', 'GitHub Actions', 'Proxmox', 'Git', 'VM'],
      icon: Wrench,
      color: 'bg-teal-50 text-teal-700 border-teal-200',
    },
    Databases: {
      items: ['PostgreSQL', 'MSSQL', 'MongoDB', 'Neo4j', 'NoSQL', 'QdrantDB'],
      icon: Database,
      color: 'bg-teal-50 text-teal-700 border-teal-200',
    },
    Cloud: {
      items: ['AWS EC2', 'AWS S3', 'AWS SQS', 'Redis'],
      icon: Cloud,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    Architecture: {
      items: [
        'Microservices',
        'Design Patterns',
        'SOLID',
        'OOP',
        'Caching',
        'Dependency Injection',
        'Stream API',
        'Agile',
      ],
      icon: Award,
      color: 'bg-green-50 text-green-700 border-green-200',
    },
  };

  const experience = [
    {
      period: '2025–Present',
      company: 'Freelance',
      role: 'Backend Developer',
      achievements: [
        'Built a hybrid BOM system using FastAPI, PostgreSQL & Neo4j',
        'Integrated GraphQL API and OCR to automate shipping certificate workflows',
        'Developed a PDF Q&A bot using Python, HuggingFace, Qdrant, and ChatGPT',
        'Engineered document embedding and retrieval over vector databases',
      ],
    },
    {
      period: '2021–2024',
      company: 'Home365',
      role: 'Backend Developer',
      achievements: [
        'Designed and maintained microservices using Java & Spring Boot',
        'Created REST APIs and integrated third-party systems',
        'Built a secure SFTP data pipeline for financial transactions (bank-ready CSVs)',
        'Developed dynamic PDF generation service using AWS S3 & PdfBox',
      ],
    },
    {
      period: '2019–2020',
      company: 'DBmaestro',
      role: 'Automation Developer',
      achievements: [
        'Developed automated tests with Python, Selenium, and Pytest',
        'Integrated tests into CI/CD pipelines using Jenkins',
      ],
    },
  ];
  const handleDownloadResume = async () => {
    const docUrl =
      'https://docs.google.com/document/d/16fVcZ9-FRQkPdNRK_I5Qs4CrpgtV7abOTbd8S0kmXPw/export?format=pdf';
    setIsLoading(true); // 🔄 Start loader

    try {
      const response = await fetch(docUrl);

      if (!response.ok) throw new Error('Fetch failed');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'Yariv-Menachem-Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed, opening in new tab...', error);
      window.open(docUrl, '_blank');
    } finally {
      setIsLoading(false); // ✅ Stop loader
    }
  };

  return (
    <div className='min-h-screen bg-slate-900 relative overflow-hidden'>
      {/* Tech Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `
            linear-gradient(90deg, #10b981 1px, transparent 1px),
            linear-gradient(#10b981 1px, transparent 1px)
          `,
            backgroundSize: '50px 50px',
          }}
        ></div>
        <div className='absolute top-10 left-10 w-32 h-32 border-2 border-green-500 rounded-full opacity-20'></div>
        <div className='absolute top-40 right-20 w-24 h-24 border-2 border-emerald-400 rounded-lg rotate-45 opacity-20'></div>
        <div className='absolute bottom-20 left-1/4 w-20 h-20 border-2 border-teal-500 rounded-full opacity-20'></div>
        <div className='absolute bottom-40 right-1/3 w-28 h-28 border-2 border-green-400 rounded-lg rotate-12 opacity-20'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-green-500 rounded-full opacity-10'></div>
        <div className='absolute top-20 left-1/3 text-green-500 opacity-10 font-mono text-xs'>
          {'{ "code": "everywhere" }'}
        </div>
        <div className='absolute bottom-32 right-10 text-emerald-400 opacity-10 font-mono text-xs'>
          {'<developer />'}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900'></div>

      {/* Content */}
      <div className='relative z-10'>
        {/* Hero Section */}
        <motion.section
          className='relative min-h-screen flex items-center justify-center px-6 py-20'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <div className='max-w-4xl mx-auto text-center'>
            <motion.div variants={itemVariants} className='mb-8'>
              <div className='w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-emerald-500'>
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt='Yariv Menachem'
                  className='object-cover w-full h-full'
                />
              </div>

              <h1 className='text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight'>
                Yariv Menachem
              </h1>

              <p className='text-2xl md:text-3xl text-green-400 mb-6 font-light'>
                Backend Developer
              </p>

              <div className='flex items-center justify-center gap-2 text-lg text-slate-300 mb-8'>
                <MapPin className='w-5 h-5' />
                <span>Rishon Lezion, Israel</span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='flex flex-wrap justify-center gap-4 mb-12'
            >
              <a
                href='mailto:yariv220895@gmail.com'
                className='flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/20'
              >
                <Mail className='w-5 h-5 text-green-400' />
                <span className='text-white'>yariv220895@gmail.com</span>
              </a>
              <a
                href='tel:052-4594598'
                className='flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/20'
              >
                <Phone className='w-5 h-5 text-green-400' />
                <span className='text-white'>052-4594598</span>
              </a>
              <a
                href='https://www.linkedin.com/in/yarivmen/'
                className='flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/20'
              >
                <Linkedin className='w-5 h-5 text-green-400' />
                <span className='text-white'>LinkedIn</span>
              </a>
              <a
                href='https://github.com/yariv245'
                className='flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/20'
              >
                <Github className='w-5 h-5 text-green-400' />
                <span className='text-white'>GitHub</span>
              </a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                onClick={handleDownloadResume}
                disabled={isLoading}
                size='lg'
                className={`bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  isLoading ? 'opacity-70 cursor-wait' : ''
                }`}
              >
                {isLoading ? (
                  <span className='flex items-center'>
                    <svg
                      className='animate-spin h-5 w-5 mr-2 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      />
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8v8z'
                      />
                    </svg>
                    Downloading...
                  </span>
                ) : (
                  <>
                    <Download className='w-5 h-5 mr-2' />
                    Download Resume
                  </>
                )}
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          className='py-20 px-6'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <div className='max-w-4xl mx-auto'>
            <motion.div variants={itemVariants} className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                About Me
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className='bg-white/10 backdrop-blur-sm shadow-2xl border border-green-500/20'>
                <CardContent className='p-12'>
                  <p className='text-xl leading-relaxed text-slate-200'>
                    Experienced backend developer with{' '}
                    <span className='font-semibold text-green-400'>
                      3+ years
                    </span>{' '}
                    of hands-on experience building scalable systems with Java,
                    Spring Boot, Python, and modern cloud-native technologies.
                    Specializing in REST APIs, microservices, databases (SQL &
                    NoSQL), and AI-integrated features using FastAPI, Neo4j,
                    GraphQL, and ChatGPT/Qdrant for intelligent automation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className='py-20 px-6 bg-white/5'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <div className='max-w-6xl mx-auto'>
            <motion.div variants={itemVariants} className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Skills
              </h2>
            </motion.div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {Object.entries(skills).map(([category, data], index) => {
                const IconComponent = data.icon;
                return (
                  <motion.div
                    key={category}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className='h-full bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-green-500/20'>
                      <CardContent className='p-8'>
                        <div className='flex items-center gap-3 mb-6'>
                          <div
                            className={`p-3 rounded-xl ${
                              data.color.split(' ')[0]
                            } ${data.color.split(' ')[0].replace('50', '100')}`}
                          >
                            <IconComponent
                              className={`w-6 h-6 ${data.color
                                .split(' ')
                                .slice(1)
                                .join(' ')}`}
                            />
                          </div>
                          <h3 className='text-xl font-bold text-white'>
                            {category}
                          </h3>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                          {data.items.map((skill) => (
                            <Badge
                              key={skill}
                              className={`${data.color} hover:scale-105 transition-transform duration-200`}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          className='py-20 px-6'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <div className='max-w-4xl mx-auto'>
            <motion.div variants={itemVariants} className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Experience
              </h2>
            </motion.div>

            <div className='relative'>
              <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-emerald-600'></div>

              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className='relative pl-20 mb-12 last:mb-0'
                >
                  <div className='absolute left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-slate-800 shadow-lg'></div>

                  <Card className='bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-green-500/20'>
                    <CardContent className='p-8'>
                      <div className='flex items-center gap-3 mb-4'>
                        <Briefcase className='w-5 h-5 text-green-400' />
                        <span className='px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium'>
                          {job.period}
                        </span>
                      </div>

                      <h3 className='text-2xl font-bold text-white mb-2'>
                        {job.company}
                      </h3>
                      <p className='text-lg text-green-400 mb-4'>{job.role}</p>

                      <ul className='space-y-2'>
                        {job.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className='flex items-start gap-3 text-slate-300'
                          >
                            <div className='w-2 h-2 bg-green-500 rounded-full mt-2.5 flex-shrink-0'></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className='py-20 px-6 bg-white/5'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <div className='max-w-4xl mx-auto'>
            <motion.div variants={itemVariants} className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Featured Project
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className='bg-white/10 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-300 border border-green-500/20'>
                <CardContent className='p-10'>
                  <div className='flex items-center gap-3 mb-6'>
                    <Code className='w-8 h-8 text-green-400' />
                    <h3 className='text-3xl font-bold text-white'>
                      JobSeekerTG Bot
                    </h3>
                    <a
                      href='https://github.com/yariv245/JobSeekerTG'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <ExternalLink className='w-5 h-5 text-slate-400 hover:text-green-400 cursor-pointer transition-colors' />
                    </a>
                  </div>

                  <p className='text-lg text-slate-300 mb-6 leading-relaxed'>
                    Deployed Telegram bot that scrapes job postings from
                    platforms like LinkedIn, Indeed, Glassdoor and others. Using
                    Python, MongoDB.
                  </p>

                  <div className='flex flex-wrap gap-2'>
                    {['Python', 'Telegram API', 'MongoDB', 'Web Scraping'].map(
                      (tech) => (
                        <Badge
                          key={tech}
                          className='bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors'
                        >
                          {tech}
                        </Badge>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Education & Military Section */}
        <motion.section
          className='py-20 px-6'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <div className='max-w-4xl mx-auto'>
            <div className='grid md:grid-cols-2 gap-12'>
              <motion.div variants={itemVariants}>
                <Card className='h-full bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-green-500/20'>
                  <CardContent className='p-8'>
                    <div className='flex items-center gap-3 mb-6'>
                      <GraduationCap className='w-8 h-8 text-green-400' />
                      <h3 className='text-2xl font-bold text-white'>
                        Education
                      </h3>
                    </div>

                    <h4 className='text-xl font-semibold text-slate-200 mb-2'>
                      B.Sc. in Computer Science
                    </h4>
                    <p className='text-slate-400 mb-4'>
                      College of Management Academic Studies
                    </p>
                    <div className='flex items-center gap-2 text-slate-400'>
                      <Calendar className='w-4 h-4' />
                      <span>2018–2021</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className='h-full bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-green-500/20'>
                  <CardContent className='p-8'>
                    <div className='flex items-center gap-3 mb-6'>
                      <Shield className='w-8 h-8 text-green-400' />
                      <h3 className='text-2xl font-bold text-white'>
                        Military Service
                      </h3>
                    </div>

                    <h4 className='text-xl font-semibold text-slate-200 mb-2'>
                      Ground Control Coordinator
                    </h4>
                    <p className='text-slate-400 mb-4'>Israeli Air Force</p>
                    <div className='flex items-center gap-2 text-slate-400'>
                      <Calendar className='w-4 h-4' />
                      <span>2013–2016</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className='py-12 px-6 bg-slate-800 border-t border-green-500/20'>
          <div className='max-w-4xl mx-auto text-center'>
            <p className='text-lg mb-4 text-slate-300'>
              Ready to build something amazing together?
            </p>
            <div className='flex justify-center gap-6'>
              <a
                href='mailto:yariv220895@gmail.com'
                className='hover:text-green-400 transition-colors text-slate-400'
              >
                <Mail className='w-6 h-6' />
              </a>
              <a
                href='https://www.linkedin.com/in/yarivmen/'
                className='hover:text-green-400 transition-colors text-slate-400'
              >
                <Linkedin className='w-6 h-6' />
              </a>
              <a
                href='https://github.com/yariv245'
                className='hover:text-green-400 transition-colors text-slate-400'
              >
                <Github className='w-6 h-6' />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
