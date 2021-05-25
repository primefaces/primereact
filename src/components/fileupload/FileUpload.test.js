import React from 'react';
import { render } from '@testing-library/react';
import { FileUpload } from './FileUpload';

describe('FileUpload Component', () => {
    test('should display the FileUpload', () => {
        const { container } = render(<FileUpload name="demo" url="./upload" />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();

    })
})