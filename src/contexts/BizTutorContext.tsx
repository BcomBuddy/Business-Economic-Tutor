import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { seedData } from '../data/seedData';
import { syllabusData } from '../data/syllabusData';
import type { 
  Lesson, 
  Question, 
  CaseScenario, 
  Flashcard, 
  AttemptLog, 
  ChatMessage, 
  ProgressByTopic,
  SyllabusData,
  SyllabusUnit,
  SyllabusTopic
} from '../types/index';

interface EconTutorState {
  lessons: Lesson[];
  questions: Question[];
  cases: CaseScenario[];
  flashcards: Flashcard[];
  attemptLogs: AttemptLog[];
  chatMessages: ChatMessage[];
  progress: Record<string, ProgressByTopic>;
  currentTab: string;
  syllabusData: SyllabusData;
  expandedUnits: Set<string>;
  currentTopic: string | null;
  currentUnit: string | null;
  syllabusExpanded: boolean;
}

interface EconTutorContextType extends EconTutorState {
  dispatch: React.Dispatch<EconTutorAction>;
  setCurrentTab: (tab: string) => void;
  addChatMessage: (message: ChatMessage) => void;
  addAttemptLog: (log: AttemptLog) => void;
  updateFlashcard: (cardId: string, updates: Partial<Flashcard>) => void;
  updateProgress: (topic: string, correct: boolean, timeSec: number) => void;
  toggleUnitExpansion: (unitId: string) => void;
  setCurrentTopic: (topicId: string | null) => void;
  setCurrentUnit: (unitId: string | null) => void;
  toggleSyllabusExpansion: () => void;
}

type EconTutorAction = 
  | { type: 'SET_TAB'; payload: string }
  | { type: 'ADD_CHAT_MESSAGE'; payload: ChatMessage }
  | { type: 'ADD_ATTEMPT_LOG'; payload: AttemptLog }
  | { type: 'UPDATE_FLASHCARD'; payload: { id: string; updates: Partial<Flashcard> } }
  | { type: 'UPDATE_PROGRESS'; payload: { topic: string; correct: boolean; timeSec: number } }
  | { type: 'TOGGLE_UNIT_EXPANSION'; payload: string }
  | { type: 'SET_CURRENT_TOPIC'; payload: string | null }
  | { type: 'SET_CURRENT_UNIT'; payload: string | null }
  | { type: 'TOGGLE_SYLLABUS_EXPANSION' }
  | { type: 'LOAD_STATE'; payload: Partial<EconTutorState> };

const initialState: EconTutorState = {
  lessons: seedData.lessons,
  questions: seedData.questions,
  cases: seedData.cases,
  flashcards: [],
  attemptLogs: [],
  chatMessages: [],
  progress: {},
  currentTab: 'Chat',
  syllabusData: syllabusData,
  expandedUnits: new Set(),
  currentTopic: null,
  currentUnit: null,
  syllabusExpanded: false
};

function econTutorReducer(state: EconTutorState, action: EconTutorAction): EconTutorState {
  switch (action.type) {
    case 'SET_TAB':
      return { ...state, currentTab: action.payload };
    case 'ADD_CHAT_MESSAGE':
      return { ...state, chatMessages: [...state.chatMessages, action.payload] };
    case 'ADD_ATTEMPT_LOG':
      return { ...state, attemptLogs: [...state.attemptLogs, action.payload] };
    case 'UPDATE_FLASHCARD':
      return {
        ...state,
        flashcards: state.flashcards.map(card =>
          card.front === action.payload.id ? { ...card, ...action.payload.updates } : card
        )
      };
    case 'UPDATE_PROGRESS':
      const { topic, correct, timeSec } = action.payload;
      const current = state.progress[topic] || { attempts: 0, correct: 0, timeSec: 0 };
      return {
        ...state,
        progress: {
          ...state.progress,
          [topic]: {
            attempts: current.attempts + 1,
            correct: current.correct + (correct ? 1 : 0),
            timeSec: current.timeSec + timeSec
          }
        }
      };
    case 'TOGGLE_UNIT_EXPANSION':
      const newExpandedUnits = new Set(state.expandedUnits);
      if (newExpandedUnits.has(action.payload)) {
        newExpandedUnits.delete(action.payload);
      } else {
        newExpandedUnits.add(action.payload);
      }
      return { ...state, expandedUnits: newExpandedUnits };
    case 'SET_CURRENT_TOPIC':
      return { ...state, currentTopic: action.payload };
    case 'SET_CURRENT_UNIT':
      return { ...state, currentUnit: action.payload };
    case 'TOGGLE_SYLLABUS_EXPANSION':
      return { ...state, syllabusExpanded: !state.syllabusExpanded };
    case 'LOAD_STATE':
      return { 
        ...state, 
        ...action.payload,
        // Ensure expandedUnits is always a Set
        expandedUnits: action.payload.expandedUnits instanceof Set 
          ? action.payload.expandedUnits 
          : new Set(action.payload.expandedUnits || [])
      };
    default:
      return state;
  }
}

const EconTutorContext = createContext<EconTutorContextType | undefined>(undefined);

export const useEconTutor = () => {
  const context = useContext(EconTutorContext);
  if (!context) {
    throw new Error('useEconTutor must be used within an EconTutorProvider');
  }
  return context;
};

export const EconTutorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(econTutorReducer, initialState);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('econtutor-state');
      if (saved) {
        const parsedState = JSON.parse(saved);
        // Convert expandedUnits array back to Set
        if (parsedState.expandedUnits && Array.isArray(parsedState.expandedUnits)) {
          parsedState.expandedUnits = new Set(parsedState.expandedUnits);
        }
        dispatch({ type: 'LOAD_STATE', payload: parsedState });
      }
    } catch (error) {
      console.error('Failed to load saved state:', error);
    }
  }, []);

  // Save to localStorage on state changes
  useEffect(() => {
    try {
      // Convert Set to Array for serialization
      const stateToSave = {
        ...state,
        expandedUnits: Array.from(state.expandedUnits)
      };
      localStorage.setItem('econtutor-state', JSON.stringify(stateToSave));
    } catch (error) {
      console.error('Failed to save state:', error);
    }
  }, [state]);

  const setCurrentTab = (tab: string) => {
    dispatch({ type: 'SET_TAB', payload: tab });
  };

  const addChatMessage = (message: ChatMessage) => {
    dispatch({ type: 'ADD_CHAT_MESSAGE', payload: message });
  };

  const addAttemptLog = (log: AttemptLog) => {
    dispatch({ type: 'ADD_ATTEMPT_LOG', payload: log });
  };

  const updateFlashcard = (cardId: string, updates: Partial<Flashcard>) => {
    dispatch({ type: 'UPDATE_FLASHCARD', payload: { id: cardId, updates } });
  };

  const updateProgress = (topic: string, correct: boolean, timeSec: number) => {
    dispatch({ type: 'UPDATE_PROGRESS', payload: { topic, correct, timeSec } });
  };

  const toggleUnitExpansion = (unitId: string) => {
    dispatch({ type: 'TOGGLE_UNIT_EXPANSION', payload: unitId });
  };

  const setCurrentTopic = (topicId: string | null) => {
    dispatch({ type: 'SET_CURRENT_TOPIC', payload: topicId });
  };

  const setCurrentUnit = (unitId: string | null) => {
    dispatch({ type: 'SET_CURRENT_UNIT', payload: unitId });
  };

  const toggleSyllabusExpansion = () => {
    dispatch({ type: 'TOGGLE_SYLLABUS_EXPANSION' });
  };

  const contextValue: EconTutorContextType = {
    ...state,
    dispatch,
    setCurrentTab,
    addChatMessage,
    addAttemptLog,
    updateFlashcard,
    updateProgress,
    toggleUnitExpansion,
    setCurrentTopic,
    setCurrentUnit,
    toggleSyllabusExpansion
  };

  return (
    <EconTutorContext.Provider value={contextValue}>
      {children}
    </EconTutorContext.Provider>
  );
};