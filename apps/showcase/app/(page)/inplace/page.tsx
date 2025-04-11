import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/inplace/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React Inplace Component',
    description: 'Inplace is a component that allows you to display and edit content in a single component.'
};

export default function InplacePage() {
    const docs = {
        features
    };

    return <DocComponent header="Inplace" description={metadata.description} docs={docs} apiKeys={['Inplace']} />;
}
