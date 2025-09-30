import React from 'react';
import { useEconTutor } from '../../contexts/BizTutorContext';
import { BookOpen, Lightbulb, Target, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';

const SyllabusContentDisplay: React.FC = () => {
  const { currentTopic, syllabusData, setCurrentTab } = useEconTutor();
  
  if (!currentTopic) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Select a Topic
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Choose a topic from the syllabus to start learning.
          </p>
        </div>
      </div>
    );
  }

  // Find the current topic
  const topic = syllabusData.units
    .flatMap(unit => unit.topics)
    .find(t => t.id === currentTopic);

  if (!topic) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Topic Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            The selected topic could not be found.
          </p>
        </div>
      </div>
    );
  }

  // Find the unit for this topic
  const unit = syllabusData.units.find(u => u.topics.some(t => t.id === currentTopic));

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header with Back Button */}
        <div className="mb-6">
          <button
            onClick={() => setCurrentTab('Chat')}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Chat</span>
          </button>
          
          <div className="mb-2">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {unit ? `UNIT-${unit.id.split('-')[1]}: ${unit.title}` : 'Business Economics'}
            </h1>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            {topic.title}
          </h2>
        </div>

        {/* Content Sections */}
        {topic.detailedContent ? (
          <>
            {/* Definition */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-[#4A6FA5]" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Definition
                </h3>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 glass">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {topic.detailedContent.definition}
                </p>
              </div>
            </div>

            {/* Explanation */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-[#4A6FA5]" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Explanation
                </h3>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 glass">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {topic.detailedContent.explanation}
                </p>
              </div>
            </div>

            {/* Key Points */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Key Points
                </h3>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 glass">
                <ul className="space-y-2">
                  {topic.detailedContent.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Examples */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-orange-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Examples
                </h3>
              </div>
              <div className="space-y-3">
                {topic.detailedContent.examples.map((example, index) => (
                  <div key={index} className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 border border-yellow-200 dark:border-yellow-800">
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                      {example}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Importance */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Importance
                </h3>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                  {topic.detailedContent.importance}
                </p>
              </div>
            </div>
          </>
        ) : (
          /* Fallback for topics without detailed content */
          <>
            {/* Learning Objectives */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-[#4A6FA5]" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Learning Objectives
                </h3>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 glass">
                <ul className="space-y-2">
                  {topic.learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#4A6FA5] to-[#3d5a8c] flex items-center justify-center text-white text-xs font-semibold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {objective}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Terms */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-[#4A6FA5]" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Key Terms
                </h3>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 glass">
                <div className="flex flex-wrap gap-2">
                  {topic.keyTerms.map((term, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-[#4A6FA5] to-[#3d5a8c] text-white rounded-full text-sm font-medium"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Chat Integration */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-[#4A6FA5] to-[#3d5a8c] rounded-lg p-4 text-white">
            <p className="font-medium mb-2">💡 Ready to learn more?</p>
            <p className="text-sm mb-3">
              Use Chat for personalized guidance and explore the syllabus for structured learning.
            </p>
            <button
              onClick={() => setCurrentTab('Chat')}
              className="bg-white text-[#4A6FA5] px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Start Chatting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyllabusContentDisplay;
