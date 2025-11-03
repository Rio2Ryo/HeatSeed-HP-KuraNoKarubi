import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const MenuItem = ({ name, description, price, image, isReversed, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col ${
        isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-6 sm:gap-8 items-center mb-12 sm:mb-16`}
      initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? 20 : -20 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className="md:w-1/2 w-full">
        <div
          className="w-full h-64 sm:h-72 md:h-80 bg-luxury-black rounded-lg shadow-lg overflow-hidden"
          style={{
            border: '4px solid #D4AF37',
          }}
        >
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gradient-gold text-center px-4 text-sm sm:text-base">
                [ 商品画像 ]<br />
                <span className="text-xs sm:text-sm text-gray-400">※高級感のある料理写真</span>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="md:w-1/2 w-full px-4 sm:px-0">
        <h3 className="text-2xl sm:text-3xl font-bold text-gradient-gold-rich mb-3 sm:mb-4">{name}</h3>
        <p className="text-base sm:text-lg text-gray-100 leading-relaxed mb-4 sm:mb-6">{description}</p>
        <p className="text-xl sm:text-2xl font-bold text-gradient-gold">{price}</p>
      </div>
    </motion.div>
  )
}

const Menu = () => {
  const menuItems = [
    {
      name: '特選牛タン盛り合わせ',
      description:
        '厳選された国産黒毛和牛の牛タン。旨味が凝縮された極上の味わいをお楽しみください。',
      price: '¥1,780 ～（税込）',
      image: '/media/20250921_gyutan.jpg',
    },
    {
      name: '厳選お肉コース',
      description:
        '当店自慢の厳選されたお肉を堪能できるコース。前菜からデザートまで、オーナーこだわりの逸品をご堪能ください。',
      price: '¥6,600 ～（税込）',
      image: '/media/20250921_niku_set.jpg',
    },
    {
      name: 'こだわりの銘柄',
      description:
        '焼肉との相性抜群の銘柄をセレクト。オーナーが厳選した銘柄で、至福のひとときをお楽しみください。',
      price: '¥399 ～（税込）',
      image: '/media/20250921_sake.jpg',
    },
  ]

  return (
    <section id="menu" className="section-padding bg-luxury-darkGray">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold-rich mb-4">
            メニュー
          </h2>
          <div
            className="w-20 h-1 mx-auto"
            style={{
              background: 'linear-gradient(90deg, #FFD700 0%, #D4AF37 50%, #B8860B 100%)',
            }}
          />
        </motion.div>

        <div>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              {...item}
              isReversed={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
