import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/badge/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React Badge Component',
    description: 'Badge is a small status indicator for another element.'
};

export default function BadgePage() {
    const docs = {
        features
    };

    return <DocComponent header="Badge" description={metadata.description} docs={docs} apiKeys={['Badge']} />;
}
