// components/LoadingSpinner.js
'use client';
import { useEffect, useState } from 'react';
import styles from './LoadingSpinner.module.css';

export default function LoadingSpinner() {
    const [dots, setDots] = useState('');
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const dotsInterval = setInterval(() => {
            setDots(prev => prev.length >= 3 ? '' : prev + '.');
        }, 500);

        const progressInterval = setInterval(() => {
            setPercentage(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 1;
            });
        }, 15);

        return () => {
            clearInterval(dotsInterval);
            clearInterval(progressInterval);
        };
    }, []);

    return (
        <div className={styles.loadingContainer}>
            {/* الخلفية المتحركة */}
            <div className={styles.backgroundAnimation}>
                <div className={styles.floatingOrb} style={{ '--delay': '0s' }}></div>
                <div className={styles.floatingOrb} style={{ '--delay': '1s' }}></div>
                <div className={styles.floatingOrb} style={{ '--delay': '2s' }}></div>
            </div>

            {/* المحتوى الرئيسي */}
            <div className={styles.content}>
                {/* الشعار ثلاثي الأبعاد */}
                <div className={styles.logo3d}>
                    <div className={styles.logoCube}>
                        <div className={`${styles.cubeFace} ${styles.cubeFront}`}>R</div>
                        <div className={`${styles.cubeFace} ${styles.cubeBack}`}>B</div>
                        <div className={`${styles.cubeFace} ${styles.cubeTop}`}></div>
                        <div className={`${styles.cubeFace} ${styles.cubeBottom}`}></div>
                        <div className={`${styles.cubeFace} ${styles.cubeLeft}`}></div>
                        <div className={`${styles.cubeFace} ${styles.cubeRight}`}></div>
                    </div>
                </div>

                {/* Spinner متطور مع النقط المتحركة */}
                <div className={styles.advancedSpinner}>
                    <div className={styles.spinnerRing}></div>
                    <div className={styles.spinnerCore}></div>
                    <div className={styles.spinnerOrbit}>
                        <div className={styles.orbitingDot}></div>
                        <div className={styles.orbitingDot} style={{ '--delay': '0.3s' }}></div>
                        <div className={styles.orbitingDot} style={{ '--delay': '0.6s' }}></div>
                    </div>
                </div>

                {/* النص مع تأثيرات */}
                <div className={styles.textContainer}>
                    <h3 className={styles.title}>
                        <span className={styles.titleChar}>L</span>
                        <span className={styles.titleChar}>o</span>
                        <span className={styles.titleChar}>a</span>
                        <span className={styles.titleChar}>d</span>
                        <span className={styles.titleChar}>i</span>
                        <span className={styles.titleChar}>n</span>
                        <span className={styles.titleChar}>g</span>
                    </h3>
                    <p className={styles.subtitle}>
                        {dots} Loding
                    </p>
                </div>

                {/* شريط التقدم المتطور */}
                <div className={styles.progressSection}>
                    <div className={styles.progressInfo}>
                        <span className={styles.percentage}>{percentage}%</span>
                        <span className={styles.status}>Initializing</span>
                    </div>
                    <div className={styles.progressContainer}>
                        <div
                            className={styles.progressFill}
                            style={{ width: `${percentage}%` }}
                        >
                            <div className={styles.progressGlow}></div>
                        </div>
                    </div>
                </div>

                {/* رسالة تحفيزية */}
                <div className={styles.motivational}>
                    <p>Great things take time...</p>
                </div>
            </div>
        </div>
    );
}