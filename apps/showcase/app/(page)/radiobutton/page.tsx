import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/radiobutton/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React RadioButton Component',
    description: 'RadioButton is used to select one option from a list.'
};

export default function RadioButtonPage() {
    const docs = {
        features
    };

    return <DocComponent header="RadioButton" description={metadata.description} docs={docs} apiKeys={['RadioButton']} />;
}
