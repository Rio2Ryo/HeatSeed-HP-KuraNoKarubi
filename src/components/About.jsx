import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-black mb-4">
            オーナーのこだわり
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto" />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-64 sm:h-80 md:h-96 bg-luxury-darkGray rounded-lg shadow-lg flex items-center justify-center border-4 border-dashed border-gold">
              <p className="text-gold text-center px-4 text-sm sm:text-base">
                [ 店舗外観・内観写真 ]<br />
                <span className="text-xs sm:text-sm text-gray-400">※家族で楽しむ雰囲気と上品さを表現</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-luxury-black mb-4 sm:mb-6 px-4 sm:px-0">蔵のカルビ 寒川店</h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 px-4 sm:px-0">
              当店は「高級感」と「家族の温かみ」を大切にする焼肉店です。
              お子様連れのご家族から、接待・会食までどなたにもご満足いただける空間をご提供しております。
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 px-4 sm:px-0">
              オーナー自らが仕入れから提供まで、一人ひとりのお客様に合わせてこだわり抜いております。
              味と価格のバランスにこだわり、コストパフォーマンスの高さを実現しました。
            </p>
            <div className="space-y-2 text-gray-800">
              <p>
                <span className="font-bold text-gold">店舗名:</span> 蔵のカルビ 寒川店
              </p>
              <p>
                <span className="font-bold text-gold">コンセプト:</span> 美味しいを、子どもにも。
              </p>
              <p>
                <span className="font-bold text-gold">こだわり:</span> 仕入れから提供まで、オーナーが一人ひとりに合わせて対応
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
