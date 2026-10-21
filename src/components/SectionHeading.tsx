import { motion } from 'framer-motion'

type Props = { eyebrow: string; title: string; description?: string }

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
    >
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  )
}
