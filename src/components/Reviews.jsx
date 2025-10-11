import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ReviewCard = ({ name, rating, comment, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-lg border-2 border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="flex items-center mb-3 sm:mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold text-lg sm:text-xl mr-3 sm:mr-4">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-sm sm:text-base text-luxury-black">{name}</h4>
          <div className="flex text-gradient-gold-star text-sm sm:text-base">
            {[...Array(5)].map((_, i) => (
              <span key={i}>{i < rating ? '★' : '☆'}</span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{comment}</p>
      <p className="text-xs text-gray-500 mt-3 sm:mt-4">※Googleレビューより</p>
    </motion.div>
  )
}

const Reviews = () => {
  const reviews = [
    {
      name: 'お客様A',
      rating: 5,
      comment:
        'レビュー内容がここに入ります。実際のGoogleマップレビューを引用掲載予定。家族で訪れましたが、とても良い雰囲気でした。',
    },
    {
      name: 'お客様B',
      rating: 5,
      comment:
        'レビュー内容がここに入ります。実際のGoogleマップレビューを引用掲載予定。お肉の質が高く、コスパも最高です。',
    },
    {
      name: 'お客様C',
      rating: 4,
      comment:
        'レビュー内容がここに入ります。実際のGoogleマップレビューを引用掲載予定。個室があるので落ち着いて食事ができました。',
    },
  ]

  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-black mb-4">
            お客様の声
          </h2>
          <div className="w-20 h-1 bg-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-base sm:text-lg">
            ※実際のGoogleマップレビューを引用掲載予定
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
