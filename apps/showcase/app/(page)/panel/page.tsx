import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/panel/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React Panel Component',
    description: 'Panel is a grouping component providing with content toggle feature.'
};

export default function PanelPage() {
    const docs = {
        features
    };

    return <DocComponent header="Panel" description={metadata.description} docs={docs} apiKeys={['Panel']} />;
}
