import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AccessibilityDoc = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/guides/accessibility');
    });
};

export default AccessibilityDoc;
