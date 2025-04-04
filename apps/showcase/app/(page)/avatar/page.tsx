import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/avatar/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React Avatar Component',
    description: 'Avatar represents people using icons, labels and images.'
};

export default function AvatarPage() {
    const docs = {
        features
    };

    return <DocComponent header="Avatar" description={metadata.description} docs={docs} apiKeys={['Avatar']} />;
}
