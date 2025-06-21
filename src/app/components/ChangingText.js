"use client"
import React, { useEffect, useState } from 'react';

const ChangingText = ({ texts = [], speed = 100, pause = 1000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    let timeout;

    if (!deleting && charIndex < texts[index].length) {
      // كتابة النص
      timeout = setTimeout(() => {
        setCurrentText(texts[index].slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (deleting && charIndex > 0) {
      // حذف النص
      timeout = setTimeout(() => {
        setCurrentText(texts[index].slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, speed / 2);
    } else if (!deleting && charIndex === texts[index].length) {
      // انتظر شوية قبل ما تبدأ تمسح
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex === 0) {
      // بعد المسح، روح للكلمة اللي بعدها
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index, texts, speed, pause]);

  return (
    <span className="typing-effect">
      {currentText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

export default ChangingText;
