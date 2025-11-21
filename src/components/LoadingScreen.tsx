import { motion, AnimatePresence } from "framer-motion";
import { Brain } from "lucide-react";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-strong"
        >
          <div className="relative">
            {/* Pulsing outer circle */}
            <motion.div
              className="absolute inset-0 rounded-full bg-brand-primary-strong/20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ width: "160px", height: "160px", left: "-30px", top: "-30px" }}
            />
            
            {/* Middle circle */}
            <motion.div
              className="absolute inset-0 rounded-full bg-brand-primary-strong/30"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 0, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
              style={{ width: "120px", height: "120px", left: "-10px", top: "-10px" }}
            />
            
            {/* Brain icon container */}
            <motion.div
              className="relative w-24 h-24 rounded-full bg-brand-primary-strong flex items-center justify-center shadow-elevation-high"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <Brain className="w-12 h-12 text-white" strokeWidth={3} />
            </motion.div>
            
            {/* Loading text */}
            <motion.div
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.p
                className="text-brand-primary-strong font-bold text-lg uppercase tracking-wider"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Cargando...
              </motion.p>
            </motion.div>
            
            {/* Small dots animation */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 rounded-full bg-brand-primary-strong"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
