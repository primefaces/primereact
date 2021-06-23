import React from 'react';
import { render } from '@testing-library/react';
import { FileUpload } from '../../components/fileupload/FileUpload';

describe('FileUpload Component', () => {
    test('should display the FileUpload', () => {
        const { container } = render(<FileUpload name="demo" url="./upload" mode="basic" />);
        const fileUploadElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(fileUploadElement).toBeInTheDocument();
        expect(fileUploadElement).toHaveClass('p-fileupload p-fileupload-basic p-component');
    })
})