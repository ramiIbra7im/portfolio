// components/BootstrapClient.js
'use client';
import { useEffect } from 'react';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function BootstrapClient() {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js')
    }, []);

    return null; // مفيش UI، بس مجرد تحميل للسكريبت
}
