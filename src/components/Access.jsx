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
            <div className="h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.313110116327!2d139.38305775096265!3d35.372689455483126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601853424a9d3a6d%3A0x2ace5c2a49eb63d!2z5YCL5a6kw5fnhLzogokg6JS144Gu44Kr44Or44OTIOWvkuW3nQ!5e0!3m2!1sja!2sjp!4v1762135888150!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
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
                  <p>〒253-0106</p>
                  <p>神奈川県高座郡寒川町宮山120-5</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-gradient-gold">電話番号・FAX</h4>
                  <p>TEL: 0467-84-7088</p>
                  <p>FAX: 0467-84-7299</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-gradient-gold">営業時間</h4>
                  <p>月～日 ディナー 17:00～24:00</p>
                  <p className="text-xs sm:text-sm text-gray-500">（L.O. 23:30）</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-gradient-gold">定休日</h4>
                  <p>第1月曜日～木曜日</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-gradient-gold">アクセス</h4>
                  <p>JR相模線 寒川駅 徒歩8分</p>
                  <p>JR相模線 宮山駅 徒歩17分</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-gradient-gold">駐車場</h4>
                  <p>有（6台）</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-gradient-gold">平均予算</h4>
                  <p>通常平均: 3,500円</p>
                  <p>宴会平均: 4,500円</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-gradient-gold">クレジットカード</h4>
                  <p className="text-xs sm:text-sm">VISA / MasterCard / JCB / アメリカン・エキスプレス / ダイナースクラブ</p>
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
