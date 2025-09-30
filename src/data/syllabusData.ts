import type { SyllabusData, SyllabusUnit, SyllabusTopic } from '../types/index';

export const syllabusData: SyllabusData = {
  units: [
    {
      id: 'unit-1',
      title: 'INTRODUCTION',
      description: 'Foundational concepts and scope of Business Economics',
      icon: 'BookOpen',
      topics: [
        {
          id: 'meaning-definition',
          title: 'Meaning, Definition, Nature and Scope of Business Economics',
          description: 'Understanding the fundamental concepts and boundaries of business economics',
          learningObjectives: [
            'Define business economics and its scope',
            'Understand the nature of business economics',
            'Identify the relationship between economics and business decisions'
          ],
          keyTerms: ['Business Economics', 'Microeconomics', 'Macroeconomics', 'Decision Making', 'Resource Allocation'],
          detailedContent: {
            definition: 'Business Economics is the application of economic theory and methodology to business decision-making. It involves using economic concepts and principles to solve business problems and make informed business decisions.',
            explanation: 'Business Economics bridges the gap between economic theory and business practice. It combines microeconomic and macroeconomic principles to focus on practical business problems and solutions, using quantitative methods for business analysis and helping in resource allocation and optimization.',
            keyPoints: [
              'Applies economic theory to business decision-making processes',
              'Combines microeconomic and macroeconomic principles',
              'Focuses on practical business problems and solutions',
              'Uses quantitative methods for business analysis',
              'Helps in resource allocation and optimization',
              'Provides framework for strategic business planning'
            ],
            examples: [
              'A company deciding whether to expand production based on demand analysis',
              'Pricing strategy development using elasticity concepts',
              'Investment decisions using cost-benefit analysis',
              'Market entry decisions based on competitive analysis'
            ],
            importance: 'Business Economics is crucial for making informed business decisions, understanding market dynamics, optimizing resource allocation, and developing effective business strategies. It provides the analytical framework needed for strategic planning and competitive advantage.'
          }
        },
        {
          id: 'business-concepts',
          title: 'Business Economics Concepts',
          description: 'Core economic concepts applied to business decision-making',
          learningObjectives: [
            'Apply economic principles to business scenarios',
            'Understand opportunity cost in business context',
            'Analyze marginal analysis in business decisions'
          ],
          keyTerms: ['Opportunity Cost', 'Marginal Analysis', 'Economic Profit', 'Sunk Cost', 'Incremental Cost'],
          detailedContent: {
            definition: 'Business Economics Concepts are fundamental economic principles applied to business decision-making, including opportunity cost, marginal analysis, and economic profit calculations.',
            explanation: 'These concepts form the foundation of business economics by providing analytical tools for decision-making. Opportunity cost represents the value of the next best alternative foregone, marginal analysis examines incremental changes, and economic profit considers both explicit and implicit costs.',
            keyPoints: [
              'Opportunity cost is the value of the next best alternative foregone',
              'Marginal analysis examines incremental changes in costs and benefits',
              'Economic profit includes both explicit and implicit costs',
              'Sunk costs are past costs that cannot be recovered',
              'Incremental costs are additional costs from a decision',
              'These concepts guide optimal business decision-making'
            ],
            examples: [
              'Choosing between two investment projects - opportunity cost is the return from the rejected project',
              'Deciding whether to produce one more unit - marginal analysis compares marginal cost to marginal revenue',
              'A business owner considering salary vs. dividends - economic profit includes implicit cost of owner\'s time',
              'Continuing a failing product line - sunk costs should not influence future decisions'
            ],
            importance: 'These concepts are essential for making rational business decisions, optimizing resource allocation, and maximizing economic efficiency. They provide the analytical framework for evaluating alternatives and ensuring profitable business operations.'
          }
        },
        {
          id: 'objectives-firm',
          title: 'Objectives of Firm',
          description: 'Understanding various business objectives and their economic implications',
          learningObjectives: [
            'Identify different firm objectives',
            'Analyze profit maximization vs other objectives',
            'Understand stakeholder theory in business'
          ],
          keyTerms: ['Profit Maximization', 'Sales Maximization', 'Market Share', 'Stakeholder Theory', 'Corporate Social Responsibility'],
          detailedContent: {
            definition: 'Objectives of Firm refer to the various goals and targets that businesses pursue, ranging from traditional profit maximization to modern stakeholder-oriented objectives.',
            explanation: 'Firms pursue multiple objectives that may conflict or complement each other. Traditional economic theory assumes profit maximization, but modern businesses often balance profit with other goals like market share, social responsibility, and stakeholder satisfaction.',
            keyPoints: [
              'Profit maximization is the traditional primary objective',
              'Sales maximization focuses on revenue growth over profit',
              'Market share objectives prioritize competitive position',
              'Stakeholder theory considers all affected parties',
              'Corporate social responsibility balances profit with social impact',
              'Objectives may conflict and require trade-offs'
            ],
            examples: [
              'A tech startup prioritizing market share over immediate profits',
              'A pharmaceutical company balancing profit with drug accessibility',
              'A family business focusing on employee welfare over maximum profit',
              'A corporation investing in sustainability despite short-term costs'
            ],
            importance: 'Understanding firm objectives is crucial for strategic planning, stakeholder management, and competitive positioning. It helps businesses align their operations with their values and long-term vision while maintaining financial viability.'
          }
        },
        {
          id: 'role-economist',
          title: 'Role of Economist',
          description: 'The importance and functions of economists in business organizations',
          learningObjectives: [
            'Understand the role of economists in business',
            'Identify key responsibilities of business economists',
            'Analyze economic forecasting and planning'
          ],
          keyTerms: ['Economic Forecasting', 'Business Planning', 'Policy Analysis', 'Market Research', 'Risk Assessment'],
          detailedContent: {
            definition: 'The Role of Economist in business involves applying economic analysis to support decision-making, forecasting, planning, and strategic development within organizations.',
            explanation: 'Business economists serve as analytical advisors, providing economic insights for strategic decisions. They analyze market conditions, forecast economic trends, evaluate policy impacts, conduct market research, and assess business risks to support informed decision-making.',
            keyPoints: [
              'Economic forecasting predicts future market conditions',
              'Business planning integrates economic analysis with strategy',
              'Policy analysis evaluates regulatory and economic policy impacts',
              'Market research provides data-driven market insights',
              'Risk assessment identifies and quantifies business risks',
              'Economists bridge economic theory with business practice'
            ],
            examples: [
              'Forecasting demand for a new product launch',
              'Analyzing the impact of interest rate changes on business operations',
              'Evaluating the economic effects of new government regulations',
              'Conducting market research for international expansion',
              'Assessing currency fluctuation risks for export businesses'
            ],
            importance: 'Economists play a vital role in helping businesses navigate complex economic environments, make data-driven decisions, and anticipate market changes. Their analytical expertise is essential for strategic planning and competitive advantage.'
          }
        }
      ]
    },
    {
      id: 'unit-2',
      title: 'DEMAND AND SUPPLY ANALYSIS',
      description: 'Understanding market forces and price determination mechanisms',
      icon: 'TrendingUp',
      topics: [
        {
          id: 'law-demand',
          title: 'Law of Demand',
          description: 'Fundamental principles governing consumer demand behavior',
          learningObjectives: [
            'Understand the law of demand and its exceptions',
            'Analyze factors affecting demand',
            'Apply demand concepts to business pricing'
          ],
          keyTerms: ['Law of Demand', 'Demand Curve', 'Quantity Demanded', 'Price Effect', 'Income Effect'],
          detailedContent: {
            definition: 'The Law of Demand states that there is an inverse relationship between the price of a good and the quantity demanded, ceteris paribus (all other factors remaining constant).',
            explanation: 'This fundamental economic principle explains consumer behavior and forms the basis for pricing strategies. The law operates through substitution effect (switching to alternatives) and income effect (purchasing power changes), with the demand curve sloping downward from left to right.',
            keyPoints: [
              'Inverse relationship between price and quantity demanded',
              'Ceteris paribus assumption (other factors constant)',
              'Substitution effect and income effect drive the relationship',
              'Demand curve slopes downward from left to right',
              'Exceptions include Giffen goods and Veblen goods',
              'Applies to normal goods under normal market conditions'
            ],
            examples: [
              'When coffee prices increase, consumers buy less coffee',
              'During sales, lower prices lead to higher quantity demanded',
              'Premium products may show upward-sloping demand (Veblen effect)',
              'Essential goods may maintain demand despite price increases'
            ],
            importance: 'The Law of Demand is crucial for businesses to understand consumer behavior, optimize pricing strategies, forecast demand, and make informed decisions about production and marketing. It forms the foundation for market analysis and business planning.'
          }
        },
        {
          id: 'types-demand',
          title: 'Types of Demand',
          description: 'Different classifications and characteristics of demand',
          learningObjectives: [
            'Classify different types of demand',
            'Understand derived vs autonomous demand',
            'Analyze seasonal and cyclical demand patterns'
          ],
          keyTerms: ['Derived Demand', 'Autonomous Demand', 'Seasonal Demand', 'Cyclical Demand', 'Composite Demand'],
          detailedContent: {
            definition: 'Types of Demand refer to different classifications of demand based on various factors such as origin, timing, and relationship to other goods.',
            explanation: 'Demand can be categorized in multiple ways: derived demand depends on demand for other goods, autonomous demand is independent, seasonal demand varies with seasons, cyclical demand follows business cycles, and composite demand occurs when a good has multiple uses.',
            keyPoints: [
              'Derived demand depends on demand for related goods or services',
              'Autonomous demand is independent of other goods',
              'Seasonal demand varies with seasonal patterns',
              'Cyclical demand follows business cycle fluctuations',
              'Composite demand occurs when goods have multiple uses',
              'Understanding demand types helps in forecasting and planning'
            ],
            examples: [
              'Steel demand is derived from automobile and construction demand',
              'Food demand is largely autonomous and independent',
              'Air conditioning demand peaks during summer months',
              'Luxury goods demand increases during economic booms',
              'Electricity demand comes from residential, commercial, and industrial uses'
            ],
            importance: 'Classifying demand types is essential for accurate forecasting, inventory management, production planning, and marketing strategies. It helps businesses anticipate demand patterns and optimize their operations accordingly.'
          }
        },
        {
          id: 'elasticity-demand',
          title: 'Elasticity of Demand',
          description: 'Measuring responsiveness of demand to various factors',
          learningObjectives: [
            'Calculate price elasticity of demand',
            'Understand income and cross elasticity',
            'Apply elasticity concepts to pricing strategies'
          ],
          keyTerms: ['Price Elasticity', 'Income Elasticity', 'Cross Elasticity', 'Elastic', 'Inelastic'],
          detailedContent: {
            definition: 'Elasticity of Demand measures the responsiveness of quantity demanded to changes in various factors such as price, income, or prices of related goods.',
            explanation: 'Elasticity quantifies how sensitive demand is to changes. Price elasticity measures response to price changes, income elasticity to income changes, and cross elasticity to price changes of related goods. Values greater than 1 indicate elastic demand, while values less than 1 indicate inelastic demand.',
            keyPoints: [
              'Price elasticity measures response to price changes',
              'Income elasticity measures response to income changes',
              'Cross elasticity measures response to related goods\' price changes',
              'Elastic demand (|E| > 1) is highly responsive to changes',
              'Inelastic demand (|E| < 1) is less responsive to changes',
              'Elasticity varies across products and market segments'
            ],
            examples: [
              'Luxury cars have high price elasticity - demand drops significantly with price increases',
              'Essential medicines have low price elasticity - demand remains stable despite price changes',
              'Normal goods have positive income elasticity - demand increases with income',
              'Substitute goods have positive cross elasticity - demand increases when substitute prices rise'
            ],
            importance: 'Understanding elasticity is crucial for pricing strategies, revenue optimization, market analysis, and policy making. It helps businesses predict consumer response to price changes and optimize their pricing decisions.'
          }
        },
        {
          id: 'demand-forecasting',
          title: 'Demand Forecasting – Methods',
          description: 'Techniques and methods for predicting future demand',
          learningObjectives: [
            'Understand various forecasting methods',
            'Apply quantitative and qualitative techniques',
            'Evaluate forecasting accuracy and limitations'
          ],
          keyTerms: ['Time Series Analysis', 'Trend Analysis', 'Seasonal Variation', 'Moving Average', 'Exponential Smoothing'],
          detailedContent: {
            definition: 'Demand Forecasting Methods are systematic techniques used to predict future demand for products or services based on historical data, market analysis, and statistical models.',
            explanation: 'Demand forecasting combines quantitative methods (time series analysis, trend analysis) with qualitative approaches to predict future demand. It helps businesses plan production, manage inventory, allocate resources, and make strategic decisions.',
            keyPoints: [
              'Time series analysis examines historical demand patterns',
              'Trend analysis identifies long-term demand direction',
              'Seasonal variation accounts for recurring seasonal patterns',
              'Moving average smooths out short-term fluctuations',
              'Exponential smoothing gives more weight to recent data',
              'Combining multiple methods improves forecast accuracy'
            ],
            examples: [
              'Retail stores forecasting holiday season demand using historical sales data',
              'Manufacturers predicting raw material needs using production schedules',
              'Restaurants forecasting daily customer counts using weather and event data',
              'Technology companies predicting software license renewals using usage patterns'
            ],
            importance: 'Accurate demand forecasting is essential for inventory management, production planning, resource allocation, and financial planning. It reduces costs, prevents stockouts, and helps businesses meet customer demand efficiently.'
          }
        },
        {
          id: 'law-supply',
          title: 'Law of Supply',
          description: 'Principles governing producer supply behavior',
          learningObjectives: [
            'Understand the law of supply',
            'Analyze factors affecting supply',
            'Apply supply concepts to business production'
          ],
          keyTerms: ['Law of Supply', 'Supply Curve', 'Quantity Supplied', 'Production Cost', 'Technology'],
          detailedContent: {
            definition: 'The Law of Supply states that there is a direct relationship between the price of a good and the quantity supplied, ceteris paribus (all other factors remaining constant).',
            explanation: 'This fundamental economic principle explains producer behavior and forms the basis for supply analysis. The law operates through profit incentives - higher prices increase profit margins, encouraging producers to supply more. The supply curve slopes upward from left to right.',
            keyPoints: [
              'Direct relationship between price and quantity supplied',
              'Ceteris paribus assumption (other factors constant)',
              'Higher prices increase profit incentives for producers',
              'Supply curve slopes upward from left to right',
              'Production costs and technology affect supply position',
              'Time period affects supply responsiveness'
            ],
            examples: [
              'When wheat prices increase, farmers plant more wheat',
              'Higher oil prices encourage increased oil production',
              'Technology improvements reduce production costs and increase supply',
              'Government subsidies can shift supply curves outward'
            ],
            importance: 'The Law of Supply is crucial for understanding producer behavior, market dynamics, price formation, and production planning. It helps businesses anticipate supply responses to price changes and plan their production strategies accordingly.'
          }
        },
        {
          id: 'elasticity-supply',
          title: 'Elasticity of Supply',
          description: 'Measuring responsiveness of supply to various factors',
          learningObjectives: [
            'Calculate price elasticity of supply',
            'Understand factors affecting supply elasticity',
            'Apply elasticity concepts to production planning'
          ],
          keyTerms: ['Supply Elasticity', 'Time Period', 'Production Capacity', 'Input Availability', 'Technology'],
          detailedContent: {
            definition: 'Elasticity of Supply measures the responsiveness of quantity supplied to changes in price, indicating how quickly producers can adjust their output.',
            explanation: 'Supply elasticity depends on factors like production capacity, input availability, technology, and time period. Short-run supply is typically less elastic due to fixed factors, while long-run supply is more elastic as producers can adjust all inputs.',
            keyPoints: [
              'Measures responsiveness of supply to price changes',
              'Elastic supply (Es > 1) is highly responsive to price changes',
              'Inelastic supply (Es < 1) is less responsive to price changes',
              'Time period significantly affects supply elasticity',
              'Production capacity and input availability influence elasticity',
              'Technology can make supply more or less elastic'
            ],
            examples: [
              'Agricultural products often have inelastic supply in short run due to growing seasons',
              'Manufactured goods may have elastic supply if production capacity is flexible',
              'Services like consulting have highly elastic supply as they can quickly adjust output',
              'Natural resources often have inelastic supply due to limited availability'
            ],
            importance: 'Understanding supply elasticity is essential for production planning, inventory management, pricing strategies, and market analysis. It helps businesses anticipate supply responses and plan their operations accordingly.'
          }
        }
      ]
    },
    {
      id: 'unit-3',
      title: 'COST & PRODUCTION ANALYSIS',
      description: 'Understanding production processes and cost structures in business',
      icon: 'Calculator',
      topics: [
        {
          id: 'cost-concepts',
          title: 'Cost Concepts – Types',
          description: 'Various cost classifications and their business applications',
          learningObjectives: [
            'Classify different types of costs',
            'Understand fixed vs variable costs',
            'Apply cost concepts to business decisions'
          ],
          keyTerms: ['Fixed Cost', 'Variable Cost', 'Total Cost', 'Average Cost', 'Marginal Cost'],
          detailedContent: {
            definition: 'Cost Concepts refer to different classifications of costs that businesses incur in their operations, each with distinct characteristics and implications for decision-making.',
            explanation: 'Understanding cost classifications is fundamental to business economics. Fixed costs remain constant regardless of output, variable costs change with output, total cost is the sum of fixed and variable costs, average cost is cost per unit, and marginal cost is the additional cost of producing one more unit.',
            keyPoints: [
              'Fixed costs remain constant regardless of output level',
              'Variable costs change proportionally with output',
              'Total cost equals fixed cost plus variable cost',
              'Average cost is total cost divided by quantity produced',
              'Marginal cost is the additional cost of producing one more unit',
              'Cost behavior affects pricing and production decisions'
            ],
            examples: [
              'Rent and salaries are typically fixed costs',
              'Raw materials and direct labor are variable costs',
              'A factory\'s total cost includes rent (fixed) plus materials (variable)',
              'Average cost helps determine minimum selling price',
              'Marginal cost guides optimal production level decisions'
            ],
            importance: 'Understanding cost concepts is essential for pricing decisions, production planning, profitability analysis, and cost control. It provides the foundation for break-even analysis and optimal production decisions.'
          }
        },
        {
          id: 'cost-output-relations',
          title: 'Cost and Output Relations (Short run and Long run)',
          description: 'Understanding cost behavior across different time horizons',
          learningObjectives: [
            'Analyze short-run cost curves',
            'Understand long-run cost behavior',
            'Apply cost-output relationships to production decisions'
          ],
          keyTerms: ['Short Run', 'Long Run', 'Cost Curves', 'Economies of Scale', 'Diseconomies of Scale'],
          detailedContent: {
            definition: 'Cost and Output Relations describe how costs change with production levels across different time horizons, showing the relationship between cost curves and production decisions.',
            explanation: 'In the short run, some factors are fixed, leading to U-shaped average cost curves. In the long run, all factors are variable, allowing firms to achieve economies of scale (decreasing average costs) or face diseconomies of scale (increasing average costs).',
            keyPoints: [
              'Short run has fixed and variable factors of production',
              'Long run allows adjustment of all production factors',
              'Short-run cost curves are typically U-shaped',
              'Economies of scale reduce average costs with increased output',
              'Diseconomies of scale increase average costs with increased output',
              'Optimal scale occurs at minimum efficient scale'
            ],
            examples: [
              'A restaurant\'s kitchen size is fixed in short run but expandable in long run',
              'Manufacturing plants achieve economies of scale through specialization',
              'Large corporations may face diseconomies of scale due to management complexity',
              'Technology companies often have significant economies of scale'
            ],
            importance: 'Understanding cost-output relationships is crucial for production planning, capacity decisions, pricing strategies, and competitive positioning. It helps businesses determine optimal production levels and scale of operations.'
          }
        },
        {
          id: 'break-even-analysis',
          title: 'Break-even Analysis and Cost Control',
          description: 'Techniques for analyzing profitability and controlling costs',
          learningObjectives: [
            'Calculate break-even point',
            'Understand cost control techniques',
            'Apply break-even analysis to business planning'
          ],
          keyTerms: ['Break-even Point', 'Contribution Margin', 'Cost Control', 'Profit Planning', 'Margin of Safety'],
          detailedContent: {
            definition: 'Break-even Analysis is a financial tool that determines the point at which total revenue equals total costs, helping businesses understand profitability thresholds and plan cost control strategies.',
            explanation: 'Break-even analysis calculates the minimum sales volume needed to cover all costs. It uses contribution margin (selling price minus variable cost per unit) to determine how many units must be sold to break even. Cost control involves managing and reducing expenses to improve profitability.',
            keyPoints: [
              'Break-even point is where total revenue equals total costs',
              'Contribution margin is selling price minus variable cost per unit',
              'Break-even quantity = Fixed costs ÷ Contribution margin per unit',
              'Cost control involves managing and reducing expenses',
              'Margin of safety shows excess sales above break-even point',
              'Profit planning uses break-even analysis for target setting'
            ],
            examples: [
              'A coffee shop needs to sell 100 cups daily to break even',
              'A software company calculates break-even point for new product launch',
              'Manufacturing firms use break-even analysis for pricing decisions',
              'Service businesses determine minimum billable hours needed'
            ],
            importance: 'Break-even analysis is essential for pricing decisions, profit planning, cost control, and risk assessment. It helps businesses understand their cost structure, set realistic targets, and make informed financial decisions.'
          }
        },
        {
          id: 'production-function',
          title: 'Production Function',
          description: 'Mathematical relationships between inputs and outputs',
          learningObjectives: [
            'Understand production function concepts',
            'Analyze input-output relationships',
            'Apply production theory to business operations'
          ],
          keyTerms: ['Production Function', 'Inputs', 'Outputs', 'Total Product', 'Average Product', 'Marginal Product'],
          detailedContent: {
            definition: 'Production Function is a mathematical relationship that describes how inputs (factors of production) are transformed into outputs (goods and services) in the production process.',
            explanation: 'The production function shows the maximum output achievable from given inputs. It helps analyze input-output relationships, efficiency, and optimal input combinations. Total product is total output, average product is output per unit of input, and marginal product is additional output from one more unit of input.',
            keyPoints: [
              'Production function shows input-output relationship',
              'Total product is the total output from all inputs',
              'Average product is output per unit of variable input',
              'Marginal product is additional output from one more input unit',
              'Production function helps determine optimal input combinations',
              'Efficiency analysis uses production function concepts'
            ],
            examples: [
              'A factory\'s production function shows how labor and capital produce goods',
              'Agricultural production function relates land, labor, and fertilizer to crop yield',
              'Software development function relates programmers and time to software features',
              'Restaurant production function relates chefs, ingredients, and time to meals served'
            ],
            importance: 'Understanding production functions is crucial for input optimization, efficiency analysis, cost minimization, and capacity planning. It provides the foundation for production theory and operational decision-making.'
          }
        },
        {
          id: 'law-variable-proportions',
          title: 'Law of Variable Proportions',
          description: 'Understanding diminishing returns in production',
          learningObjectives: [
            'Understand the law of variable proportions',
            'Analyze stages of production',
            'Apply production laws to business decisions'
          ],
          keyTerms: ['Law of Variable Proportions', 'Diminishing Returns', 'Stages of Production', 'Optimal Input Combination'],
          detailedContent: {
            definition: 'The Law of Variable Proportions states that as more units of a variable input are added to fixed inputs, the marginal product of the variable input will eventually decrease.',
            explanation: 'This law describes the relationship between variable inputs and output when some inputs are fixed. Initially, adding variable inputs increases marginal product (increasing returns), but eventually marginal product decreases (diminishing returns) due to fixed input constraints.',
            keyPoints: [
              'Describes relationship between variable inputs and output',
              'Initially shows increasing returns to variable input',
              'Eventually shows diminishing returns to variable input',
              'Occurs when some inputs are fixed in short run',
              'Three stages: increasing, constant, and diminishing returns',
              'Optimal production occurs before diminishing returns set in'
            ],
            examples: [
              'Adding more workers to a fixed-size kitchen initially increases output but eventually decreases efficiency',
              'Adding fertilizer to a fixed plot of land initially increases crop yield but eventually shows diminishing returns',
              'Adding more programmers to a fixed project initially increases productivity but eventually decreases due to coordination issues',
              'Adding more machines to a fixed workforce initially increases output but eventually shows diminishing returns'
            ],
            importance: 'Understanding the law of variable proportions is essential for optimal input allocation, production planning, and efficiency maximization. It helps businesses avoid over-utilization of variable inputs and optimize their production processes.'
          }
        },
        {
          id: 'economies-scale',
          title: 'Economies of Scale',
          description: 'Understanding cost advantages from increased production',
          learningObjectives: [
            'Understand economies and diseconomies of scale',
            'Analyze internal vs external economies',
            'Apply scale concepts to business expansion'
          ],
          keyTerms: ['Economies of Scale', 'Diseconomies of Scale', 'Internal Economies', 'External Economies', 'Minimum Efficient Scale'],
          detailedContent: {
            definition: 'Economies of Scale refer to cost advantages that businesses achieve when production increases, leading to lower average costs per unit as output expands.',
            explanation: 'Economies of scale occur when increasing production leads to lower average costs due to factors like specialization, bulk purchasing, and spreading fixed costs over more units. Internal economies come from within the firm, while external economies come from industry-wide factors. Diseconomies of scale occur when firms become too large and face coordination problems.',
            keyPoints: [
              'Economies of scale reduce average costs with increased output',
              'Internal economies come from firm-specific factors',
              'External economies come from industry-wide factors',
              'Diseconomies of scale increase costs when firms become too large',
              'Minimum efficient scale is the smallest size for lowest average costs',
              'Scale effects influence market structure and competition'
            ],
            examples: [
              'Large manufacturers achieve economies through bulk purchasing and specialization',
              'Software companies benefit from economies of scale due to low marginal costs',
              'Automobile industry benefits from external economies like supplier networks',
              'Very large corporations may face diseconomies due to management complexity',
              'Retail chains achieve economies through centralized purchasing and distribution'
            ],
            importance: 'Understanding economies of scale is crucial for strategic planning, competitive positioning, and market entry decisions. It helps businesses determine optimal size, pricing strategies, and competitive advantages.'
          }
        }
      ]
    },
    {
      id: 'unit-4',
      title: 'ANALYSIS OF COMPETITION',
      description: 'Understanding different market structures and competitive strategies',
      icon: 'PieChart',
      topics: [
        {
          id: 'competitive-situations',
          title: 'Types of Competitive Situations',
          description: 'Classification and characteristics of different market structures',
          learningObjectives: [
            'Identify different market structures',
            'Understand characteristics of each market type',
            'Analyze competitive dynamics'
          ],
          keyTerms: ['Market Structure', 'Competition', 'Market Power', 'Barriers to Entry', 'Product Differentiation'],
          detailedContent: {
            definition: 'Types of Competitive Situations refer to different market structures characterized by varying degrees of competition, market power, and barriers to entry.',
            explanation: 'Market structures range from perfect competition (many firms, no market power) to monopoly (single firm, high market power). Each structure has distinct characteristics affecting pricing, output, and competitive behavior. Key factors include number of firms, product differentiation, barriers to entry, and market power.',
            keyPoints: [
              'Perfect competition: many firms, homogeneous products, no barriers',
              'Monopolistic competition: many firms, differentiated products, low barriers',
              'Oligopoly: few firms, may have differentiated or homogeneous products',
              'Monopoly: single firm, unique product, high barriers to entry',
              'Market power varies inversely with competition level',
              'Barriers to entry affect market structure and competition'
            ],
            examples: [
              'Agricultural markets often exhibit perfect competition',
              'Restaurant industry shows monopolistic competition',
              'Automobile industry is typically oligopolistic',
              'Utility companies often operate as natural monopolies',
              'Technology platforms may have monopolistic characteristics'
            ],
            importance: 'Understanding competitive situations is essential for strategic planning, pricing decisions, market entry, and competitive analysis. It helps businesses position themselves effectively and anticipate competitive dynamics.'
          }
        },
        {
          id: 'price-determination',
          title: 'Price Determination under Competitive Situations',
          description: 'How prices are set in different market conditions',
          learningObjectives: [
            'Understand price determination mechanisms',
            'Analyze pricing strategies across market structures',
            'Apply pricing concepts to business strategy'
          ],
          keyTerms: ['Price Determination', 'Market Equilibrium', 'Pricing Strategy', 'Price Leadership', 'Price Competition'],
          detailedContent: {
            definition: 'Price Determination under Competitive Situations refers to how prices are established in different market structures, ranging from market-determined prices to firm-controlled pricing.',
            explanation: 'Price determination mechanisms vary by market structure. In perfect competition, prices are market-determined through supply and demand. In monopolistic competition, firms have some pricing power. In oligopoly, strategic interactions affect pricing. In monopoly, the firm sets prices to maximize profit.',
            keyPoints: [
              'Perfect competition: prices determined by market forces',
              'Monopolistic competition: firms have limited pricing power',
              'Oligopoly: strategic pricing with interdependence',
              'Monopoly: firm sets prices to maximize profit',
              'Market equilibrium occurs where supply equals demand',
              'Pricing strategies vary with market structure'
            ],
            examples: [
              'Stock prices are determined by market forces in perfect competition',
              'Restaurants can set different prices based on differentiation',
              'Airlines engage in strategic pricing in oligopolistic markets',
              'Pharmaceutical companies with patents set monopoly prices',
              'Gas stations may follow price leadership in local markets'
            ],
            importance: 'Understanding price determination is crucial for pricing strategies, competitive positioning, and market analysis. It helps businesses set appropriate prices and anticipate competitor pricing behavior.'
          }
        },
        {
          id: 'perfect-competition',
          title: 'Perfect Competition',
          description: 'Characteristics and behavior in perfectly competitive markets',
          learningObjectives: [
            'Understand perfect competition assumptions',
            'Analyze firm behavior in perfect competition',
            'Apply perfect competition concepts to business analysis'
          ],
          keyTerms: ['Perfect Competition', 'Price Taker', 'Homogeneous Product', 'Free Entry', 'Perfect Information'],
          detailedContent: {
            definition: 'Perfect Competition is a market structure characterized by many firms selling identical products, with no barriers to entry and perfect information, where firms are price takers.',
            explanation: 'In perfect competition, no single firm can influence market price. Firms sell homogeneous products, face no barriers to entry or exit, and have perfect information about prices and market conditions. This leads to efficient resource allocation and zero economic profit in the long run.',
            keyPoints: [
              'Many firms selling identical products',
              'Firms are price takers (cannot influence market price)',
              'Perfect information about prices and market conditions',
              'Free entry and exit from the market',
              'Homogeneous products with no differentiation',
              'Long-run equilibrium with zero economic profit'
            ],
            examples: [
              'Agricultural markets for commodities like wheat or corn',
              'Stock markets for individual stocks',
              'Foreign exchange markets for major currencies',
              'Some labor markets with standardized skills',
              'Commodity markets for oil, gold, etc.'
            ],
            importance: 'Perfect competition serves as a benchmark for market efficiency and provides insights into optimal resource allocation. Understanding this model helps analyze real-world markets and government policies.'
          }
        },
        {
          id: 'monopolistic-competition',
          title: 'Monopolistic Competition',
          description: 'Market structure with differentiated products and many firms',
          learningObjectives: [
            'Understand monopolistic competition characteristics',
            'Analyze product differentiation strategies',
            'Apply monopolistic competition to business strategy'
          ],
          keyTerms: ['Monopolistic Competition', 'Product Differentiation', 'Brand Loyalty', 'Non-price Competition', 'Excess Capacity'],
          detailedContent: {
            definition: 'Monopolistic Competition is a market structure with many firms selling differentiated products, where each firm has some market power but faces competition from close substitutes.',
            explanation: 'This market structure combines elements of monopoly (product differentiation, some pricing power) and competition (many firms, low barriers to entry). Firms compete through product differentiation, branding, and non-price competition rather than price alone.',
            keyPoints: [
              'Many firms selling differentiated products',
              'Each firm has some pricing power due to differentiation',
              'Low barriers to entry and exit',
              'Non-price competition through branding and features',
              'Excess capacity in long-run equilibrium',
              'Firms earn normal profit in long run'
            ],
            examples: [
              'Restaurant industry with different cuisines and atmospheres',
              'Clothing brands with different styles and quality',
              'Software companies with different features and interfaces',
              'Coffee shops with different locations and ambience',
              'Hair salons with different services and stylists'
            ],
            importance: 'Monopolistic competition is common in real-world markets and helps explain product variety, branding strategies, and non-price competition. Understanding this structure is crucial for marketing and competitive strategy.'
          }
        },
        {
          id: 'monopoly',
          title: 'Monopoly',
          description: 'Market structure with single seller and market power',
          learningObjectives: [
            'Understand monopoly characteristics',
            'Analyze monopoly pricing and output decisions',
            'Evaluate monopoly efficiency and regulation'
          ],
          keyTerms: ['Monopoly', 'Market Power', 'Barriers to Entry', 'Natural Monopoly', 'Price Discrimination'],
          detailedContent: {
            definition: 'Monopoly is a market structure with a single firm that is the sole supplier of a product or service, possessing significant market power and facing high barriers to entry.',
            explanation: 'A monopolist has complete control over supply and can set prices to maximize profit. Barriers to entry prevent competition, which can be natural (economies of scale) or artificial (patents, licenses). Monopolies may engage in price discrimination to maximize revenue.',
            keyPoints: [
              'Single firm controlling entire market supply',
              'Significant market power to set prices',
              'High barriers to entry preventing competition',
              'Natural monopolies due to economies of scale',
              'Artificial monopolies from patents or government grants',
              'Can engage in price discrimination strategies'
            ],
            examples: [
              'Utility companies (electricity, water) as natural monopolies',
              'Pharmaceutical companies with patent protection',
              'Government-granted monopolies (postal services)',
              'Technology platforms with network effects',
              'Local cable companies in specific geographic areas'
            ],
            importance: 'Understanding monopoly is crucial for antitrust policy, regulation, and competitive analysis. It helps explain market power, pricing behavior, and the need for government intervention in some markets.'
          }
        },
        {
          id: 'oligopoly',
          title: 'Oligopoly',
          description: 'Market structure with few large firms and strategic interdependence',
          learningObjectives: [
            'Understand oligopoly characteristics',
            'Analyze strategic behavior in oligopoly',
            'Apply game theory to oligopoly analysis'
          ],
          keyTerms: ['Oligopoly', 'Strategic Interdependence', 'Game Theory', 'Collusion', 'Price Leadership'],
          detailedContent: {
            definition: 'Oligopoly is a market structure with few large firms that dominate the market, where each firm\'s decisions significantly affect competitors, creating strategic interdependence.',
            explanation: 'In oligopoly, firms must consider competitors\' reactions when making decisions. This strategic interdependence leads to complex behavior patterns, including potential collusion, price leadership, and game theory applications. Firms may compete or cooperate depending on circumstances.',
            keyPoints: [
              'Few large firms dominating the market',
              'Strategic interdependence between firms',
              'Each firm\'s actions affect competitors',
              'Potential for collusion or competition',
              'Price leadership by dominant firm',
              'Game theory explains strategic behavior'
            ],
            examples: [
              'Automobile industry with major manufacturers',
              'Airlines competing on routes and pricing',
              'Telecommunications companies in mobile services',
              'Oil companies in refining and distribution',
              'Technology companies in cloud computing'
            ],
            importance: 'Understanding oligopoly is crucial for strategic planning, competitive analysis, and antitrust considerations. It explains many real-world market behaviors and helps businesses navigate competitive dynamics.'
          }
        },
        {
          id: 'price-discrimination',
          title: 'Price Discrimination',
          description: 'Charging different prices for the same product to different customers',
          learningObjectives: [
            'Understand price discrimination concepts',
            'Analyze different types of price discrimination',
            'Apply price discrimination strategies to business'
          ],
          keyTerms: ['Price Discrimination', 'First Degree', 'Second Degree', 'Third Degree', 'Market Segmentation'],
          detailedContent: {
            definition: 'Price Discrimination is the practice of charging different prices for the same product or service to different customers or market segments, based on their willingness to pay.',
            explanation: 'Price discrimination allows firms to capture more consumer surplus and increase profits. First-degree discrimination charges each customer their maximum willingness to pay. Second-degree discrimination uses quantity or quality differences. Third-degree discrimination charges different prices to different market segments.',
            keyPoints: [
              'Charging different prices for same product to different customers',
              'First degree: perfect discrimination, maximum willingness to pay',
              'Second degree: quantity or quality-based price differences',
              'Third degree: different prices for different market segments',
              'Requires market power and ability to segment markets',
              'Increases firm profits and may improve efficiency'
            ],
            examples: [
              'Airlines charging different prices for same flight based on booking time',
              'Software companies offering student discounts',
              'Movie theaters charging different prices for matinee vs. evening shows',
              'Electricity companies charging different rates for residential vs. commercial use',
              'Pharmaceutical companies charging different prices in different countries'
            ],
            importance: 'Understanding price discrimination is crucial for pricing strategies, revenue optimization, and market segmentation. It helps businesses maximize profits while serving different customer segments effectively.'
          }
        }
      ]
    },
    {
      id: 'unit-5',
      title: 'BUSINESS CYCLE',
      description: 'Understanding economic fluctuations and their impact on business',
      icon: 'BarChart',
      topics: [
        {
          id: 'concepts',
          title: 'Concepts',
          description: 'Fundamental concepts of business cycles and economic fluctuations',
          learningObjectives: [
            'Define business cycle and its characteristics',
            'Understand economic fluctuation patterns',
            'Analyze business cycle indicators'
          ],
          keyTerms: ['Business Cycle', 'Economic Fluctuations', 'Cyclical Patterns', 'Economic Indicators', 'Trend Analysis'],
          detailedContent: {
            definition: 'Business Cycle Concepts refer to the recurring patterns of economic expansion and contraction that characterize market economies over time.',
            explanation: 'Business cycles are natural fluctuations in economic activity that occur around a long-term growth trend. They consist of alternating periods of economic expansion (growth) and contraction (recession), affecting employment, production, and prices. Economic indicators help track these cycles.',
            keyPoints: [
              'Recurring patterns of economic expansion and contraction',
              'Cyclical fluctuations around long-term growth trend',
              'Affects employment, production, prices, and investment',
              'Economic indicators track cycle phases',
              'Varies in duration and intensity',
              'Influences business planning and government policy'
            ],
            examples: [
              'The Great Recession of 2008-2009 was a major contraction phase',
              'The dot-com boom of the 1990s represented an expansion phase',
              'COVID-19 pandemic caused a sharp contraction followed by recovery',
              'Stock market cycles often reflect broader economic cycles',
              'Housing market cycles affect construction and real estate industries'
            ],
            importance: 'Understanding business cycles is crucial for economic forecasting, business planning, investment decisions, and policy making. It helps businesses prepare for economic fluctuations and government officials design appropriate policies.'
          }
        },
        {
          id: 'phases-business-cycles',
          title: 'Phases of Business Cycles',
          description: 'Different stages of business cycle and their characteristics',
          learningObjectives: [
            'Identify different phases of business cycle',
            'Understand characteristics of each phase',
            'Analyze phase transitions and implications'
          ],
          keyTerms: ['Expansion', 'Peak', 'Contraction', 'Trough', 'Recovery'],
          detailedContent: {
            definition: 'Phases of Business Cycles are the distinct stages that characterize the cyclical pattern of economic activity: expansion, peak, contraction, trough, and recovery.',
            explanation: 'Business cycles follow a predictable pattern: expansion (economic growth), peak (maximum activity), contraction (economic decline), trough (minimum activity), and recovery (return to growth). Each phase has distinct characteristics affecting businesses, employment, and economic indicators.',
            keyPoints: [
              'Expansion: period of economic growth and increasing activity',
              'Peak: highest point of economic activity before decline',
              'Contraction: period of economic decline and decreasing activity',
              'Trough: lowest point of economic activity before recovery',
              'Recovery: period of returning to growth after trough',
              'Each phase has distinct economic characteristics'
            ],
            examples: [
              'Expansion: GDP growing, unemployment falling, stock markets rising',
              'Peak: maximum employment, high consumer confidence, peak stock prices',
              'Contraction: GDP declining, unemployment rising, business failures',
              'Trough: highest unemployment, lowest consumer confidence, market bottom',
              'Recovery: gradual improvement in economic indicators'
            ],
            importance: 'Understanding cycle phases is essential for business planning, investment timing, employment decisions, and policy responses. It helps businesses anticipate economic changes and adjust their strategies accordingly.'
          }
        },
        {
          id: 'causes-consequences',
          title: 'Causes and Consequences',
          description: 'Factors causing business cycles and their economic impact',
          learningObjectives: [
            'Understand causes of business cycles',
            'Analyze consequences of economic fluctuations',
            'Evaluate impact on different sectors'
          ],
          keyTerms: ['Demand Shocks', 'Supply Shocks', 'Monetary Policy', 'Fiscal Policy', 'External Shocks'],
          detailedContent: {
            definition: 'Causes and Consequences of Business Cycles refer to the various factors that trigger economic fluctuations and their resulting impacts on businesses, employment, and economic activity.',
            explanation: 'Business cycles are caused by various shocks and imbalances in the economy. Demand shocks affect consumer and business spending, supply shocks affect production costs and capacity, and external shocks come from international events. These cause ripple effects throughout the economy.',
            keyPoints: [
              'Demand shocks: sudden changes in consumer or business spending',
              'Supply shocks: sudden changes in production costs or capacity',
              'Monetary policy: central bank actions affecting interest rates and money supply',
              'Fiscal policy: government spending and taxation changes',
              'External shocks: international events affecting domestic economy',
              'Consequences include unemployment, inflation, and business failures'
            ],
            examples: [
              'Demand shock: sudden drop in consumer confidence reducing spending',
              'Supply shock: oil price increases raising production costs',
              'Monetary policy: central bank raising interest rates to control inflation',
              'Fiscal policy: government stimulus spending during recession',
              'External shock: global pandemic disrupting supply chains',
              'Consequence: businesses reducing production and laying off workers'
            ],
            importance: 'Understanding causes and consequences helps businesses prepare for economic shocks, develop contingency plans, and make informed decisions during different cycle phases. It also informs government policy responses.'
          }
        },
        {
          id: 'measures-overcome',
          title: 'Measures to Overcome Effects of Business Cycles',
          description: 'Policy tools and strategies to mitigate business cycle effects',
          learningObjectives: [
            'Understand policy measures for cycle management',
            'Analyze effectiveness of different policies',
            'Apply cycle management strategies to business'
          ],
          keyTerms: ['Countercyclical Policy', 'Stabilization Policy', 'Automatic Stabilizers', 'Discretionary Policy', 'Policy Coordination'],
          detailedContent: {
            definition: 'Measures to Overcome Effects of Business Cycles are policy tools and strategies used by governments and central banks to mitigate the negative impacts of economic fluctuations and stabilize the economy.',
            explanation: 'These measures aim to smooth out business cycle fluctuations through countercyclical policies that work against the cycle. They include automatic stabilizers (unemployment insurance, progressive taxes) and discretionary policies (fiscal stimulus, monetary easing) designed to boost demand during contractions and cool overheating during expansions.',
            keyPoints: [
              'Countercyclical policies work against the business cycle',
              'Automatic stabilizers activate without government action',
              'Discretionary policies require government decisions',
              'Fiscal policy: government spending and taxation changes',
              'Monetary policy: central bank interest rate and money supply actions',
              'Policy coordination between fiscal and monetary authorities'
            ],
            examples: [
              'Automatic stabilizers: unemployment benefits increase during recessions',
              'Discretionary fiscal policy: stimulus packages during economic downturns',
              'Monetary policy: lowering interest rates to encourage borrowing and spending',
              'Countercyclical spending: infrastructure projects during recessions',
              'Tax cuts: reducing taxes to increase disposable income',
              'Quantitative easing: central bank buying assets to increase money supply'
            ],
            importance: 'These measures are crucial for economic stability, reducing unemployment, preventing severe recessions, and promoting sustainable growth. Understanding them helps businesses anticipate government responses and plan accordingly.'
          }
        },
        {
          id: 'national-income',
          title: 'National Income Measurement',
          description: 'Methods and concepts for measuring national economic activity',
          learningObjectives: [
            'Understand national income concepts',
            'Analyze different measurement methods',
            'Apply national income data to business analysis'
          ],
          keyTerms: ['GDP', 'GNP', 'National Income', 'Personal Income', 'Disposable Income'],
          detailedContent: {
            definition: 'National Income Measurement refers to the various methods and concepts used to measure a country\'s total economic activity and income generation.',
            explanation: 'National income measurement provides comprehensive data about economic performance. GDP measures total output within a country, GNP includes income from abroad, National Income represents total factor income, Personal Income is income received by individuals, and Disposable Income is income available for spending after taxes.',
            keyPoints: [
              'GDP: total value of goods and services produced within country',
              'GNP: GDP plus net income from abroad',
              'National Income: total income earned by factors of production',
              'Personal Income: income received by individuals from all sources',
              'Disposable Income: personal income minus personal taxes',
              'Different measures provide different perspectives on economic activity'
            ],
            examples: [
              'GDP includes all production within country borders',
              'GNP includes profits from foreign investments',
              'National Income includes wages, profits, rent, and interest',
              'Personal Income includes wages, dividends, and transfer payments',
              'Disposable Income is what consumers can actually spend',
              'These measures help track economic growth and living standards'
            ],
            importance: 'National income measurement is essential for economic analysis, policy making, international comparisons, and business planning. It provides crucial data for understanding economic performance and trends.'
          }
        }
      ]
    }
  ]
};
