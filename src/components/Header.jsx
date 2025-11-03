import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { name: 'HOME', id: 'hero' },
    { name: '特徴', id: 'features' },
    { name: 'メニュー', id: 'menu' },
    { name: 'こだわり', id: 'about' },
    { name: 'お部屋', id: 'rooms' },
    { name: 'お客様の声', id: 'reviews' },
    { name: 'アクセス', id: 'access' },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex justify-between items-center py-3 px-3 sm:py-4 sm:px-6">
        {/* ロゴ */}
        <div
          className="font-bold cursor-pointer whitespace-nowrap flex-shrink-0"
          style={{
            fontSize: 'clamp(0.875rem, 3.5vw, 1.5rem)',
          }}
          onClick={() => scrollToSection('hero')}
        >
          <span className={isScrolled ? 'text-luxury-black' : 'text-white'}>
            蔵のカルビ <span className={isScrolled ? 'text-gray-600' : 'text-gray-300'}>寒川店</span>
          </span>
        </div>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center space-x-3 lg:space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-medium transition-colors hover:text-gray-300 whitespace-nowrap text-sm lg:text-base ${
                isScrolled ? 'text-luxury-black' : 'text-white'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('reservation')}
            className={`font-medium transition-colors hover:text-gray-300 whitespace-nowrap text-sm lg:text-base ${
              isScrolled ? 'text-luxury-black' : 'text-white'
            }`}
          >
            予約
          </button>
        </nav>

        {/* モバイルハンバーガーメニュー */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 transition-colors ${
                isScrolled ? 'bg-gray-900' : 'bg-white'
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-colors ${
                isScrolled ? 'bg-gray-900' : 'bg-white'
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-colors ${
                isScrolled ? 'bg-gray-900' : 'bg-white'
              }`}
            />
          </div>
        </button>
      </div>

      {/* モバイルメニュー */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <nav className="flex flex-col space-y-4 py-6 px-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-luxury-black font-medium hover:text-gray-600 transition-colors text-left"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('reservation')}
              className="text-luxury-black font-medium hover:text-gray-600 transition-colors text-left"
            >
              予約
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header
