import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, Layers, CheckCircle2, Terminal, Monitor, 
  AlertTriangle, Box, Menu, X, ChevronRight, Server, 
  Cpu, HardDrive, Database, Code, Globe, Zap
} from 'lucide-react';
import CodeBlock from './components/CodeBlock';
import Tabs from './components/Tabs';

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="text-white font-medium bg-white/10 px-1.5 py-0.5 rounded-md mx-0.5 transition-colors hover:bg-white/20">{children}</span>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const IntroSection = () => (
  <section id="intro" className="scroll-mt-24 mb-24">
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
        คู่มือการติดตั้งระบบ <br/>
        <span className="text-zinc-400">
          Function Analysis Intelligence
        </span>
      </motion.h1>
      <motion.p variants={itemVariants} className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl font-light">
        ฉบับทางการสำหรับการติดตั้งและเริ่มต้นใช้งานระบบ อัปเดตล่าสุด: 9 มีนาคม 2026
      </motion.p>

      <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl hover:bg-white/5 hover:scale-[1.02] transition-all duration-300">
          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-white">
            <Zap size={24} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-medium text-white mb-3">หลักการและเหตุผล</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            ระบบสำหรับวิเคราะห์โค้ดเชิงลึก ผสานการทำงานของ <Highlight>Backend</Highlight>, <Highlight>Frontend</Highlight>, <Highlight>Local AI</Highlight> และ <Highlight>Vector DB</Highlight> เพื่อรองรับการอธิบายโค้ดและ RAG
          </p>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl hover:bg-white/5 hover:scale-[1.02] transition-all duration-300">
          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-white">
            <CheckCircle2 size={24} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-medium text-white mb-3">วัตถุประสงค์</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            อธิบายขั้นตอนการติดตั้งอย่างเป็นทางการ กำหนดมาตรฐานสภาพแวดล้อม และเป็นคู่มืออ้างอิงในการแก้ไขปัญหาเบื้องต้น
          </p>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl hover:bg-white/5 hover:scale-[1.02] transition-all duration-300">
          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-white">
            <Box size={24} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-medium text-white mb-3">ขอบเขต</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            ครอบคลุมการติดตั้งเครื่องมือพื้นฐาน, <Highlight>Backend</Highlight>, <Highlight>Frontend</Highlight>, <Highlight>AI Models</Highlight>, <Highlight>Qdrant</Highlight> และการตั้งค่า Environment Variables
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

const OverviewSection = () => (
  <section id="overview" className="scroll-mt-24 mb-24">
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-semibold tracking-tight text-white mb-10 flex items-center">
        <Layers className="mr-4 text-white" strokeWidth={1.5} /> ภาพรวมของระบบ
      </motion.h2>
      
      <div className="space-y-10">
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-medium text-white mb-6">องค์ประกอบหลัก</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Backend', desc: 'Node.js, Express, TypeScript (Port 3000)', icon: Server },
              { title: 'Frontend', desc: 'Vue.js, Vite (Port 5173)', icon: Globe },
              { title: 'Ollama', desc: 'Local LLM Server (Port 11434)', icon: Cpu },
              { title: 'Qdrant', desc: 'Vector Database สำหรับ RAG (Port 6333)', icon: Database },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="flex items-start p-5 bg-[#0a0a0a] border border-white/10 rounded-2xl transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-white/5 text-white mr-4">
                  <item.icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-medium text-white">{item.title}</h4>
                  <p className="text-sm text-zinc-400 mt-1.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-medium text-white mb-6">AI Models ที่ใช้งาน</h3>
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-zinc-300">
                <tr>
                  <th className="px-6 py-4 font-medium">โมเดล</th>
                  <th className="px-6 py-4 font-medium">หน้าที่หลัก</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-400">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-mono text-white"><Highlight>qwen2.5-coder:7b</Highlight></td>
                  <td className="px-6 py-4">ใช้อธิบายโค้ดและเป็นโมเดลหลักของระบบ</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-mono text-white"><Highlight>gemma2:2b</Highlight></td>
                  <td className="px-6 py-4">ใช้แปลภาษาและปรับแก้ข้อความที่ผิดปกติ</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-mono text-white"><Highlight>qwen3-embedding:4b</Highlight></td>
                  <td className="px-6 py-4">สร้าง embedding vectors สำหรับการค้นคืนข้อมูล</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start hover:bg-white/10 transition-colors">
          <Zap className="text-white mt-0.5 mr-4 shrink-0" size={20} strokeWidth={1.5} />
          <div>
            <h4 className="font-medium text-white mb-1.5">บริการภายนอก (Optional)</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              รองรับ <Highlight>Google Gemini API</Highlight> (gemini-2.5-flash) สำหรับฟังก์ชัน Judge เพื่อตรวจสอบความถูกต้องของคำอธิบายจาก AI ระบบสามารถทำงานได้แม้ไม่มี API Key นี้
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

const PrereqSection = () => (
  <section id="prereq" className="scroll-mt-24 mb-24">
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-semibold tracking-tight text-white mb-10 flex items-center">
        <CheckCircle2 className="mr-4 text-white" strokeWidth={1.5} /> ข้อกำหนดเบื้องต้น
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-medium text-white mb-6 flex items-center">
            <Code className="mr-3 text-zinc-400" size={20} strokeWidth={1.5}/> ซอฟต์แวร์ที่ต้องติดตั้ง
          </h3>
          <ul className="space-y-3">
            {[
              { name: 'Git', highlight: true },
              { name: 'Node.js', desc: ' เวอร์ชัน 18 ขึ้นไป', highlight: true },
              { name: 'npm', highlight: true },
              { name: 'Ollama', highlight: true },
              { name: 'Qdrant', highlight: true },
              { name: 'Docker', desc: ' (สำหรับรัน Qdrant)', highlight: true },
              { name: 'Google Gemini API Key', desc: ' (สำหรับฟังก์ชัน Judge)', highlight: true }
            ].map((item, i) => (
              <motion.li 
                key={i} 
                whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="flex items-center text-zinc-300 bg-[#0a0a0a] border border-white/10 px-5 py-3 rounded-xl transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white mr-4"></div>
                <span>{item.highlight ? <Highlight>{item.name}</Highlight> : item.name}{item.desc}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-medium text-white mb-6 flex items-center">
            <HardDrive className="mr-3 text-zinc-400" size={20} strokeWidth={1.5}/> คุณสมบัติเครื่องขั้นต่ำที่แนะนำ
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-[#0a0a0a] border border-white/10 p-5 rounded-2xl transition-transform">
              <div className="text-zinc-500 text-sm mb-2">RAM</div>
              <div className="text-white font-medium"><Highlight>ขั้นต่ำ 8 GB</Highlight></div>
              <div className="text-zinc-400 text-xs mt-1.5">แนะนำ 16 GB ขึ้นไป</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-[#0a0a0a] border border-white/10 p-5 rounded-2xl transition-transform">
              <div className="text-zinc-500 text-sm mb-2">พื้นที่ว่างในดิสก์</div>
              <div className="text-white font-medium"><Highlight>ขั้นต่ำ 15 GB</Highlight></div>
              <div className="text-zinc-400 text-xs mt-1.5">แนะนำ 20 GB ขึ้นไป</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-[#0a0a0a] border border-white/10 p-5 rounded-2xl transition-transform">
              <div className="text-zinc-500 text-sm mb-2">CPU</div>
              <div className="text-white font-medium"><Highlight>ขั้นต่ำ 4 Cores</Highlight></div>
              <div className="text-zinc-400 text-xs mt-1.5">แนะนำ 8 Cores</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-[#0a0a0a] border border-white/10 p-5 rounded-2xl transition-transform">
              <div className="text-zinc-500 text-sm mb-2">GPU</div>
              <div className="text-white font-medium text-sm">ไม่จำเป็นต้องมี</div>
              <div className="text-zinc-400 text-xs mt-1.5">แต่แนะนำเพื่อประสิทธิภาพ</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

const InstallSection = () => (
  <section id="install" className="scroll-mt-24 mb-24">
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-semibold tracking-tight text-white mb-10 flex items-center">
        <Terminal className="mr-4 text-white" strokeWidth={1.5} /> ขั้นตอนการติดตั้ง
      </motion.h2>

      <div className="space-y-16">
        {/* 4.1 Git */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-medium text-white mb-6">1. การติดตั้ง Git</h3>
          <Tabs tabs={[
            {
              id: 'git-win', label: 'Windows', content: (
                <div className="text-zinc-400 space-y-3">
                  <p>1. ไปที่เว็บไซต์ <a href="https://git-scm.com/download/win" target="_blank" rel="noreferrer" className="text-white hover:underline underline-offset-4">git-scm.com/download/win</a></p>
                  <p>2. ดาวน์โหลดและติดตั้งโดยใช้ค่ามาตรฐาน</p>
                  <p>3. ตรวจสอบการติดตั้ง:</p>
                  <CodeBlock code="git --version" />
                </div>
              )
            },
            {
              id: 'git-mac', label: 'macOS', content: (
                <div className="text-zinc-400 space-y-3">
                  <p>วิธีที่ 1: ติดตั้งผ่าน <Highlight>Xcode Command Line Tools</Highlight></p>
                  <CodeBlock code="xcode-select --install" />
                  <p>วิธีที่ 2: ติดตั้งผ่าน <Highlight>Homebrew</Highlight></p>
                  <CodeBlock code="brew install git" />
                  <p>ตรวจสอบการติดตั้ง:</p>
                  <CodeBlock code="git --version" />
                </div>
              )
            }
          ]} />
        </motion.div>

        {/* 4.2 Node.js */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-medium text-white mb-6">2. การติดตั้ง Node.js และ npm</h3>
          <Tabs tabs={[
            {
              id: 'node-win', label: 'Windows', content: (
                <div className="text-zinc-400 space-y-3">
                  <p>1. ไปที่เว็บไซต์ <a href="https://nodejs.org/" target="_blank" rel="noreferrer" className="text-white hover:underline underline-offset-4">nodejs.org</a></p>
                  <p>2. ดาวน์โหลดเวอร์ชัน <Highlight>LTS</Highlight> และติดตั้ง</p>
                  <p>3. ตรวจสอบการติดตั้ง:</p>
                  <CodeBlock code={`node --version\nnpm --version`} />
                </div>
              )
            },
            {
              id: 'node-mac', label: 'macOS', content: (
                <div className="text-zinc-400 space-y-3">
                  <p>ติดตั้งผ่าน <Highlight>Homebrew</Highlight> หรือ <Highlight>nvm</Highlight>:</p>
                  <CodeBlock code={`brew install node@18\n# หรือ\nnvm install 18\nnvm use 18`} />
                  <p>ตรวจสอบการติดตั้ง:</p>
                  <CodeBlock code={`node --version\nnpm --version`} />
                </div>
              )
            }
          ]} />
        </motion.div>

        {/* 4.3 Ollama */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-medium text-white mb-6">3. การติดตั้ง Ollama</h3>
          <Tabs tabs={[
            {
              id: 'ollama-win', label: 'Windows', content: (
                <div className="text-zinc-400 space-y-3">
                  <p>1. ไปที่เว็บไซต์ <a href="https://ollama.com/download" target="_blank" rel="noreferrer" className="text-white hover:underline underline-offset-4">ollama.com/download</a></p>
                  <p>2. ดาวน์โหลดและติดตั้งตามขั้นตอน</p>
                  <p>3. ตรวจสอบการติดตั้ง:</p>
                  <CodeBlock code="ollama --version" />
                </div>
              )
            },
            {
              id: 'ollama-mac', label: 'macOS', content: (
                <div className="text-zinc-400 space-y-3">
                  <p>ติดตั้งผ่าน <Highlight>Homebrew</Highlight>:</p>
                  <CodeBlock code="brew install ollama" />
                  <p>ตรวจสอบการติดตั้ง:</p>
                  <CodeBlock code="ollama --version" />
                </div>
              )
            }
          ]} />
        </motion.div>

        {/* 4.4 Qdrant */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-medium text-white mb-6">4. การติดตั้ง Qdrant</h3>
          <Tabs tabs={[
            {
              id: 'qdrant-docker', label: 'ผ่าน Docker (แนะนำ)', content: (
                <div className="text-zinc-400 space-y-3">
                  <p>รันคำสั่งต่อไปนี้ใน Terminal:</p>
                  <CodeBlock code={`docker run -d \\\n  --name qdrant \\\n  -p 6333:6333 \\\n  -p 6334:6334 \\\n  -v qdrant_storage:/qdrant/storage \\\n  qdrant/qdrant`} />
                  <p>ตรวจสอบสถานะ:</p>
                  <CodeBlock code="docker ps" />
                  <p>หรือเปิดเบราว์เซอร์ไปที่ <a href="http://localhost:6333/dashboard" target="_blank" rel="noreferrer" className="text-white hover:underline underline-offset-4">http://localhost:6333/dashboard</a></p>
                </div>
              )
            },
            {
              id: 'qdrant-binary', label: 'แบบ Binary', content: (
                <div className="text-zinc-400 space-y-3">
                  <p>ดาวน์โหลดไฟล์จากหน้า Releases ของ Qdrant และรันโปรแกรมโดยตรง:</p>
                  <CodeBlock code="./qdrant" />
                </div>
              )
            }
          ]} />
        </motion.div>

        {/* 4.5 Source Code */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-medium text-white mb-6">5. ดาวน์โหลดซอร์สโค้ด</h3>
          <div className="text-zinc-400 space-y-3">
            <CodeBlock code={`cd ~/Documents\ngit clone <REPOSITORY_URL> Function-Analysis-Intelligence\ncd Function-Analysis-Intelligence`} />
            <p className="text-sm text-zinc-500">* แทนที่ &lt;REPOSITORY_URL&gt; ด้วยที่อยู่จริงของ Git Repository</p>
          </div>
        </motion.div>

        {/* 4.6 Backend */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-medium text-white mb-6">6. การตั้งค่า Backend</h3>
          <div className="text-zinc-400 space-y-3">
            <CodeBlock code={`cd backend\nnpm install\n# (Optional) คอมไพล์ TypeScript\nnpx tsc`} />
            
            <div className="mt-6 p-6 bg-[#0a0a0a] border border-white/10 rounded-2xl">
              <h4 className="text-white font-medium mb-3 flex items-center"><AlertTriangle size={18} className="mr-3 text-zinc-400"/> กรณีพบปัญหา better-sqlite3</h4>
              <p className="text-sm text-zinc-400 mb-4">อาจต้องติดตั้ง Build Tools เพิ่มเติม:</p>
              <Tabs tabs={[
                {
                  id: 'build-win', label: 'Windows', content: (
                    <CodeBlock code={`npm install -g windows-build-tools\n# หรือ ติดตั้ง Visual Studio Build Tools พร้อมเลือก Desktop development with C++`} />
                  )
                },
                {
                  id: 'build-mac', label: 'macOS', content: (
                    <CodeBlock code={`xcode-select --install\n# จากนั้นรัน npm install ใหม่อีกครั้ง`} />
                  )
                }
              ]} />
            </div>
          </div>
        </motion.div>

        {/* 4.7 Frontend */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-medium text-white mb-6">7. การตั้งค่า Frontend</h3>
          <div className="text-zinc-400 space-y-3">
            <CodeBlock code={`cd ../frontend\nnpm install`} />
          </div>
        </motion.div>

        {/* 4.8 AI Models */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-medium text-white mb-6">8. ดาวน์โหลด AI Models</h3>
          <div className="text-zinc-400 space-y-3">
            <p>ดาวน์โหลดโมเดลทั้ง 3 รายการผ่าน Ollama:</p>
            <CodeBlock code={`ollama pull qwen2.5-coder:7b\nollama pull gemma2:2b\nollama pull qwen3-embedding:4b`} />
            <p>ตรวจสอบรายการโมเดล:</p>
            <CodeBlock code="ollama list" />
          </div>
        </motion.div>

        {/* 4.9 Env */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-medium text-white mb-6">9. การกำหนดค่า Environment Variables</h3>
          <div className="text-zinc-400 space-y-3">
            <p>สร้างไฟล์ <code>.env</code> ภายในโฟลเดอร์ <code>backend</code>:</p>
            <CodeBlock code={`GEMINI_API_KEY=your_api_key_here\nPORT=3000`} language="env" />
            <p className="text-sm text-zinc-500">ขอ API Key ได้ที่ <a href="https://aistudio.google.com/apikey" target="_blank" rel="noreferrer" className="text-white hover:underline underline-offset-4">aistudio.google.com/apikey</a></p>
          </div>
        </motion.div>

        {/* 4.10 Start */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-medium text-white mb-6">10. การเริ่มต้นใช้งานระบบ</h3>
          <div className="text-zinc-400 space-y-6">
            <p>เปิด Terminal จำนวน 3 หน้าต่าง:</p>
            
            <motion.div whileHover={{ scale: 1.01 }} className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden transition-transform">
              <div className="bg-white/5 px-5 py-3 text-sm font-medium text-white border-b border-white/5">หน้าต่างที่ 1: รัน Ollama</div>
              <div className="p-2">
                <CodeBlock code="ollama serve" />
                <p className="text-xs text-zinc-500 px-3 pb-3">* หาก Ollama ทำงานอยู่เบื้องหลังแล้ว อาจไม่จำเป็นต้องรันคำสั่งนี้ซ้ำ</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }} className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden transition-transform">
              <div className="bg-white/5 px-5 py-3 text-sm font-medium text-white border-b border-white/5">หน้าต่างที่ 2: รัน Backend</div>
              <div className="p-2">
                <CodeBlock code={`cd backend\nnpx ts-node src/index.ts\n# หรือหากคอมไพล์ไว้แล้ว: node dist/index.js`} />
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }} className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden transition-transform">
              <div className="bg-white/5 px-5 py-3 text-sm font-medium text-white border-b border-white/5">หน้าต่างที่ 3: รัน Frontend</div>
              <div className="p-2">
                <CodeBlock code={`cd frontend\nnpm run dev`} />
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </motion.div>
  </section>
);

const VerifySection = () => (
  <section id="verify" className="scroll-mt-24 mb-24">
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-semibold tracking-tight text-white mb-10 flex items-center">
        <Monitor className="mr-4 text-white" strokeWidth={1.5} /> การตรวจสอบความถูกต้อง
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {[
          { title: 'Ollama', url: 'http://127.0.0.1:11434', expected: 'ข้อความยืนยันว่า Ollama กำลังทำงาน' },
          { title: 'Qdrant', url: 'http://localhost:6333/dashboard', expected: 'หน้า Qdrant Dashboard' },
          { title: 'Backend', url: 'http://127.0.0.1:3000', expected: 'ตอบสนองโดยไม่แสดงข้อผิดพลาดร้ายแรง' },
          { title: 'Frontend', url: 'http://localhost:5173', expected: 'หน้าเว็บของ Function Analysis Intelligence' },
        ].map((item, i) => (
          <motion.div 
            variants={itemVariants}
            key={i} 
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
            className="bg-[#0a0a0a] border border-white/10 p-6 rounded-3xl transition-all duration-300"
          >
            <h4 className="text-lg font-medium text-white mb-2">{item.title}</h4>
            <a href={item.url} target="_blank" rel="noreferrer" className="text-sm text-white hover:underline underline-offset-4 font-mono block mb-4">{item.url}</a>
            <div className="flex items-start text-sm text-zinc-400">
              <CheckCircle2 size={18} className="text-white mr-3 mt-0.5 shrink-0" strokeWidth={1.5} />
              <span>{item.expected}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl">
        <h3 className="text-xl font-medium text-white mb-6">การทดสอบการใช้งานเบื้องต้น</h3>
        <ol className="list-decimal list-inside space-y-4 text-zinc-400">
          <li>เปิดเว็บเบราว์เซอร์ไปที่ <a href="http://localhost:5173" className="text-white hover:underline underline-offset-4">http://localhost:5173</a></li>
          <li>ระบุ <Highlight>Project Path</Highlight> ของโครงการที่ต้องการสแกน</li>
          <li>กดปุ่ม <Highlight>Scan</Highlight></li>
          <li>รอให้ระบบประมวลผลจนเสร็จสิ้น</li>
          <motion.li 
            whileHover={{ x: 5 }}
            className="text-white mt-4 list-none flex items-center bg-white/5 p-4 rounded-xl w-fit border border-white/10 transition-transform"
          >
            <CheckCircle2 size={18} className="mr-3" strokeWidth={1.5} /> ตรวจสอบว่ามีรายการฟังก์ชันและรายละเอียดปรากฏในหน้าจอ
          </motion.li>
        </ol>
      </motion.div>
    </motion.div>
  </section>
);

const TroubleSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'ปัญหาการติดตั้งแพ็กเกจ (better-sqlite3)',
      a: 'กรณี npm install ล้มเหลว สาเหตุโดยทั่วไปมาจากเครื่องยังไม่มี Native Build Tools ที่จำเป็น ให้ติดตั้ง Build Tools ตามระบบปฏิบัติการ แล้วทดลองติดตั้งใหม่อีกครั้ง'
    },
    {
      q: 'ปัญหาการเชื่อมต่อ Qdrant (ECONNREFUSED)',
      a: 'ตรวจสอบว่า Qdrant กำลังทำงานอยู่โดยใช้คำสั่ง `docker ps` หากไม่พบ container ให้เริ่มต้นใหม่ด้วยคำสั่ง `docker start qdrant` หรือสร้างใหม่ด้วย `docker run`'
    },
    {
      q: 'ปัญหาการเชื่อมต่อ Ollama',
      a: 'หากพบข้อผิดพลาด Cannot connect to Ollama ให้ตรวจสอบว่า Ollama กำลังทำงานอยู่ หากยังไม่ทำงาน ให้ใช้คำสั่ง `ollama serve`'
    },
    {
      q: 'ปัญหาการชนกันของพอร์ต (Port 5173)',
      a: 'ตรวจสอบโปรเซสที่ใช้พอร์ต:\nWindows: `netstat -ano | findstr :5173`\nmacOS: `lsof -i :5173`\nจากนั้นปิดโปรเซสดังกล่าว หรือให้ระบบเปลี่ยนไปใช้พอร์ตอื่นโดยอัตโนมัติ'
    },
    {
      q: 'ปัญหาด้านประสิทธิภาพ (AI อธิบายโค้ดช้า)',
      a: 'อาจเกิดจากทรัพยากรเครื่องไม่เพียงพอ (RAM ต่ำ หรือรันบน CPU) แนวทางเบื้องต้นคือปิดโปรแกรมอื่นที่ไม่จำเป็น และหากมี GPU ให้ตรวจสอบการใช้งานผ่านคำสั่ง `ollama ps`'
    }
  ];

  return (
    <section id="troubleshoot" className="scroll-mt-24 mb-24">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-semibold tracking-tight text-white mb-10 flex items-center">
          <AlertTriangle className="mr-4 text-white" strokeWidth={1.5} /> การแก้ไขปัญหาที่พบบ่อย
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div variants={itemVariants} key={i} className="border border-white/10 rounded-2xl overflow-hidden bg-[#0a0a0a]">
              <button 
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-white">{faq.q}</span>
                <ChevronRight className={`text-zinc-500 transition-transform ${openIndex === i ? 'rotate-90' : ''}`} size={20} strokeWidth={1.5} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2 text-zinc-400 text-sm leading-relaxed whitespace-pre-wrap">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const SummarySection = () => (
  <section id="summary" className="scroll-mt-24 mb-24">
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-semibold tracking-tight text-white mb-10 flex items-center">
        <Box className="mr-4 text-white" strokeWidth={1.5} /> สรุป
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-medium text-white mb-6">พอร์ตที่ใช้งานในระบบ</h3>
          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-white/5 text-zinc-300">
                {[
                  { name: 'Backend (Express)', port: '3000' },
                  { name: 'Frontend (Vite)', port: '5173' },
                  { name: 'Ollama', port: '11434' },
                  { name: 'Qdrant HTTP', port: '6333' },
                  { name: 'Qdrant gRPC', port: '6334' },
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium">{item.name}</td>
                    <td className="px-6 py-4 font-mono text-zinc-400"><Highlight>{item.port}</Highlight></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-center hover:bg-white/10 transition-colors">
          <h3 className="text-xl font-medium text-white mb-4">สรุปผลการติดตั้ง</h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            ระบบ Function Analysis Intelligence จำเป็นต้องอาศัยการติดตั้งเครื่องมือพื้นฐานหลายส่วนร่วมกัน ได้แก่ <Highlight>Git</Highlight>, <Highlight>Node.js</Highlight>, <Highlight>Ollama</Highlight> และ <Highlight>Qdrant</Highlight> รวมถึงการกำหนดค่า Environment Variables ให้ถูกต้อง
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            เมื่อดำเนินการครบถ้วนแล้ว จะสามารถเปิดใช้งานระบบผ่านเว็บเบราว์เซอร์และเริ่มต้นการวิเคราะห์โค้ดได้ทันที
          </p>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

const SECTIONS = [
  { id: 'intro', label: 'บทนำ', icon: BookOpen },
  { id: 'overview', label: 'ภาพรวมของระบบ', icon: Layers },
  { id: 'prereq', label: 'ข้อกำหนดเบื้องต้น', icon: CheckCircle2 },
  { id: 'install', label: 'ขั้นตอนการติดตั้ง', icon: Terminal },
  { id: 'verify', label: 'การตรวจสอบ', icon: Monitor },
  { id: 'troubleshoot', label: 'การแก้ไขปัญหา', icon: AlertTriangle },
  { id: 'summary', label: 'สรุป', icon: Box },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTIONS.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-white font-sans selection:bg-white/20">
      
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-black/80 backdrop-blur-md border-b border-white/10 z-50 flex items-center justify-between px-4">
        <div className="font-semibold text-lg text-white tracking-tight">
          FAI Guide
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-zinc-400 hover:text-white transition-colors">
          {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 h-screen w-72 bg-[#050505] border-r border-white/10 z-40
        transform transition-transform duration-300 ease-in-out lg:translate-x-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        flex flex-col
      `}>
        <div className="p-8 hidden lg:block">
          <div className="font-semibold text-2xl tracking-tight text-white mb-1">
            FAI Guide
          </div>
          <div className="text-xs text-zinc-500 font-medium tracking-widest uppercase">Installation Manual</div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-4 space-y-1 mt-16 lg:mt-0">
          {SECTIONS.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`
                  w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                  ${isActive 
                    ? 'bg-white/10 text-white' 
                    : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                  }
                `}
              >
                <section.icon size={18} className={`mr-3 ${isActive ? 'text-white' : 'text-zinc-500'}`} strokeWidth={1.5} />
                {section.label}
              </button>
            );
          })}
        </nav>
        
        <div className="p-6 border-t border-white/10 text-xs text-zinc-500 text-center font-mono">
          v1.0.0 &copy; 2026
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden pt-24 lg:pt-16 px-6 lg:px-16 pb-24">
        <div className="max-w-4xl mx-auto">
          <IntroSection />
          <OverviewSection />
          <PrereqSection />
          <InstallSection />
          <VerifySection />
          <TroubleSection />
          <SummarySection />
        </div>
      </main>
    </div>
  );
}

