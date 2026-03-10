import { useState, useId } from 'react';
import { motion } from 'motion/react';

interface TabProps {
  tabs: { id: string; label: string; content: React.ReactNode }[];
}

export default function Tabs({ tabs }: TabProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const layoutId = useId();

  return (
    <div className="my-8">
      <div className="flex p-1 space-x-1 bg-zinc-900/50 rounded-xl w-fit border border-white/5 mb-6 overflow-x-auto hide-scrollbar">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-1.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId={layoutId}
                  className="absolute inset-0 bg-zinc-800 rounded-lg shadow-sm"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {tabs.find((t) => t.id === activeTab)?.content}
      </motion.div>
    </div>
  );
}
