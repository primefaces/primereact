import { CodeViewerProps } from './CodeViewer.types';

export const defaultViewerProps: CodeViewerProps = {
    source: undefined,
    //sectionOrder: [], toolbarOrder
    lang: 'tsx',
    theme: 'github-dark',
    langs: ['tsx'],
    themes: ['github-dark'],
    highlighterOptions: undefined,
    codeOptions: undefined,
    toggleableOrder: [],
    toggleable: true,
    copy: true,
    editors: ['stackblitz']
};
