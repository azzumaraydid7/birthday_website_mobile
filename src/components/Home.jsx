import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import audio from '../assets/AURELIE HERMANSYAH - CINTA SEPERTI AKU (Official Music Video).mp3';

function Home() {
  const [visibleCount, setVisibleCount] = useState(1)
  const navigate = useNavigate()
  const sentences = [
    "Hai Sayangku",
    "❤️",
    "Selamat Hari Lahir",
    "ke-26",
  ]

  const playAudio = () => {
    new Audio(audio).play();
  }

  const handleClick = () => {
    if (visibleCount < sentences.length) {
      setVisibleCount(visibleCount + 1)
    } else {
      navigate('/pictures')
      playAudio
    }
  }
  return (
    <div 
      className="flex flex-col min-h-screen  cursor-pointer w-full items-center justify-center over-flow-clip" 
      onClick={handleClick}
    >
      {/* <audio id="audio"><source src="/src/assets/AURELIE HERMANSYAH - CINTA SEPERTI AKU (Official Music Video).mp3" type="audio/mp3"></source></audio> */}
      <div className="w-[90%] max-w-[400px] px-8 text-center">
        {sentences.slice(0, visibleCount).map((sentence, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-xl sm:text-4xl font-bold text-white drop-shadow-lg"
          >
            {sentence}
          </motion.p>
        ))}
      </div>
    </div>
  )
}

export default Home