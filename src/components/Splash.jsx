import { motion } from 'framer-motion';

const Splash = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="relative">
        {/* Code Editor Window */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1E1E3F] rounded-lg p-6 shadow-2xl w-[300px]"
        >
          {/* Window Controls */}
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>

          {/* Loading Text */}
          <div className="font-mono text-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#9EFFFF]"
            >
              $ loading portfolio...
            </motion.div>
            
            {/* Progress Bar */}
            <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
              />
            </div>

            {/* Loading Messages */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 space-y-2"
            >
              <div className="text-green-400">✓ Initializing components</div>
              <div className="text-yellow-400">⚡ Loading experience</div>
              <div className="text-blue-400">☕ Brewing creativity</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Glowing Effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent opacity-30 blur-2xl rounded-full" />
      </div>
    </motion.div>
  );
};

export default Splash; 