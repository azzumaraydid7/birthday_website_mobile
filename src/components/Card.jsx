import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import "../assets/css/card.css";
import { Link } from 'react-router-dom';

function Card() {
  const [cardClass, setCardClass] = useState("");
  const [isCardOpened, setIsCardOpened] = useState(false);
  const timerRef = useRef(null);

  const toggleCard = () => {
    if (cardClass === "" || cardClass === "close-half") {
      setCardClass("open-half");
      setIsCardOpened(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("open-fully");
        timerRef.current = null;
      }, 1000);
    } else {
      setCardClass("close-half");
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("");
        timerRef.current = null;
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-clip">
      <div className="w-[400px] h-screen flex flex-col items-center justify-center">
        <motion.div initial={{ opacity: 0, visibility: "hidden" }}
          animate={{ opacity: 1, visibility: "visible" }}
          transition={{ duration: 1.2 }}>
          <div id="card" className={`${cardClass}`} onClick={toggleCard}>
            <div id="card-inside">
              <div className="wrap">
                <p>Selamat Ulang Tahun Bidadariku!</p>
                <p></p>
                <p>Terima kasih sayang kerana sudi menerima I seaadanya. I sangat menghargai kehadiran sayang dalam hidup I</p>
                <p>I happy dengan u sayang !</p>
                <p>Semoga sayang berjaya dunia akhirat dan kita kekal bersama selamanya. IloveyouIloveyousomuchsayang ❤️❤️❤️ !</p>
                <p>Semoga juga sayang menjadi isteri yang taat dan solehah ya</p>
                <p className="signed">Azuma</p>
              </div>
            </div>

            <div id="card-front">
              <div className="wrap justify-center items-center flex">
                <div>
                  <h1>16 April</h1>
                  <h1>Naniey</h1>
                </div>
              </div>
            </div>
          </div>

        </motion.div>

      </div>

    {/* prone to bugs */}
    {isCardOpened && (
        <motion.div className="-mt-[3rem]" initial={{ opacity: 0, visibility: "hidden" }}
        animate={{ opacity: 1, visibility: "visible" }}
        transition={{duration: 1.2}}> 
        <Link to ='/cake'>
        <p className="-mt-[4rem] px-7 py-3 bg-purple-300 text-white font-medium text-base rounded-full hover:bg-purple-600">
            Cake
          </p>
        </Link>
            
        </motion.div>
         
        )}
    </div>

  );
}

export default Card;