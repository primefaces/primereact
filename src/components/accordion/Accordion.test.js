import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Accordion, AccordionTab } from './Accordion';

describe('Accordion Component', () => {
    test('should display the Accordion', () => {
        const { container } = render(<Accordion />);
        const accordionElement = container.firstChild;

        expect(accordionElement).toBeInTheDocument();
        expect(accordionElement).toHaveClass('p-accordion p-component');
    });

    test('should display header', () => {
        const { container } = render(
            <Accordion activeIndex={0}>
                <AccordionTab header="PrimeReact">
                    PrimeReact
                </AccordionTab>
            </Accordion>
        );

        const accordionElement = container.firstChild;
        const accordionTabElement = accordionElement.firstChild;
        const headerElement = accordionTabElement.firstChild

        expect(accordionTabElement).toBeInTheDocument();
        expect(headerElement.firstChild).toHaveClass('p-accordion-header-link');
    });

    test('should open tab', () => {
        const { container } = render(
            <Accordion >
                <AccordionTab header="PrimeReact">
                    PrimeReact
                </AccordionTab>
            </Accordion>
        );

        let contentElement = container.querySelector('.p-accordion-content');
        expect(contentElement).toBeFalsy();

        const linkElement = container.querySelector('.p-accordion-header-link');
        fireEvent.click(linkElement)
        contentElement = container.querySelector('.p-accordion-content');

        expect(contentElement).toBeInTheDocument();
        expect(contentElement.textContent).toContain('PrimeReact');

    });
})