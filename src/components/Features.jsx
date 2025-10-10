import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const FeatureCard = ({ title, description, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="text-center p-6 sm:p-8 bg-luxury-darkGray rounded-lg shadow-lg hover:shadow-2xl transition-all border border-gold/20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gold">{title}</h3>
      <p className="text-white leading-relaxed font-medium text-base sm:text-lg">{description}</p>
    </motion.div>
  )
}

const Features = () => {
  const features = [
    {
      title: '味とコスパの良さ',
      description:
        '味と価格のバランスに優れ、コストパフォーマンスの高さが魅力。上質な焼肉をリーズナブルにお楽しみいただけます。',
    },
    {
      title: '個室で落ち着いた空間',
      description:
        '個室が4室完備。プライベート空間でゆっくりとお食事をお楽しみいただけます。家族連れや接待にも最適です。',
    },
    {
      title: 'こだわりのお酒',
      description:
        '高級感のあるお酒を多数取り揃え。オーナーが仕入れから提供まで一人ひとりに合わせてこだわります。',
    },
  ]

  return (
    <section id="features" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-4">
            私たちの特徴
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
