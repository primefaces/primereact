import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/splitter/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React Splitter Component',
    description: 'Splitter is utilized to separate and resize panels.'
};

export default function SplitterPage() {
    const docs = {
        features
    };

    return <DocComponent header="Splitter" description={metadata.description} docs={docs} apiKeys={['Splitter']} />;
}
