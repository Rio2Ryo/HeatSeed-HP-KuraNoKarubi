import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const KodawariCard = ({ title, description, image, index, isReversed }) => {
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
        <div className="w-full h-64 sm:h-72 md:h-80 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500 text-center px-4 text-sm sm:text-base">
                [ {title}の写真 ]
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="md:w-1/2 w-full px-4 sm:px-0">
        <h3 className="text-2xl sm:text-3xl font-bold text-luxury-black mb-3 sm:mb-4">{title}</h3>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: '#FFFEF7' }}>
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
          <div
            className="w-20 h-1 mx-auto"
            style={{
              background: 'linear-gradient(90deg, #FFD700 0%, #D4AF37 50%, #B8860B 100%)',
            }}
          />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="w-full h-64 sm:h-80 md:h-96 bg-luxury-darkGray rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="/media/20250921_outward.jpg"
                alt="蔵のカルビ 寒川店 外観"
                className="w-full h-full object-cover"
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
            <h3 className="text-2xl sm:text-3xl font-bold text-luxury-black mb-4 sm:mb-6 px-4 sm:px-0">蔵のカルビ 寒川店</h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 px-4 sm:px-0">
              当店は「高級感」と「家族の温かみ」を大切にする焼肉店です。
              お子様連れのご家族から、接待・会食までどなたにもご満足いただける空間をご提供しております。
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 px-4 sm:px-0">
              オーナー自らが仕入れから提供まで、一人ひとりのお客様に合わせてこだわり抜いております。
              味と価格のバランスにこだわり、コストパフォーマンスの高さを実現しました。
            </p>
            <div className="space-y-2 text-gray-800 mb-6">
              <p>
                <span className="font-bold text-gradient-gold">店舗名:</span> 蔵のカルビ 寒川店
              </p>
              <p>
                <span className="font-bold text-gradient-gold">コンセプト:</span> 美味しいを、子どもにも。
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          {[
            {
              title: 'お子様連れへの配慮',
              description:
                '当店のオーナーは、乳幼児やお子様連れのご家族にも安心して焼肉を楽しんでいただきたいという想いから、離乳食やミルク、お子様用のおもちゃを無料でご用意しております。大切なご家族とのひとときを、どうぞゆっくりとお過ごしください。',
              image: '/media/おもてなしアイテム.jpg',
            },
            {
              title: 'おむつ替えへの配慮',
              description:
                'オーナーがお子様のおむつ替えをゆっくりと安心して行えるようにという配慮から、トイレの個室におむつ台を設置しております。お子様連れのご家族にも快適にお過ごしいただけるよう、細やかな工夫を施しております。',
              image: '/media/トイレ、ベビールーム.jpg',
            },
          ].map((kodawari, index) => (
            <KodawariCard
              key={index}
              {...kodawari}
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
