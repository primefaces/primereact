import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/progressspinner/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React ProgressSpinner Component',
    description: 'ProgressSpinner is a process status indicator.'
};

export default function ProgressSpinnerPage() {
    const docs = {
        features
    };

    return <DocComponent header="ProgressSpinner" description={metadata.description} docs={docs} apiKeys={['ProgressSpinner']} />;
}
