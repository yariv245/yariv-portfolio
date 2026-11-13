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
  ChevronDown,
  ArrowRight,
  FolderGit2,
} from 'lucide-react';
import SiteNav from '@/components/site/SiteNav';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  profile,
  skills,
  experience,
  projects,
  education,
  military,
} from '@/data/profile';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const skillIcons = {
  code: Code,
  server: Server,
  database: Database,
  cloud: Cloud,
  brain: Brain,
  award: Award,
};

const cardClass =
  'bg-white/10 backdrop-blur-sm shadow-lg border border-green-500/20';
const pillClass =
  'flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400';

function Section({ title, children, tinted = false, id }) {
  return (
    <motion.section
      id={id}
      className={`py-16 md:py-20 px-4 md:px-6 ${tinted ? 'bg-white/5' : ''}`}
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.05 }}
    >
      <div className='max-w-5xl mx-auto'>
        <motion.h2
          variants={itemVariants}
          className='text-4xl md:text-5xl font-bold text-white mb-10 md:mb-14 text-center'
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </motion.section>
  );
}

function DetailBlock({ block }) {
  if (block.type === 'p') {
    return <p className='text-slate-300 leading-relaxed'>{block.text}</p>;
  }
  if (block.type === 'list') {
    return (
      <ul className='space-y-2'>
        {block.items.map((item) => (
          <li key={item} className='flex items-start gap-3 text-slate-300'>
            <span className='w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2.5 flex-shrink-0' />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === 'flow') {
    return (
      <ol className='flex flex-wrap items-center gap-2' aria-label='Workflow steps'>
        {block.steps.map((step, i) => (
          <li key={step} className='flex items-center gap-2'>
            <span className='px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-400/30 text-emerald-200 text-sm font-medium'>
              {step}
            </span>
            {i < block.steps.length - 1 && (
              <ArrowRight className='w-4 h-4 text-emerald-400/70' aria-hidden='true' />
            )}
          </li>
        ))}
      </ol>
    );
  }
  if (block.type === 'outcomes') {
    return (
      <div className='grid sm:grid-cols-3 gap-3'>
        {block.items.map((o) => (
          <div
            key={o.title}
            className='rounded-lg bg-slate-900/40 border border-green-500/20 p-4'
          >
            <p className='font-semibold text-green-300 mb-1'>{o.title}</p>
            <p className='text-sm text-slate-300'>{o.text}</p>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

function Achievement({ item }) {
  const [open, setOpen] = useState(false);
  const hasDetails = item.details && item.details.length > 0;
  return (
    <li className='flex items-start gap-3'>
      <span className='w-2 h-2 bg-green-500 rounded-full mt-2.5 flex-shrink-0' />
      <div className='flex-1 min-w-0'>
        <p className='text-slate-200'>{item.text}</p>
        {hasDetails && (
          <>
            <button
              type='button'
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className='mt-2 inline-flex items-center gap-1 text-sm font-medium text-green-400 hover:text-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400 rounded'
            >
              {open ? 'Less' : 'More details'}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
                aria-hidden='true'
              />
            </button>
            {open && (
              <div className='mt-3 space-y-4 border-l-2 border-green-500/30 pl-4'>
                {item.details.map((block, i) => (
                  <DetailBlock key={i} block={block} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </li>
  );
}

export default function Resume() {
  const resumeUrl = `${import.meta.env.BASE_URL}${profile.resumePdf}`;

  return (
    <div id='top' className='min-h-screen bg-slate-900 relative overflow-hidden'>
      <SiteNav name={profile.name} />
      {/* Tech Background Pattern */}
      <div className='absolute inset-0 opacity-10' aria-hidden='true'>
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
      </div>

      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900'></div>

      <div className='relative z-10'>
        {/* Hero */}
        <motion.section
          className='relative min-h-screen flex items-center justify-center px-4 md:px-6 py-20'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <div className='max-w-4xl mx-auto text-center'>
            <motion.div variants={itemVariants} className='mb-8'>
              <div className='w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-emerald-500'>
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt={profile.name}
                  className='object-cover w-full h-full'
                />
              </div>
              <h1 className='text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight'>
                {profile.name}
              </h1>
              <p className='text-2xl md:text-3xl text-green-400 mb-2 font-light'>
                {profile.headline}
              </p>
              <p className='text-lg md:text-xl text-slate-300 mb-6'>
                {profile.stackLine}
              </p>
              <p className='max-w-2xl mx-auto text-lg text-slate-300 leading-relaxed mb-6'>
                {profile.summary}
              </p>
              <div className='flex items-center justify-center gap-2 text-lg text-slate-400 mb-8'>
                <MapPin className='w-5 h-5' aria-hidden='true' />
                <span>{profile.location}</span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='flex flex-wrap justify-center gap-3 md:gap-4 mb-10'
            >
              <a href={`mailto:${profile.email}`} className={pillClass}>
                <Mail className='w-5 h-5 text-green-400' aria-hidden='true' />
                <span className='text-white break-all'>{profile.email}</span>
              </a>
              <a href={profile.phoneHref} className={pillClass}>
                <Phone className='w-5 h-5 text-green-400' aria-hidden='true' />
                <span className='text-white'>{profile.phone}</span>
              </a>
              <a href={profile.linkedin} target='_blank' rel='noopener noreferrer' className={pillClass}>
                <Linkedin className='w-5 h-5 text-green-400' aria-hidden='true' />
                <span className='text-white'>LinkedIn</span>
              </a>
              <a href={profile.github} target='_blank' rel='noopener noreferrer' className={pillClass}>
                <Github className='w-5 h-5 text-green-400' aria-hidden='true' />
                <span className='text-white'>GitHub</span>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className='flex flex-wrap justify-center gap-3 md:gap-4'>
              <a
                href={resumeUrl}
                download='Yariv-Menachem-Resume.pdf'
                className='inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-base font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400'
              >
                <Download className='w-5 h-5 mr-2' aria-hidden='true' />
                Download Resume
              </a>
              <a
                href='#projects'
                className='inline-flex items-center text-white text-base font-medium px-8 py-4 rounded-full border border-green-500/50 bg-white/5 hover:bg-white/15 transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400'
              >
                <FolderGit2 className='w-5 h-5 mr-2 text-green-400' aria-hidden='true' />
                See my projects
              </a>
            </motion.div>
          </div>
          <a
            href='#about'
            aria-label='Scroll to About'
            className='absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 hover:text-green-400 transition-colors'
          >
            <span className='text-xs uppercase tracking-widest'>Scroll</span>
            <ChevronDown className='w-6 h-6 animate-bounce' aria-hidden='true' />
          </a>
        </motion.section>

        {/* About */}
        <Section id='about' title='About Me'>
          <motion.div variants={itemVariants} className='max-w-4xl mx-auto'>
            <Card className={`${cardClass} shadow-2xl`}>
              <CardContent className='p-6 md:p-12 space-y-5'>
                {profile.about.map((p) => (
                  <p key={p} className='text-lg md:text-xl leading-relaxed text-slate-200'>
                    {p}
                  </p>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </Section>

        {/* Experience */}
        <Section id='experience' title='Experience' tinted>
          <div className='relative max-w-4xl mx-auto'>
            <div className='absolute left-3 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-emerald-600'></div>
            {experience.map((job) => (
              <motion.div
                key={job.company}
                variants={itemVariants}
                className='relative pl-10 md:pl-20 mb-10 last:mb-0'
              >
                <div className='absolute left-1 md:left-6 top-8 w-4 h-4 bg-green-500 rounded-full border-4 border-slate-800 shadow-lg'></div>
                <Card className={cardClass}>
                  <CardContent className='p-6 md:p-8'>
                    <div className='flex items-center gap-3 mb-4'>
                      <Briefcase className='w-5 h-5 text-green-400' aria-hidden='true' />
                      <span className='px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium'>
                        {job.period}
                      </span>
                    </div>
                    <h3 className='text-2xl font-bold text-white mb-1'>{job.company}</h3>
                    <p className='text-lg text-green-400 mb-1'>{job.role}</p>
                    {job.context && (
                      <p className='text-slate-400 mb-4'>{job.context}</p>
                    )}
                    <ul className='space-y-4 mt-4'>
                      {job.achievements.map((item) => (
                        <Achievement key={item.title} item={item} />
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id='projects' title='Projects'>
          <div className='grid md:grid-cols-2 gap-6 md:gap-8'>
            {projects.map((project) => (
              <motion.div key={project.name} variants={itemVariants}>
                <Card className={`${cardClass} h-full shadow-2xl`}>
                  <CardContent className='p-6 md:p-8 flex flex-col h-full'>
                    <div className='flex items-start justify-between gap-3 mb-1'>
                      <h3 className='text-2xl md:text-3xl font-bold text-white'>
                        {project.name}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex items-center gap-1 shrink-0 mt-1 px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium hover:bg-green-500/30 transition-colors'
                        >
                          {project.linkLabel || 'Live site'}
                          <ExternalLink className='w-4 h-4' aria-hidden='true' />
                        </a>
                      )}
                    </div>
                    <p className='text-green-400 mb-4'>{project.tagline}</p>
                    <p className='text-slate-300 mb-4 leading-relaxed'>
                      {project.description}
                    </p>
                    {project.highlights && (
                      <ul className='space-y-2 mb-6'>
                        {project.highlights.map((h) => (
                          <li key={h} className='flex items-start gap-3 text-slate-300 text-sm md:text-base'>
                            <span className='w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2.5 flex-shrink-0' />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className='flex flex-wrap gap-2 mt-auto'>
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className='bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors'
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id='skills' title='Skills' tinted>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {skills.map(({ group, icon, items }) => {
              const Icon = skillIcons[icon] || Code;
              return (
                <motion.div key={group} variants={itemVariants}>
                  <Card className={`${cardClass} h-full`}>
                    <CardContent className='p-6 md:p-8'>
                      <div className='flex items-center gap-3 mb-5'>
                        <div className='p-3 rounded-xl bg-green-100'>
                          <Icon className='w-6 h-6 text-green-700' aria-hidden='true' />
                        </div>
                        <h3 className='text-xl font-bold text-white'>{group}</h3>
                      </div>
                      <div className='flex flex-wrap gap-2'>
                        {items.map((skill) => (
                          <Badge
                            key={skill}
                            className='bg-green-50 text-green-700 border-green-200 hover:bg-green-100'
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
        </Section>

        {/* Education & Military */}
        <Section id='education' title='Education & Service'>
          <div className='grid md:grid-cols-2 gap-6 md:gap-12 max-w-4xl mx-auto'>
            {[
              { Icon: GraduationCap, heading: 'Education', title: education.degree, sub: education.school, period: education.period },
              { Icon: Shield, heading: 'Military Service', title: military.role, sub: military.unit, period: military.period },
            ].map(({ Icon, heading, title, sub, period }) => (
              <motion.div key={heading} variants={itemVariants}>
                <Card className={`${cardClass} h-full`}>
                  <CardContent className='p-6 md:p-8'>
                    <div className='flex items-center gap-3 mb-6'>
                      <Icon className='w-8 h-8 text-green-400' aria-hidden='true' />
                      <h3 className='text-2xl font-bold text-white'>{heading}</h3>
                    </div>
                    <p className='text-xl font-semibold text-slate-200 mb-2'>{title}</p>
                    <p className='text-slate-400 mb-4'>{sub}</p>
                    <div className='flex items-center gap-2 text-slate-400'>
                      <Calendar className='w-4 h-4' aria-hidden='true' />
                      <span>{period}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Footer */}
        <footer className='py-12 px-4 md:px-6 bg-slate-800 border-t border-green-500/20'>
          <div className='max-w-4xl mx-auto text-center'>
            <p className='text-lg mb-4 text-slate-300'>
              Ready to build something together?
            </p>
            <div className='flex justify-center gap-6'>
              <a href={`mailto:${profile.email}`} aria-label='Email' className='hover:text-green-400 transition-colors text-slate-400'>
                <Mail className='w-6 h-6' />
              </a>
              <a href={profile.linkedin} aria-label='LinkedIn' target='_blank' rel='noopener noreferrer' className='hover:text-green-400 transition-colors text-slate-400'>
                <Linkedin className='w-6 h-6' />
              </a>
              <a href={profile.github} aria-label='GitHub' target='_blank' rel='noopener noreferrer' className='hover:text-green-400 transition-colors text-slate-400'>
                <Github className='w-6 h-6' />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
