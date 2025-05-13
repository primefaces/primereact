import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/toolbar/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React Toolbar Component',
    description: 'Toolbar is a grouping component for buttons and other content.'
};

export default function ToolbarPage() {
    const docs = {
        features
    };

    return <DocComponent header="Toolbar" description={metadata.description} docs={docs} apiKeys={['Toolbar']} />;
}
