import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/checkbox/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React Checkbox Component',
    description: 'Checkbox is an extension to standard checkbox element with theming.'
};

export default function CheckboxPage() {
    const docs = {
        features
    };

    return <DocComponent header="Checkbox" description={metadata.description} docs={docs} apiKeys={['Checkbox']} />;
}
