// Artificial Intelligence & Machine Learning Questions

[
    {
        id: "aiml-1",
        question: "Who is widely considered the father of Artificial Intelligence?",
        options: [
            "Alan Turing",
            "John McCarthy",
            "Marvin Minsky",
            "Herbert Simon"
        ],
        answer: 1,
        explanation: "John McCarthy coined the term 'Artificial Intelligence' in 1956 at the Dartmouth Conference, which is considered the founding event of AI as a field.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-2",
        question: "What does ANI stand for in the context of artificial intelligence?",
        options: [
            "Advanced Natural Intelligence",
            "Artificial Narrow Intelligence",
            "Automated Neural Interface",
            "Adaptive Network Intelligence"
        ],
        answer: 1,
        explanation: "ANI stands for Artificial Narrow Intelligence, which refers to AI systems designed to perform a specific task or a narrow range of tasks.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-3",
        question: "What is the primary characteristic of Artificial General Intelligence (AGI)?",
        options: [
            "It can only process images",
            "It matches or exceeds human intelligence across all cognitive tasks",
            "It operates only on quantum computers",
            "It is limited to text-based tasks"
        ],
        answer: 1,
        explanation: "AGI refers to a hypothetical AI system that possesses the ability to understand, learn, and apply knowledge across any intellectual task at a level equal to or beyond human capability.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-4",
        question: "Which test is used to determine whether a machine can exhibit intelligent behavior indistinguishable from a human?",
        options: [
            "Minsky Test",
            "Turing Test",
            "McCarthy Test",
            "Simon Test"
        ],
        answer: 1,
        explanation: "The Turing Test, proposed by Alan Turing in 1950, evaluates a machine's ability to exhibit intelligent behavior equivalent to that of a human through natural language conversation.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-5",
        question: "What was the first AI program that could play checkers at a respectable level?",
        options: [
            "ELIZA",
            "Deep Blue",
            "Samuel's Checkers Program",
            "MYCIN"
        ],
        answer: 2,
        explanation: "Arthur Samuel's checkers program, developed in the 1950s at IBM, was one of the earliest AI programs and is notable for being one of the first to demonstrate machine learning.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-6",
        question: "In AI, what is an intelligent agent?",
        options: [
            "A human who operates AI systems",
            "An entity that perceives its environment and takes actions to maximize its chances of success",
            "A hardware component used in AI servers",
            "A programming language for AI development"
        ],
        answer: 1,
        explanation: "An intelligent agent is an autonomous entity that observes its environment through sensors, processes information, and takes actions through actuators to achieve specific goals.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-7",
        question: "Which of the following is a knowledge representation technique in AI?",
        options: [
            "Gradient Descent",
            "Semantic Networks",
            "Backpropagation",
            "Cross-Validation"
        ],
        answer: 1,
        explanation: "Semantic networks are a graph-based knowledge representation technique where nodes represent concepts and edges represent semantic relationships between them.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-8",
        question: "What is an expert system in AI?",
        options: [
            "A system that replaces all human experts",
            "A computer program that emulates the decision-making ability of a human expert",
            "A system that only works with mathematical problems",
            "A database management system for expert opinions"
        ],
        answer: 1,
        explanation: "An expert system is a computer program designed to solve complex problems in a specific domain by reasoning through a knowledge base of facts and rules, emulating human expert decision-making.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-9",
        question: "Which AI system developed in the 1970s was designed for medical diagnosis of bacterial infections?",
        options: [
            "ELIZA",
            "DENDRAL",
            "MYCIN",
            "SHRDLU"
        ],
        answer: 2,
        explanation: "MYCIN was developed at Stanford University in the 1970s as an expert system for diagnosing bacterial infections and recommending antibiotics, achieving accuracy comparable to human experts.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-10",
        question: "In a rule-based system, what are IF-THEN statements called?",
        options: [
            "Functions",
            "Production Rules",
            "Classes",
            "Protocols"
        ],
        answer: 1,
        explanation: "In rule-based systems, IF-THEN statements are called production rules. The IF part is the condition (antecedent), and the THEN part is the action (consequent).",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-11",
        question: "Which search algorithm explores all nodes at the present depth level before moving to nodes at the next depth level?",
        options: [
            "Depth-First Search",
            "Breadth-First Search",
            "A* Search",
            "Greedy Best-First Search"
        ],
        answer: 1,
        explanation: "Breadth-First Search (BFS) explores all neighbor nodes at the current depth before moving to nodes at the next depth level, using a queue data structure.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-12",
        question: "What heuristic function does A* search use to estimate the cost from the current node to the goal?",
        options: [
            "g(n) only",
            "h(n) only",
            "f(n) = g(n) + h(n)",
            "f(n) = g(n) - h(n)"
        ],
        answer: 2,
        explanation: "A* uses f(n) = g(n) + h(n), where g(n) is the actual cost from the start to node n, and h(n) is the heuristic estimate from n to the goal. This makes A* both optimal and complete given an admissible heuristic.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-13",
        question: "Which search algorithm uses a stack data structure for node expansion?",
        options: [
            "Breadth-First Search",
            "Depth-First Search",
            "Uniform Cost Search",
            "A* Search"
        ],
        answer: 1,
        explanation: "Depth-First Search (DFS) uses a stack (implicitly via recursion or explicitly) to explore as far as possible along each branch before backtracking.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-14",
        question: "In constraint satisfaction problems, what does it mean for a constraint graph to be tree-structured?",
        options: [
            "It has no edges",
            "It contains no cycles, allowing efficient solving in linear time",
            "It has exactly three nodes",
            "All variables have the same domain"
        ],
        answer: 1,
        explanation: "A tree-structured constraint graph has no cycles, which means the CSP can be solved efficiently in O(n·d²) time using tree-shaped CSP algorithms, where n is the number of variables and d is the domain size.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-15",
        question: "What type of reasoning moves from specific observations to general conclusions?",
        options: [
            "Deductive Reasoning",
            "Inductive Reasoning",
            "Abductive Reasoning",
            "Analogical Reasoning"
        ],
        answer: 1,
        explanation: "Inductive reasoning moves from specific observations to broader generalizations. In AI, this is the basis of machine learning, where models generalize from training examples to unseen data.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-16",
        question: "In AI planning, what is a STRIPS operator?",
        options: [
            "A neural network layer",
            "A representation of an action with preconditions and effects",
            "A search heuristic",
            "A data structure for storing plans"
        ],
        answer: 1,
        explanation: "A STRIPS operator represents an action in planning with a precondition list (what must be true before the action), an add list (what becomes true after), and a delete list (what becomes false after).",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-17",
        question: "In fuzzy logic, what is the membership function used for?",
        options: [
            "Storing user credentials",
            "Mapping an input to a degree of membership in a fuzzy set between 0 and 1",
            "Calculating the gradient of a loss function",
            "Determining the number of clusters"
        ],
        answer: 1,
        explanation: "In fuzzy logic, a membership function defines how each point in the input space is mapped to a membership value (degree of truth) between 0 and 1, allowing partial membership unlike crisp sets.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-18",
        question: "Which of the following is NOT a genetic algorithm operator?",
        options: [
            "Selection",
            "Crossover",
            "Mutation",
            "Backpropagation"
        ],
        answer: 3,
        explanation: "Backpropagation is a neural network training algorithm, not a genetic algorithm operator. The three main genetic algorithm operators are selection, crossover (recombination), and mutation.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-19",
        question: "In evolutionary algorithms, what does tournament selection involve?",
        options: [
            "Selecting the best individual from the entire population",
            "Randomly choosing k individuals and selecting the best among them",
            "Selecting individuals based on a fixed probability",
            "Eliminating the worst half of the population"
        ],
        answer: 1,
        explanation: "Tournament selection randomly picks k individuals from the population and selects the fittest one among them to be a parent. This process is repeated until the desired number of parents is selected.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-20",
        question: "In reinforcement learning, what does the agent interact with to learn?",
        options: [
            "A training dataset",
            "An environment",
            "A knowledge graph",
            "A rule engine"
        ],
        answer: 1,
        explanation: "In reinforcement learning, the agent interacts with an environment by taking actions, receiving rewards or penalties, and learning a policy to maximize cumulative reward over time.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-21",
        question: "What period in AI history is characterized by reduced funding and interest in AI research?",
        options: [
            "AI Summer",
            "AI Renaissance",
            "AI Winter",
            "AI Golden Age"
        ],
        answer: 2,
        explanation: "AI Winter refers to periods of reduced funding, interest, and research in artificial intelligence, notably occurring in the mid-1970s and late 1980s when AI failed to meet inflated expectations.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-22",
        question: "Which early AI program simulated a psychotherapist using pattern matching?",
        options: [
            "MYCIN",
            "ELIZA",
            "DENDRAL",
            "AM"
        ],
        answer: 1,
        explanation: "ELIZA, created by Joseph Weizenbaum at MIT in 1966, simulated a Rogerian psychotherapist by using simple pattern matching and substitution rules to transform user inputs into responses.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-23",
        question: "What is the key difference between symbolic AI and connectionist AI?",
        options: [
            "Symbolic AI uses neural networks; connectionist AI uses rules",
            "Symbolic AI manipulates symbols and rules; connectionist AI uses neural networks",
            "Symbolic AI works with images; connectionist AI works with text",
            "There is no difference; they are the same"
        ],
        answer: 1,
        explanation: "Symbolic AI (Good Old-Fashioned AI) manipulates explicit symbols and rules for reasoning, while connectionist AI uses artificial neural networks inspired by biological brains to learn patterns from data.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-24",
        question: "What makes a heuristic function admissible in the context of A* search?",
        options: [
            "It always returns zero",
            "It never overestimates the actual cost to reach the goal",
            "It always overestimates the actual cost",
            "It is computationally expensive to calculate"
        ],
        answer: 1,
        explanation: "A heuristic function is admissible if it never overestimates the true cost to reach the goal from any node. This property guarantees that A* search will find an optimal solution.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-25",
        question: "In the minimax algorithm, what does the MAX player try to achieve?",
        options: [
            "Minimize the score",
            "Maximize the score",
            "Maintain a tie",
            "Randomize the outcome"
        ],
        answer: 1,
        explanation: "In the minimax algorithm, the MAX player tries to maximize the game's score (or utility), while the MIN player tries to minimize it. The algorithm assumes both players play optimally.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-26",
        question: "What is the purpose of alpha-beta pruning in game tree search?",
        options: [
            "To increase the depth of search",
            "To prune branches that cannot affect the final decision, improving efficiency",
            "To add randomization to the search",
            "To convert the game tree into a neural network"
        ],
        answer: 1,
        explanation: "Alpha-beta pruning eliminates branches in the game tree that cannot possibly influence the final decision, significantly reducing the number of nodes evaluated without affecting the minimax result.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-27",
        question: "What is a Bayesian network in AI?",
        options: [
            "A type of neural network with Bayesian layers",
            "A probabilistic graphical model representing conditional dependencies via a directed acyclic graph",
            "A network of Bayesian classifiers",
            "A distributed computing framework for AI"
        ],
        answer: 1,
        explanation: "A Bayesian network is a probabilistic graphical model that represents a set of variables and their conditional dependencies through a directed acyclic graph, enabling reasoning under uncertainty.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-28",
        question: "In a Markov Decision Process (MDP), what property must the transition function satisfy?",
        options: [
            "Transitions must be deterministic",
            "The future state depends only on the current state and action, not on the history (Markov property)",
            "All states must be equally likely",
            "Transitions must be reversible"
        ],
        answer: 1,
        explanation: "The Markov property states that the future state depends only on the current state and the action taken, not on the sequence of events that preceded it. This is the foundation of MDPs.",
        difficulty: "Hard",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-29",
        question: "What is the difference between forward chaining and backward chaining in rule-based systems?",
        options: [
            "Forward chaining starts from facts to reach conclusions; backward chaining starts from a goal to find supporting facts",
            "Forward chaining is faster than backward chaining",
            "Forward chaining works with uncertainty; backward chaining does not",
            "There is no meaningful difference"
        ],
        answer: 0,
        explanation: "Forward chaining is data-driven, starting from known facts and applying rules to derive new conclusions. Backward chaining is goal-driven, starting from a hypothesis and looking for rules that support it.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-30",
        question: "What is the Chinese Room argument primarily intended to demonstrate?",
        options: [
            "That Chinese is easier for computers to learn than English",
            "That syntactic manipulation of symbols does not necessarily imply understanding or consciousness",
            "That AI cannot translate languages",
            "That rooms can be programmed to think"
        ],
        answer: 1,
        explanation: "John Searle's Chinese Room argument contends that a computer executing a program that manipulates Chinese symbols according to rules does not necessarily understand Chinese, challenging the claim that strong AI possesses true understanding.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-31",
        question: "Which of the following represents a semantic network relationship?",
        options: [
            "if-then-else",
            "is-a",
            "for-loop",
            "try-catch"
        ],
        answer: 1,
        explanation: "In semantic networks, 'is-a' is a fundamental relationship type (along with 'has-a', 'part-of', etc.) that represents hierarchical categorization, such as 'Dog is-a Mammal'.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-32",
        question: "What is frame-based knowledge representation?",
        options: [
            "A video processing technique",
            "A structure that represents stereotyped situations with named slots and fillers",
            "A method for rendering 3D graphics",
            "A data compression algorithm"
        ],
        answer: 1,
        explanation: "Frame-based representation, proposed by Marvin Minsky, organizes knowledge into frames (structures) that represent stereotyped situations, with slots containing default values and constraints for various attributes.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-33",
        question: "In propositional logic, what is the truth value of (P AND NOT P)?",
        options: [
            "True",
            "False",
            "Undefined",
            "Depends on P"
        ],
        answer: 1,
        explanation: "(P AND NOT P) is a contradiction and is always False regardless of the truth value of P. This is a fundamental law of logic known as the law of non-contradiction.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-34",
        question: "What advantage does first-order logic have over propositional logic for knowledge representation?",
        options: [
            "It is computationally less expensive",
            "It supports quantifiers (universal and existential) and predicates over objects",
            "It does not require variables",
            "It can only represent true statements"
        ],
        answer: 1,
        explanation: "First-order logic extends propositional logic with quantifiers (∀ for universal, ∃ for existential) and predicates that can refer to objects, enabling much more expressive and flexible knowledge representation.",
        difficulty: "Hard",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-35",
        question: "What is the resolution principle in automated theorem proving?",
        options: [
            "A method for increasing image resolution",
            "An inference rule that derives a new clause from two clauses containing complementary literals",
            "A technique for resolving conflicts between agents",
            "A method for determining the optimal number of clusters"
        ],
        answer: 1,
        explanation: "The resolution principle, introduced by Robinson in 1965, is a sound and complete inference rule for first-order logic that derives new clauses by resolving complementary literals in two parent clauses.",
        difficulty: "Hard",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-36",
        question: "What is Monte Carlo Tree Search (MCTS) primarily known for?",
        options: [
            "Sorting large datasets",
            "Its role in achieving superhuman performance in Go with AlphaGo",
            "Training neural networks",
            "Clustering high-dimensional data"
        ],
        answer: 1,
        explanation: "MCTS gained fame through AlphaGo, which combined MCTS with deep neural networks to achieve superhuman performance in Go, a game previously considered intractable for AI due to its enormous search space.",
        difficulty: "Hard",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-37",
        question: "What does the exploration-exploitation trade-off refer to in reinforcement learning?",
        options: [
            "Choosing between supervised and unsupervised learning",
            "Balancing trying new actions (exploration) versus using known good actions (exploitation)",
            "Trading model accuracy for training speed",
            "Choosing between online and offline learning"
        ],
        answer: 1,
        explanation: "The exploration-exploitation trade-off is the dilemma between trying new, potentially better actions (exploration) and leveraging known actions that yield high rewards (exploitation) in reinforcement learning.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-38",
        question: "What is the key difference between informed and uninformed search algorithms?",
        options: [
            "Informed search uses heuristic information; uninformed search does not",
            "Informed search is always faster",
            "Uninformed search guarantees optimal solutions; informed search does not",
            "Informed search works only on trees; uninformed search works on graphs"
        ],
        answer: 0,
        explanation: "Informed (heuristic) search algorithms like A* use domain-specific heuristic functions to guide the search, while uninformed (blind) algorithms like BFS and DFS have no additional information beyond the problem definition.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-39",
        question: "In greedy best-first search, which node is expanded next?",
        options: [
            "The node with the lowest g(n) cost from start",
            "The node that appears closest to the goal based on heuristic h(n)",
            "The deepest node in the search tree",
            "A randomly selected node"
        ],
        answer: 1,
        explanation: "Greedy best-first search always expands the node that appears closest to the goal according to the heuristic function h(n), without considering the cost already incurred to reach that node.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-40",
        question: "What is uniform cost search guaranteed to find?",
        options: [
            "The fastest solution in terms of number of steps",
            "The least-cost solution when all step costs are positive",
            "Any solution regardless of optimality",
            "The solution with the fewest nodes expanded"
        ],
        answer: 1,
        explanation: "Uniform cost search expands the node with the lowest path cost g(n) from the start and is guaranteed to find the optimal (least-cost) solution when all step costs are non-negative.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-41",
        question: "What is hill climbing in the context of optimization?",
        options: [
            "A graph traversal algorithm",
            "A local search algorithm that continuously moves toward increasing value",
            "A clustering technique",
            "A dimensionality reduction method"
        ],
        answer: 1,
        explanation: "Hill climbing is a local search algorithm that starts with an arbitrary solution and iteratively makes small changes to improve it, moving 'uphill' toward higher values of an objective function until no improvement is found.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-42",
        question: "What problem does simulated annealing solve that basic hill climbing cannot?",
        options: [
            "It is faster than hill climbing",
            "It can escape local optima by occasionally accepting worse solutions",
            "It requires less memory",
            "It works only with discrete variables"
        ],
        answer: 1,
        explanation: "Simulated annealing can escape local optima by probabilistically accepting worse solutions with a probability that decreases over time (controlled by a temperature parameter), unlike hill climbing which gets stuck at local optima.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-43",
        question: "In a multi-agent system, what is a cooperative game scenario?",
        options: [
            "Agents compete for a zero-sum outcome",
            "Agents work together to achieve a shared goal",
            "Agents operate independently without interaction",
            "Agents take turns without communication"
        ],
        answer: 1,
        explanation: "In cooperative game scenarios, multiple agents work together toward a common objective, sharing information and coordinating their actions to maximize joint utility rather than individual gain.",
        difficulty: "Hard",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-44",
        question: "What is the Belief-Desire-Intention (BDI) architecture in AI agents?",
        options: [
            "A neural network architecture for image recognition",
            "A framework modeling agents with beliefs about the world, desires representing goals, and intentions for committed plans",
            "A database schema for AI systems",
            "A method for belief revision in logical systems"
        ],
        answer: 1,
        explanation: "The BDI architecture models rational agents with three mental attitudes: beliefs (information about the world), desires (goals to achieve), and intentions (currently committed plans of action).",
        difficulty: "Hard",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-45",
        question: "What is the primary concern of AI ethics regarding algorithmic bias?",
        options: [
            "Algorithms being too slow",
            "Systems producing unfair or discriminatory outcomes for certain groups",
            "Algorithms using too much memory",
            "AI systems replacing human creativity"
        ],
        answer: 1,
        explanation: "Algorithmic bias in AI ethics refers to systematic and unfair discrimination in AI system outputs against certain demographic groups, often arising from biased training data or flawed model design.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-46",
        question: "What does Explainable AI (XAI) aim to achieve?",
        options: [
            "Faster training of AI models",
            "Making AI decision-making processes transparent and understandable to humans",
            "Reducing the size of AI models",
            "Eliminating the need for human oversight"
        ],
        answer: 1,
        explanation: "Explainable AI (XAI) aims to make AI systems' decisions and reasoning processes transparent and interpretable to humans, building trust and enabling effective human-AI collaboration.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-47",
        question: "What distinguishes weak AI (narrow AI) from strong AI (general AI)?",
        options: [
            "Weak AI is slower than strong AI",
            "Weak AI is designed for specific tasks; strong AI would have general human-level cognitive abilities",
            "Weak AI uses less data than strong AI",
            "Weak AI is rule-based; strong AI is learning-based"
        ],
        answer: 1,
        explanation: "Weak (narrow) AI is designed to perform specific tasks like playing chess or recognizing faces, while strong (general) AI would possess the full range of human cognitive abilities across any domain.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-48",
        question: "What is the difference between deductive and abductive reasoning?",
        options: [
            "Deductive reasoning derives certain conclusions from premises; abductive reasoning infers the most likely explanation from observations",
            "They are identical reasoning methods",
            "Deductive reasoning works with uncertainty; abductive does not",
            "Abductive reasoning is only used in mathematics"
        ],
        answer: 0,
        explanation: "Deductive reasoning derives conclusions that necessarily follow from premises (e.g., all men are mortal, Socrates is a man, therefore Socrates is mortal), while abductive reasoning infers the best explanation for observed evidence.",
        difficulty: "Hard",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-49",
        question: "What is partial order planning (POP) in AI?",
        options: [
            "A planning method that orders all actions sequentially before execution",
            "A planning approach that represents only the necessary ordering constraints between actions, leaving other orderings unspecified",
            "A method for partially executing a plan",
            "A technique for plan optimization after generation"
        ],
        answer: 1,
        explanation: "Partial order planning represents a plan as a set of actions with only necessary ordering constraints (partial order), rather than a total linear sequence, allowing more flexible and efficient plan construction.",
        difficulty: "Hard",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-50",
        question: "In constraint satisfaction, what is arc consistency?",
        options: [
            "Every variable has exactly one value in its domain",
            "For every value of one variable, there exists a consistent value in the connected variable's domain",
            "All constraints are binary",
            "The constraint graph is fully connected"
        ],
        answer: 1,
        explanation: "Arc consistency means that for every pair of connected variables (X, Y), every value in X's domain has at least one consistent value in Y's domain, and vice versa. It is enforced by algorithms like AC-3.",
        difficulty: "Hard",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-51",
        question: "What is the main limitation of the Turing Test as a measure of intelligence?",
        options: [
            "It is too difficult for any AI to pass",
            "It focuses on linguistic deception rather than genuine understanding and can be gamed",
            "It only works with visual inputs",
            "It requires physical interaction"
        ],
        answer: 1,
        explanation: "The Turing Test has been criticized because it measures the ability to imitate human conversation rather than true intelligence. Systems like ELIZA showed that superficial pattern matching can fool evaluators without any real understanding.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-52",
        question: "What is the difference between strong AI and Artificial Superintelligence (ASI)?",
        options: [
            "They are the same concept",
            "Strong AI matches human intelligence; ASI exceeds the best human brains in every field",
            "Strong AI exceeds human intelligence; ASI matches it",
            "ASI is a subset of strong AI"
        ],
        answer: 1,
        explanation: "Strong AI (AGI) refers to human-level general intelligence, while ASI refers to intelligence that surpasses the best human brains across virtually all economically valuable work and cognitive tasks.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-53",
        question: "What is an ontology in the context of AI?",
        options: [
            "The study of being in philosophy applied to robots",
            "A formal representation of knowledge as a set of concepts within a domain and the relationships between them",
            "A type of neural network",
            "A database index structure"
        ],
        answer: 1,
        explanation: "In AI, an ontology is a formal, explicit specification of a shared conceptualization — defining concepts, categories, properties, and relationships within a domain to enable knowledge sharing and reasoning.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-54",
        question: "What is the key idea behind iterative deepening depth-first search (IDDFS)?",
        options: [
            "It performs DFS with increasing depth limits, combining BFS completeness with DFS memory efficiency",
            "It performs DFS and BFS simultaneously",
            "It deepens the neural network layers iteratively",
            "It increases the branching factor at each iteration"
        ],
        answer: 0,
        explanation: "IDDFS repeatedly performs DFS with progressively increasing depth limits, combining the optimality and completeness of BFS with the memory efficiency of DFS (O(bd) space instead of O(b^d)).",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-55",
        question: "In adversarial search, what is a utility function?",
        options: [
            "A function that measures the computational cost of the search",
            "A function that assigns a numeric value to terminal states reflecting the desirability of that outcome",
            "A function that generates random moves",
            "A function that prunes the search tree"
        ],
        answer: 1,
        explanation: "In adversarial search, a utility function maps terminal states of a game to numeric values representing how desirable each outcome is for a player (e.g., +1 for win, -1 for loss, 0 for draw).",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-56",
        question: "What is ant colony optimization inspired by?",
        options: [
            "The way ants build physical colonies",
            "The foraging behavior of ants that find shortest paths using pheromone trails",
            "The hierarchical structure of ant colonies",
            "The reproductive cycle of ants"
        ],
        answer: 1,
        explanation: "Ant colony optimization is inspired by how ants find the shortest path to food sources by laying pheromone trails, with shorter paths accumulating more pheromone as more ants traverse them quickly.",
        difficulty: "Hard",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-57",
        question: "What is particle swarm optimization (PSO) inspired by?",
        options: [
            "The movement of particles in physics",
            "The social behavior of bird flocking and fish schooling",
            "The behavior of subatomic particles",
            "The flow of particles in a fluid"
        ],
        answer: 1,
        explanation: "PSO is inspired by the social behavior of bird flocks and fish schools, where individuals (particles) move through the search space influenced by their own best position and the swarm's best position.",
        difficulty: "Hard",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-58",
        question: "In a production system, what is the conflict resolution strategy?",
        options: [
            "A method for resolving contradictions in the knowledge base",
            "A rule for selecting which production rule to fire when multiple rules are eligible",
            "A negotiation protocol between multiple agents",
            "A method for resolving logical paradoxes"
        ],
        answer: 1,
        explanation: "Conflict resolution strategy determines which production rule to execute when multiple rules have their conditions satisfied simultaneously. Common strategies include first-match, most-specific, and highest-priority.",
        difficulty: "Hard",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-59",
        question: "What is the difference between episodic and sequential tasks in AI?",
        options: [
            "Episodic tasks have a single action; sequential tasks require a sequence of actions",
            "Episodic tasks are easier to solve",
            "Sequential tasks do not have a goal",
            "Episodic tasks cannot use reinforcement learning"
        ],
        answer: 0,
        explanation: "In episodic tasks, the agent's experience is divided into independent episodes where each action affects only that episode. In sequential tasks, the agent's current action affects future states and rewards across a sequence of decisions.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-60",
        question: "What is the frame problem in AI?",
        options: [
            "The difficulty of rendering video frames in real-time",
            "The challenge of representing which aspects of a state change and which remain the same after an action",
            "The problem of fitting AI models into memory",
            "The difficulty of processing sequential image frames"
        ],
        answer: 1,
        explanation: "The frame problem is the challenge of efficiently representing and reasoning about what changes and what stays the same when an action is performed, without having to explicitly enumerate all unchanged properties.",
        difficulty: "Hard",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-61",
        question: "What is situation calculus in AI planning?",
        options: [
            "A mathematical calculus for real-time situations",
            "A formalism for representing and reasoning about dynamic worlds using situations, actions, and fluents",
            "A method for calculating optimal situations",
            "A probabilistic model for situation assessment"
        ],
        answer: 1,
        explanation: "Situation calculus is a logical formalism for representing dynamic domains, using situations (states of the world), actions (transitions between situations), and fluents (properties that change over situations).",
        difficulty: "Hard",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-62",
        question: "What is the key advantage of bidirectional search over standard BFS?",
        options: [
            "It always finds shorter paths",
            "It reduces the search space by searching simultaneously from both start and goal states",
            "It requires less memory per node",
            "It works on infinite graphs"
        ],
        answer: 1,
        explanation: "Bidirectional search runs two simultaneous BFS searches — one forward from the start and one backward from the goal — meeting in the middle, reducing the time complexity from O(b^d) to O(b^(d/2)).",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-63",
        question: "What is a utility-based agent in AI?",
        options: [
            "An agent that maximizes a utility function to choose the best action among multiple possibilities",
            "An agent that follows fixed rules without evaluation",
            "An agent used only in economic applications",
            "An agent that minimizes computational cost"
        ],
        answer: 0,
        explanation: "A utility-based agent evaluates the desirability of different states using a utility function and selects actions that maximize expected utility, enabling it to make rational decisions when multiple goals conflict.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-64",
        question: "In the context of AI safety, what is the alignment problem?",
        options: [
            "Aligning text in NLP outputs",
            "Ensuring that AI systems' goals and behaviors are aligned with human values and intentions",
            "Aligning data structures in memory",
            "Synchronizing multiple AI systems"
        ],
        answer: 1,
        explanation: "The alignment problem refers to the challenge of ensuring that AI systems pursue goals that are aligned with human values, intentions, and interests, particularly as AI systems become more capable.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-65",
        question: "What is a Hierarchical Task Network (HTN) planner?",
        options: [
            "A planner that uses neural network hierarchies",
            "A planner that decomposes high-level tasks into subtasks recursively until primitive actions are reached",
            "A planner that organizes tasks in a database hierarchy",
            "A planner that only works with hierarchical data"
        ],
        answer: 1,
        explanation: "An HTN planner plans by decomposing complex tasks into simpler subtasks using methods (reduction schemas), recursively refining the hierarchy until only primitive actions remain that can be directly executed.",
        difficulty: "Hard",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-66",
        question: "Which of the following is an example of a reflex agent?",
        options: [
            "A chess-playing program that looks ahead 10 moves",
            "A thermostat that turns on heating when temperature drops below a threshold",
            "A robot that plans a route to a destination",
            "A language model that generates essays"
        ],
        answer: 1,
        explanation: "A reflex agent selects actions based solely on the current percept, without maintaining any internal state or considering future consequences. A thermostat is a classic example — it responds directly to temperature readings.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-67",
        question: "What is Tabu Search in the context of optimization?",
        options: [
            "A search that avoids recently visited solutions using a tabu list to escape local optima",
            "A search algorithm that only explores tabular data",
            "A method for searching database tables",
            "A search that prioritizes unexplored regions exclusively"
        ],
        answer: 0,
        explanation: "Tabu Search enhances local search by maintaining a tabu list of recently visited solutions or moves that are forbidden for a certain number of iterations, preventing cycling and enabling escape from local optima.",
        difficulty: "Hard",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-68",
        question: "What is the difference between a goal-based agent and a utility-based agent?",
        options: [
            "Goal-based agents are more intelligent than utility-based agents",
            "Goal-based agents pursue specific goals; utility-based agents optimize a utility function that can handle trade-offs between conflicting goals",
            "Utility-based agents cannot have goals",
            "Goal-based agents use utility functions internally"
        ],
        answer: 1,
        explanation: "Goal-based agents have binary goal satisfaction (achieved or not), while utility-based agents assign numeric values to states, enabling them to make nuanced decisions when goals conflict or have varying degrees of desirability.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-69",
        question: "What does ASI stand for in artificial intelligence?",
        options: [
            "Artificial System Intelligence",
            "Artificial Superintelligence",
            "Automated System Integration",
            "Adaptive Supervised Intelligence"
        ],
        answer: 1,
        explanation: "ASI stands for Artificial Superintelligence, referring to a hypothetical AI that would vastly surpass the best human brains in practically every field, including scientific creativity, general wisdom, and social skills.",
        difficulty: "Easy",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-70",
        question: "In game theory applied to AI, what is a Nash Equilibrium?",
        options: [
            "A state where all players have equal scores",
            "A state where no player can improve their outcome by unilaterally changing their strategy",
            "A state where the game ends in a tie",
            "A state where all players cooperate fully"
        ],
        answer: 1,
        explanation: "A Nash Equilibrium is a state in a game where no player can benefit by unilaterally changing their strategy, given that all other players keep their strategies unchanged. It is a fundamental concept in game theory.",
        difficulty: "Hard",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-71",
        question: "What is the primary application area of the PROLOG programming language in AI?",
        options: [
            "Image processing",
            "Logic programming, theorem proving, and expert systems",
            "Neural network training",
            "Statistical analysis"
        ],
        answer: 1,
        explanation: "PROLOG (Programming in Logic) is designed for logic programming and is well-suited for tasks involving symbolic reasoning, theorem proving, natural language processing, and building expert systems.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-72",
        question: "What is the qualification problem in AI?",
        options: [
            "Ensuring AI engineers are properly certified",
            "The difficulty of expressing all the preconditions and exceptions needed for a real-world action to succeed",
            "The problem of qualifying training data",
            "Quality assurance for AI models"
        ],
        answer: 1,
        explanation: "The qualification problem is the challenge that real-world actions have an almost infinite number of preconditions and potential exceptions that are impractical to fully represent in a formal system.",
        difficulty: "Hard",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-73",
        question: "What is differential evolution in the context of evolutionary computation?",
        options: [
            "A method for computing derivatives numerically",
            "A population-based optimization algorithm that uses vector differences to create new candidate solutions",
            "A technique for evolving neural network architectures",
            "A method for evolving differential equations"
        ],
        answer: 1,
        explanation: "Differential evolution is a population-based optimization algorithm that creates new candidate solutions by adding weighted differences between randomly selected population vectors to another vector, effective for continuous optimization.",
        difficulty: "Hard",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-74",
        question: "What is the ramification problem in AI?",
        options: [
            "The problem of RAM usage in AI systems",
            "The challenge of representing all the indirect consequences of an action",
            "The problem of branching in search algorithms",
            "The difficulty of parallel processing in AI"
        ],
        answer: 1,
        explanation: "The ramification problem is the challenge of representing and reasoning about all the indirect effects (side effects) of an action, which follow logically from direct effects but may be numerous and complex to track.",
        difficulty: "Hard",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-75",
        question: "What is cognitive architecture in AI?",
        options: [
            "The hardware design of AI processors",
            "A computational framework that models the structures and processes of human cognition",
            "A software architecture for cloud-based AI",
            "The layout of neural network layers"
        ],
        answer: 1,
        explanation: "A cognitive architecture is a comprehensive computational framework that attempts to model the fundamental structures and processes of human cognition, such as SOAR, ACT-R, and CLARION.",
        difficulty: "Medium",
        topic: "Artificial Intelligence Fundamentals"
    },
    {
        id: "aiml-76",
        question: "In supervised learning, what must the training data contain for each example?",
        options: [
            "Only input features",
            "Both input features and corresponding labels",
            "Only labels without features",
            "Unlabeled data with clustering information"
        ],
        answer: 1,
        explanation: "In supervised learning, each training example must include both the input features and the correct output label, enabling the model to learn the mapping function from inputs to outputs.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-77",
        question: "Which type of machine learning does NOT require labeled data?",
        options: [
            "Supervised Learning",
            "Unsupervised Learning",
            "Classification",
            "Regression"
        ],
        answer: 1,
        explanation: "Unsupervised learning works with unlabeled data, discovering hidden patterns, structures, or groupings in the data without any prior knowledge of the correct outputs.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-78",
        question: "What is semi-supervised learning most useful for?",
        options: [
            "When you have abundant labeled data",
            "When labeled data is scarce but unlabeled data is plentiful",
            "When you have no data at all",
            "When you only need to process images"
        ],
        answer: 1,
        explanation: "Semi-supervised learning is most valuable when obtaining labeled data is expensive or time-consuming, but large amounts of unlabeled data are available. It combines a small labeled dataset with a large unlabeled dataset.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-79",
        question: "In self-supervised learning, how are labels generated?",
        options: [
            "By human annotators",
            "From the input data itself by solving pretext tasks",
            "By a separate supervised model",
            "Labels are not used at all"
        ],
        answer: 1,
        explanation: "In self-supervised learning, the model creates its own supervisory signals from the input data by solving pretext tasks (e.g., predicting masked words, predicting image rotations), eliminating the need for manual labeling.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-80",
        question: "Which machine learning task predicts a continuous numerical value?",
        options: [
            "Classification",
            "Regression",
            "Clustering",
            "Dimensionality Reduction"
        ],
        answer: 1,
        explanation: "Regression is the task of predicting a continuous numerical value, such as predicting house prices, temperature, or stock prices, as opposed to classification which predicts discrete categories.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-81",
        question: "Which of the following is a binary classification problem?",
        options: [
            "Predicting house prices",
            "Classifying emails as spam or not spam",
            "Grouping customers into segments",
            "Reducing image dimensions"
        ],
        answer: 1,
        explanation: "Binary classification involves assigning inputs to one of two classes. Classifying emails as spam or not spam is a classic binary classification problem, as there are exactly two possible outcomes.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-82",
        question: "What is the goal of clustering in unsupervised learning?",
        options: [
            "To predict labels for new data",
            "To group similar data points together based on their features",
            "To reduce the number of features",
            "To find the best regression line"
        ],
        answer: 1,
        explanation: "Clustering aims to partition data into groups (clusters) such that data points within a cluster are more similar to each other than to those in other clusters, based on some similarity measure.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-83",
        question: "Which algorithm is commonly used for association rule learning?",
        options: [
            "Linear Regression",
            "Apriori Algorithm",
            "K-Means Clustering",
            "Support Vector Machine"
        ],
        answer: 1,
        explanation: "The Apriori algorithm is the most well-known algorithm for association rule learning, used to discover frequent itemsets and generate rules like 'If a customer buys X, they are likely to buy Y' in market basket analysis.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-84",
        question: "What is feature engineering in machine learning?",
        options: [
            "Building hardware for ML",
            "Creating new input features from existing data to improve model performance",
            "Selecting the best ML algorithm",
            "Engineering the output labels"
        ],
        answer: 1,
        explanation: "Feature engineering is the process of using domain knowledge to create new features from raw data that make machine learning algorithms work better, such as extracting date components, computing ratios, or creating interaction terms.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-85",
        question: "Which feature selection method evaluates features based on their statistical relationship with the target variable independently of other features?",
        options: [
            "Recursive Feature Elimination",
            "LASSO regularization",
            "Filter Methods",
            "Embedded Methods"
        ],
        answer: 2,
        explanation: "Filter methods evaluate each feature individually based on statistical measures (correlation, chi-square, mutual information) with the target variable, without considering feature interactions or model performance.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-86",
        question: "What does Min-Max scaling transform feature values to?",
        options: [
            "Values with mean 0 and standard deviation 1",
            "Values between 0 and 1",
            "Values between -1 and 1",
            "Integer values only"
        ],
        answer: 1,
        explanation: "Min-Max scaling transforms features to a specified range, typically [0, 1], using the formula: X_scaled = (X - X_min) / (X_max - X_min).",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-87",
        question: "What is the difference between normalization and standardization?",
        options: [
            "They are the same technique",
            "Normalization scales to a range like [0,1]; standardization transforms to mean 0 and standard deviation 1",
            "Normalization uses the median; standardization uses the mean",
            "Standardization is only for categorical data"
        ],
        answer: 1,
        explanation: "Normalization (Min-Max scaling) rescales data to a fixed range [0,1], while standardization (Z-score normalization) transforms data to have zero mean and unit variance, which is better for algorithms assuming normally distributed data.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-88",
        question: "Which encoding technique should be used for ordinal categorical features?",
        options: [
            "One-Hot Encoding",
            "Label Encoding",
            "Target Encoding",
            "Frequency Encoding"
        ],
        answer: 1,
        explanation: "Label encoding assigns integer values to ordinal categories while preserving their order (e.g., Low=0, Medium=1, High=2), which is appropriate when the categorical feature has a meaningful inherent ordering.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-89",
        question: "What is a common strategy for handling missing values in a dataset?",
        options: [
            "Always delete rows with missing values",
            "Imputation using mean, median, or mode, or using predictive models",
            "Ignore missing values completely",
            "Replace all missing values with zero"
        ],
        answer: 1,
        explanation: "Imputation fills in missing values using statistical measures (mean, median, mode) or predictive models (KNN imputer, regression). The best strategy depends on the data distribution, amount of missing data, and the specific context.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-90",
        question: "What is the purpose of a train/test split in machine learning?",
        options: [
            "To speed up training",
            "To evaluate how well the model generalizes to unseen data",
            "To reduce the dataset size",
            "To balance the classes"
        ],
        answer: 1,
        explanation: "The train/test split divides data into a training set for model learning and a test set for evaluating performance on unseen data, providing an estimate of how well the model will generalize to new data.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-91",
        question: "In k-fold cross-validation, how many times is the model trained and evaluated?",
        options: [
            "Once",
            "k times, each time using a different fold as the test set",
            "k-1 times",
            "k² times"
        ],
        answer: 1,
        explanation: "In k-fold cross-validation, the dataset is divided into k equal folds. The model is trained k times, each time using k-1 folds for training and the remaining fold for testing, rotating through all folds.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-92",
        question: "What is overfitting in machine learning?",
        options: [
            "The model performs well on both training and test data",
            "The model learns noise and specific patterns in training data, performing poorly on unseen data",
            "The model is too simple to capture the underlying pattern",
            "The model trains too quickly"
        ],
        answer: 1,
        explanation: "Overfitting occurs when a model learns not only the underlying patterns but also the noise and specific details of the training data, resulting in high training accuracy but poor generalization to new, unseen data.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-93",
        question: "What is underfitting in machine learning?",
        options: [
            "The model memorizes the training data",
            "The model is too simple to capture the underlying patterns in the data",
            "The model achieves 100% test accuracy",
            "The model converges too slowly"
        ],
        answer: 1,
        explanation: "Underfitting occurs when a model is too simple to capture the underlying structure of the data, resulting in poor performance on both training and test data because it fails to learn the relevant patterns.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-94",
        question: "What does high bias in a model indicate?",
        options: [
            "The model is overfitting the training data",
            "The model is too simple and makes strong assumptions about the data",
            "The model has too many parameters",
            "The training data is too large"
        ],
        answer: 1,
        explanation: "High bias indicates that the model makes overly simplistic assumptions about the data, leading to underfitting. It fails to capture the complexity of the true relationship between features and target.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-95",
        question: "What does high variance in a model indicate?",
        options: [
            "The model is underfitting",
            "The model is too sensitive to fluctuations in the training data",
            "The model has too few features",
            "The model converges instantly"
        ],
        answer: 1,
        explanation: "High variance indicates that the model is too complex and overly sensitive to the specific training data, capturing noise along with signals. Small changes in training data lead to large changes in the model's predictions.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-96",
        question: "What is the bias-variance trade-off?",
        options: [
            "Increasing bias always decreases variance and vice versa",
            "As model complexity increases, bias decreases but variance increases, and the optimal model balances both",
            "Bias and variance are independent of model complexity",
            "Both bias and variance increase with model complexity"
        ],
        answer: 1,
        explanation: "The bias-variance trade-off describes the balance between a model's ability to fit training data (low bias, high variance for complex models) and its ability to generalize (high bias, low variance for simple models). The goal is to find the sweet spot that minimizes total error.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-97",
        question: "What effect does L1 regularization (LASSO) have on model weights?",
        options: [
            "It increases all weights equally",
            "It drives some weights to exactly zero, performing feature selection",
            "It only affects the bias term",
            "It doubles all weights"
        ],
        answer: 1,
        explanation: "L1 regularization adds the absolute value of weights as a penalty term, which creates a diamond-shaped constraint region. Due to the geometry, this tends to drive some weights to exactly zero, effectively performing automatic feature selection.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-98",
        question: "What effect does L2 regularization (Ridge) have on model weights?",
        options: [
            "It drives weights to exactly zero",
            "It shrinks weights toward zero but rarely to exactly zero",
            "It increases all weights proportionally",
            "It has no effect on weights"
        ],
        answer: 1,
        explanation: "L2 regularization adds the squared magnitude of weights as a penalty, creating a circular constraint region. This shrinks all weights toward zero but typically does not drive any weight to exactly zero, distributing the penalty across all features.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-99",
        question: "What is hyperparameter tuning?",
        options: [
            "Adjusting model weights during training",
            "Selecting the optimal configuration settings for a learning algorithm before training",
            "Tuning the input data distribution",
            "Adjusting the output labels"
        ],
        answer: 1,
        explanation: "Hyperparameter tuning is the process of finding the optimal settings (hyperparameters) for a learning algorithm — such as learning rate, number of trees, or regularization strength — that are set before training and control the learning process.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-100",
        question: "What is the main disadvantage of grid search for hyperparameter tuning?",
        options: [
            "It cannot find the best parameters",
            "It suffers from the curse of dimensionality, becoming computationally expensive with many hyperparameters",
            "It only works for neural networks",
            "It requires labeled data"
        ],
        answer: 1,
        explanation: "Grid search exhaustively evaluates all combinations of hyperparameter values, which grows exponentially with the number of hyperparameters (curse of dimensionality), making it computationally infeasible for high-dimensional search spaces.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-101",
        question: "How does random search differ from grid search for hyperparameter tuning?",
        options: [
            "Random search always finds better parameters",
            "Random search samples hyperparameter combinations randomly, often finding good solutions more efficiently in high-dimensional spaces",
            "Random search only works with continuous hyperparameters",
            "Random search does not use cross-validation"
        ],
        answer: 1,
        explanation: "Random search randomly samples hyperparameter combinations from specified distributions. Research shows it can find good solutions more efficiently than grid search in high-dimensional spaces because it explores a wider range of values for each hyperparameter.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-102",
        question: "In a classification problem with 100 samples where 90 are positive and 10 are negative, what accuracy would a model that always predicts positive achieve?",
        options: [
            "10%",
            "50%",
            "90%",
            "100%"
        ],
        answer: 2,
        explanation: "A model that always predicts positive would correctly classify all 90 positive samples but miss all 10 negative samples, achieving 90/100 = 90% accuracy. This demonstrates why accuracy can be misleading with imbalanced datasets.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-103",
        question: "What does precision measure in a classification model?",
        options: [
            "The proportion of actual positives correctly identified",
            "The proportion of predicted positives that are actually positive",
            "The overall correctness of the model",
            "The proportion of actual negatives correctly identified"
        ],
        answer: 1,
        explanation: "Precision = TP / (TP + FP), measuring the proportion of positive predictions that are correct. High precision means few false positives, which is crucial when the cost of false alarms is high.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-104",
        question: "What does recall (sensitivity) measure in a classification model?",
        options: [
            "The proportion of predicted positives that are actually positive",
            "The proportion of actual positives that are correctly identified",
            "The overall accuracy of the model",
            "The proportion of actual negatives correctly identified"
        ],
        answer: 1,
        explanation: "Recall = TP / (TP + FN), measuring the proportion of actual positive cases that are correctly identified. High recall means few false negatives, which is critical when missing a positive case is costly (e.g., disease diagnosis).",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-105",
        question: "What is the F1 score?",
        options: [
            "The average of precision and recall",
            "The harmonic mean of precision and recall",
            "The product of precision and recall",
            "The maximum of precision and recall"
        ],
        answer: 1,
        explanation: "The F1 score is the harmonic mean of precision and recall: F1 = 2 × (Precision × Recall) / (Precision + Recall). It provides a single metric that balances both concerns, especially useful for imbalanced datasets.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-106",
        question: "What does the ROC curve plot?",
        options: [
            "Precision vs Recall",
            "True Positive Rate vs False Positive Rate at different classification thresholds",
            "Accuracy vs Training Size",
            "Loss vs Epoch"
        ],
        answer: 1,
        explanation: "The ROC (Receiver Operating Characteristic) curve plots the True Positive Rate (Recall) against the False Positive Rate at various classification thresholds, showing the trade-off between sensitivity and specificity.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-107",
        question: "What does an AUC of 0.5 indicate about a binary classifier?",
        options: [
            "Perfect classification",
            "Performance no better than random guessing",
            "Worst possible performance",
            "The model has not been trained"
        ],
        answer: 1,
        explanation: "An AUC (Area Under the ROC Curve) of 0.5 indicates that the classifier performs no better than random guessing. A perfect classifier has AUC = 1.0, while AUC < 0.5 suggests performance worse than random.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-108",
        question: "In a confusion matrix for binary classification, what does the True Negative (TN) cell represent?",
        options: [
            "Positive cases correctly classified as positive",
            "Negative cases correctly classified as negative",
            "Positive cases incorrectly classified as negative",
            "Negative cases incorrectly classified as positive"
        ],
        answer: 1,
        explanation: "True Negatives (TN) are cases where the actual class is negative and the model correctly predicted them as negative. The confusion matrix has four cells: TP, TN, FP, and FN.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-109",
        question: "What does Mean Absolute Error (MAE) measure?",
        options: [
            "The square of the average error",
            "The average absolute difference between predicted and actual values",
            "The percentage of correct predictions",
            "The maximum error in predictions"
        ],
        answer: 1,
        explanation: "MAE = (1/n) × Σ|y_actual - y_predicted|, measuring the average absolute difference between predictions and actual values. It is robust to outliers as it treats all errors linearly.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-110",
        question: "What is the main characteristic of Mean Squared Error (MSE) compared to MAE?",
        options: [
            "MSE is less sensitive to outliers",
            "MSE penalizes larger errors more heavily due to squaring",
            "MSE always gives smaller values than MAE",
            "MSE can be negative"
        ],
        answer: 1,
        explanation: "MSE = (1/n) × Σ(y_actual - y_predicted)² squares the errors before averaging, which means larger errors are disproportionately penalized. This makes MSE more sensitive to outliers than MAE.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-111",
        question: "What is the relationship between RMSE and MSE?",
        options: [
            "RMSE = MSE × 2",
            "RMSE = √MSE",
            "RMSE = MSE²",
            "RMSE = MSE / n"
        ],
        answer: 1,
        explanation: "RMSE (Root Mean Squared Error) is the square root of MSE: RMSE = √MSE. Taking the square root brings RMSE back to the same units as the target variable, making it more interpretable than MSE.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-112",
        question: "What does an R² score of 1.0 indicate in regression?",
        options: [
            "The model predicts the mean of the target for all inputs",
            "The model perfectly explains all variance in the target variable",
            "The model performs worse than simply predicting the mean",
            "The model has zero error on training data only"
        ],
        answer: 1,
        explanation: "R² = 1 means the model explains 100% of the variance in the target variable — predictions perfectly match the actual values. R² = 0 means the model is no better than predicting the mean, and negative R² indicates worse performance.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-113",
        question: "In linear regression, what does the coefficient represent?",
        options: [
            "The intercept of the model",
            "The change in the target variable for a one-unit change in the corresponding feature",
            "The importance of the feature relative to others",
            "The p-value of the feature"
        ],
        answer: 1,
        explanation: "In linear regression, each coefficient represents the change in the target variable y for a one-unit increase in the corresponding feature x, holding all other features constant (ceteris paribus interpretation).",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-114",
        question: "What activation function does logistic regression use?",
        options: [
            "ReLU",
            "Sigmoid function",
            "Tanh",
            "Softmax"
        ],
        answer: 1,
        explanation: "Logistic regression uses the sigmoid (logistic) function σ(z) = 1/(1+e^(-z)) to map the linear combination of features to a probability between 0 and 1, which is then thresholded for binary classification.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-115",
        question: "In K-Nearest Neighbors (KNN), what happens when k is set to 1?",
        options: [
            "The model always predicts the majority class",
            "The model assigns the label of the single nearest training example",
            "The model fails to make any prediction",
            "The model averages all training labels"
        ],
        answer: 1,
        explanation: "When k=1 in KNN, the algorithm assigns the label of the single closest training example to the query point. This makes the model highly sensitive to noise and local variations in the training data.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-116",
        question: "What is the fundamental assumption of Naive Bayes classifiers?",
        options: [
            "All features are continuous",
            "All features are conditionally independent given the class label",
            "All classes are equally likely",
            "The data is normally distributed"
        ],
        answer: 1,
        explanation: "Naive Bayes assumes that all features are conditionally independent given the class label. Despite this 'naive' assumption rarely holding in practice, Naive Bayes often performs surprisingly well in many applications.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-117",
        question: "What does a decision tree use to split nodes?",
        options: [
            "Random splitting only",
            "Criteria like Information Gain, Gini Impurity, or Chi-Square to select the best feature and threshold",
            "Only numerical features for splitting",
            "The feature with the highest variance"
        ],
        answer: 1,
        explanation: "Decision trees evaluate potential splits using criteria like Information Gain (based on entropy reduction), Gini Impurity (measure of class impurity), or Chi-Square, selecting the split that best separates the classes.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-118",
        question: "How does Random Forest improve upon a single decision tree?",
        options: [
            "By using a deeper single tree",
            "By creating an ensemble of trees on bootstrapped samples with random feature subsets, reducing overfitting",
            "By using only the most important feature",
            "By pruning the tree more aggressively"
        ],
        answer: 1,
        explanation: "Random Forest creates multiple decision trees on bootstrapped data samples, each using a random subset of features for splitting. The final prediction is obtained by majority voting (classification) or averaging (regression), reducing variance and overfitting.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-119",
        question: "How does Extremely Randomized Trees (Extra Trees) differ from Random Forest?",
        options: [
            "Extra Trees uses deeper trees",
            "Extra Trees uses random splits instead of finding the best split at each node",
            "Extra Trees does not use bootstrapping",
            "Both B and C"
        ],
        answer: 3,
        explanation: "Extra Trees differs from Random Forest in two ways: (1) it does not use bootstrapping (uses the entire dataset), and (2) it picks split thresholds randomly rather than finding the optimal one, adding more randomness and reducing variance further.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-120",
        question: "What is the kernel trick in Support Vector Machines?",
        options: [
            "A method to speed up SVM training",
            "A technique to implicitly map data into a higher-dimensional space without computing the transformation explicitly",
            "A way to reduce the dimensionality of data",
            "A preprocessing step for SVM inputs"
        ],
        answer: 1,
        explanation: "The kernel trick allows SVMs to compute dot products in a high-dimensional feature space without explicitly transforming the data, by using kernel functions that compute these dot products directly from the original features.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-121",
        question: "In K-Means clustering, what does the algorithm minimize?",
        options: [
            "The distance between clusters",
            "The within-cluster sum of squared distances from each point to its cluster centroid",
            "The number of clusters",
            "The maximum distance between any two points"
        ],
        answer: 1,
        explanation: "K-Means minimizes the within-cluster sum of squares (WCSS), also called inertia, which is the sum of squared Euclidean distances between each data point and the centroid of its assigned cluster.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-122",
        question: "What is a key advantage of DBSCAN over K-Means?",
        options: [
            "DBSCAN is always faster",
            "DBSCAN can find clusters of arbitrary shape and does not require specifying the number of clusters in advance",
            "DBSCAN works only with 2D data",
            "DBSCAN does not have any hyperparameters"
        ],
        answer: 1,
        explanation: "DBSCAN can discover clusters of arbitrary shape (not just spherical like K-Means), automatically determines the number of clusters, and can identify noise points. It requires eps and min_samples parameters instead of k.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-123",
        question: "In hierarchical clustering, what does a dendrogram represent?",
        options: [
            "The final cluster assignments",
            "A tree-like diagram showing the merging (agglomerative) or splitting (divisive) history of clusters",
            "The feature importance scores",
            "The distance between all pairs of points"
        ],
        answer: 1,
        explanation: "A dendrogram is a tree-like diagram that visualizes the sequence of merges (agglomerative) or splits (divisive) in hierarchical clustering, with the height of each merge indicating the distance at which clusters were combined.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-124",
        question: "How does gradient boosting build an ensemble?",
        options: [
            "By training all models independently in parallel",
            "By sequentially adding models that correct the errors (residuals) of the previous models",
            "By randomly selecting models from a pool",
            "By averaging predictions of identical models"
        ],
        answer: 1,
        explanation: "Gradient boosting builds models sequentially, where each new model is trained to correct the residual errors (gradient of the loss) made by the ensemble so far. This sequential error correction leads to strong predictive performance.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-125",
        question: "How does AdaBoost adjust sample weights during training?",
        options: [
            "All samples keep equal weights throughout",
            "It increases weights of misclassified samples and decreases weights of correctly classified samples",
            "It randomly reassigns weights at each iteration",
            "It uses the same weights as the previous model"
        ],
        answer: 1,
        explanation: "AdaBoost iteratively increases the weights of misclassified training samples and decreases the weights of correctly classified ones, forcing subsequent weak learners to focus more on the difficult cases.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-126",
        question: "What is a key innovation of XGBoost over traditional gradient boosting?",
        options: [
            "XGBoost uses deeper trees only",
            "XGBoost includes regularization, parallel processing, and handling of missing values for better performance and speed",
            "XGBoost does not use gradient descent",
            "XGBoost only works for classification"
        ],
        answer: 1,
        explanation: "XGBoost improves on traditional gradient boosting with L1/L2 regularization, tree pruning, parallel processing of tree construction, built-in handling of missing values, and cache-aware optimization, leading to better performance and speed.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-127",
        question: "What is the main advantage of LightGBM over XGBoost?",
        options: [
            "Higher accuracy on all datasets",
            "Faster training speed using a histogram-based algorithm and leaf-wise tree growth",
            "No hyperparameter tuning needed",
            "It uses neural networks internally"
        ],
        answer: 1,
        explanation: "LightGBM uses a histogram-based decision tree learning algorithm that bins continuous features into discrete bins, and grows trees leaf-wise (best-first) rather than level-wise, resulting in significantly faster training, especially on large datasets.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-128",
        question: "What special feature does CatBoost have for handling categorical variables?",
        options: [
            "It requires one-hot encoding of all categorical features",
            "It uses ordered target statistics to process categorical features directly without manual encoding",
            "It cannot handle categorical variables",
            "It converts categories to numerical values using simple label encoding"
        ],
        answer: 1,
        explanation: "CatBoost has built-in handling of categorical features using ordered target statistics, which computes category statistics in an ordered fashion to prevent target leakage, eliminating the need for manual categorical encoding.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-129",
        question: "What does Principal Component Analysis (PCA) find?",
        options: [
            "The most important features in the original space",
            "Orthogonal directions (principal components) of maximum variance in the data",
            "Non-linear transformations of the data",
            "The optimal number of clusters"
        ],
        answer: 1,
        explanation: "PCA finds orthogonal principal components — directions in the feature space along which the data has maximum variance. The first principal component captures the most variance, the second captures the most remaining variance, and so on.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-130",
        question: "What is a common use case for dimensionality reduction before applying another ML algorithm?",
        options: [
            "Increasing the number of features",
            "Reducing computational cost and mitigating the curse of dimensionality",
            "Always improving model accuracy",
            "Converting categorical features to numerical"
        ],
        answer: 1,
        explanation: "Dimensionality reduction is commonly used to reduce computational cost, mitigate the curse of dimensionality (where distances become less meaningful in high dimensions), reduce overfitting, and enable visualization of high-dimensional data.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-131",
        question: "What is the SMOTE technique used for?",
        options: [
            "Feature selection",
            "Oversampling the minority class in imbalanced datasets by generating synthetic samples",
            "Data normalization",
            "Outlier detection"
        ],
        answer: 1,
        explanation: "SMOTE (Synthetic Minority Over-sampling Technique) generates synthetic minority class samples by interpolating between a minority sample and its k nearest minority neighbors, helping to balance imbalanced datasets without simply duplicating existing samples.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-132",
        question: "What is the difference between bagging and boosting?",
        options: [
            "They are the same technique",
            "Bagging trains models independently in parallel to reduce variance; boosting trains models sequentially to reduce bias",
            "Bagging reduces bias; boosting reduces variance",
            "Bagging only works with decision trees; boosting works with any model"
        ],
        answer: 1,
        explanation: "Bagging (Bootstrap Aggregating) trains independent models in parallel on bootstrapped samples to reduce variance. Boosting trains models sequentially, with each focusing on the errors of previous ones, primarily reducing bias.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-133",
        question: "What is stacking in ensemble learning?",
        options: [
            "Training multiple models on the same data",
            "Using a meta-learner that takes predictions from multiple base models as input features to make the final prediction",
            "Stacking layers in a neural network",
            "Combining predictions by simple averaging"
        ],
        answer: 1,
        explanation: "Stacking (Stacked Generalization) trains multiple diverse base models, then uses a meta-learner (level-1 model) that takes the base models' predictions as features to learn the optimal way to combine them for the final prediction.",
        difficulty: "Hard",
        topic: "Machine Learning"
    },
    {
        id: "aiml-134",
        question: "What assumption of linear regression is violated by heteroscedasticity?",
        options: [
            "Linearity of the relationship",
            "Homoscedasticity — constant variance of residuals across all levels of the independent variables",
            "Independence of residuals",
            "Normality of residuals"
        ],
        answer: 1,
        explanation: "Heteroscedasticity violates the assumption of homoscedasticity, which requires that the variance of residuals is constant across all levels of independent variables. When present, it can lead to unreliable standard errors and confidence intervals.",
        difficulty: "Hard",
        topic: "Machine Learning"
    },
    {
        id: "aiml-135",
        question: "What is multicollinearity in the context of linear regression?",
        options: [
            "When the target variable is categorical",
            "When two or more predictor variables are highly correlated with each other",
            "When the residuals are not normally distributed",
            "When there are too many data points"
        ],
        answer: 1,
        explanation: "Multicollinearity occurs when predictor variables are highly correlated with each other, making it difficult to determine the individual effect of each predictor. It inflates the variance of coefficient estimates and makes them unstable.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-136",
        question: "What is the difference between a hard margin and a soft margin SVM?",
        options: [
            "Hard margin uses more computation",
            "Hard margin allows no misclassification; soft margin allows some misclassification with a penalty parameter C",
            "Soft margin only works with linear kernels",
            "Hard margin is always better"
        ],
        answer: 1,
        explanation: "A hard margin SVM strictly prohibits any misclassification (only works with linearly separable data), while a soft margin SVM allows some misclassification controlled by parameter C, making it applicable to non-separable data.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-137",
        question: "In KNN, which distance metric is most appropriate for categorical data?",
        options: [
            "Euclidean distance",
            "Hamming distance",
            "Manhattan distance",
            "Minkowski distance with p=3"
        ],
        answer: 1,
        explanation: "Hamming distance measures the number of positions at which corresponding symbols are different, making it suitable for categorical data. Euclidean and Manhattan distances are more appropriate for continuous numerical data.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-138",
        question: "What is the effect of choosing a very large k in KNN?",
        options: [
            "The model becomes more complex",
            "The model tends to underfit as it approaches predicting the majority class",
            "The model always achieves 100% accuracy",
            "The model becomes equivalent to a decision tree"
        ],
        answer: 1,
        explanation: "As k increases toward the total number of training samples, KNN's prediction approaches the overall majority class (for classification) or the global mean (for regression), leading to underfitting and loss of local pattern capture.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-139",
        question: "What is Information Gain in the context of decision trees?",
        options: [
            "The total entropy of the dataset",
            "The reduction in entropy achieved by splitting the dataset on a particular feature",
            "The accuracy improvement from adding a node",
            "The number of nodes saved by pruning"
        ],
        answer: 1,
        explanation: "Information Gain = Entropy(before split) - Weighted Average Entropy(after split). It measures how much the entropy (uncertainty) decreases after splitting the data on a feature. Decision trees select the feature with the highest information gain.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-140",
        question: "What is the Gini Impurity of a perfectly pure node (all samples belong to one class)?",
        options: [
            "1",
            "0.5",
            "0",
            "It depends on the number of classes"
        ],
        answer: 2,
        explanation: "Gini Impurity = 1 - Σ(p_i²), where p_i is the proportion of class i. For a perfectly pure node where all samples belong to one class (p=1 for one class, p=0 for others), Gini = 1 - 1² = 0.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-141",
        question: "What is the elbow method used for in K-Means clustering?",
        options: [
            "Determining the optimal number of clusters by finding the point where the rate of WCSS decrease sharply changes",
            "Removing outliers from the dataset",
            "Initializing cluster centroids",
            "Choosing the distance metric"
        ],
        answer: 0,
        explanation: "The elbow method plots WCSS (within-cluster sum of squares) against the number of clusters k. The 'elbow point' where the rate of decrease sharply changes suggests the optimal number of clusters, as adding more clusters provides diminishing returns.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-142",
        question: "What is Elastic Net regularization?",
        options: [
            "A combination of L1 and L2 regularization with a mixing parameter",
            "A weaker form of L2 regularization",
            "Regularization applied only to neural networks",
            "A type of data augmentation"
        ],
        answer: 0,
        explanation: "Elastic Net combines L1 (LASSO) and L2 (Ridge) regularization: Loss + λ₁ × |w| + λ₂ × w². It has a mixing parameter α that controls the balance between L1 and L2 penalties, benefiting from both feature selection (L1) and weight shrinkage (L2).",
        difficulty: "Hard",
        topic: "Machine Learning"
    },
    {
        id: "aiml-143",
        question: "What is the purpose of stratified sampling in a train/test split?",
        options: [
            "To reduce the training time",
            "To ensure that the class distribution is preserved in both train and test sets",
            "To increase the dataset size",
            "To remove outliers"
        ],
        answer: 1,
        explanation: "Stratified sampling ensures that each split maintains the same proportion of classes as the original dataset, which is especially important for imbalanced datasets to ensure representative evaluation.",
        difficulty: "Easy",
        topic: "Machine Learning"
    },
    {
        id: "aiml-144",
        question: "In a scikit-learn Pipeline, what is the primary benefit?",
        options: [
            "Faster model training",
            "Chaining preprocessing and modeling steps to prevent data leakage and ensure reproducibility",
            "Reducing memory usage",
            "Automatic hyperparameter tuning"
        ],
        answer: 1,
        explanation: "A Pipeline chains multiple processing steps (e.g., imputation, scaling, classification) into a single estimator. This prevents data leakage by ensuring that preprocessing is fitted only on training data during cross-validation, and ensures reproducibility.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-145",
        question: "What does the learning curve plot in machine learning?",
        options: [
            "Loss vs number of features",
            "Training and validation scores vs training set size",
            "Accuracy vs number of classes",
            "Error vs learning rate"
        ],
        answer: 1,
        explanation: "A learning curve plots training and validation performance (e.g., accuracy or error) as a function of training set size. It helps diagnose whether a model would benefit from more data (high gap between curves) or is already data-saturated.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-146",
        question: "What is the no-free-lunch theorem in machine learning?",
        options: [
            "Training is always free on cloud platforms",
            "No single learning algorithm works best for every problem; performance depends on the data distribution",
            "All algorithms have the same computational complexity",
            "Unsupervised learning is always easier than supervised learning"
        ],
        answer: 1,
        explanation: "The no-free-lunch theorem states that no single machine learning algorithm outperforms all others across all possible datasets. An algorithm's superiority is always relative to the specific problem and data distribution.",
        difficulty: "Hard",
        topic: "Machine Learning"
    },
    {
        id: "aiml-147",
        question: "What is the curse of dimensionality?",
        options: [
            "Training becomes slower as dimensions increase",
            "As the number of features increases, data becomes sparse and distances become less meaningful, requiring exponentially more data",
            "High-dimensional data cannot be visualized",
            "Features become correlated as dimensions increase"
        ],
        answer: 1,
        explanation: "The curse of dimensionality refers to various phenomena that arise when analyzing data in high-dimensional spaces: data becomes sparse, distances between points become similar, and the amount of data needed grows exponentially with dimensions.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-148",
        question: "What is polynomial regression essentially doing?",
        options: [
            "Fitting a non-linear model directly to the data",
            "Creating polynomial features from the input and then applying linear regression",
            "Using a polynomial kernel in SVM",
            "Fitting multiple linear regression lines"
        ],
        answer: 1,
        explanation: "Polynomial regression is still linear regression at its core — it creates polynomial features (e.g., x, x², x³) from the original input features and then fits a linear model to these transformed features, enabling it to capture non-linear relationships.",
        difficulty: "Medium",
        topic: "Machine Learning"
    },
    {
        id: "aiml-149",
        question: "What is the difference between micro-average and macro-average in multi-class evaluation?",
        options: [
            "They always give the same result",
            "Micro-average aggregates contributions from all classes; macro-average computes the metric for each class independently then averages",
            "Micro-average is only for binary classification",
            "Macro-average gives more weight to majority classes"
        ],
        answer: 1,
        explanation: "Micro-average pools all predictions across classes (gives more weight to larger classes), while macro-average computes the metric per class and averages them equally (gives equal weight to all classes regardless of size).",
        difficulty: "Hard",
        topic: "Machine Learning"
    },
    {
        id: "aiml-150",
        question: "In a scenario where a medical diagnosis model has high precision but low recall, what does this imply?",
        options: [
            "The model misses many positive cases but when it predicts positive, it is usually correct",
            "The model catches most positive cases but has many false positives",
            "The model is perfectly balanced",
            "The model always predicts negative"
        ],
        answer: 0,
        explanation: "High precision with low recall means the model is conservative in predicting positive — when it does predict positive, it's usually right (few false positives), but it misses many actual positive cases (many false negatives).",
        difficulty: "Hard",
        topic: "Machine Learning"
    },
    {
        id: "aiml-151",
        question: "What is a perceptron in neural networks?",
        options: [
            "A multi-layer neural network",
            "The simplest form of a neural network with a single neuron that performs binary classification",
            "A type of activation function",
            "A method for regularizing neural networks"
        ],
        answer: 1,
        explanation: "A perceptron is the simplest neural network unit — a single neuron that takes inputs, applies weights, sums them, adds a bias, and applies a step function to produce a binary output. It can only learn linearly separable patterns.",
        difficulty: "Easy",
        topic: "Deep Learning"
    },
    {
        id: "aiml-152",
        question: "What is the primary limitation of a single perceptron?",
        options: [
            "It is too slow to train",
            "It cannot learn non-linearly separable functions like XOR",
            "It requires too much memory",
            "It can only work with images"
        ],
        answer: 1,
        explanation: "A single perceptron can only learn linearly separable functions. The XOR problem, which is not linearly separable, cannot be solved by a single perceptron, as famously proven by Minsky and Papert in 1969.",
        difficulty: "Easy",
        topic: "Deep Learning"
    },
    {
        id: "aiml-153",
        question: "Why is the ReLU activation function commonly used in hidden layers?",
        options: [
            "It is differentiable everywhere",
            "It is computationally efficient and helps mitigate the vanishing gradient problem",
            "It always produces positive outputs",
            "It bounds the output between 0 and 1"
        ],
        answer: 1,
        explanation: "ReLU (f(x) = max(0, x)) is popular because it is computationally simple (just a threshold), and its constant gradient of 1 for positive inputs helps mitigate the vanishing gradient problem, allowing deeper networks to train effectively.",
        difficulty: "Easy",
        topic: "Deep Learning"
    },
    {
        id: "aiml-154",
        question: "What problem does the sigmoid activation function cause in deep networks?",
        options: [
            "Exploding gradients",
            "Vanishing gradients due to saturating regions where the gradient approaches zero",
            "Slow forward propagation",
            "Memory overflow"
        ],
        answer: 1,
        explanation: "The sigmoid function saturates at both ends (gradient approaches 0 for large positive or negative inputs), causing vanishing gradients in deep networks. This makes early layers receive extremely small gradient updates, hindering learning.",
        difficulty: "Easy",
        topic: "Deep Learning"
    },
    {
        id: "aiml-155",
        question: "What is the output range of the tanh activation function?",
        options: [
            "[0, 1]",
            "[-1, 1]",
            "[0, ∞)",
            "(-∞, ∞)"
        ],
        answer: 1,
        explanation: "The tanh (hyperbolic tangent) function maps inputs to the range [-1, 1]. Unlike sigmoid which is [0, 1], tanh is zero-centered, which often leads to faster convergence during training.",
        difficulty: "Easy",
        topic: "Deep Learning"
    },
    {
        id: "aiml-156",
        question: "When should the Softmax activation function be used?",
        options: [
            "In hidden layers of a CNN",
            "In the output layer for multi-class classification to produce a probability distribution",
            "For binary classification output",
            "In regression output layers"
        ],
        answer: 1,
        explanation: "Softmax is used in the output layer for multi-class classification problems. It converts raw logits into a probability distribution where all outputs sum to 1, allowing interpretation as class probabilities.",
        difficulty: "Easy",
        topic: "Deep Learning"
    },
    {
        id: "aiml-157",
        question: "What is cross-entropy loss primarily used for?",
        options: [
            "Regression problems",
            "Classification problems, measuring the difference between predicted probability distribution and true distribution",
            "Clustering evaluation",
            "Dimensionality reduction"
        ],
        answer: 1,
        explanation: "Cross-entropy loss measures the divergence between the predicted probability distribution and the true (one-hot) distribution. It is the standard loss function for classification tasks, penalizing confident wrong predictions heavily.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-158",
        question: "What is backpropagation?",
        options: [
            "A forward pass through the network",
            "An algorithm for computing gradients of the loss function with respect to each weight using the chain rule",
            "A method for initializing weights",
            "A regularization technique"
        ],
        answer: 1,
        explanation: "Backpropagation computes the gradient of the loss function with respect to each weight in the network by applying the chain rule of calculus backward from the output layer to the input layer, enabling gradient-based weight updates.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-159",
        question: "What is the basic idea of gradient descent?",
        options: [
            "Moving weights randomly until the loss is zero",
            "Iteratively adjusting weights in the direction that reduces the loss function most rapidly",
            "Setting all gradients to zero",
            "Increasing weights to maximize the loss"
        ],
        answer: 1,
        explanation: "Gradient descent iteratively moves the weights in the direction of the negative gradient of the loss function, which is the direction of steepest descent. The step size is controlled by the learning rate.",
        difficulty: "Easy",
        topic: "Deep Learning"
    },
    {
        id: "aiml-160",
        question: "What is the difference between batch gradient descent and stochastic gradient descent (SGD)?",
        options: [
            "Batch GD uses one sample; SGD uses all samples",
            "Batch GD computes gradients using the entire dataset; SGD uses a single sample per update",
            "SGD is always more accurate",
            "Batch GD is always faster"
        ],
        answer: 1,
        explanation: "Batch gradient descent computes the gradient using all training samples for each update (stable but slow), while SGD uses a single random sample per update (noisy but faster and can escape local minima). Mini-batch GD is a compromise between the two.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-161",
        question: "What does mini-batch gradient descent use for each weight update?",
        options: [
            "A single training sample",
            "The entire training dataset",
            "A small random subset (batch) of training samples",
            "The validation set"
        ],
        answer: 2,
        explanation: "Mini-batch gradient descent uses a small random subset (typically 32, 64, or 128 samples) called a mini-batch for each weight update. It balances the stability of batch GD with the speed and noise benefits of SGD, and enables GPU parallelization.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-162",
        question: "What does the Adam optimizer combine?",
        options: [
            "SGD and L2 regularization",
            "Momentum (first moment) and RMSProp (second moment) with bias correction",
            "Batch normalization and dropout",
            "Learning rate scheduling and early stopping"
        ],
        answer: 1,
        explanation: "Adam (Adaptive Moment Estimation) combines momentum (exponential moving average of gradients, first moment) with RMSProp (exponential moving average of squared gradients, second moment), and includes bias correction for the initial steps.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-163",
        question: "What is an epoch in neural network training?",
        options: [
            "A single weight update step",
            "One complete pass through the entire training dataset",
            "The time taken to train the model",
            "A single mini-batch forward and backward pass"
        ],
        answer: 1,
        explanation: "An epoch represents one complete forward and backward pass through the entire training dataset. Training typically involves many epochs, with the dataset being shuffled between epochs to improve generalization.",
        difficulty: "Easy",
        topic: "Deep Learning"
    },
    {
        id: "aiml-164",
        question: "What effect does increasing the batch size have on training?",
        options: [
            "It always improves model accuracy",
            "It provides more stable gradient estimates but requires more memory per step",
            "It reduces the total training time",
            "It eliminates the need for epochs"
        ],
        answer: 1,
        explanation: "Larger batch sizes provide more accurate gradient estimates (lower variance) but require more GPU memory and may lead to sharper minima with poorer generalization. Very small batches provide regularization through noise but are computationally less efficient.",
        difficulty: "Easy",
        topic: "Deep Learning"
    },
    {
        id: "aiml-165",
        question: "What is the vanishing gradient problem?",
        options: [
            "Gradients become too large during training",
            "Gradients become exponentially smaller in earlier layers of deep networks, preventing effective learning",
            "The loss function disappears",
            "The learning rate becomes zero"
        ],
        answer: 1,
        explanation: "In deep networks, gradients are computed through repeated multiplication of derivatives (chain rule). If these derivatives are consistently less than 1, the gradient shrinks exponentially as it propagates backward, making early layers learn extremely slowly.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-166",
        question: "What causes the exploding gradient problem?",
        options: [
            "Using too small a learning rate",
            "Repeated multiplication of gradients greater than 1 during backpropagation, causing exponentially growing gradients",
            "Too many output classes",
            "Using ReLU activation"
        ],
        answer: 1,
        explanation: "Exploding gradients occur when derivatives in the chain rule are consistently greater than 1, causing gradients to grow exponentially during backpropagation. This leads to unstable training, NaN losses, and completely erratic weight updates.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-167",
        question: "Why is Xavier/Glorot initialization important?",
        options: [
            "It sets all weights to zero for faster convergence",
            "It initializes weights to maintain variance of activations and gradients across layers, preventing vanishing/exploding gradients",
            "It uses random weights from a uniform distribution only",
            "It is only needed for CNNs"
        ],
        answer: 1,
        explanation: "Xavier/Glorot initialization sets weights from a distribution with variance proportional to 2/(fan_in + fan_out), maintaining approximately the same variance of activations and gradients across layers, which helps prevent vanishing and exploding gradients at the start of training.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-168",
        question: "What does batch normalization do during training?",
        options: [
            "Normalizes the entire dataset before training",
            "Normalizes the activations of each layer for each mini-batch to have zero mean and unit variance",
            "Normalizes the weights of the network",
            "Normalizes the loss function"
        ],
        answer: 1,
        explanation: "Batch normalization normalizes layer inputs for each mini-batch to have zero mean and unit variance, then applies learnable scale and shift parameters. This reduces internal covariate shift, allows higher learning rates, and acts as a regularizer.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-169",
        question: "What is the purpose of dropout in neural networks?",
        options: [
            "To speed up training by skipping layers",
            "To randomly deactivate neurons during training to prevent co-adaptation and reduce overfitting",
            "To remove unnecessary output classes",
            "To reduce the model size after training"
        ],
        answer: 1,
        explanation: "Dropout randomly sets a fraction of neurons to zero during each training step (with probability p), preventing neurons from co-adapting and forcing the network to learn more robust features. At inference, all neurons are active but outputs are scaled by (1-p).",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-170",
        question: "What is a convolution operation in a CNN?",
        options: [
            "Multiplying the entire image by a filter",
            "Sliding a small filter (kernel) across the input and computing element-wise products followed by summation",
            "Applying a non-linear transformation to the image",
            "Resizing the image to a fixed dimension"
        ],
        answer: 1,
        explanation: "Convolution slides a small kernel (e.g., 3×3) across the input, computing the dot product between the kernel and the local input region at each position. This produces a feature map that detects specific local patterns like edges, textures, or shapes.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-171",
        question: "What is the purpose of pooling layers in CNNs?",
        options: [
            "To increase the spatial dimensions of feature maps",
            "To reduce spatial dimensions, providing translation invariance and reducing computation",
            "To add non-linearity to the network",
            "To increase the number of channels"
        ],
        answer: 1,
        explanation: "Pooling reduces the spatial dimensions of feature maps (e.g., 2×2 max pooling halves width and height), providing translation invariance, reducing computational cost, and controlling overfitting by decreasing the number of parameters in subsequent layers.",
        difficulty: "Easy",
        topic: "Deep Learning"
    },
    {
        id: "aiml-172",
        question: "What is the difference between 'valid' and 'same' padding in CNNs?",
        options: [
            "Valid padding adds more padding than same padding",
            "Valid padding applies no padding and reduces output size; same padding adds padding to keep output size equal to input size",
            "Same padding is only used in RNNs",
            "Valid padding increases the output size"
        ],
        answer: 1,
        explanation: "'Valid' padding means no padding is applied, so the output spatial size decreases based on the kernel size. 'Same' padding adds enough zeros around the input so that the output spatial dimensions equal the input dimensions (for stride=1).",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-173",
        question: "What problem does ResNet solve with skip connections?",
        options: [
            "Overfitting in CNNs",
            "Degradation problem where very deep networks perform worse than shallower ones, by enabling gradient flow through shortcut connections",
            "Slow inference time",
            "High memory usage"
        ],
        answer: 1,
        explanation: "ResNet's skip (residual) connections allow gradients to flow directly through shortcut paths, solving the degradation problem where adding more layers paradoxically increases training error. The network learns residual functions F(x) = H(x) - x instead of direct mappings H(x).",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-174",
        question: "What is the fundamental limitation of standard RNNs?",
        options: [
            "They cannot process sequential data",
            "They struggle with long-term dependencies due to vanishing gradients",
            "They are too slow to train",
            "They can only handle binary sequences"
        ],
        answer: 1,
        explanation: "Standard RNNs process sequences step by step, and gradients must be propagated through many time steps. This leads to vanishing gradients for long sequences, making it difficult for the network to learn and remember long-range dependencies.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-175",
        question: "What mechanism does LSTM use to control information flow?",
        options: [
            "Attention mechanisms",
            "Gates (forget, input, output) that regulate the cell state",
            "Dropout at each time step",
            "Batch normalization"
        ],
        answer: 1,
        explanation: "LSTM uses three gates — forget gate (what to discard from cell state), input gate (what new information to store), and output gate (what part of cell state to output) — to selectively add, remove, and expose information in the cell state.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-176",
        question: "How does GRU differ from LSTM?",
        options: [
            "GRU has more gates than LSTM",
            "GRU combines the forget and input gates into a single update gate, having fewer parameters",
            "GRU does not have a hidden state",
            "GRU cannot handle long sequences"
        ],
        answer: 1,
        explanation: "GRU simplifies LSTM by combining the forget and input gates into a single update gate and merging the cell state and hidden state. This results in fewer parameters and faster training while maintaining comparable performance on many tasks.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-177",
        question: "What is the key innovation of the Transformer architecture?",
        options: [
            "Using RNNs for faster processing",
            "Self-attention mechanism that processes all positions simultaneously, eliminating recurrence",
            "Using deeper CNN layers",
            "Reducing the number of parameters"
        ],
        answer: 1,
        explanation: "The Transformer's key innovation is the self-attention mechanism, which computes relationships between all positions in a sequence simultaneously, enabling parallel processing and eliminating the sequential bottleneck of RNNs.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-178",
        question: "What does the self-attention mechanism compute?",
        options: [
            "The similarity between two different sequences",
            "For each position, a weighted sum of all positions' values where weights are determined by query-key compatibility",
            "The gradient of the loss with respect to attention",
            "The entropy of the attention distribution"
        ],
        answer: 1,
        explanation: "Self-attention computes for each position a query, key, and value vector. The attention weights are computed as softmax(QK^T/√d_k), and the output is the weighted sum of values. This allows each position to attend to all other positions in the sequence.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-179",
        question: "Why is the attention score divided by √d_k (square root of key dimension)?",
        options: [
            "To speed up computation",
            "To prevent the dot products from growing too large, which would push softmax into regions with extremely small gradients",
            "To normalize the output to [0, 1]",
            "To reduce memory usage"
        ],
        answer: 1,
        explanation: "As the dimension d_k increases, the dot product QK^T grows in magnitude, pushing the softmax into regions with very small gradients. Dividing by √d_k stabilizes the gradients by keeping the variance of dot products approximately constant.",
        difficulty: "Hard",
        topic: "Deep Learning"
    },
    {
        id: "aiml-180",
        question: "What is multi-head attention?",
        options: [
            "Attention applied to multiple sequences simultaneously",
            "Running multiple attention operations in parallel with different learned projections, then concatenating the results",
            "Attention with multiple query vectors per position",
            "Using multiple layers of attention sequentially"
        ],
        answer: 1,
        explanation: "Multi-head attention runs h parallel attention operations, each with different learned linear projections of Q, K, and V. The outputs are concatenated and linearly transformed, allowing the model to jointly attend to information from different representation subspaces.",
        difficulty: "Hard",
        topic: "Deep Learning"
    },
    {
        id: "aiml-181",
        question: "Why are positional encodings needed in Transformers?",
        options: [
            "To encode the class labels",
            "Because self-attention is permutation-invariant and has no inherent sense of sequence order",
            "To reduce the model size",
            "To normalize the input"
        ],
        answer: 1,
        explanation: "Self-attention processes all positions in parallel and is inherently permutation-invariant — it would produce the same output for any reordering of the input. Positional encodings inject positional information so the model knows the order of tokens.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-182",
        question: "What is transfer learning in deep learning?",
        options: [
            "Transferring data between different organizations",
            "Using knowledge learned from one task/domain as a starting point for a different but related task",
            "Moving a model from CPU to GPU",
            "Transferring weights between layers of the same network"
        ],
        answer: 1,
        explanation: "Transfer learning takes a model pre-trained on a large dataset (e.g., ImageNet) and adapts it to a new, typically smaller, dataset. The pre-trained features serve as a powerful starting point, reducing training time and data requirements.",
        difficulty: "Easy",
        topic: "Deep Learning"
    },
    {
        id: "aiml-183",
        question: "What is fine-tuning in the context of transfer learning?",
        options: [
            "Training a model from scratch",
            "Unfreezing some or all pre-trained layers and continuing training on the new dataset with a low learning rate",
            "Removing all pre-trained layers and adding new ones",
            "Freezing all layers and only training the output layer"
        ],
        answer: 1,
        explanation: "Fine-tuning unfreezes some or all of the pre-trained model's layers and continues training on the new dataset, typically with a lower learning rate than initial training. This allows the model to adapt its learned features to the specific target domain.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-184",
        question: "What is data augmentation in deep learning?",
        options: [
            "Adding more data from external sources",
            "Creating modified versions of training data through transformations like rotation, flipping, and cropping to increase diversity",
            "Increasing the resolution of images",
            "Adding noise to the model weights"
        ],
        answer: 1,
        explanation: "Data augmentation applies random transformations (rotation, flipping, cropping, color jittering, etc.) to training data to create variations, effectively increasing dataset diversity and size, which helps reduce overfitting and improve generalization.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-185",
        question: "What is early stopping during neural network training?",
        options: [
            "Stopping training when the loss reaches zero",
            "Stopping training when validation performance stops improving, preventing overfitting",
            "Stopping after a fixed number of epochs",
            "Stopping when the learning rate becomes too small"
        ],
        answer: 1,
        explanation: "Early stopping monitors validation performance during training and halts training when the validation metric stops improving for a specified number of epochs (patience). This prevents the model from overfitting to the training data.",
        difficulty: "Easy",
        topic: "Deep Learning"
    },
    {
        id: "aiml-186",
        question: "What is learning rate scheduling?",
        options: [
            "Setting the learning rate to zero after training",
            "Dynamically adjusting the learning rate during training (e.g., step decay, cosine annealing, warm-up)",
            "Using a different learning rate for each layer",
            "Scheduling when to start training"
        ],
        answer: 1,
        explanation: "Learning rate scheduling adjusts the learning rate during training — common strategies include step decay (reduce by factor every N epochs), cosine annealing (smooth decrease following cosine curve), and warm-up (gradually increase from small to target LR).",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-187",
        question: "What is weight decay in neural network training?",
        options: [
            "The gradual reduction of weights to zero naturally during training",
            "L2 regularization applied to neural network weights by adding a penalty proportional to the squared weights",
            "Removing old weights and adding new ones",
            "The tendency of weights to change less in later epochs"
        ],
        answer: 1,
        explanation: "Weight decay is L2 regularization in the context of neural networks. It adds λ||w||² to the loss function, which during gradient descent effectively subtracts λ*w from each weight at each step, causing weights to gradually decay toward zero.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-188",
        question: "What is gradient clipping used for?",
        options: [
            "Reducing the number of gradients computed",
            "Limiting the gradient norm or value to prevent exploding gradients",
            "Removing unnecessary gradient computations",
            "Improving gradient accuracy"
        ],
        answer: 1,
        explanation: "Gradient clipping limits the gradient's magnitude (by value or by norm) during backpropagation. If the gradient exceeds a threshold, it is scaled down. This prevents exploding gradients from causing unstable training, especially in RNNs.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-189",
        question: "What is a 1×1 convolution used for in CNNs?",
        options: [
            "Edge detection",
            "Dimensionality reduction across channels and increasing non-linearity without changing spatial dimensions",
            "Image blurring",
            "Noise removal"
        ],
        answer: 1,
        explanation: "A 1×1 convolution operates on each spatial position independently, performing a linear combination across channels. It can reduce channel dimensionality (like a bottleneck), increase it, or add non-linearity, all without changing spatial dimensions.",
        difficulty: "Hard",
        topic: "Deep Learning"
    },
    {
        id: "aiml-190",
        question: "What is the purpose of dilated (atrous) convolution?",
        options: [
            "To reduce the number of parameters",
            "To increase the effective receptive field without increasing the number of parameters by spacing out the kernel elements",
            "To speed up convolution",
            "To handle color images"
        ],
        answer: 1,
        explanation: "Dilated convolution spaces out kernel elements (inserts zeros between them), increasing the effective receptive field without adding parameters. For example, a 3×3 kernel with dilation rate 2 covers a 5×5 area but still has only 9 parameters.",
        difficulty: "Hard",
        topic: "Deep Learning"
    },
    {
        id: "aiml-191",
        question: "What is an autoencoder?",
        options: [
            "A type of CNN for image classification",
            "A neural network that learns to compress and reconstruct data through an encoder-decoder architecture",
            "A method for encoding text into numbers",
            "A data compression algorithm like ZIP"
        ],
        answer: 1,
        explanation: "An autoencoder consists of an encoder that compresses input into a lower-dimensional latent representation and a decoder that reconstructs the original input from this representation. It learns useful feature representations without labeled data.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-192",
        question: "What makes a Variational Autoencoder (VAE) different from a standard autoencoder?",
        options: [
            "VAE uses more layers",
            "VAE learns a probability distribution in the latent space, enabling generation of new samples",
            "VAE does not have a decoder",
            "VAE only works with images"
        ],
        answer: 1,
        explanation: "Unlike standard autoencoders that learn point estimates in latent space, VAEs learn a probability distribution (mean and variance) for each input. The latent space is regularized to follow a standard normal distribution, enabling smooth interpolation and generation of new samples.",
        difficulty: "Hard",
        topic: "Deep Learning"
    },
    {
        id: "aiml-193",
        question: "What is the basic training setup of a Generative Adversarial Network (GAN)?",
        options: [
            "A single network trained with reconstruction loss",
            "Two networks — a generator and discriminator — trained in an adversarial game where the generator tries to produce realistic data and the discriminator tries to distinguish real from fake",
            "Two networks that cooperate to classify data",
            "A network trained with reinforcement learning"
        ],
        answer: 1,
        explanation: "A GAN consists of a generator (creates fake data from noise) and a discriminator (classifies real vs fake). They are trained alternately: the discriminator learns to detect fakes, and the generator learns to fool the discriminator, driving both to improve.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-194",
        question: "What is mode collapse in GAN training?",
        options: [
            "The GAN model becomes too large",
            "The generator produces limited diversity of outputs, mapping different inputs to the same or similar outputs",
            "The discriminator always predicts real",
            "The training loss reaches zero"
        ],
        answer: 1,
        explanation: "Mode collapse occurs when the generator finds a few outputs that reliably fool the discriminator and gets stuck producing only those, ignoring the full diversity of the real data distribution. This results in generated samples lacking variety.",
        difficulty: "Hard",
        topic: "Deep Learning"
    },
    {
        id: "aiml-195",
        question: "What is depthwise separable convolution?",
        options: [
            "Standard convolution applied to deep networks",
            "A factorized convolution that splits into a depthwise convolution (per-channel spatial filtering) followed by a pointwise convolution (cross-channel mixing), reducing computation significantly",
            "Convolution that only works with depth maps",
            "A convolution that removes depth from feature maps"
        ],
        answer: 1,
        explanation: "Depthwise separable convolution factors a standard convolution into: (1) depthwise convolution — applying a separate filter per input channel, and (2) pointwise (1×1) convolution — combining channels. This reduces computation from O(K²·C_in·C_out) to O(K²·C_in + C_in·C_out).",
        difficulty: "Hard",
        topic: "Deep Learning"
    },
    {
        id: "aiml-196",
        question: "In a Transformer encoder, what is the purpose of layer normalization?",
        options: [
            "To normalize the input data before training",
            "To stabilize training by normalizing activations across features for each sample",
            "To normalize gradients during backpropagation",
            "To reduce the model to a single layer"
        ],
        answer: 1,
        explanation: "Layer normalization normalizes the activations across the feature dimension for each sample independently (unlike batch normalization which normalizes across the batch). In Transformers, it's applied after each sub-layer (attention and FFN) before the residual connection.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-197",
        question: "What is beam search in sequence generation?",
        options: [
            "Searching for the best hyperparameters",
            "A decoding strategy that maintains k most likely partial sequences at each step, improving over greedy decoding",
            "A search algorithm for finding the best model architecture",
            "A method for searching through training data"
        ],
        answer: 1,
        explanation: "Beam search maintains the top-k (beam width) most probable partial sequences at each decoding step, expanding each and keeping the top-k overall. This finds better sequences than greedy search (k=1) while being more efficient than exhaustive search.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-198",
        question: "What is teacher forcing in sequence-to-sequence models?",
        options: [
            "Using a teacher model to guide training",
            "Feeding the ground truth previous token as input during training instead of the model's own prediction",
            "Forcing the model to learn faster",
            "Using a pre-trained teacher for knowledge distillation"
        ],
        answer: 1,
        explanation: "Teacher forcing uses the actual ground truth token from the training data as the input to the decoder at each time step during training, rather than the model's own prediction. This accelerates learning but can cause exposure bias at inference time.",
        difficulty: "Hard",
        topic: "Deep Learning"
    },
    {
        id: "aiml-199",
        question: "What is the difference between Layer Normalization and Batch Normalization?",
        options: [
            "They are identical",
            "LayerNorm normalizes across features for each sample; BatchNorm normalizes across the batch for each feature",
            "BatchNorm works only for CNNs; LayerNorm works only for RNNs",
            "LayerNorm is always better than BatchNorm"
        ],
        answer: 1,
        explanation: "Batch Normalization computes mean and variance across the batch dimension for each feature, while Layer Normalization computes them across the feature dimension for each sample. LayerNorm is preferred in sequence models (Transformers, RNNs) where batch statistics are unreliable.",
        difficulty: "Hard",
        topic: "Deep Learning"
    },
    {
        id: "aiml-200",
        question: "In a scenario where your deep learning model achieves 99% training accuracy but 60% validation accuracy, what is the most likely problem and solution?",
        options: [
            "Underfitting; increase model complexity",
            "Overfitting; apply regularization (dropout, weight decay), data augmentation, or reduce model complexity",
            "The model needs more epochs",
            "The learning rate is too high"
        ],
        answer: 1,
        explanation: "The large gap between training (99%) and validation (60%) accuracy clearly indicates overfitting — the model has memorized the training data. Solutions include adding dropout, weight decay, data augmentation, reducing model size, or early stopping.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-201",
        question: "What is the Swish activation function?",
        options: [
            "f(x) = max(0, x)",
            "f(x) = x · sigmoid(x)",
            "f(x) = tanh(x) / x",
            "f(x) = sigmoid(x)²"
        ],
        answer: 1,
        explanation: "Swish is defined as f(x) = x · σ(x) where σ is the sigmoid function. It is a smooth, non-monotonic function that often outperforms ReLU in deep networks, as it allows small negative values to pass through while maintaining the benefits of ReLU for positive values.",
        difficulty: "Hard",
        topic: "Deep Learning"
    },
    {
        id: "aiml-202",
        question: "What is the GELU activation function commonly used in modern Transformers?",
        options: [
            "f(x) = max(0, x - 0.5)",
            "f(x) = x · Φ(x), where Φ is the standard normal cumulative distribution function",
            "f(x) = log(1 + exp(x))",
            "f(x) = x / (1 + |x|)"
        ],
        answer: 1,
        explanation: "GELU (Gaussian Error Linear Unit) is defined as f(x) = x · Φ(x), approximating the probabilistic gating where inputs are multiplied by a value sampled from a normal distribution. It is used in BERT, GPT, and other modern Transformer models.",
        difficulty: "Hard",
        topic: "Deep Learning"
    },
    {
        id: "aiml-203",
        question: "What is knowledge distillation?",
        options: [
            "Extracting rules from a neural network",
            "Training a smaller student model to mimic a larger teacher model's outputs (soft labels) to achieve comparable performance with less computation",
            "Distilling knowledge from text data",
            "Compressing a model by removing redundant neurons"
        ],
        answer: 1,
        explanation: "Knowledge distillation trains a compact student model to reproduce the soft probability outputs (logits divided by temperature) of a larger teacher model. The student learns from the teacher's 'dark knowledge' — the relative probabilities across all classes, not just the correct one.",
        difficulty: "Hard",
        topic: "Deep Learning"
    },
    {
        id: "aiml-204",
        question: "What is the dying ReLU problem?",
        options: [
            "ReLU causes the network to stop training entirely",
            "Neurons with ReLU activation can get stuck outputting zero for all inputs if their weights update such that the input is always negative, effectively 'dying'",
            "ReLU degrades model performance over time",
            "ReLU causes memory leaks"
        ],
        answer: 1,
        explanation: "When a ReLU neuron's weights update to a state where all inputs fall in the negative region, the gradient becomes zero and the neuron stops learning. Once 'dead,' it always outputs zero. Leaky ReLU and ELU address this by having non-zero gradients for negative inputs.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-205",
        question: "What is the Universal Approximation Theorem?",
        options: [
            "Any algorithm can approximate any function",
            "A feedforward neural network with a single hidden layer and enough neurons can approximate any continuous function to arbitrary precision",
            "Deep networks always approximate better than shallow ones",
            "Only Transformers can universally approximate functions"
        ],
        answer: 1,
        explanation: "The Universal Approximation Theorem states that a feedforward network with a single hidden layer containing a finite number of neurons can approximate any continuous function on compact subsets of R^n, given appropriate activation functions. However, it doesn't guarantee learnability or efficiency.",
        difficulty: "Hard",
        topic: "Deep Learning"
    },
    {
        id: "aiml-206",
        question: "What is the significance of the number of parameters in a neural network?",
        options: [
            "More parameters always mean better accuracy",
            "It indicates the model's capacity and complexity; more parameters increase capacity but also risk of overfitting and computational cost",
            "It determines the training speed only",
            "It has no practical significance"
        ],
        answer: 1,
        explanation: "The number of parameters determines a model's capacity — its ability to learn complex patterns. More parameters increase expressiveness but also computational cost, memory requirements, and overfitting risk. The goal is to find the right capacity for the task and data.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-207",
        question: "What is the Leaky ReLU activation function?",
        options: [
            "f(x) = max(0.01, x)",
            "f(x) = max(αx, x) where α is a small constant (typically 0.01), allowing small negative gradients",
            "f(x) = x for x > 0, undefined otherwise",
            "f(x) = 0.01 * max(0, x)"
        ],
        answer: 1,
        explanation: "Leaky ReLU allows a small, non-zero gradient when the unit is not active (f(x) = αx for x < 0, where α ≈ 0.01). This prevents the dying ReLU problem by ensuring neurons can always receive gradient updates and recover from negative saturation.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-208",
        question: "In a CNN, what does the stride parameter control?",
        options: [
            "The size of the convolution kernel",
            "The number of pixels the kernel moves at each step",
            "The number of output channels",
            "The amount of padding applied"
        ],
        answer: 1,
        explanation: "Stride determines how many pixels the convolution kernel moves at each step. A stride of 1 moves one pixel at a time (output size ≈ input size), while a stride of 2 skips every other pixel, reducing the output spatial dimensions by approximately half.",
        difficulty: "Easy",
        topic: "Deep Learning"
    },
    {
        id: "aiml-209",
        question: "What is a fully connected (dense) layer in a neural network?",
        options: [
            "A layer connected to all previous and next layers",
            "A layer where each neuron is connected to every neuron in the previous layer",
            "A layer with the maximum number of parameters",
            "A layer that uses full precision floating point"
        ],
        answer: 1,
        explanation: "A fully connected (dense) layer connects every neuron in the layer to every neuron in the previous layer, with each connection having a learnable weight. These layers are typically used at the end of CNNs for final classification.",
        difficulty: "Easy",
        topic: "Deep Learning"
    },
    {
        id: "aiml-210",
        question: "What is the primary advantage of using pre-trained embeddings over training embeddings from scratch?",
        options: [
            "Pre-trained embeddings are always more accurate",
            "Pre-trained embeddings capture rich semantic knowledge from massive datasets, reducing data requirements and training time",
            "Pre-trained embeddings use less memory",
            "Training from scratch is impossible"
        ],
        answer: 1,
        explanation: "Pre-trained embeddings (like Word2Vec, GloVe, or BERT embeddings) are trained on massive text corpora and capture semantic relationships, analogies, and contextual meaning. Using them provides a strong starting point, especially when the downstream task has limited data.",
        difficulty: "Medium",
        topic: "Deep Learning"
    },
    {
        id: "aiml-211",
        question: "How is a color image typically represented in a computer?",
        options: [
            "As a single 2D array of values",
            "As a 3D tensor with height, width, and color channels (typically 3 for RGB)",
            "As a list of color names",
            "As a 1D array of pixel values"
        ],
        answer: 1,
        explanation: "A color image is represented as a 3D tensor (height × width × channels), where each pixel has three values corresponding to Red, Green, and Blue channels, each typically ranging from 0 to 255.",
        difficulty: "Easy",
        topic: "Computer Vision"
    },
    {
        id: "aiml-212",
        question: "What is the HSV color space?",
        options: [
            "High Speed Video format",
            "A color space representing Hue, Saturation, and Value (brightness)",
            "A grayscale color space",
            "A color space used only in printing"
        ],
        answer: 1,
        explanation: "HSV represents colors using Hue (the color type, 0-360°), Saturation (intensity/purity, 0-100%), and Value (brightness, 0-100%). It is more intuitive for color-based image processing tasks than RGB because it separates color information from lighting.",
        difficulty: "Easy",
        topic: "Computer Vision"
    },
    {
        id: "aiml-213",
        question: "What is grayscale conversion of an image?",
        options: [
            "Removing all dark pixels",
            "Converting a color image to a single-channel image representing intensity/luminance",
            "Increasing the image resolution",
            "Converting an image to black and white only (binary)"
        ],
        answer: 1,
        explanation: "Grayscale conversion reduces a 3-channel color image to a single channel representing luminance, typically using a weighted sum: Gray = 0.299×R + 0.587×G + 0.114×B. This weights green most heavily, matching human perception.",
        difficulty: "Easy",
        topic: "Computer Vision"
    },
    {
        id: "aiml-214",
        question: "What does the Canny edge detector produce as output?",
        options: [
            "A color-enhanced image",
            "A binary image with edges shown as white pixels on a black background",
            "A 3D surface map",
            "A list of edge coordinates"
        ],
        answer: 1,
        explanation: "The Canny edge detector produces a binary image where detected edges are represented as white pixels (255) on a black background (0). It uses Gaussian smoothing, gradient computation, non-maximum suppression, and hysteresis thresholding.",
        difficulty: "Medium",
        topic: "Computer Vision"
    },
    {
        id: "aiml-215",
        question: "What is the purpose of Gaussian blur in image processing?",
        options: [
            "To sharpen the image",
            "To reduce noise and detail by convolving the image with a Gaussian kernel",
            "To increase the image size",
            "To detect edges"
        ],
        answer: 1,
        explanation: "Gaussian blur applies a Gaussian function as a convolution kernel to smooth the image, reducing high-frequency noise and detail. It is a fundamental preprocessing step used before edge detection, as it reduces false edges caused by noise.",
        difficulty: "Medium",
        topic: "Computer Vision"
    },
    {
        id: "aiml-216",
        question: "What is the difference between image classification and object detection?",
        options: [
            "They are the same task",
            "Classification assigns a single label to the entire image; detection locates and classifies multiple objects within the image with bounding boxes",
            "Detection is simpler than classification",
            "Classification works with video; detection works with images"
        ],
        answer: 1,
        explanation: "Image classification assigns one or more labels to an entire image (e.g., 'dog'). Object detection goes further by identifying multiple objects, their locations (bounding boxes), and their classes within a single image (e.g., 'dog at [x1,y1,x2,y2]').",
        difficulty: "Easy",
        topic: "Computer Vision"
    },
    {
        id: "aiml-217",
        question: "What is semantic segmentation in computer vision?",
        options: [
            "Dividing text into sentences",
            "Classifying each pixel in an image into a category, producing a dense pixel-level map",
            "Detecting objects with bounding boxes",
            "Separating foreground from background"
        ],
        answer: 1,
        explanation: "Semantic segmentation assigns a class label to every pixel in an image, producing a dense classification map where each pixel belongs to one of the predefined categories (e.g., road, car, person, sky).",
        difficulty: "Medium",
        topic: "Computer Vision"
    },
    {
        id: "aiml-218",
        question: "How does instance segmentation differ from semantic segmentation?",
        options: [
            "Instance segmentation is faster",
            "Instance segmentation distinguishes between individual objects of the same class; semantic segmentation treats all objects of the same class as one region",
            "Semantic segmentation is more accurate",
            "They produce identical outputs"
        ],
        answer: 1,
        explanation: "While semantic segmentation labels all pixels of the same class identically (e.g., all 'car' pixels are the same), instance segmentation differentiates between individual object instances (e.g., car 1, car 2, car 3), providing both pixel-level classification and object-level distinction.",
        difficulty: "Hard",
        topic: "Computer Vision"
    },
    {
        id: "aiml-219",
        question: "What does YOLO stand for and what is its key characteristic?",
        options: [
            "You Only Look Once — it processes the entire image in a single forward pass for real-time object detection",
            "Your Object Localization Operator — it uses multiple passes for accuracy",
            "Yielding Optimal Layout Outputs — it designs image layouts",
            "You Optimize Loss Only — it focuses on loss minimization"
        ],
        answer: 0,
        explanation: "YOLO (You Only Look Once) reformulates object detection as a single regression problem, processing the entire image in one forward pass through the network. This makes it extremely fast, enabling real-time detection at high frame rates.",
        difficulty: "Medium",
        topic: "Computer Vision"
    },
    {
        id: "aiml-220",
        question: "What is the R-CNN family approach to object detection?",
        options: [
            "Processing the entire image at once like YOLO",
            "Using a region proposal method to generate candidate object regions, then classifying each region with a CNN",
            "Using only edge detection for object boundaries",
            "Processing images in text form"
        ],
        answer: 1,
        explanation: "R-CNN (Regions with CNN features) first generates region proposals (candidate object bounding boxes) using selective search, then extracts features from each region using a CNN, and finally classifies each region. Faster R-CNN integrated region proposal into the network for end-to-end training.",
        difficulty: "Medium",
        topic: "Computer Vision"
    },
    {
        id: "aiml-221",
        question: "What is histogram equalization used for in image processing?",
        options: [
            "To colorize grayscale images",
            "To enhance contrast by redistributing pixel intensities to achieve a more uniform histogram",
            "To reduce image size",
            "To remove noise"
        ],
        answer: 1,
        explanation: "Histogram equalization transforms the intensity distribution of an image to be more uniform, effectively spreading out the most frequent intensity values. This enhances the global contrast of images, especially useful for images with narrow intensity ranges.",
        difficulty: "Medium",
        topic: "Computer Vision"
    },
    {
        id: "aiml-222",
        question: "What is morphological opening in image processing?",
        options: [
            "Opening an image file",
            "An erosion followed by a dilation, used to remove small objects and thin protrusions",
            "A dilation followed by an erosion",
            "Adding new pixels to the image boundary"
        ],
        answer: 1,
        explanation: "Morphological opening (erosion followed by dilation) removes small objects, thin protrusions, and noise from binary images while approximately preserving the shape and size of larger objects. It is useful for noise removal in thresholded images.",
        difficulty: "Medium",
        topic: "Computer Vision"
    },
    {
        id: "aiml-223",
        question: "What is the role of Non-Maximum Suppression (NMS) in object detection?",
        options: [
            "To suppress low-confidence detections below a threshold",
            "To eliminate redundant overlapping bounding boxes, keeping only the most confident detection for each object",
            "To reduce the image resolution",
            "To suppress gradient values during backpropagation"
        ],
        answer: 1,
        explanation: "NMS is a post-processing step in object detection that removes duplicate detections. When multiple bounding boxes overlap significantly for the same object, NMS keeps the one with the highest confidence score and suppresses the others based on an IoU threshold.",
        difficulty: "Medium",
        topic: "Computer Vision"
    },
    {
        id: "aiml-224",
        question: "What is IoU (Intersection over Union) used for in object detection?",
        options: [
            "Measuring the speed of detection",
            "Measuring the overlap between predicted and ground truth bounding boxes as a ratio of intersection area to union area",
            "Counting the number of objects detected",
            "Measuring the confidence of a detection"
        ],
        answer: 1,
        explanation: "IoU = Area of Intersection / Area of Union, measuring how well a predicted bounding box overlaps with the ground truth. IoU = 1 means perfect overlap, IoU = 0 means no overlap. It is used in NMS and as an evaluation metric (mAP).",
        difficulty: "Medium",
        topic: "Computer Vision"
    },
    {
        id: "aiml-225",
        question: "What is the basic operation of the Sobel operator?",
        options: [
            "Color space conversion",
            "Computing gradient approximations in the x and y directions using 3×3 convolution kernels for edge detection",
            "Image compression",
            "Feature matching between images"
        ],
        answer: 1,
        explanation: "The Sobel operator uses two 3×3 kernels — one for detecting horizontal edges (gradient in x-direction) and one for vertical edges (gradient in y-direction). The magnitude and direction of the gradient at each pixel indicate edge strength and orientation.",
        difficulty: "Medium",
        topic: "Computer Vision"
    },
    {
        id: "aiml-226",
        question: "What is OCR in computer vision?",
        options: [
            "Optical Character Recognition — converting images of text into machine-readable text",
            "Object Classification and Recognition",
            "Optical Color Rendering",
            "Online Content Retrieval"
        ],
        answer: 0,
        explanation: "OCR (Optical Character Recognition) is the technology that converts different types of documents (scanned paper, PDF files, or images) into editable and searchable text data by recognizing individual characters in the image.",
        difficulty: "Easy",
        topic: "Computer Vision"
    },
    {
        id: "aiml-227",
        question: "What is face detection different from face recognition?",
        options: [
            "They are the same thing",
            "Face detection locates faces in an image; face recognition identifies whose face it is",
            "Face recognition is a prerequisite for face detection",
            "Face detection works only in videos"
        ],
        answer: 1,
        explanation: "Face detection finds the location and size of faces in an image (outputting bounding boxes), while face recognition takes a detected face and determines the identity of the person by comparing facial features against a database of known faces.",
        difficulty: "Easy",
        topic: "Computer Vision"
    },
    {
        id: "aiml-228",
        question: "What is pose estimation in computer vision?",
        options: [
            "Estimating the camera position",
            "Estimating the spatial configuration of body joints (keypoints) of a person in an image or video",
            "Estimating the orientation of objects",
            "Estimating the 3D structure of a scene"
        ],
        answer: 1,
        explanation: "Human pose estimation detects and localizes key body joints (shoulders, elbows, knees, etc.) in images or video, producing a skeletal representation of the person's posture. It has applications in action recognition, gaming, and healthcare.",
        difficulty: "Medium",
        topic: "Computer Vision"
    },
    {
        id: "aiml-229",
        question: "What is image thresholding?",
        options: [
            "Reducing the bit depth of an image",
            "Converting a grayscale image to binary by classifying each pixel as either foreground or background based on a threshold value",
            "Increasing image contrast",
            "Detecting edges in an image"
        ],
        answer: 1,
        explanation: "Image thresholding converts a grayscale image to binary by comparing each pixel's intensity against a threshold value. Pixels above the threshold become white (foreground) and below become black (background), or vice versa. Otsu's method automatically determines the optimal threshold.",
        difficulty: "Medium",
        topic: "Computer Vision"
    },
    {
        id: "aiml-230",
        question: "What are anchor boxes in object detection frameworks like YOLO and SSD?",
        options: [
            "Boxes used to anchor the image to a fixed position",
            "Pre-defined bounding box shapes/sizes at each spatial location that serve as reference templates for predicting object bounds",
            "The ground truth bounding boxes",
            "Boxes used for data augmentation"
        ],
        answer: 1,
        explanation: "Anchor boxes are pre-defined box shapes (width/height ratios) at each grid cell or feature map location. The detector predicts offsets relative to these anchors rather than absolute coordinates, making it easier to learn and improving detection of objects with various shapes.",
        difficulty: "Hard",
        topic: "Computer Vision"
    },
    {
        id: "aiml-231",
        question: "What is the mAP metric in object detection?",
        options: [
            "Mean Average Precision — the average of precision values across all classes at a specific IoU threshold",
            "Maximum Accuracy Percentage",
            "Model Accuracy Performance",
            "Minimum Average Prediction"
        ],
        answer: 0,
        explanation: "mAP (Mean Average Precision) computes the average precision (AP) for each class by plotting precision-recall curves at various confidence thresholds and calculating the area under the curve, then averages these APs across all classes at a specified IoU threshold (commonly 0.5).",
        difficulty: "Hard",
        topic: "Computer Vision"
    },
    {
        id: "aiml-232",
        question: "What is the role of a Feature Pyramid Network (FPN) in object detection?",
        options: [
            "To increase the image resolution",
            "To build a multi-scale feature hierarchy from a single-resolution input, enabling detection of objects at different scales",
            "To reduce the number of parameters",
            "To visualize feature maps"
        ],
        answer: 1,
        explanation: "FPN constructs a pyramid of feature maps at different scales from a CNN's feature hierarchy through top-down pathways and lateral connections. This enables the detector to use rich multi-scale features for detecting both small and large objects effectively.",
        difficulty: "Hard",
        topic: "Computer Vision"
    },
    {
        id: "aiml-233",
        question: "What is optical flow in computer vision?",
        options: [
            "The flow of light through a lens",
            "The pattern of apparent motion of objects between consecutive video frames, represented as a 2D vector field",
            "The brightness gradient in an image",
            "The flow of data through a CNN"
        ],
        answer: 1,
        explanation: "Optical flow estimates the per-pixel motion between consecutive frames, producing a 2D vector field where each vector represents the displacement of a pixel. It is used in video compression, motion detection, object tracking, and autonomous driving.",
        difficulty: "Hard",
        topic: "Computer Vision"
    },
    {
        id: "aiml-234",
        question: "What is the difference between template matching and feature-based matching?",
        options: [
            "They are the same technique",
            "Template matching slides a predefined template across the image; feature-based matching detects and matches local features like keypoints",
            "Template matching is more accurate",
            "Feature-based matching only works with binary images"
        ],
        answer: 1,
        explanation: "Template matching directly compares a small template image against regions of a larger image using metrics like normalized cross-correlation. Feature-based matching detects distinctive keypoints (SIFT, ORB), computes descriptors, and matches them, being more robust to scale, rotation, and illumination changes.",
        difficulty: "Hard",
        topic: "Computer Vision"
    },
    {
        id: "aiml-235",
        question: "What is contour detection in OpenCV?",
        options: [
            "Detecting the outer edge of an image file",
            "Finding curves that join continuous points along a boundary in a binary image",
            "Detecting the color distribution in an image",
            "Finding the center point of objects"
        ],
        answer: 1,
        explanation: "Contour detection in OpenCV (findContours function) extracts the boundaries of objects in a binary image as curves joining continuous points of the same color/intensity. Contours are useful for shape analysis, object detection, and recognition.",
        difficulty: "Medium",
        topic: "Computer Vision"
    },
    {
        id: "aiml-236",
        question: "What is the purpose of the SIFT feature descriptor?",
        options: [
            "To compress images",
            "To detect and describe local features that are invariant to scale, rotation, and partially to illumination changes",
            "To segment images into regions",
            "To classify entire images"
        ],
        answer: 1,
        explanation: "SIFT (Scale-Invariant Feature Transform) detects keypoints at multiple scales using a difference-of-Gaussians approach and computes a 128-dimensional descriptor for each keypoint that is invariant to scale, rotation, and partially invariant to illumination and affine changes.",
        difficulty: "Hard",
        topic: "Computer Vision"
    },
    {
        id: "aiml-237",
        question: "In a real-world autonomous driving scenario, which computer vision task is most critical for avoiding collisions with pedestrians?",
        options: [
            "Image classification",
            "Real-time object detection with high recall for pedestrians",
            "Image segmentation for road markings only",
            "Style transfer for dashboard displays"
        ],
        answer: 1,
        explanation: "Real-time object detection with high recall for pedestrians is critical because missing a pedestrian detection (false negative) could lead to a collision. High recall ensures the system catches as many pedestrians as possible, even at the cost of some false positives.",
        difficulty: "Medium",
        topic: "Computer Vision"
    },
    {
        id: "aiml-238",
        question: "What is depth estimation in computer vision?",
        options: [
            "Estimating the bit depth of an image",
            "Predicting the distance of each pixel from the camera, producing a depth map",
            "Estimating the number of layers in a neural network",
            "Measuring the sharpness of an image"
        ],
        answer: 1,
        explanation: "Depth estimation predicts the 3D distance (depth) of each pixel from the camera, producing a depth map where closer objects have lower values and farther objects have higher values. It can be done using stereo vision, structured light, LiDAR, or monocular depth estimation with deep learning.",
        difficulty: "Medium",
        topic: "Computer Vision"
    },
    {
        id: "aiml-239",
        question: "What is the Fréchet Inception Distance (FID) used to evaluate?",
        options: [
            "Classification accuracy",
            "The quality of generated images by measuring the distance between distributions of real and generated image features",
            "The speed of image generation",
            "The number of parameters in a GAN"
        ],
        answer: 1,
        explanation: "FID measures the distance between the feature distributions (computed by an Inception network) of real and generated images using the Fréchet distance. Lower FID indicates higher quality and diversity of generated images, correlating well with human judgment.",
        difficulty: "Hard",
        topic: "Computer Vision"
    },
    {
        id: "aiml-240",
        question: "What is panoramic image stitching?",
        options: [
            "Sewing physical photographs together",
            "Combining multiple overlapping images into a single wide-angle image using feature matching and homography estimation",
            "Cropping an image to a wider aspect ratio",
            "Stretching a single image to cover a wider field of view"
        ],
        answer: 1,
        explanation: "Panoramic stitching combines multiple images with overlapping fields of view into a single seamless panoramic image. It involves feature detection and matching, homography estimation to align images, and blending to eliminate seams between images.",
        difficulty: "Hard",
        topic: "Computer Vision"
    },
    {
        id: "aiml-241",
        question: "What is tokenization in NLP?",
        options: [
            "Assigning tokens as rewards in RL",
            "Splitting text into smaller units called tokens, which can be words, subwords, or characters",
            "Encrypting text for security",
            "Converting numbers to text"
        ],
        answer: 1,
        explanation: "Tokenization is the first step in NLP pipelines that breaks text into discrete units (tokens) such as words, subwords (BPE, WordPiece), or characters. These tokens serve as the basic input units for language models.",
        difficulty: "Easy",
        topic: "Natural Language Processing"
    },
    {
        id: "aiml-242",
        question: "What is the difference between stemming and lemmatization?",
        options: [
            "They are identical processes",
            "Stemming uses heuristic rules to chop word endings; lemmatization uses dictionary lookup to find the valid root word (lemma)",
            "Stemming is more accurate than lemmatization",
            "Lemmatization is faster than stemming"
        ],
        answer: 1,
        explanation: "Stemming (e.g., Porter stemmer) applies crude rule-based truncation (e.g., 'running' → 'runn', 'better' → 'better'). Lemmatization uses linguistic knowledge and dictionaries to find the correct lemma (e.g., 'running' → 'run', 'better' → 'good'), being more accurate but slower.",
        difficulty: "Easy",
        topic: "Natural Language Processing"
    },
    {
        id: "aiml-243",
        question: "Why are stop words typically removed in text preprocessing?",
        options: [
            "They are grammatically incorrect",
            "They are very common words (the, is, at, which) that carry little semantic meaning and add noise to the analysis",
            "They are always misspelled",
            "They take up too much disk space"
        ],
        answer: 1,
        explanation: "Stop words are extremely common words that appear in virtually all texts but carry minimal distinctive meaning. Removing them reduces the feature space, focuses analysis on meaningful content words, and improves the efficiency and effectiveness of downstream NLP tasks.",
        difficulty: "Easy",
        topic: "Natural Language Processing"
    },
    {
        id: "aiml-244",
        question: "What is the Bag of Words (BoW) representation?",
        options: [
            "A literal bag containing words",
            "A text representation that counts the frequency of each word in a document, ignoring word order and grammar",
            "A method for sorting words alphabetically",
            "A compression technique for text"
        ],
        answer: 1,
        explanation: "BoW represents a document as a vector of word frequencies, creating a vocabulary from all documents and counting how many times each word appears. It completely ignores word order, syntax, and semantics, treating each document as an unordered collection of words.",
        difficulty: "Easy",
        topic: "Natural Language Processing"
    },
    {
        id: "aiml-245",
        question: "What does TF-IDF stand for and what does it measure?",
        options: [
            "Text Frequency - Inverse Document Frequency; it measures word importance by balancing term frequency with inverse document frequency",
            "Term Factor - Internal Data Format; it measures data compression ratio",
            "True False - Inference Data Framework; it measures classification accuracy",
            "Token Flow - Information Distribution Function; it measures token diversity"
        ],
        answer: 0,
        explanation: "TF-IDF = TF × IDF, where TF is term frequency in a document and IDF is inverse document frequency (log of total documents divided by documents containing the term). It downweights common words and upweights distinctive words, measuring a term's importance in a document relative to a corpus.",
        difficulty: "Easy",
        topic: "Natural Language Processing"
    },
    {
        id: "aiml-246",
        question: "What is the key idea behind Word2Vec?",
        options: [
            "Counting word frequencies",
            "Learning dense vector representations of words by predicting surrounding words (CBOW) or context from a word (Skip-gram)",
            "Creating one-hot encodings for words",
            "Translating words between languages"
        ],
        answer: 1,
        explanation: "Word2Vec learns dense, low-dimensional word embeddings by training a shallow neural network on either CBOW (predict target word from context) or Skip-gram (predict context from target word). Words appearing in similar contexts get similar embeddings, capturing semantic relationships.",
        difficulty: "Medium",
        topic: "Natural Language Processing"
    },
    {
        id: "aiml-247",
        question: "What famous example demonstrates Word2Vec's ability to capture semantic relationships?",
        options: [
            "king - man + woman ≈ queen",
            "apple + orange ≈ fruit",
            "cat + dog ≈ animal",
            "big + small ≈ medium"
        ],
        answer: 0,
        explanation: "The analogy 'king - man + woman ≈ queen' demonstrates that Word2Vec captures semantic relationships as vector arithmetic. The difference vector between 'king' and 'man' (royalty) when added to 'woman' yields a vector close to 'queen', showing the model learned gender and royalty dimensions.",
        difficulty: "Medium",
        topic: "Natural Language Processing"
    },
    {
        id: "aiml-248",
        question: "How does GloVe differ from Word2Vec?",
        options: [
            "GloVe uses neural networks; Word2Vec does not",
            "GloVe is based on global co-occurrence statistics; Word2Vec is based on local context windows",
            "GloVe only works for English",
            "Word2Vec produces better embeddings"
        ],
        answer: 1,
        explanation: "GloVe (Global Vectors) leverages global word-word co-occurrence statistics from the entire corpus to learn embeddings, while Word2Vec uses local context windows. GloVe factorizes the log co-occurrence matrix, capturing both global statistics and local context.",
        difficulty: "Medium",
        topic: "Natural Language Processing"
    },
]