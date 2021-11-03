import React from 'react';
import { render } from '@testing-library/react';
import { ConfirmDialog } from '../../components/confirmdialog/ConfirmDialog';
import { Button } from '../../components/button/Button';

describe('ConfirmDialog Component', () => {
    test('should display the ConfirmDialog', () => {
        let visible = false
        const { container } = render(
            <>
                <ConfirmDialog visible={true} message="Are you sure you want to proceed?"
                    header="Confirmation" icon="pi pi-exclamation-triangle" />
                <Button onClick={() => visible = true} icon="pi pi-check" label="Confirm" />
            </>
        );

        expect(container).toBeInTheDocument();

    })
})