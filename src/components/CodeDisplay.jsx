import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const CodeDisplay = () => {
  return (
    <div className="bg-[#1E1E3F] rounded-lg p-6 font-mono text-white relative overflow-hidden">
      {/* Window Controls */}
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
      </div>

      {/* Code Content */}
      <div className="space-y-4">
        <Typewriter
          options={{
            delay: 10,
            cursor: '▋',
            deleteSpeed: 1
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-[#FF5F56]">const </span>')
              .typeString('<span class="text-[#27C93F]">coder</span>')
              .typeString('<span class="text-[#FF5F56]"> = {</span>')
              .typeString('<br/>')
              .typeString('<span class="pl-4"></span>')
              .typeString('<span class="text-[#9EFFFF]">name: </span>')
              .typeString('<span class="text-[#FFBD2E]">"Portfolio"</span>')
              .typeString('<span class="text-[#FF5F56]">,</span>')
              .typeString('<br/>')
              .typeString('<span class="pl-4"></span>')
              .typeString('<span class="text-[#9EFFFF]">skills: </span>')
              .typeString('<span class="text-[#FFBD2E]">[</span>')
              .typeString('<br/>')
              .typeString('<span class="pl-8"></span>')
              .typeString('<span class="text-[#FFBD2E]">"React"</span>')
              .typeString('<span class="text-[#FF5F56]">,</span>')
              .typeString('<br/>')
              .typeString('<span class="pl-8"></span>')
              .typeString('<span class="text-[#FFBD2E]">"NextJS"</span>')
              .typeString('<span class="text-[#FF5F56]">,</span>')
              .typeString('<br/>')
              .typeString('<span class="pl-8"></span>')
              .typeString('<span class="text-[#FFBD2E]">"Redux"</span>')
              .typeString('<span class="text-[#FF5F56]">,</span>')
              .typeString('<br/>')
              .typeString('<span class="pl-8"></span>')
              .typeString('<span class="text-[#FFBD2E]">"Express"</span>')
              .typeString('<span class="text-[#FF5F56]">,</span>')
              .typeString('<br/>')
              .typeString('<span class="pl-8"></span>')
              .typeString('<span class="text-[#FFBD2E]">"MongoDB"</span>')
              .typeString('<span class="text-[#FF5F56]">,</span>')
              .typeString('<br/>')
              .typeString('<span class="pl-4"></span>')
              .typeString('<span class="text-[#FFBD2E]">]</span>')
              .typeString('<span class="text-[#FF5F56]">,</span>')
              .typeString('<br/>')
              .typeString('<span class="pl-4"></span>')
              .typeString('<span class="text-[#9EFFFF]">hardWorker: </span>')
              .typeString('<span class="text-[#FF5F56]">true</span>')
              .typeString('<span class="text-[#FF5F56]">,</span>')
              .typeString('<br/>')
              .typeString('<span class="pl-4"></span>')
              .typeString('<span class="text-[#9EFFFF]">quickLearner: </span>')
              .typeString('<span class="text-[#FF5F56]">true</span>')
              .typeString('<span class="text-[#FF5F56]">,</span>')
              .typeString('<br/>')
              .typeString('<span class="pl-4"></span>')
              .typeString('<span class="text-[#9EFFFF]">problemSolver: </span>')
              .typeString('<span class="text-[#FF5F56]">true</span>')
              .typeString('<span class="text-[#FF5F56]">,</span>')
              .typeString('<br/>')
              .typeString('<span class="pl-4"></span>')
              .typeString('<span class="text-[#27C93F]">hireable: </span>')
              .typeString('<span class="text-[#FF5F56]">function</span>')
              .typeString('<span class="text-[#FF5F56]">() {</span>')
              .typeString('<br/>')
              .typeString('<span class="pl-8"></span>')
              .typeString('<span class="text-[#FF5F56]">return </span>')
              .typeString('<span class="text-[#FF5F56]">(</span>')
              .typeString('<br/>')
              .typeString('<span class="pl-12"></span>')
              .typeString('<span class="text-[#9EFFFF]">this</span>')
              .typeString('<span class="text-white">.hardWorker &&</span>')
              .typeString('<br/>')
              .typeString('<span class="pl-12"></span>')
              .typeString('<span class="text-[#9EFFFF]">this</span>')
              .typeString('<span class="text-white">.problemSolver &&</span>')
              .typeString('<br/>')
              .typeString('<span class="pl-12"></span>')
              .typeString('<span class="text-[#9EFFFF]">this</span>')
              .typeString('<span class="text-white">.skills.length >= 5</span>')
              .typeString('<br/>')
              .typeString('<span class="pl-8"></span>')
              .typeString('<span class="text-[#FF5F56]">);</span>')
              .typeString('<br/>')
              .typeString('<span class="pl-4"></span>')
              .typeString('<span class="text-[#FF5F56]">}</span>')
              .typeString('<br/>')
              .typeString('<span class="text-[#FF5F56]">};</span>')
              .start();
          }}
        />
      </div>

      {/* Glowing Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-30 blur-xl group-hover:opacity-40 transition-opacity" />
    </div>
  );
};

export default CodeDisplay; 