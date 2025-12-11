import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/content';
import { fadeIn, staggerContainer } from '../utils/motion';

export const Projects = () => (
  <motion.div
    className="space-y-12"
    variants={staggerContainer(0.1, 0.1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    <SectionHeading
      eyebrow="PROJECTS"
      title="Selected work"
      description="Hands-on pieces that highlight layout sense, motion, and front-end fundamentals."
    />
    <div className="grid gap-8 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div key={project.title} variants={fadeIn('up', index * 0.1)}>
          <ProjectCard {...project} index={index} />
        </motion.div>
      ))}
    </div>
  </motion.div>
);
