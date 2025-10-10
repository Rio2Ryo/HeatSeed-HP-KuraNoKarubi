import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const RoomCard = ({ name, capacity, description, index, isReversed }) => {
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
        <div className="w-full h-64 sm:h-72 md:h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center border-4 border-dashed border-gray-300">
          <p className="text-gray-500 text-center px-4 text-sm sm:text-base">
            [ {name}の写真 ]
          </p>
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
      name: '個室A',
      capacity: '定員: 〇名様',
      description:
        'お部屋の説明がここに入ります。プライベートな空間で、ゆっくりとお食事をお楽しみいただけます。',
    },
    {
      name: '個室B',
      capacity: '定員: 〇名様',
      description:
        'お部屋の説明がここに入ります。プライベートな空間で、ゆっくりとお食事をお楽しみいただけます。',
    },
    {
      name: '個室C',
      capacity: '定員: 〇名様',
      description:
        'お部屋の説明がここに入ります。プライベートな空間で、ゆっくりとお食事をお楽しみいただけます。',
    },
    {
      name: '個室D',
      capacity: '定員: 〇名様',
      description:
        'お部屋の説明がここに入ります。プライベートな空間で、ゆっくりとお食事をお楽しみいただけます。',
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
