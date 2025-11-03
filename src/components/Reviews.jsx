import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ReviewCard = ({ name, rating, comment, avatar, index, iconLabel }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      ref={ref}
      className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-lg border-2 border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="flex items-center mb-3 sm:mb-4">
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 flex-shrink-0">
          {avatar && !imageError ? (
            <img
              src={avatar}
              alt={name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl">
              {iconLabel || name.charAt(0)}
            </div>
          )}
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-sm sm:text-base text-luxury-black">{name}</h4>
          <div className="flex text-yellow-400 text-sm sm:text-base mt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i}>{i < rating ? '★' : '☆'}</span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{comment}</p>
      <p className="text-xs text-gray-500 mt-3 sm:mt-4 flex items-center gap-1">
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Googleマップレビューより
      </p>
    </motion.div>
  )
}

const Reviews = () => {
  const reviews = [
    {
      name: 'お客様A',
      rating: 5,
      comment:
        '記念日の会食でお食事させて頂きました。お肉はとにかく美味しい！個室でゆっくり話しができて、最高の空間でした。店長さんからお肉の説明もあり、お人柄も素敵でした。',
      avatar: null, // Googleマップのアバター画像URLをここに設定
      iconLabel: 'A',
    },
    {
      name: 'お客様B',
      rating: 5,
      comment:
        '子連れに人気とのことで行きましたが、ベビーベッドやおむつ、子供用の着替えなど全てがお店からの無料サービス。乳幼児のお食事含めてサービス内で賄われている最高のお店です。焼肉もタンやカルビは絶品。最高のお店です。',
      avatar: null, // Googleマップのアバター画像URLをここに設定
      iconLabel: 'B',
    },
    {
      name: 'お客様C',
      rating: 4,
      comment:
        '個室で子連れには嬉しいおもちゃがある部屋もあり安心して食事を楽しめます！おむつや離乳食なども用意されていてとてもありがたいです！。',
      avatar: null, // Googleマップのアバター画像URLをここに設定
      iconLabel: 'C',
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
            実際のGoogleマップレビューを引用掲載
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
