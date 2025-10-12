// components/BootstrapClient.js
'use client';
import { useEffect } from 'react';

export default function BootstrapClient() {
    useEffect(() => {
        // تأكد إن المسار صحيح
        import('bootstrap/dist/js/bootstrap.bundle.min.js')
            .then((bootstrap) => {
                console.log('Bootstrap loaded successfully');
            })
            .catch((error) => {
                console.error('Error loading Bootstrap:', error);
            });
    }, []);

    return null;
}