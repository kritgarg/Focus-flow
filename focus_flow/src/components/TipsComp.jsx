import React, { useEffect, useState } from 'react';

const TIPS = [
  { text: "Practice mindfulness for 5 minutes before starting deep work.", category: "Wellness" },
  { text: "Use the Pomodoro technique to stay focused in intervals.", category: "Time Management" },
  { text: "Start your day with the most important task.", category: "Prioritization" },
  { text: "Eliminate distractions by turning off notifications.", category: "Focus" },
  { text: "Take regular breaks to refresh your mind.", category: "Health" },
];

const TipComp = () => {
  const [currentTip, setCurrentTip] = useState(TIPS[0]);
  const [savedTips, setSavedTips] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedTips'));
    if (saved) setSavedTips(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('savedTips', JSON.stringify(savedTips));
  }, [savedTips]);

  const getRandomTip = () => {
    const newTip = TIPS[Math.floor(Math.random() * TIPS.length)];
    setCurrentTip(newTip);
  };

  const saveTip = () => {
    const isAlreadySaved = savedTips.some(t => t.text === currentTip.text);
    if (!isAlreadySaved) {
      setSavedTips(prev => [...prev, currentTip]);
    }
  };

  const deleteTip = (text) => {
    setSavedTips(prev => prev.filter(t => t.text !== text));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-800">
      <h2 className="text-xl font-bold mb-4">💡 Tip of the Day</h2>
      <div className="bg-yellow-100 p-4 rounded-md mb-6">
        <p className="italic text-lg">"{currentTip.text}"</p>
        <span className="mt-2 inline-block px-3 py-1 text-sm rounded-full bg-gray-200">{currentTip.category}</span>
      </div>

      <div className="flex gap-3 mb-8">
        <button onClick={getRandomTip} className="px-4 py-2 border rounded hover:bg-gray-100 cursor-pointer ">🔄 New Tip</button>
        <button onClick={saveTip} className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-500 cursor-pointer ">🔖 Save Tip</button>
      </div>

      <h3 className="text-lg font-semibold mb-2">Saved Tips ({savedTips.length})</h3>
      <div className="bg-white shadow-md rounded p-4">
        {savedTips.length === 0 ? (
          <p className="text-gray-500">You haven't saved any tips yet.</p>
        ) : (
          savedTips.map((tip, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b last:border-none">
              <div>
                <p className="italic">"{tip.text}"</p>
                <span className="text-sm text-gray-600">{tip.category}</span>
              </div>
              <button
                onClick={() => deleteTip(tip.text)}
                className="text-red-500 hover:text-red-700  cursor-pointer "
              >
                🗑️ Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TipComp;
