import React, { useEffect, useState } from 'react';

const ChangingText = ({ texts = [], speed = 150 }) => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (texts.length === 0) return; // تأكد من أن هناك نصوص

    let typingInterval;
    let resetTimeout;

    // كتابة النص حرفًا بحرف
    if (charIndex < texts[index].length) {
      typingInterval = setInterval(() => {
        setCurrentText((prevText) => prevText + texts[index][charIndex]);
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      }, speed);
    } else {
      clearInterval(typingInterval); // التوقف عند نهاية النص
      resetTimeout = setTimeout(() => {
        setCurrentText(''); // مسح النص بعد اكتماله
        setCharIndex(0); // إعادة تعيين charIndex
        setIndex((prevIndex) => (prevIndex + 1) % texts.length); // الانتقال إلى النص التالي
      }, 1000); // الانتظار لمدة ثانية قبل التبديل
    }

    return () => {
      clearInterval(typingInterval);
      clearTimeout(resetTimeout);
    };
  }, [index, charIndex, texts, speed]);

  return (
    <span className="typing-effect">{currentText}</span>
  );
};

export default ChangingText;
