import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-black text-white"
    >
      {/* 背景プレースホルダー（動画エリア） */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 flex items-center justify-center border-4 border-dashed border-gold/30">
          <p className="text-gold/50 text-xl text-center px-6">
            [ トップ動画エリア ]<br />
            <span className="text-sm text-gray-500">※高級感のある料理やお酒の動画・写真</span>
          </p>
        </div>
      </div>

      <div className="text-center z-10 px-4 sm:px-6 bg-black/80 py-8 sm:py-12 rounded-lg max-w-4xl mx-4">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white whitespace-nowrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-gold">美味しい</span>を、<span className="text-gold">子ども</span>にも。
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 font-light text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          高級感と家族の温かみを兼ね備えた焼肉店
        </motion.p>

        <motion.p
          className="text-sm sm:text-base md:text-lg mb-8 sm:mb-12 text-gray-300 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          ※キャッチコピー案「美味しいを、子どもにも。」<br className="hidden sm:block" />
          <span className="block sm:inline">コンセプト: 高級感 × 家族の温かみ</span>
        </motion.p>

        <motion.button
          onClick={() => scrollToSection('menu')}
          className="bg-gold hover:bg-gold-dark text-luxury-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all transform hover:scale-105"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          メニューを見る
        </motion.button>
      </div>

      {/* スクロールダウンアイコン */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
