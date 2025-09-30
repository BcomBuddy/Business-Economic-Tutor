import React from 'react';
import {
  MessageCircle,
  BookOpen,
  TrendingUp,
  Calculator,
  PieChart,
  BarChart,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import { useEconTutor } from '../../contexts/BizTutorContext';

// Icon mapping for units
const iconMap = {
  BookOpen,
  TrendingUp,
  Calculator,
  PieChart,
  BarChart,
};

const Sidebar: React.FC = () => {
  const { 
    currentTab, 
    setCurrentTab, 
    syllabusData, 
    expandedUnits, 
    toggleUnitExpansion, 
    currentTopic, 
    setCurrentTopic,
    currentUnit,
    setCurrentUnit,
    syllabusExpanded,
    toggleSyllabusExpansion
  } = useEconTutor();

  const handleTopicClick = (topicId: string) => {
    setCurrentTopic(topicId);
    setCurrentTab('Syllabus');
  };

  const handleUnitToggle = (unitId: string) => {
    toggleUnitExpansion(unitId);
    setCurrentUnit(unitId);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="px-4 py-4 flex-shrink-0">
        <div className="p-3 rounded-xl glass">
          <p className="text-sm font-medium gradient-text font-poppins">EconTutor</p>
          <p className="text-xs text-gray-600 dark:text-gray-300">Business Economics AI Tutor</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 pb-6 min-h-0" role="navigation" aria-label="Main navigation">
        <ul className="space-y-2">
          {/* Chat Navigation */}
          <li>
            <button
              onClick={() => setCurrentTab('Chat')}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all text-sm glass ${
                currentTab === 'Chat'
                  ? 'shadow-neon-teal bg-blue-50 dark:bg-blue-900/20'
                  : 'hover:shadow-neon-lime'
              }`}
              aria-current={currentTab === 'Chat' ? 'page' : undefined}
            >
              <span className="w-8 h-8 rounded-md flex items-center justify-center bg-gradient-to-br from-[#4A6FA5] to-[#3d5a8c]">
                <MessageCircle className="w-4 h-4 text-white" />
              </span>
              <span className="font-medium text-gray-900 dark:text-white">Chat</span>
            </button>
          </li>

          {/* Syllabus Section Header */}
          <li>
            <button
              onClick={toggleSyllabusExpansion}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all text-sm glass ${
                currentTab === 'Syllabus' || syllabusExpanded
                  ? 'shadow-neon-teal bg-blue-50 dark:bg-blue-900/20'
                  : 'hover:shadow-neon-lime'
              }`}
            >
              <span className="w-8 h-8 rounded-md flex items-center justify-center bg-gradient-to-br from-[#4A6FA5] to-[#3d5a8c]">
                <BookOpen className="w-4 h-4 text-white" />
              </span>
              <span className="font-medium text-gray-900 dark:text-white">Business Economics Syllabus</span>
              {syllabusExpanded ? (
                <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-300 ml-auto" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-300 ml-auto" />
              )}
            </button>
          </li>

          {/* Syllabus Units */}
          {syllabusExpanded && syllabusData.units.map((unit) => {
            const IconComponent = iconMap[unit.icon as keyof typeof iconMap];
            const isExpanded = expandedUnits && expandedUnits.has ? expandedUnits.has(unit.id) : false;
            const hasActiveTopic = unit.topics.some(topic => currentTopic === topic.id);

            return (
              <li key={unit.id}>
                <div className="space-y-1">
                  {/* Unit Header */}
                  <button
                    onClick={() => handleUnitToggle(unit.id)}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all text-sm glass ${
                      hasActiveTopic || currentUnit === unit.id
                        ? 'shadow-neon-teal bg-blue-50 dark:bg-blue-900/20'
                        : 'hover:shadow-neon-lime'
                    }`}
                    aria-expanded={isExpanded}
                    aria-controls={`unit-${unit.id}-topics`}
                  >
                    <span className="w-8 h-8 rounded-md flex items-center justify-center bg-gradient-to-br from-[#4A6FA5] to-[#3d5a8c]">
                      <IconComponent className="w-4 h-4 text-white" />
                    </span>
                    <div className="flex-1 text-left">
                      <div className="font-medium text-gray-900 dark:text-white text-sm">
                        UNIT-{unit.id.split('-')[1]}: {unit.title}
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    )}
                  </button>

                  {/* Unit Topics */}
                  {isExpanded && (
                    <div id={`unit-${unit.id}-topics`} className="ml-6 space-y-1">
                      {unit.topics.map((topic) => (
                        <button
                          key={topic.id}
                          onClick={() => handleTopicClick(topic.id)}
                          className={`w-full flex items-start gap-3 px-3 py-2 rounded-lg transition-all text-sm glass ${
                            currentTopic === topic.id
                              ? 'shadow-neon-teal bg-blue-50 dark:bg-blue-900/20'
                              : 'hover:shadow-neon-lime'
                          }`}
                          aria-current={currentTopic === topic.id ? 'page' : undefined}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 flex-shrink-0" />
                          <div className="text-left flex-1">
                            <div className="font-medium text-gray-900 dark:text-white text-xs leading-relaxed">
                              {topic.title}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-4 pb-4 flex-shrink-0">
        <div className="rounded-lg p-3 glass">
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Tip: Start in Chat to get personalized guidance or explore syllabus topics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;







