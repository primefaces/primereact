import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/card/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React Card Component',
    description: 'Card is a flexible container component.'
};

export default function CardPage() {
    const docs = {
        features
    };

    return <DocComponent header="Card" description={metadata.description} docs={docs} apiKeys={['Card']} />;
}
