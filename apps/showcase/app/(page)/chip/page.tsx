import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/chip/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React Chip Component',
    description: 'Chip represents people using icons, labels and images.'
};

export default function ChipPage() {
    const docs = {
        features
    };

    return <DocComponent header="Chip" description={metadata.description} docs={docs} apiKeys={['Chip']} />;
}
