import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, CheckCircle, XCircle } from 'lucide-react';

interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const Flashcards: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [studyMode, setStudyMode] = useState<'review' | 'practice'>('review');

  // Sample flashcards data
  const flashcards: Flashcard[] = [
    {
      id: '1',
      front: 'What is the law of demand?',
      back: 'The law of demand states that as the price of a good or service increases, the quantity demanded decreases, and vice versa, all else being equal.',
      category: 'Microeconomics',
      difficulty: 'easy'
    },
    {
      id: '2',
      front: 'Define opportunity cost',
      back: 'Opportunity cost is the value of the next best alternative that is foregone when making a choice.',
      category: 'Microeconomics',
      difficulty: 'medium'
    },
    {
      id: '3',
      front: 'What is GDP?',
      back: 'Gross Domestic Product (GDP) is the total monetary value of all finished goods and services produced within a country\'s borders in a specific time period.',
      category: 'Macroeconomics',
      difficulty: 'easy'
    },
    {
      id: '4',
      front: 'Explain the concept of elasticity',
      back: 'Elasticity measures how much the quantity demanded or supplied of a good changes in response to changes in price, income, or other factors.',
      category: 'Microeconomics',
      difficulty: 'hard'
    }
  ];

  const currentCard = flashcards[currentCardIndex];

  const nextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const resetCards = () => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Flashcards</h1>
          <p className="text-gray-600 mt-1">Study and memorize key business economics concepts</p>
        </div>
        
        {/* Study Mode Toggle */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setStudyMode('review')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              studyMode === 'review'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Review Mode
          </button>
          <button
            onClick={() => setStudyMode('practice')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              studyMode === 'practice'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Practice Mode
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentCardIndex + 1) / flashcards.length) * 100}%` }}
        />
      </div>

      {/* Card Counter */}
      <div className="text-center text-gray-600">
        Card {currentCardIndex + 1} of {flashcards.length}
      </div>

      {/* Flashcard */}
      <div className="max-w-2xl mx-auto">
        <div
          className={`relative h-80 cursor-pointer transform transition-transform duration-500 ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={flipCard}
        >
          {/* Front of card */}
          <div className={`absolute inset-0 w-full h-full backface-hidden ${
            isFlipped ? 'hidden' : 'block'
          }`}>
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 h-full flex flex-col justify-center">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(currentCard.difficulty)}`}>
                  {currentCard.difficulty}
                </span>
                <span className="text-sm text-gray-500">{currentCard.category}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 text-center">
                {currentCard.front}
              </h2>
              <p className="text-center text-gray-500 mt-4">Click to reveal answer</p>
            </div>
          </div>

          {/* Back of card */}
          <div className={`absolute inset-0 w-full h-full backface-hidden ${
            isFlipped ? 'block' : 'hidden'
          }`}>
            <div className="bg-blue-50 rounded-xl shadow-lg border border-blue-200 p-8 h-full flex flex-col justify-center">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(currentCard.difficulty)}`}>
                  {currentCard.difficulty}
                </span>
                <span className="text-sm text-gray-500">{currentCard.category}</span>
              </div>
              <p className="text-lg text-gray-900 text-center leading-relaxed">
                {currentCard.back}
              </p>
              <p className="text-center text-blue-600 mt-4 font-medium">Click to flip back</p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={prevCard}
          disabled={currentCardIndex === 0}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <button
          onClick={flipCard}
          className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Flip Card</span>
        </button>

        <button
          onClick={nextCard}
          disabled={currentCardIndex === flashcards.length - 1}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Reset Button */}
      <div className="text-center">
        <button
          onClick={resetCards}
          className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
        >
          Reset to first card
        </button>
      </div>

      {/* Study Tips */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="font-semibold text-yellow-800 mb-2">Study Tips</h3>
        <ul className="text-yellow-700 text-sm space-y-1">
          <li>• Try to recall the answer before flipping the card</li>
          <li>• Review cards you find difficult more frequently</li>
          <li>• Use spaced repetition for better long-term retention</li>
          <li>• Practice regularly for best results</li>
        </ul>
      </div>
    </div>
  );
};

export default Flashcards;
