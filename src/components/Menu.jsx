import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const MenuItem = ({ name, description, price, isReversed, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col ${
        isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-8 items-center mb-16`}
      initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? 50 : -50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className="md:w-1/2 w-full">
        <div className="w-full h-64 sm:h-72 md:h-80 bg-luxury-black rounded-lg shadow-lg flex items-center justify-center border-4 border-dashed border-gold">
          <p className="text-gold text-center px-4 text-sm sm:text-base">
            [ 商品画像 ]<br />
            <span className="text-xs sm:text-sm text-gray-400">※高級感のある料理写真</span>
          </p>
        </div>
      </div>
      <div className="md:w-1/2 w-full px-4 sm:px-0">
        <h3 className="text-2xl sm:text-3xl font-bold text-gold mb-3 sm:mb-4">{name}</h3>
        <p className="text-base sm:text-lg text-gray-100 leading-relaxed mb-4 sm:mb-6">{description}</p>
        <p className="text-xl sm:text-2xl font-bold text-gold-light">{price}</p>
      </div>
    </motion.div>
  )
}

const Menu = () => {
  const menuItems = [
    {
      name: '特選カルビ盛り合わせ',
      description:
        '厳選された国産黒毛和牛のカルビを贅沢に盛り合わせました。やわらかく、ジューシーな味わいが特徴です。',
      price: '¥〇,〇〇〇（価格未定）',
    },
    {
      name: '厳選お肉コース',
      description:
        '当店自慢の厳選されたお肉を堪能できるコース。前菜からデザートまで、オーナーこだわりの逸品をご堪能ください。',
      price: '¥〇,〇〇〇（価格未定）',
    },
    {
      name: 'プレミアム日本酒セット',
      description:
        '焼肉との相性抜群の高級日本酒をセレクト。オーナーが厳選した銘酒で、至福のひとときをお楽しみください。',
      price: '¥〇,〇〇〇（価格未定）',
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
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
            メニュー
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto" />
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
