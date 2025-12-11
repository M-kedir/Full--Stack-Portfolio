import { motion } from 'framer-motion';
import { experiences } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { fadeIn, staggerContainer } from '../utils/motion';

export const Experience = () => (
  <motion.div
    variants={staggerContainer(0.1, 0.12)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className="space-y-12"
  >
    <SectionHeading
      eyebrow="EXPERIENCE"
      title="Relevant experience"
      description="Recent roles pairing design collaboration with dependable delivery."
    />
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <motion.article
          key={`${exp.title}-${exp.company}`}
          variants={fadeIn('up', index * 0.1)}
          className="rounded-[32px] border border-sand/60 bg-pearl/80 p-8 shadow-soft transition-theme dark:border-white/10 dark:bg-white/5"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-pewter/70">{exp.period}</p>
              <h3 className="text-2xl font-semibold text-slate dark:text-smoke">
                {exp.title}
                <span className="text-base font-normal text-pewter"> · {exp.company}</span>
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-pewter/80">
              {exp.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-sand/70 px-3 py-1 dark:border-white/15">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-4 text-lg text-slate/80 dark:text-pewter">{exp.description}</p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate/80 dark:text-pewter">
            {exp.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </motion.div>
);
