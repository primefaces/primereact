import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/divider/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React Divider Component',
    description: 'Divider is used to separate contents..'
};

export default function DividerPage() {
    const docs = {
        features
    };

    return <DocComponent header="Divider" description={metadata.description} docs={docs} apiKeys={['Divider']} />;
}
