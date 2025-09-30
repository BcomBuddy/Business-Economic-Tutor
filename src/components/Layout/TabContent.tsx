import React from 'react';
import Chat from '../tabs/Chat';
import SyllabusContentDisplay from '../tabs/SyllabusContentDisplay';
import { useEconTutor } from '../../contexts/BizTutorContext';

interface TabContentProps {
  currentTab: string;
}


const TabContent: React.FC<TabContentProps> = ({ currentTab }) => {
  const renderContent = () => {
    switch (currentTab) {
      case 'Chat':
        return <Chat />;
      case 'Syllabus':
        return <SyllabusContentDisplay />;
      default:
        return <Chat />;
    }
  };

  return (
    <div className="h-full overflow-y-auto">
      {renderContent()}
    </div>
  );
};

export default TabContent;