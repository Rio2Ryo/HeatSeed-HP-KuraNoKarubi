import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const videoSource = isMobile ? '/media/top-page-tate.mp4' : '/media/top-page-yoko.mp4'

  return (
    <section
      id="hero"
      className="relative h-screen flex items-end pb-8 sm:pb-12 justify-center bg-black text-white"
    >
      {/* 背景動画 */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        <video
          key={videoSource}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          onLoadedData={(e) => {
            // 動画読み込み完了後に再生開始を試みる
            e.target.play().catch(() => {})
          }}
        >
          <source src={videoSource} type="video/mp4" />
        </video>
        {/* グラデーションオーバーレイ（下部に黒グラデーション） */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
      </div>

      <div className="text-center z-10 px-2 sm:px-6 py-6 sm:py-12 max-w-4xl mx-2 sm:mx-4 w-[calc(100%-1rem)] sm:w-auto">
        <motion.h1
          className="font-bold mb-3 sm:mb-6 text-white whitespace-nowrap leading-tight"
          style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-gradient-gold-rich">美味しい</span>を、<span className="text-gradient-gold-rich">子ども</span>にも。
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-light text-white leading-relaxed max-w-2xl mx-auto px-2 sm:px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          大人もゆっくり食事ができる、<br />
          高級感と家族の温かみを兼ね備えた焼肉店
        </motion.p>
      </div>
    </section>
  )
}

export default Hero
