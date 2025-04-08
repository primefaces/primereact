import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/progressbar/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React ProgressBar Component',
    description: 'ProgressBar is a process status indicator.'
};

export default function ProgressBarPage() {
    const docs = {
        features
    };

    return <DocComponent header="ProgressBar" description={metadata.description} docs={docs} apiKeys={['ProgressBar']} />;
}
