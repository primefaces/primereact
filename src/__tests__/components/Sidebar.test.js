import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Button } from '../../components/button/Button';

const SidebarTestComponent = () => {

    const [visible, setVisible] = useState(false);

    return (
        <>
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                Content</Sidebar>
            <Button icon="pi pi-arrow-right" onClick={(e) => setVisible(true)} />
        </>
    )
}

describe('Sidebar Component', () => {
    test('should display the Sidebar', () => {
        const { container } = render(<SidebarTestComponent />);


    })
})