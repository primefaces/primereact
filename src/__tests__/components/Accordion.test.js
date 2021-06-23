import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Accordion, AccordionTab } from '../../components/accordion/Accordion';

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

    test('should have a two accordion tab', () => {
        const { container } = render(
            <Accordion>
                <AccordionTab header="Header I">
                    Content I
                </AccordionTab>
                <AccordionTab header="Header II">
                    Content II
                </AccordionTab>
            </Accordion>
        );

        const tabElements = container.querySelectorAll('.p-accordion-tab');
        expect(tabElements.length).toBe(2);
    });

    test('should change header', () => {
        const { container } = render(
            <Accordion>
                <AccordionTab header="Header">
                    Content
                </AccordionTab>
            </Accordion>
        );

        const accordionElement = container.firstChild;
        const headerElement = accordionElement.querySelector('.p-accordion-header-text');
        headerElement.textContent = 'PrimeReact';

        expect(headerElement.textContent).toContain('PrimeReact');
    });

    test('should have selected first accordionTab and second accordionTab should be unselected', () => {
        const { container } = render(
            <Accordion activeIndex={0}>
                <AccordionTab header="Header I">
                    Content I
                </AccordionTab>
                <AccordionTab header="Header II">
                    Content II
                </AccordionTab>
            </Accordion>
        );

        const firstAccordionTabHeaderEl = container.querySelectorAll('.p-accordion-header')[0];
        const secondAccordionTabHeaderEl = container.querySelectorAll('.p-accordion-header')[1];


        expect(firstAccordionTabHeaderEl.className).toContain('p-highlight');
        expect(secondAccordionTabHeaderEl.className).not.toContain('p-highlight');

    });

    test('should have a multiple select and all accordionTabs should be selected', () => {
        const { container } = render(
            <Accordion multiple>
                <AccordionTab header="Header I">
                    Content I
                </AccordionTab>
                <AccordionTab header="Header II">
                    Content II
                </AccordionTab>
            </Accordion>
        );

        const firstAccordionTabHeaderEl = container.querySelectorAll('.p-accordion-header')[0];
        const secondAccordionTabHeaderEl = container.querySelectorAll('.p-accordion-header')[1];

        const firstAccordionTabOpenEl = container.querySelectorAll('.p-accordion-header-link')[0];
        const secondAccordionTabOpenEl = container.querySelectorAll('.p-accordion-header-link')[1];

        fireEvent.click(firstAccordionTabOpenEl);
        fireEvent.click(secondAccordionTabOpenEl);

        expect(firstAccordionTabHeaderEl.className).toContain('p-highlight');
        expect(secondAccordionTabHeaderEl.className).toContain('p-highlight');
    });

    test('should disabled', () => {
        const { container } = render(
            <Accordion>
                <AccordionTab disabled header="Header">
                    Content
                </AccordionTab>
            </Accordion>
        );

        const accordionTabOpenEl = container.querySelectorAll('.p-accordion-header-link')[0];
        const accordionTabHeaderEl = container.querySelectorAll('.p-accordion-header')[0];

        accordionTabOpenEl.click();

        expect(accordionTabHeaderEl.className).toContain('p-disabled');
        expect(accordionTabHeaderEl.className).not.toContain("p-highlight")
    });

    test('should change expandIcon and collapsIcon', () => {
        const { container } = render(
            <Accordion collapseIcon="pi pi-fw pi-caret-left" expandIcon="pi pi-fw pi-caret-up">
                <AccordionTab header="Header">
                    Content
                </AccordionTab>
            </Accordion>
        );

        const accordionTabOpenEl = container.querySelector('.p-accordion-toggle-icon');
        expect(accordionTabOpenEl.className).toContain('pi-caret-up');
        fireEvent.click(accordionTabOpenEl);
        expect(accordionTabOpenEl.className).toContain('pi-caret-left');

    });

    it('should get className', () => {
        const { container } = render(
            <Accordion className="alwaysbetonprime">
                <AccordionTab header="Header">
                    Content
                </AccordionTab>
            </Accordion>
        );

        const accordionEl = container.querySelector('.p-accordion');
        expect(accordionEl.className).toContain('alwaysbetonprime');
    });

    test('should get style', () => {
        const { container } = render(
            <Accordion style={{ height: '300px' }}>
                <AccordionTab header="Header">
                    Content
                </AccordionTab>
            </Accordion>
        );

        const accordionEl = container.querySelector('.p-accordion');
        expect(accordionEl.style.height).toContain('300px');
    });

})
