'use client';
import { useEffect } from 'react';

export default function Protection() {
    useEffect(() => {
        // منع النقر الأيمن
        const handleContextMenu = (e) => {
            e.preventDefault();
            return false;
        };

        // منع اختصارات لوحة المفاتيح
        const handleKeyDown = (e) => {
            // Ctrl+C, Ctrl+A, Ctrl+U, Ctrl+S, F12
            if (
                (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'a' || e.key === 'A' || e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S')) ||
                e.key === 'F12'
            ) {
                e.preventDefault();
                return false;
            }
        };

        // منع سحب العناصر
        const handleDragStart = (e) => {
            e.preventDefault();
            return false;
        };

        // إضافة Event Listeners
        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('dragstart', handleDragStart);

        // التنظيف
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('dragstart', handleDragStart);
        };
    }, []);

    return null; // هذا المكون لا يظهر أي شيء
}