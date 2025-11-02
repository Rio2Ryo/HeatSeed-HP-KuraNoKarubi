import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const RoomCard = ({ name, capacity, description, image, index, isReversed }) => {
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
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500 text-center px-4 text-sm sm:text-base">
                [ {name}の写真 ]
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="md:w-1/2 w-full px-4 sm:px-0">
        <h3 className="text-2xl sm:text-3xl font-bold text-luxury-black mb-3 sm:mb-4">{name}</h3>
        <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">{capacity}</p>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

const Rooms = () => {
  const rooms = [
    {
      name: '半個室',
      capacity: '定員: 4名様',
      description:
        '半個室タイプの席で、ほどよいプライベート感を保ちながらお食事をお楽しみいただけます。4名様までご利用いただける空間です。',
      image: '/media/room1.jpg',
    },
    {
      name: '完全個室',
      capacity: '定員: 6名様',
      description:
        '完全にプライベートな空間の個室です。ゆっくりとお食事をお楽しみいただけます。6名様までご利用いただける広々とした空間です。',
      image: '/media/room2.jpg',
    },
    {
      name: '完全個室（ファミリー向け）',
      capacity: '定員: 6名様',
      description:
        '完全にプライベートな空間の個室です。子供や乳幼児用のおもちゃが備わっており、ファミリーで安心してお食事をお楽しみいただけます。6名様までご利用いただけます。',
      image: '/media/room3.jpg',
    },
    {
      name: '完全個室（大部屋）',
      capacity: '定員: 8名様',
      description:
        '完全にプライベートな空間の大部屋タイプの個室です。広々とした空間で、大人数のグループでもゆっくりとお食事をお楽しみいただけます。8名様までご利用いただけます。',
      image: '/media/room4.jpg',
    },
  ]

  return (
    <section id="rooms" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-black mb-4">
            お部屋の特徴
          </h2>
          <div className="w-20 h-1 bg-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">
            4つの個室でプライベートな空間をご提供します
          </p>
        </motion.div>

        <div>
          {rooms.map((room, index) => (
            <RoomCard key={index} {...room} index={index} isReversed={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rooms
