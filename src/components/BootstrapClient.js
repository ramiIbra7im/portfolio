// components/BootstrapClient.js
'use client';
import { useEffect } from 'react';

export default function BootstrapClient() {
    useEffect(() => {
        // تأكد إن المسار صحيح
        import('bootstrap/dist/js/bootstrap.bundle.min.js')
            .then((bootstrap) => {
            })
            .catch((error) => {
            });
    }, []);

    return null;
}