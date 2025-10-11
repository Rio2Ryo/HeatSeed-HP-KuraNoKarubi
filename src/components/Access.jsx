import React from 'react'
import { motion } from 'framer-motion'

const Access = () => {
  return (
    <section id="access" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-black mb-4">
            アクセス
          </h2>
          <div
            className="w-20 h-1 mx-auto"
            style={{
              background: 'linear-gradient(90deg, #FFD700 0%, #D4AF37 50%, #B8860B 100%)',
            }}
          />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 sm:gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="bg-luxury-darkGray h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden flex items-center justify-center border-4 border-dashed"
              style={{
                borderColor: '#D4AF37',
              }}
            >
              <p className="text-gradient-gold text-center px-4 text-sm sm:text-base">
                [ Google Map 埋め込み ]<br />
                <span className="text-xs sm:text-sm text-gray-400">※寒川店の地図を表示</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="bg-white p-6 sm:p-8 rounded-lg border-2"
              style={{
                borderColor: 'rgba(212, 175, 55, 0.2)',
              }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-luxury-black mb-4 sm:mb-6">
                蔵のカルビ 寒川店
              </h3>

              <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-gradient-gold">住所</h4>
                  <p>〒〇〇〇-〇〇〇〇（未定）</p>
                  <p>神奈川県○○市寒川町○○○○</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-gradient-gold">電話番号</h4>
                  <p>000-0000-0000（未定）</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-gradient-gold">営業時間</h4>
                  <p>平日: 00:00 - 00:00（未定）</p>
                  <p>土日祝: 00:00 - 00:00（未定）</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-gradient-gold">定休日</h4>
                  <p>○曜日（未定）</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-gradient-gold">アクセス</h4>
                  <p>電車: ○○線 寒川駅 徒歩○分（未定）</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-gradient-gold">駐車場</h4>
                  <p>駐車場の有無（未定）</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-gradient-gold">個室</h4>
                  <p>4室完備（プライベート空間でお食事可能）</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Access
