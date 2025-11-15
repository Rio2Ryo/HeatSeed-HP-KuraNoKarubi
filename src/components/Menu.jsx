import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const MenuItem = ({ name, description, price, image, pdf1, pdf2, pdf3, pdf1Label, pdf2Label, pdf3Label, isReversed, index }) => {
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
          className="w-full h-64 sm:h-72 md:h-[400px] bg-luxury-black rounded-lg shadow-lg overflow-hidden"
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
        <p className="text-xl sm:text-2xl font-bold text-gradient-gold mb-6 sm:mb-8">{price}</p>
        {(pdf1 || pdf2) && (
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap">
            {pdf1 && (
              <a
                href={pdf1}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                {pdf1Label || 'メニュー1（PDF）'}
              </a>
            )}
            {pdf2 && (
              <a
                href={pdf2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-gray-900 font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-yellow-500"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                {pdf2Label || 'メニュー2（PDF）'}
              </a>
            )}
          </div>
        )}
        {pdf3 && (
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={pdf3}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-200 to-yellow-300 hover:from-yellow-300 hover:to-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-yellow-400"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              {pdf3Label || 'メニュー3（PDF）'}
            </a>
          </div>
        )}
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
      pdf1: '/media/蔵のカルビグランドメニュー（お子様メニュー含む）.pdf',
      pdf1Label: 'グランドメニュー（お子様メニュー含む）（PDF）',
      pdf2: '/media/蔵のカルビプレミアムメニュー.pdf',
      pdf2Label: 'プレミアムメニュー（PDF）',
    },
    {
      name: '厳選お肉コース',
      description:
        '当店自慢の厳選されたお肉を堪能できるコース。前菜からデザートまで、オーナーこだわりの逸品をご堪能ください。',
      price: '¥6,600 ～（税込）',
      image: '/media/20250921_niku_set.jpg',
      pdf1: '/media/蔵のカルビ黒毛和牛の希少部位コース.pdf',
      pdf1Label: '希少部位コース（PDF）',
      pdf2: '/media/蔵のカルビ食べ飲み放題コース.pdf',
      pdf2Label: '食べ飲み放題コース（PDF）',
    },
    {
      name: 'こだわりの銘柄',
      description:
        '焼肉との相性抜群の銘柄をセレクト。オーナーが厳選した銘柄で、至福のひとときをお楽しみください。',
      price: '¥399 ～（税込）',
      image: '/media/20250921_sake.jpg',
      pdf3: '/media/蔵のカルビドリンクメニュー.pdf',
      pdf3Label: 'ドリンクメニュー（PDF）',
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
