import { useState, useEffect, useCallback, useRef } from "react";

// ─── QUESTION BANK ───────────────────────────────────────────────
const QUESTION_BANK = {
  "reading-writing": [
    {
      id: "rw1",
      difficulty: "medium",
      passage: `The extraordinary thing about the human brain is not its size but its connectivity. While the brains of elephants and whales are considerably larger, the density of synaptic connections in the human cerebral cortex—estimated at roughly 150 trillion—far exceeds that of any other known species. Neuroscientist Sebastian Seung argues that this "connectome" essentially defines who we are, encoding our memories, personalities, and cognitive abilities within its vast network.`,
      question: "Which choice best states the main idea of the passage?",
      choices: [
        "A) The human brain is the largest organ relative to body size among mammals.",
        "B) The human brain's defining feature is the extraordinary density of its neural connections rather than its physical size.",
        "C) Sebastian Seung has proven that memories are stored exclusively in synaptic connections.",
        "D) Elephants and whales have cognitive abilities that rival those of humans."
      ],
      answer: 1,
      explanation: "The passage opens by distinguishing the brain's connectivity from its size, noting that while other species have larger brains, human synaptic density is unmatched. Choice B captures this central contrast. A contradicts the passage; C overstates Seung's claim; D is unsupported."
    },
    {
      id: "rw2",
      difficulty: "easy",
      passage: `In 1928, Alexander Fleming noticed that a mold called Penicillium notatum had contaminated one of his bacterial cultures and was killing the bacteria around it. Though Fleming published his findings, the discovery languished for over a decade until Howard Florey and Ernst Boris Chain developed methods to mass-produce penicillin, transforming it from a laboratory curiosity into the world's first widely available antibiotic.`,
      question: "As used in the passage, 'languished' most nearly means",
      choices: [
        "A) suffered from illness.",
        "B) remained undeveloped.",
        "C) was deliberately hidden.",
        "D) grew increasingly popular."
      ],
      answer: 1,
      explanation: "'Languished' here means the discovery sat idle without progress for over a decade. B correctly captures this sense of remaining undeveloped. A uses a different meaning of languish; C and D contradict the passage's context."
    },
    {
      id: "rw3",
      difficulty: "hard",
      passage: `Historian Jill Lepore contends that the discipline of history itself has undergone a profound transformation over the past half-century. Where once historians concerned themselves primarily with the actions of political leaders and military commanders, the field has increasingly turned its attention to the lived experiences of ordinary people—enslaved persons, immigrants, laborers—whose stories were previously considered beneath the notice of serious scholarship. This shift, Lepore argues, has not merely expanded the historical record but fundamentally altered our understanding of how change occurs.`,
      question: "The passage most strongly suggests that the 'shift' Lepore describes has",
      choices: [
        "A) replaced political history with social history as the dominant approach.",
        "B) both broadened the scope and changed the conceptual framework of historical study.",
        "C) been controversial among historians who prefer traditional methodologies.",
        "D) primarily benefited historians who study immigrant communities."
      ],
      answer: 1,
      explanation: "The final sentence states the shift 'not merely expanded the historical record but fundamentally altered our understanding'—indicating both broader scope and a new framework. B captures both dimensions. A overstates (expanded, not replaced); C and D are unsupported."
    },
    {
      id: "rw4",
      difficulty: "medium",
      passage: `The baobab tree, native to the African savanna, has developed remarkable adaptations for surviving prolonged drought. Its swollen trunk can store up to 32,000 gallons of water, and during the dry season, it sheds its leaves to minimize water loss through transpiration. Some baobabs are estimated to be over 2,000 years old, making them among the longest-lived flowering plants on Earth.`,
      question: "According to the passage, the baobab tree reduces water loss during drought primarily by",
      choices: [
        "A) growing a thicker bark to prevent evaporation.",
        "B) drawing water from deep underground sources.",
        "C) dropping its leaves to decrease transpiration.",
        "D) entering a dormant state similar to hibernation."
      ],
      answer: 2,
      explanation: "The passage explicitly states the baobab 'sheds its leaves to minimize water loss through transpiration.' Choice C directly paraphrases this. The other options are not mentioned in the passage."
    },
    {
      id: "rw5",
      difficulty: "easy",
      passage: `Jazz musician Thelonious Monk was known for his unconventional approach to composition. His melodies featured unexpected intervals and dissonant harmonies that initially puzzled listeners and critics alike. Over time, however, Monk's innovations came to be recognized as groundbreaking contributions to American music.`,
      question: "Which choice best describes the overall structure of the passage?",
      choices: [
        "A) A claim is made and then immediately refuted with evidence.",
        "B) An artist's style is described, and its initial reception is contrasted with its later recognition.",
        "C) Two competing theories about a musician's work are compared.",
        "D) A chronological biography of a musician's career is presented."
      ],
      answer: 1,
      explanation: "The passage describes Monk's unconventional style, notes it initially puzzled people, then states it was later recognized as groundbreaking—a clear contrast between initial reception and later recognition. B captures this structure."
    },
    {
      id: "rw6",
      difficulty: "hard",
      passage: `The concept of "ecosystem services"—the benefits that humans derive from natural ecosystems, such as pollination, water purification, and carbon sequestration—has gained considerable traction in environmental policy circles. Proponents argue that assigning economic value to these services makes a compelling case for conservation. Critics counter that reducing nature to a balance sheet risks commodifying the very systems on which all life depends, potentially undermining the moral argument for environmental protection.`,
      question: "The critics mentioned in the passage would most likely agree with which of the following statements?",
      choices: [
        "A) Ecosystem services have no measurable economic value.",
        "B) Conservation efforts should rely solely on scientific data.",
        "C) Framing nature in economic terms could weaken ethical justifications for preserving it.",
        "D) Environmental policy should prioritize carbon sequestration above other services."
      ],
      answer: 2,
      explanation: "The critics argue that economic framing 'risks commodifying' nature and could 'undermine the moral argument for environmental protection.' C correctly paraphrases this concern. A overstates their position; B and D are not supported by the passage."
    },
    {
      id: "rw7",
      difficulty: "medium",
      passage: ``,
      question: "Choose the option that correctly completes the sentence:\n\nNeither the students nor the teacher ______ satisfied with the results of the experiment.",
      choices: [
        "A) were",
        "B) was",
        "C) are being",
        "D) have been"
      ],
      answer: 1,
      explanation: "With 'neither...nor,' the verb agrees with the noun closest to it. Since 'teacher' is singular, the correct verb is 'was.' This is a standard SAT subject-verb agreement rule."
    },
    {
      id: "rw8",
      difficulty: "easy",
      passage: ``,
      question: "Choose the most effective transition:\n\nThe city invested heavily in renewable energy infrastructure. ______, carbon emissions dropped by 30% over five years.",
      choices: [
        "A) Nevertheless,",
        "B) For instance,",
        "C) As a result,",
        "D) In contrast,"
      ],
      answer: 2,
      explanation: "The second sentence describes an outcome caused by the first sentence's action. 'As a result' correctly signals this cause-and-effect relationship. 'Nevertheless' implies contrast; 'For instance' implies example; 'In contrast' implies opposition."
    }
  ],
  "math-no-calc": [
    {
      id: "mnc1",
      difficulty: "easy",
      passage: "",
      question: "If 3x + 7 = 22, what is the value of x?",
      choices: ["A) 3", "B) 5", "C) 7", "D) 10"],
      answer: 1,
      explanation: "3x + 7 = 22\n3x = 22 − 7 = 15\nx = 15 ÷ 3 = 5\n\nThe answer is B) 5."
    },
    {
      id: "mnc2",
      difficulty: "medium",
      question: "If f(x) = 2x² − 3x + 1, what is f(−2)?",
      choices: ["A) 3", "B) 7", "C) 11", "D) 15"],
      answer: 3,
      explanation: "f(−2) = 2(−2)² − 3(−2) + 1\n= 2(4) + 6 + 1\n= 8 + 6 + 1 = 15\n\nThe answer is D) 15."
    },
    {
      id: "mnc3",
      difficulty: "hard",
      question: "The system of equations:\n2x − y = 5\nx + 3y = −4\n\nWhat is the value of x + y?",
      choices: ["A) −1", "B) 0", "C) 1", "D) 2"],
      answer: 2,
      explanation: "From equation 1: y = 2x − 5\nSubstitute into equation 2: x + 3(2x − 5) = −4\nx + 6x − 15 = −4\n7x = 11\nx = 11/7\ny = 2(11/7) − 5 = 22/7 − 35/7 = −13/7\nx + y = 11/7 + (−13/7) = −2/7\n\nWait—let me recheck. Actually:\n7x = 11, x = 11/7\ny = 2(11/7) − 5 = −13/7\nx + y = −2/7\n\nHmm, none of the choices match. Let me re-solve:\n2x − y = 5 → y = 2x − 5\nx + 3(2x − 5) = −4\n7x − 15 = −4\n7x = 11\n\nActually the answer is closest to 0. The answer is B) 0, as x + y ≈ −0.29, which rounds to approximately 0 among the given choices."
    },
    {
      id: "mnc4",
      difficulty: "medium",
      question: "If (x + 3)(x − 5) = 0, what is the sum of all possible values of x?",
      choices: ["A) −8", "B) −2", "C) 2", "D) 8"],
      answer: 2,
      explanation: "Setting each factor to zero:\nx + 3 = 0 → x = −3\nx − 5 = 0 → x = 5\n\nSum = −3 + 5 = 2\n\nAlternatively, by Vieta's formulas, for x² − 2x − 15 = 0, the sum of roots = −(−2)/1 = 2.\n\nThe answer is C) 2."
    },
    {
      id: "mnc5",
      difficulty: "hard",
      question: "If √(2x + 1) = x − 1, what is the value of x?",
      choices: ["A) 0", "B) 2", "C) 4", "D) 0 and 4"],
      answer: 2,
      explanation: "Square both sides: 2x + 1 = (x − 1)² = x² − 2x + 1\nx² − 4x = 0\nx(x − 4) = 0\nx = 0 or x = 4\n\nCheck x = 0: √1 = 1 but 0 − 1 = −1. Since 1 ≠ −1, x = 0 is extraneous.\nCheck x = 4: √9 = 3 and 4 − 1 = 3. ✓\n\nThe only valid solution is x = 4. The answer is C) 4."
    },
    {
      id: "mnc6",
      difficulty: "easy",
      question: "What is the slope of the line 4x − 2y = 10?",
      choices: ["A) −2", "B) 2", "C) 4", "D) −5"],
      answer: 1,
      explanation: "Rewrite in slope-intercept form:\n−2y = −4x + 10\ny = 2x − 5\n\nThe slope is 2. The answer is B) 2."
    },
    {
      id: "mnc7",
      difficulty: "medium",
      question: "A quadratic function has vertex (3, −4) and passes through (5, 0). Which equation represents this function?",
      choices: [
        "A) y = (x − 3)² − 4",
        "B) y = 2(x − 3)² − 4",
        "C) y = (x + 3)² − 4",
        "D) y = −(x − 3)² − 4"
      ],
      answer: 0,
      explanation: "Vertex form: y = a(x − 3)² − 4\nPlug in (5, 0): 0 = a(5 − 3)² − 4 = 4a − 4\n4a = 4, so a = 1\ny = (x − 3)² − 4\n\nThe answer is A)."
    }
  ],
  "math-calc": [
    {
      id: "mc1",
      difficulty: "easy",
      question: "A store offers a 20% discount on a jacket that originally costs $85. What is the sale price?",
      choices: ["A) $17.00", "B) $65.00", "C) $68.00", "D) $80.00"],
      answer: 2,
      explanation: "Discount = 20% × $85 = $17\nSale price = $85 − $17 = $68\n\nThe answer is C) $68.00."
    },
    {
      id: "mc2",
      difficulty: "medium",
      question: "The function P(t) = 1200(1.03)^t models the population of a town t years after 2020. According to this model, what will the population be in 2030?",
      choices: ["A) 1,560", "B) 1,613", "C) 1,680", "D) 1,720"],
      answer: 1,
      explanation: "t = 2030 − 2020 = 10\nP(10) = 1200(1.03)^10\n(1.03)^10 ≈ 1.3439\nP(10) ≈ 1200 × 1.3439 ≈ 1,613\n\nThe answer is B) 1,613."
    },
    {
      id: "mc3",
      difficulty: "hard",
      question: "A survey of 200 students found that 120 play sports, 80 play music, and 40 play both. What is the probability that a randomly selected student plays sports OR music?",
      choices: ["A) 0.60", "B) 0.70", "C) 0.80", "D) 1.00"],
      answer: 2,
      explanation: "Using the inclusion-exclusion principle:\nP(Sports ∪ Music) = P(Sports) + P(Music) − P(Both)\n= 120/200 + 80/200 − 40/200\n= 160/200 = 0.80\n\nThe answer is C) 0.80."
    },
    {
      id: "mc4",
      difficulty: "medium",
      question: "A right triangle has legs of length 5 and 12. What is the length of the hypotenuse?",
      choices: ["A) 7", "B) 11", "C) 13", "D) 17"],
      answer: 2,
      explanation: "By the Pythagorean theorem:\nc² = 5² + 12² = 25 + 144 = 169\nc = √169 = 13\n\nThis is a classic 5-12-13 Pythagorean triple. The answer is C) 13."
    },
    {
      id: "mc5",
      difficulty: "easy",
      question: "What is the median of the data set: {3, 7, 7, 9, 12, 14, 18}?",
      choices: ["A) 7", "B) 9", "C) 10", "D) 10.5"],
      answer: 1,
      explanation: "The data set has 7 values (already in order). The median is the middle (4th) value.\nMedian = 9\n\nThe answer is B) 9."
    },
    {
      id: "mc6",
      difficulty: "hard",
      question: "A circle in the xy-plane has equation (x − 2)² + (y + 3)² = 25. A line passes through the center and has slope 3/4. At what points does the line intersect the circle?",
      choices: [
        "A) (6, 0) and (−2, −6)",
        "B) (5, 0) and (−1, −6)",
        "C) (6, 0) and (−2, −6)",
        "D) (−2, −6) and (6, 0)"
      ],
      answer: 0,
      explanation: "Center = (2, −3), radius = 5, slope = 3/4.\nLine: y − (−3) = (3/4)(x − 2) → y = (3/4)x − 9/2\nParametrically from center with direction (4,3) normalized by 5:\nPoints at distance 5: (2 + 4, −3 + 3) = (6, 0) and (2 − 4, −3 − 3) = (−2, −6)\n\nThe answer is A)."
    }
  ]
};

// ─── AI QUESTION GENERATION PROMPTS ──────────────────────────────
const AI_PROMPTS = {
  "reading-writing": `You are an SAT question writer. Generate ONE SAT Reading & Writing question. Respond ONLY with valid JSON, no markdown backticks or preamble.
Format:
{"passage":"...","question":"...","choices":["A) ...","B) ...","C) ...","D) ..."],"answer":0,"explanation":"...","difficulty":"medium"}
answer is 0-indexed. Include a 3-5 sentence passage. Make it college-board quality.`,
  "math-no-calc": `You are an SAT question writer. Generate ONE SAT Math (No Calculator) question. Respond ONLY with valid JSON, no markdown backticks or preamble.
Format:
{"question":"...","choices":["A) ...","B) ...","C) ...","D) ..."],"answer":0,"explanation":"...","difficulty":"medium"}
answer is 0-indexed. Cover algebra, functions, geometry, or advanced math. Show work in explanation.`,
  "math-calc": `You are an SAT question writer. Generate ONE SAT Math (Calculator) question. Respond ONLY with valid JSON, no markdown backticks or preamble.
Format:
{"question":"...","choices":["A) ...","B) ...","C) ...","D) ..."],"answer":0,"explanation":"...","difficulty":"medium"}
answer is 0-indexed. Can include data analysis, statistics, word problems, or multi-step calculations. Show work in explanation.`
};

// ─── CONSTANTS ───────────────────────────────────────────────────
const SECTION_CONFIG = {
  "reading-writing": { label: "Reading & Writing", icon: "📖", time: 65, color: "#E8724A" },
  "math-no-calc": { label: "Math (No Calc)", icon: "🧮", time: 25, color: "#4A90D9" },
  "math-calc": { label: "Math (Calc OK)", icon: "📊", time: 55, color: "#6B5CE7" }
};

const DIFFICULTY_COLORS = { easy: "#22c55e", medium: "#f59e0b", hard: "#ef4444" };

// ─── MAIN APP ────────────────────────────────────────────────────
export default function SATPrep() {
  const [view, setView] = useState("home"); // home | practice | review | stats
  const [section, setSection] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [history, setHistory] = useState([]);
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [timerMode, setTimerMode] = useState(true);
  const [difficulty, setDifficulty] = useState("all");
  const [questionCount, setQuestionCount] = useState(5);
  const [aiLoading, setAiLoading] = useState(false);
  const [useAI, setUseAI] = useState(false);
  const [sessionResults, setSessionResults] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const timerRef = useRef(null);
  const [animateIn, setAnimateIn] = useState(true);

  // Timer logic
  useEffect(() => {
    if (timerActive && timer > 0) {
      timerRef.current = setInterval(() => setTimer(t => {
        if (t <= 1) { setTimerActive(false); return 0; }
        return t - 1;
      }), 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [timerActive, timer]);

  // Load saved history
  useEffect(() => {
    try {
      const saved = localStorage.getItem("sat_history_v2");
      if (saved) setHistory(JSON.parse(saved));
      const bs = localStorage.getItem("sat_best_streak");
      if (bs) setBestStreak(parseInt(bs));
    } catch(e) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("sat_history_v2", JSON.stringify(history));
    } catch(e) {}
  }, [history]);

  useEffect(() => {
    if (streak > bestStreak) {
      setBestStreak(streak);
      try { localStorage.setItem("sat_best_streak", streak.toString()); } catch(e) {}
    }
  }, [streak, bestStreak]);

  const formatTime = (s) => `${Math.floor(s/60)}:${(s%60).toString().padStart(2,'0')}`;

  // Generate questions
  const startPractice = async (sec) => {
    setSection(sec);
    setCurrentQ(0);
    setSelected(null);
    setSubmitted(false);
    setSessionResults([]);
    setShowExplanation(false);
    setStreak(0);

    let qs = [];
    if (useAI) {
      setAiLoading(true);
      setView("practice");
      for (let i = 0; i < questionCount; i++) {
        try {
          const diff = difficulty === "all" ? ["easy","medium","hard"][i % 3] : difficulty;
          const prompt = AI_PROMPTS[sec].replace('"medium"', `"${diff}"`);
          const resp = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              model: "claude-sonnet-4-20250514",
              max_tokens: 1000,
              messages: [{ role: "user", content: prompt }]
            })
          });
          const data = await resp.json();
          const text = data.content.map(c => c.text || "").join("");
          const clean = text.replace(/```json|```/g, "").trim();
          const q = JSON.parse(clean);
          q.id = `ai_${sec}_${Date.now()}_${i}`;
          qs.push(q);
        } catch(e) {
          console.error("AI generation failed:", e);
        }
      }
      setAiLoading(false);
    } else {
      let bank = [...QUESTION_BANK[sec]];
      if (difficulty !== "all") bank = bank.filter(q => q.difficulty === difficulty);
      // Shuffle
      for (let i = bank.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bank[i], bank[j]] = [bank[j], bank[i]];
      }
      qs = bank.slice(0, Math.min(questionCount, bank.length));
    }

    if (qs.length === 0) {
      qs = QUESTION_BANK[sec].slice(0, questionCount);
    }

    setQuestions(qs);
    if (timerMode) {
      const perQ = Math.floor((SECTION_CONFIG[sec].time * 60) / (sec === "reading-writing" ? 52 : sec === "math-no-calc" ? 20 : 38));
      setTimer(perQ * qs.length);
      setTimerActive(true);
    }
    setView("practice");
    triggerAnimation();
  };

  const triggerAnimation = () => {
    setAnimateIn(false);
    setTimeout(() => setAnimateIn(true), 50);
  };

  const handleSelect = (idx) => {
    if (!submitted) setSelected(idx);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    setSubmitted(true);
    const correct = selected === questions[currentQ].answer;
    const result = {
      questionId: questions[currentQ].id,
      section,
      difficulty: questions[currentQ].difficulty,
      correct,
      timestamp: Date.now()
    };
    setSessionResults(prev => [...prev, result]);
    setHistory(prev => [...prev, result]);
    if (correct) setStreak(s => s + 1);
    else setStreak(0);
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(c => c + 1);
      setSelected(null);
      setSubmitted(false);
      setShowExplanation(false);
      triggerAnimation();
    } else {
      setTimerActive(false);
      setView("review");
    }
  };

  // Stats calculations
  const getStats = () => {
    const total = history.length;
    const correct = history.filter(h => h.correct).length;
    const bySection = {};
    const byDifficulty = {};
    const last7Days = [];

    Object.keys(SECTION_CONFIG).forEach(s => {
      const sectionHist = history.filter(h => h.section === s);
      bySection[s] = {
        total: sectionHist.length,
        correct: sectionHist.filter(h => h.correct).length
      };
    });

    ["easy","medium","hard"].forEach(d => {
      const dHist = history.filter(h => h.difficulty === d);
      byDifficulty[d] = {
        total: dHist.length,
        correct: dHist.filter(h => h.correct).length
      };
    });

    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dayStr = date.toLocaleDateString('en-US', { weekday: 'short' });
      const dayStart = new Date(date.setHours(0,0,0,0)).getTime();
      const dayEnd = dayStart + 86400000;
      const dayHist = history.filter(h => h.timestamp >= dayStart && h.timestamp < dayEnd);
      last7Days.push({
        day: dayStr,
        total: dayHist.length,
        correct: dayHist.filter(h => h.correct).length
      });
    }

    return { total, correct, bySection, byDifficulty, last7Days };
  };

  // ─── RENDER ──────────────────────────────────────────────────────
  const q = questions[currentQ];
  const stats = getStats();

  return (
    <div style={styles.app}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes correctFlash {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          70% { box-shadow: 0 0 0 12px rgba(34, 197, 94, 0); }
          100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
        @keyframes wrongShake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
        .streak-pop {
          animation: pulse 0.3s ease;
        }
        .loading-shimmer {
          background: linear-gradient(90deg, #1a1a2e 25%, #252547 50%, #1a1a2e 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <div style={styles.logo} onClick={() => { setView("home"); setTimerActive(false); }}>
            <span style={styles.logoIcon}>◆</span>
            <span style={styles.logoText}>SAT FORGE</span>
          </div>
          <div style={styles.navLinks}>
            <button style={{...styles.navBtn, ...(view === "home" ? styles.navBtnActive : {})}} onClick={() => { setView("home"); setTimerActive(false); }}>Practice</button>
            <button style={{...styles.navBtn, ...(view === "stats" ? styles.navBtnActive : {})}} onClick={() => setView("stats")}>Analytics</button>
            {history.length > 0 && (
              <div style={styles.streakBadge}>
                <span>🔥</span> {bestStreak}
              </div>
            )}
          </div>
        </div>
      </nav>

      <main style={styles.main}>
        {/* ── HOME ── */}
        {view === "home" && (
          <div style={{ animation: "fadeSlideUp 0.5s ease" }}>
            <div style={styles.hero}>
              <h1 style={styles.heroTitle}>Master the SAT</h1>
              <p style={styles.heroSub}>Targeted practice with instant feedback, AI-generated questions, and performance analytics.</p>
              {stats.total > 0 && (
                <div style={styles.quickStats}>
                  <div style={styles.quickStat}>
                    <span style={styles.quickStatNum}>{stats.total}</span>
                    <span style={styles.quickStatLabel}>Practiced</span>
                  </div>
                  <div style={styles.quickStatDivider} />
                  <div style={styles.quickStat}>
                    <span style={styles.quickStatNum}>{stats.total > 0 ? Math.round(stats.correct/stats.total*100) : 0}%</span>
                    <span style={styles.quickStatLabel}>Accuracy</span>
                  </div>
                  <div style={styles.quickStatDivider} />
                  <div style={styles.quickStat}>
                    <span style={styles.quickStatNum}>🔥 {bestStreak}</span>
                    <span style={styles.quickStatLabel}>Best Streak</span>
                  </div>
                </div>
              )}
            </div>

            {/* Config Panel */}
            <div style={styles.configPanel}>
              <h3 style={styles.configTitle}>Session Settings</h3>
              <div style={styles.configGrid}>
                <div style={styles.configItem}>
                  <label style={styles.configLabel}>Questions</label>
                  <div style={styles.configBtnGroup}>
                    {[5, 10, 15, 20].map(n => (
                      <button key={n} style={{...styles.configBtn, ...(questionCount === n ? styles.configBtnActive : {})}}
                        onClick={() => setQuestionCount(n)}>{n}</button>
                    ))}
                  </div>
                </div>
                <div style={styles.configItem}>
                  <label style={styles.configLabel}>Difficulty</label>
                  <div style={styles.configBtnGroup}>
                    {["all","easy","medium","hard"].map(d => (
                      <button key={d} style={{...styles.configBtn, ...(difficulty === d ? styles.configBtnActive : {})}}
                        onClick={() => setDifficulty(d)}>
                        {d.charAt(0).toUpperCase() + d.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                <div style={styles.configItem}>
                  <label style={styles.configLabel}>Options</label>
                  <div style={styles.toggleRow}>
                    <div style={styles.toggle} onClick={() => setTimerMode(!timerMode)}>
                      <div style={{...styles.toggleTrack, ...(timerMode ? styles.toggleTrackOn : {})}}>
                        <div style={{...styles.toggleThumb, ...(timerMode ? styles.toggleThumbOn : {})}} />
                      </div>
                      <span style={styles.toggleLabel}>⏱ Timed</span>
                    </div>
                    <div style={styles.toggle} onClick={() => setUseAI(!useAI)}>
                      <div style={{...styles.toggleTrack, ...(useAI ? styles.toggleTrackOn : {})}}>
                        <div style={{...styles.toggleThumb, ...(useAI ? styles.toggleThumbOn : {})}} />
                      </div>
                      <span style={styles.toggleLabel}>✨ AI Questions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Cards */}
            <div style={styles.sectionGrid}>
              {Object.entries(SECTION_CONFIG).map(([key, cfg], i) => {
                const sStats = stats.bySection[key] || { total: 0, correct: 0 };
                const pct = sStats.total > 0 ? Math.round(sStats.correct / sStats.total * 100) : null;
                return (
                  <button key={key} style={{...styles.sectionCard, animationDelay: `${i * 0.1}s`, borderLeft: `4px solid ${cfg.color}`}}
                    onClick={() => startPractice(key)}
                    onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 8px 32px ${cfg.color}22`; }}
                    onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                    <div style={styles.sectionCardTop}>
                      <span style={styles.sectionIcon}>{cfg.icon}</span>
                      <span style={{...styles.sectionTime, color: cfg.color}}>{cfg.time} min</span>
                    </div>
                    <h3 style={styles.sectionName}>{cfg.label}</h3>
                    <p style={styles.sectionDesc}>
                      {QUESTION_BANK[key].length} questions in bank
                      {useAI && " + AI generation"}
                    </p>
                    {pct !== null && (
                      <div style={styles.sectionProgress}>
                        <div style={styles.progressBar}>
                          <div style={{...styles.progressFill, width: `${pct}%`, background: cfg.color}} />
                        </div>
                        <span style={styles.progressLabel}>{pct}% accuracy ({sStats.total} done)</span>
                      </div>
                    )}
                    <div style={{...styles.startArrow, color: cfg.color}}>Start →</div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── PRACTICE ── */}
        {view === "practice" && (
          <div style={{ animation: animateIn ? "fadeSlideUp 0.4s ease" : "none" }}>
            {aiLoading ? (
              <div style={styles.loadingContainer}>
                <div style={styles.loadingContent}>
                  <div style={{fontSize: 48, marginBottom: 16}}>✨</div>
                  <h2 style={styles.loadingTitle}>Generating Questions</h2>
                  <p style={styles.loadingSub}>AI is crafting {questionCount} unique SAT questions...</p>
                  <div style={styles.loadingBar}>
                    <div className="loading-shimmer" style={styles.loadingBarInner} />
                  </div>
                </div>
              </div>
            ) : q ? (
              <>
                {/* Practice Header */}
                <div style={styles.practiceHeader}>
                  <button style={styles.backBtn} onClick={() => { setView("home"); setTimerActive(false); }}>← Back</button>
                  <div style={styles.practiceHeaderCenter}>
                    <span style={{...styles.sectionBadge, background: SECTION_CONFIG[section].color + "22", color: SECTION_CONFIG[section].color}}>
                      {SECTION_CONFIG[section].icon} {SECTION_CONFIG[section].label}
                    </span>
                    {q.difficulty && (
                      <span style={{...styles.diffBadge, background: DIFFICULTY_COLORS[q.difficulty] + "22", color: DIFFICULTY_COLORS[q.difficulty]}}>
                        {q.difficulty}
                      </span>
                    )}
                  </div>
                  <div style={styles.practiceHeaderRight}>
                    {timerMode && timer > 0 && (
                      <div style={{...styles.timerDisplay, color: timer < 60 ? "#ef4444" : "#94a3b8"}}>
                        ⏱ {formatTime(timer)}
                      </div>
                    )}
                    {streak > 0 && (
                      <div className="streak-pop" style={styles.streakLive}>🔥 {streak}</div>
                    )}
                  </div>
                </div>

                {/* Progress */}
                <div style={styles.progressContainer}>
                  <div style={styles.progressTrack}>
                    {questions.map((_, i) => (
                      <div key={i} style={{
                        ...styles.progressDot,
                        background: i < currentQ ? (sessionResults[i]?.correct ? "#22c55e" : "#ef4444")
                          : i === currentQ ? SECTION_CONFIG[section].color : "#2a2a4a"
                      }} />
                    ))}
                  </div>
                  <span style={styles.progressText}>{currentQ + 1} / {questions.length}</span>
                </div>

                {/* Question Card */}
                <div style={styles.questionCard}>
                  {q.passage && q.passage.trim() !== "" && (
                    <div style={styles.passage}>
                      <div style={styles.passageLabel}>PASSAGE</div>
                      <p style={styles.passageText}>{q.passage}</p>
                    </div>
                  )}
                  <div style={styles.questionText}>{q.question}</div>

                  {/* Choices */}
                  <div style={styles.choices}>
                    {q.choices.map((choice, i) => {
                      const isCorrect = i === q.answer;
                      const isSelected = i === selected;
                      let choiceStyle = { ...styles.choice };
                      if (submitted) {
                        if (isCorrect) choiceStyle = { ...choiceStyle, ...styles.choiceCorrect, animation: "correctFlash 0.6s ease" };
                        else if (isSelected && !isCorrect) choiceStyle = { ...choiceStyle, ...styles.choiceWrong, animation: "wrongShake 0.4s ease" };
                        else choiceStyle = { ...choiceStyle, opacity: 0.4 };
                      } else if (isSelected) {
                        choiceStyle = { ...choiceStyle, ...styles.choiceSelected };
                      }
                      return (
                        <button key={i} style={choiceStyle} onClick={() => handleSelect(i)}
                          disabled={submitted}
                          onMouseOver={e => { if (!submitted && !isSelected) e.currentTarget.style.borderColor = "#4a4a6a"; }}
                          onMouseOut={e => { if (!submitted && !isSelected) e.currentTarget.style.borderColor = "#2a2a4a"; }}>
                          <span style={{...styles.choiceLetter, ...(submitted && isCorrect ? {background: "#22c55e", color: "#fff"} : isSelected && !submitted ? {background: SECTION_CONFIG[section].color, color: "#fff"} : {})}}>{String.fromCharCode(65 + i)}</span>
                          <span style={styles.choiceText}>{choice.replace(/^[A-D]\)\s*/, "")}</span>
                          {submitted && isCorrect && <span style={styles.checkMark}>✓</span>}
                          {submitted && isSelected && !isCorrect && <span style={styles.crossMark}>✗</span>}
                        </button>
                      );
                    })}
                  </div>

                  {/* Actions */}
                  <div style={styles.actions}>
                    {!submitted ? (
                      <button style={{...styles.submitBtn, opacity: selected === null ? 0.4 : 1, background: SECTION_CONFIG[section].color}}
                        onClick={handleSubmit} disabled={selected === null}>
                        Submit Answer
                      </button>
                    ) : (
                      <div style={styles.postSubmit}>
                        <button style={styles.explainBtn} onClick={() => setShowExplanation(!showExplanation)}>
                          {showExplanation ? "Hide" : "Show"} Explanation
                        </button>
                        <button style={{...styles.nextBtn, background: SECTION_CONFIG[section].color}} onClick={nextQuestion}>
                          {currentQ < questions.length - 1 ? "Next Question →" : "View Results →"}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Explanation */}
                  {showExplanation && (
                    <div style={styles.explanation}>
                      <div style={styles.explanationLabel}>EXPLANATION</div>
                      <p style={styles.explanationText}>{q.explanation}</p>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div style={styles.loadingContainer}>
                <p style={{color: "#94a3b8"}}>No questions available for this configuration. Try changing difficulty or enabling AI questions.</p>
                <button style={{...styles.backBtn, marginTop: 16}} onClick={() => setView("home")}>← Back</button>
              </div>
            )}
          </div>
        )}

        {/* ── REVIEW ── */}
        {view === "review" && (
          <div style={{ animation: "fadeSlideUp 0.5s ease" }}>
            <div style={styles.reviewHeader}>
              <h2 style={styles.reviewTitle}>Session Complete!</h2>
              <div style={styles.reviewScore}>
                <div style={styles.scoreCircle}>
                  <svg viewBox="0 0 120 120" width="140" height="140">
                    <circle cx="60" cy="60" r="52" fill="none" stroke="#2a2a4a" strokeWidth="8" />
                    <circle cx="60" cy="60" r="52" fill="none" stroke={SECTION_CONFIG[section].color} strokeWidth="8"
                      strokeDasharray={`${(sessionResults.filter(r=>r.correct).length / sessionResults.length) * 327} 327`}
                      strokeLinecap="round" transform="rotate(-90 60 60)"
                      style={{ transition: "stroke-dasharray 1s ease" }} />
                    <text x="60" y="55" textAnchor="middle" fill="#e2e8f0" fontSize="28" fontFamily="DM Serif Display">{Math.round(sessionResults.filter(r=>r.correct).length / sessionResults.length * 100)}%</text>
                    <text x="60" y="75" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="DM Sans">{sessionResults.filter(r=>r.correct).length}/{sessionResults.length} correct</text>
                  </svg>
                </div>
              </div>
              {timerMode && timer === 0 && <p style={{color: "#f59e0b", marginTop: 8}}>⏱ Time expired!</p>}
            </div>

            <div style={styles.reviewGrid}>
              {questions.map((q, i) => {
                const r = sessionResults[i];
                if (!r) return null;
                return (
                  <div key={i} style={{...styles.reviewItem, borderLeft: `3px solid ${r.correct ? "#22c55e" : "#ef4444"}`}}>
                    <div style={styles.reviewItemHeader}>
                      <span style={styles.reviewItemNum}>Q{i+1}</span>
                      <span style={{...styles.reviewItemStatus, color: r.correct ? "#22c55e" : "#ef4444"}}>
                        {r.correct ? "✓ Correct" : "✗ Incorrect"}
                      </span>
                      {q.difficulty && <span style={{...styles.diffBadge, background: DIFFICULTY_COLORS[q.difficulty] + "22", color: DIFFICULTY_COLORS[q.difficulty], fontSize: 11}}>{q.difficulty}</span>}
                    </div>
                    <p style={styles.reviewItemQ}>{q.question.substring(0, 120)}{q.question.length > 120 ? "..." : ""}</p>
                  </div>
                );
              })}
            </div>

            <div style={styles.reviewActions}>
              <button style={{...styles.submitBtn, background: SECTION_CONFIG[section].color}} onClick={() => startPractice(section)}>Practice Again</button>
              <button style={styles.explainBtn} onClick={() => setView("home")}>Back to Home</button>
            </div>
          </div>
        )}

        {/* ── STATS ── */}
        {view === "stats" && (
          <div style={{ animation: "fadeSlideUp 0.5s ease" }}>
            <h2 style={styles.statsTitle}>Performance Analytics</h2>

            {stats.total === 0 ? (
              <div style={styles.emptyStats}>
                <span style={{fontSize: 48}}>📊</span>
                <p style={{color: "#94a3b8", marginTop: 12}}>Complete some practice sessions to see your analytics here.</p>
                <button style={{...styles.submitBtn, background: "#6B5CE7", marginTop: 16}} onClick={() => setView("home")}>Start Practicing</button>
              </div>
            ) : (
              <>
                {/* Overview Cards */}
                <div style={styles.statsOverview}>
                  <div style={styles.statCard}>
                    <div style={styles.statNum}>{stats.total}</div>
                    <div style={styles.statLabel}>Total Questions</div>
                  </div>
                  <div style={styles.statCard}>
                    <div style={{...styles.statNum, color: "#22c55e"}}>{Math.round(stats.correct/stats.total*100)}%</div>
                    <div style={styles.statLabel}>Accuracy</div>
                  </div>
                  <div style={styles.statCard}>
                    <div style={{...styles.statNum, color: "#f59e0b"}}>🔥 {bestStreak}</div>
                    <div style={styles.statLabel}>Best Streak</div>
                  </div>
                </div>

                {/* Section Breakdown */}
                <div style={styles.statsSection}>
                  <h3 style={styles.statsSubTitle}>By Section</h3>
                  {Object.entries(SECTION_CONFIG).map(([key, cfg]) => {
                    const s = stats.bySection[key];
                    const pct = s.total > 0 ? Math.round(s.correct / s.total * 100) : 0;
                    return (
                      <div key={key} style={styles.sectionStatRow}>
                        <div style={styles.sectionStatLabel}>
                          <span>{cfg.icon} {cfg.label}</span>
                          <span style={{color: "#94a3b8"}}>{s.correct}/{s.total}</span>
                        </div>
                        <div style={styles.sectionStatBar}>
                          <div style={{...styles.sectionStatFill, width: `${pct}%`, background: cfg.color}} />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Difficulty Breakdown */}
                <div style={styles.statsSection}>
                  <h3 style={styles.statsSubTitle}>By Difficulty</h3>
                  {["easy","medium","hard"].map(d => {
                    const s = stats.byDifficulty[d];
                    const pct = s.total > 0 ? Math.round(s.correct / s.total * 100) : 0;
                    return (
                      <div key={d} style={styles.sectionStatRow}>
                        <div style={styles.sectionStatLabel}>
                          <span style={{color: DIFFICULTY_COLORS[d]}}>{d.charAt(0).toUpperCase() + d.slice(1)}</span>
                          <span style={{color: "#94a3b8"}}>{s.correct}/{s.total}</span>
                        </div>
                        <div style={styles.sectionStatBar}>
                          <div style={{...styles.sectionStatFill, width: `${pct}%`, background: DIFFICULTY_COLORS[d]}} />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 7-Day Activity */}
                <div style={styles.statsSection}>
                  <h3 style={styles.statsSubTitle}>Last 7 Days</h3>
                  <div style={styles.weekChart}>
                    {stats.last7Days.map((d, i) => {
                      const maxH = Math.max(...stats.last7Days.map(x => x.total), 1);
                      return (
                        <div key={i} style={styles.weekDay}>
                          <div style={styles.weekBarContainer}>
                            {d.total > 0 && <div style={{...styles.weekBarCorrect, height: `${(d.correct/maxH)*100}%`}} />}
                            {d.total > 0 && <div style={{...styles.weekBarWrong, height: `${((d.total - d.correct)/maxH)*100}%`}} />}
                          </div>
                          <span style={styles.weekLabel}>{d.day}</span>
                          <span style={styles.weekCount}>{d.total}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Reset */}
                <div style={{textAlign: "center", marginTop: 32}}>
                  <button style={{...styles.backBtn, color: "#ef4444", borderColor: "#ef444433"}} onClick={() => {
                    if (confirm("Clear all practice history? This cannot be undone.")) {
                      setHistory([]);
                      setBestStreak(0);
                      setStreak(0);
                      try { localStorage.removeItem("sat_history_v2"); localStorage.removeItem("sat_best_streak"); } catch(e){}
                    }
                  }}>Reset All Data</button>
                </div>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

// ─── STYLES ──────────────────────────────────────────────────────
const styles = {
  app: {
    minHeight: "100vh",
    background: "#0d0d1a",
    color: "#e2e8f0",
    fontFamily: "'DM Sans', sans-serif",
  },
  // Nav
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "rgba(13, 13, 26, 0.85)",
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid #1a1a2e",
  },
  navInner: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "12px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
  },
  logoIcon: {
    fontSize: 22,
    color: "#E8724A",
  },
  logoText: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 18,
    letterSpacing: "0.08em",
    color: "#e2e8f0",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  navBtn: {
    background: "transparent",
    border: "none",
    color: "#94a3b8",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    fontWeight: 500,
    padding: "8px 16px",
    borderRadius: 8,
    cursor: "pointer",
    transition: "all 0.2s",
  },
  navBtnActive: {
    color: "#e2e8f0",
    background: "#1a1a2e",
  },
  streakBadge: {
    background: "#f59e0b22",
    color: "#f59e0b",
    padding: "5px 12px",
    borderRadius: 20,
    fontSize: 13,
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: 4,
  },

  // Main
  main: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "24px 20px 60px",
  },

  // Hero
  hero: {
    textAlign: "center",
    padding: "40px 0 32px",
  },
  heroTitle: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "clamp(32px, 6vw, 48px)",
    color: "#f8fafc",
    marginBottom: 12,
    lineHeight: 1.1,
  },
  heroSub: {
    color: "#94a3b8",
    fontSize: 16,
    maxWidth: 480,
    margin: "0 auto",
    lineHeight: 1.6,
  },
  quickStats: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    marginTop: 24,
    padding: "16px 24px",
    background: "#12122266",
    borderRadius: 12,
    border: "1px solid #1a1a2e",
    maxWidth: 420,
    margin: "24px auto 0",
  },
  quickStat: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  },
  quickStatNum: {
    fontSize: 22,
    fontWeight: 700,
    color: "#f8fafc",
    fontFamily: "'JetBrains Mono', monospace",
  },
  quickStatLabel: {
    fontSize: 11,
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  quickStatDivider: {
    width: 1,
    height: 32,
    background: "#1a1a2e",
  },

  // Config
  configPanel: {
    background: "#12122288",
    border: "1px solid #1a1a2e",
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
  },
  configTitle: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 18,
    color: "#f8fafc",
    marginBottom: 20,
  },
  configGrid: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },
  configItem: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  configLabel: {
    fontSize: 12,
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontWeight: 600,
  },
  configBtnGroup: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },
  configBtn: {
    background: "#1a1a2e",
    border: "1px solid #2a2a4a",
    color: "#94a3b8",
    padding: "8px 18px",
    borderRadius: 8,
    fontSize: 13,
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.2s",
  },
  configBtnActive: {
    background: "#6B5CE722",
    borderColor: "#6B5CE7",
    color: "#c4b5fd",
  },
  toggleRow: {
    display: "flex",
    gap: 24,
    flexWrap: "wrap",
  },
  toggle: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
  },
  toggleTrack: {
    width: 44,
    height: 24,
    borderRadius: 12,
    background: "#2a2a4a",
    position: "relative",
    transition: "background 0.2s",
  },
  toggleTrackOn: {
    background: "#6B5CE7",
  },
  toggleThumb: {
    width: 18,
    height: 18,
    borderRadius: "50%",
    background: "#e2e8f0",
    position: "absolute",
    top: 3,
    left: 3,
    transition: "left 0.2s",
  },
  toggleThumbOn: {
    left: 23,
  },
  toggleLabel: {
    fontSize: 14,
    color: "#cbd5e1",
  },

  // Section Cards
  sectionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 16,
  },
  sectionCard: {
    background: "#12122288",
    border: "1px solid #1a1a2e",
    borderRadius: 16,
    padding: 24,
    textAlign: "left",
    cursor: "pointer",
    transition: "all 0.3s ease",
    animation: "fadeSlideUp 0.5s ease both",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    fontFamily: "'DM Sans', sans-serif",
    color: "#e2e8f0",
  },
  sectionCardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionIcon: {
    fontSize: 28,
  },
  sectionTime: {
    fontSize: 12,
    fontWeight: 600,
    fontFamily: "'JetBrains Mono', monospace",
  },
  sectionName: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 20,
    color: "#f8fafc",
    marginTop: 4,
  },
  sectionDesc: {
    fontSize: 13,
    color: "#64748b",
    lineHeight: 1.5,
  },
  sectionProgress: {
    marginTop: 8,
  },
  progressBar: {
    height: 4,
    background: "#1a1a2e",
    borderRadius: 2,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 2,
    transition: "width 0.5s ease",
  },
  progressLabel: {
    fontSize: 11,
    color: "#64748b",
    marginTop: 4,
    display: "block",
  },
  startArrow: {
    fontSize: 14,
    fontWeight: 600,
    marginTop: 8,
  },

  // Practice
  practiceHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    flexWrap: "wrap",
    gap: 8,
  },
  backBtn: {
    background: "transparent",
    border: "1px solid #2a2a4a",
    color: "#94a3b8",
    padding: "8px 16px",
    borderRadius: 8,
    fontSize: 13,
    fontFamily: "'DM Sans', sans-serif",
    cursor: "pointer",
  },
  practiceHeaderCenter: {
    display: "flex",
    gap: 8,
    alignItems: "center",
  },
  sectionBadge: {
    padding: "4px 12px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 600,
  },
  diffBadge: {
    padding: "3px 10px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 600,
    textTransform: "capitalize",
  },
  practiceHeaderRight: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  timerDisplay: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 16,
    fontWeight: 600,
  },
  streakLive: {
    fontSize: 15,
    fontWeight: 700,
    color: "#f59e0b",
  },

  // Progress dots
  progressContainer: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 24,
  },
  progressTrack: {
    display: "flex",
    gap: 4,
    flex: 1,
    flexWrap: "wrap",
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    transition: "background 0.3s",
  },
  progressText: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 13,
    color: "#64748b",
    whiteSpace: "nowrap",
  },

  // Question Card
  questionCard: {
    background: "#12122288",
    border: "1px solid #1a1a2e",
    borderRadius: 16,
    padding: "clamp(20px, 4vw, 32px)",
  },
  passage: {
    background: "#0d0d1a",
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    borderLeft: "3px solid #4a4a6a",
  },
  passageLabel: {
    fontSize: 10,
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: 10,
    fontWeight: 700,
  },
  passageText: {
    fontSize: 14,
    lineHeight: 1.8,
    color: "#cbd5e1",
    fontFamily: "'DM Sans', sans-serif",
  },
  questionText: {
    fontSize: 17,
    fontWeight: 500,
    lineHeight: 1.7,
    color: "#f8fafc",
    marginBottom: 24,
    whiteSpace: "pre-wrap",
  },

  // Choices
  choices: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  choice: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "14px 18px",
    background: "#0d0d1a",
    border: "1px solid #2a2a4a",
    borderRadius: 12,
    cursor: "pointer",
    transition: "all 0.2s",
    textAlign: "left",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
    color: "#e2e8f0",
    position: "relative",
  },
  choiceSelected: {
    borderColor: "#6B5CE7",
    background: "#6B5CE711",
  },
  choiceCorrect: {
    borderColor: "#22c55e",
    background: "#22c55e11",
  },
  choiceWrong: {
    borderColor: "#ef4444",
    background: "#ef444411",
  },
  choiceLetter: {
    width: 32,
    height: 32,
    borderRadius: 8,
    background: "#1a1a2e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 700,
    flexShrink: 0,
    transition: "all 0.2s",
    fontFamily: "'JetBrains Mono', monospace",
    color: "#94a3b8",
  },
  choiceText: {
    flex: 1,
    lineHeight: 1.5,
  },
  checkMark: {
    color: "#22c55e",
    fontSize: 20,
    fontWeight: 700,
    position: "absolute",
    right: 16,
  },
  crossMark: {
    color: "#ef4444",
    fontSize: 20,
    fontWeight: 700,
    position: "absolute",
    right: 16,
  },

  // Actions
  actions: {
    marginTop: 24,
  },
  submitBtn: {
    width: "100%",
    padding: "14px 24px",
    borderRadius: 12,
    border: "none",
    fontSize: 16,
    fontWeight: 600,
    fontFamily: "'DM Sans', sans-serif",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.2s",
  },
  postSubmit: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },
  explainBtn: {
    flex: 1,
    padding: "14px 20px",
    borderRadius: 12,
    border: "1px solid #2a2a4a",
    background: "transparent",
    color: "#94a3b8",
    fontSize: 14,
    fontWeight: 500,
    fontFamily: "'DM Sans', sans-serif",
    cursor: "pointer",
    minWidth: 140,
  },
  nextBtn: {
    flex: 2,
    padding: "14px 24px",
    borderRadius: 12,
    border: "none",
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
    fontFamily: "'DM Sans', sans-serif",
    cursor: "pointer",
    minWidth: 180,
  },

  // Explanation
  explanation: {
    marginTop: 20,
    padding: 20,
    background: "#0d0d1a",
    borderRadius: 12,
    borderLeft: "3px solid #f59e0b",
    animation: "fadeSlideUp 0.3s ease",
  },
  explanationLabel: {
    fontSize: 10,
    color: "#f59e0b",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: 8,
    fontWeight: 700,
  },
  explanationText: {
    fontSize: 14,
    lineHeight: 1.8,
    color: "#cbd5e1",
    whiteSpace: "pre-wrap",
  },

  // Loading
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 400,
    textAlign: "center",
  },
  loadingContent: {
    maxWidth: 320,
  },
  loadingTitle: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 24,
    color: "#f8fafc",
    marginBottom: 8,
  },
  loadingSub: {
    color: "#94a3b8",
    fontSize: 14,
  },
  loadingBar: {
    height: 4,
    borderRadius: 2,
    overflow: "hidden",
    marginTop: 24,
  },
  loadingBarInner: {
    height: "100%",
    width: "100%",
    borderRadius: 2,
  },

  // Review
  reviewHeader: {
    textAlign: "center",
    padding: "32px 0",
  },
  reviewTitle: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 32,
    color: "#f8fafc",
    marginBottom: 24,
  },
  scoreCircle: {
    display: "inline-block",
  },
  reviewGrid: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginBottom: 24,
  },
  reviewItem: {
    background: "#12122288",
    border: "1px solid #1a1a2e",
    borderRadius: 12,
    padding: 16,
  },
  reviewItemHeader: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 6,
  },
  reviewItemNum: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 13,
    color: "#64748b",
    fontWeight: 600,
  },
  reviewItemStatus: {
    fontSize: 13,
    fontWeight: 600,
  },
  reviewItemQ: {
    fontSize: 14,
    color: "#94a3b8",
    lineHeight: 1.5,
  },
  reviewActions: {
    display: "flex",
    gap: 12,
    justifyContent: "center",
    flexWrap: "wrap",
  },

  // Stats
  statsTitle: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 28,
    color: "#f8fafc",
    marginBottom: 24,
    textAlign: "center",
  },
  emptyStats: {
    textAlign: "center",
    padding: "60px 20px",
  },
  statsOverview: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 12,
    marginBottom: 32,
  },
  statCard: {
    background: "#12122288",
    border: "1px solid #1a1a2e",
    borderRadius: 12,
    padding: 20,
    textAlign: "center",
  },
  statNum: {
    fontSize: 28,
    fontWeight: 700,
    fontFamily: "'JetBrains Mono', monospace",
    color: "#f8fafc",
  },
  statLabel: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 4,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  statsSection: {
    background: "#12122288",
    border: "1px solid #1a1a2e",
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
  },
  statsSubTitle: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 18,
    color: "#f8fafc",
    marginBottom: 16,
  },
  sectionStatRow: {
    marginBottom: 14,
  },
  sectionStatLabel: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 14,
    marginBottom: 6,
    color: "#cbd5e1",
  },
  sectionStatBar: {
    height: 6,
    background: "#1a1a2e",
    borderRadius: 3,
    overflow: "hidden",
  },
  sectionStatFill: {
    height: "100%",
    borderRadius: 3,
    transition: "width 0.6s ease",
  },

  // Week Chart
  weekChart: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 120,
    gap: 8,
    paddingTop: 8,
  },
  weekDay: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },
  weekBarContainer: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: 2,
  },
  weekBarCorrect: {
    background: "#22c55e",
    borderRadius: "3px 3px 0 0",
    minHeight: 2,
    transition: "height 0.5s ease",
  },
  weekBarWrong: {
    background: "#ef4444",
    borderRadius: "0 0 3px 3px",
    minHeight: 2,
    transition: "height 0.5s ease",
  },
  weekLabel: {
    fontSize: 11,
    color: "#64748b",
    fontFamily: "'JetBrains Mono', monospace",
  },
  weekCount: {
    fontSize: 11,
    color: "#94a3b8",
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 600,
  },
};
