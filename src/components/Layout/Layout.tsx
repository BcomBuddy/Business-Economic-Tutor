import React from 'react';
import { useEconTutor } from '../../contexts/BizTutorContext';
import { useTheme } from '../../contexts/ThemeContext';
import Header from './Header';
import TabContent from './TabContent';
import Sidebar from './Sidebar';

const Layout: React.FC = () => {
  const { currentTab } = useEconTutor();
  const { isDark } = useTheme();

  return (
    <div className={`h-screen transition-colors duration-300 ${
      isDark ? 'dark bg-midnight' : 'bg-white'
    }`}>
      <div className="h-full flex">
        <aside className={`w-[260px] h-full border-r transition-colors duration-300 flex-shrink-0 ${
          isDark 
            ? 'border-white/10 bg-[rgba(15,15,31,0.6)] backdrop-blur' 
            : 'border-gray-200 bg-white'
        }`}>
          <Sidebar />
        </aside>
        <div className="flex-1 flex flex-col h-full min-w-0">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <div className="p-6">
              <div className="mx-auto max-w-7xl">
                <TabContent currentTab={currentTab} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;