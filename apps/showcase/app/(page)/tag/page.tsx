import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/tag/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React Checkbox Component',
    description: 'Checkbox is an extension to standard checkbox element with theming.'
};

export default function TagPage() {
    const docs = {
        features
    };

    return <DocComponent header="Tag" description={metadata.description} docs={docs} apiKeys={['Chip']} />;
}
