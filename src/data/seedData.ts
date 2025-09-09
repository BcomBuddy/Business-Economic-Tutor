import type { Lesson, Question, CaseScenario } from '../types/index';

export const seedData = {
  lessons: [
    {
      topic: "Demand and Supply Analysis",
      objectives: [
        "Understand the law of demand and supply",
        "Analyze market equilibrium",
        "Explain price elasticity concepts"
      ],
      contentBlocks: [
        {
          type: "text",
          value: "Demand shows the relationship between price and quantity demanded, while supply shows the relationship between price and quantity supplied."
        },
        {
          type: "bullets",
          value: [
            "Law of Demand: As price increases, quantity demanded decreases",
            "Law of Supply: As price increases, quantity supplied increases", 
            "Market Equilibrium: Where demand equals supply"
          ]
        },
        {
          type: "text",
          value: "Price Elasticity measures how responsive quantity demanded is to price changes."
        },
        {
          type: "text", 
          value: "Elastic demand: |PED| > 1; Inelastic demand: |PED| < 1; Unit elastic: |PED| = 1"
        },
        {
          type: "example",
          value: "Coffee shop pricing: If price increases 10% and demand falls 15%, PED = -1.5 (elastic)."
        }
      ],
      keyTerms: ["Demand Curve", "Supply Curve", "Equilibrium Price", "Price Elasticity"],
      exitQuiz: [
        {
          type: "mcq",
          q: "What happens to quantity demanded when price increases?",
          options: ["Increases", "Decreases", "Stays same", "Depends on elasticity"],
          answer: "Decreases"
        },
        {
          type: "short", 
          q: "Define price elasticity of demand.",
          answer: "Measures responsiveness of quantity demanded to price changes"
        }
      ]
    },
    {
      topic: "Market Structures",
      objectives: [
        "Identify different market structures",
        "Compare perfect competition vs monopoly",
        "Analyze pricing strategies"
      ],
      contentBlocks: [
        {
          type: "text",
          value: "Market structure depends on number of firms, product differentiation, and barriers to entry."
        },
        {
          type: "bullets",
          value: [
            "Perfect Competition: Many firms, identical products, no barriers",
            "Monopoly: Single firm, unique product, high barriers",
            "Oligopoly: Few firms, differentiated products, some barriers"
          ]
        },
        {
          type: "text",
          value: "Monopolistic Competition: Many firms, differentiated products, low barriers."
        },
        {
          type: "example",
          value: "Smartphone market: Apple (monopoly in iOS) vs Android (oligopoly with Samsung, Google)."
        }
      ],
      keyTerms: ["Perfect Competition", "Monopoly", "Oligopoly", "Barriers to Entry"],
      exitQuiz: [
        {
          type: "mcq",
          q: "Which market structure has the most price control?",
          options: ["Perfect Competition", "Monopoly", "Oligopoly", "Monopolistic Competition"],
          answer: "Monopoly"
        }
      ]
    }
  ] as Lesson[],

  questions: [
    {
      type: "mcq",
      q: "What happens to demand when price increases?",
      options: ["Increases", "Decreases", "Stays same", "Depends on elasticity"],
      answer: "Decreases",
      bloom: "Remember"
    },
    {
      type: "long",
      q: "Analyze the impact of a 20% increase in coffee prices on a café's revenue, considering price elasticity of demand = -0.8.",
      answer: "Calculate new quantity demanded, revenue before/after, analyze elasticity impact",
      rubric: [
        "Correct elasticity calculation",
        "Quantity change calculation", 
        "Revenue analysis",
        "Economic reasoning",
        "Real-world application"
      ],
      bloom: "Apply"
    },
    {
      type: "short",
      q: "What is the difference between elastic and inelastic demand?",
      answer: "Elastic: |PED| > 1, quantity changes more than price; Inelastic: |PED| < 1, quantity changes less than price"
    },
    {
      type: "mcq",
      q: "Which market structure has the most price control?",
      options: ["Perfect Competition", "Monopoly", "Oligopoly", "Monopolistic Competition"],
      answer: "Monopoly",
      bloom: "Remember"
    }
  ] as Question[],

  cases: [
    {
      id: "coffee_shop_pricing_strategy",
      title: "Coffee Shop Pricing Strategy", 
      scenario: "New coffee shop in a competitive market needs to set optimal pricing strategy considering demand elasticity and competition.",
      nodes: [
        {
          prompt: "Choose pricing strategy:",
          options: [
            {
              label: "Premium Pricing",
              impact: "Higher margins but lower volume; targets quality-conscious customers.",
              score: 3
            },
            {
              label: "Competitive Pricing", 
              impact: "Matches competitors; moderate margins and volume.",
              score: 4
            },
            {
              label: "Penetration Pricing",
              impact: "Low initial prices to gain market share; lower margins initially.", 
              score: 2
            },
            {
              label: "Dynamic Pricing",
              impact: "Variable pricing based on demand; complex but potentially profitable.",
              score: 3
            }
          ]
        }
      ],
      explain: "Consider market structure, demand elasticity, competition level, and business objectives."
    }
  ] as CaseScenario[]
};