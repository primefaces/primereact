import { withHeadless } from '@primereact/core/headless';
import { AlignType, SideType } from '@primereact/types/shared/placer';
import { addStyle, getOffset, getOuterHeight, getOuterWidth, getViewport } from '@primeuix/utils/dom';
import * as React from 'react';
import { defaultProps } from './usePlacer.props';

export const usePlacer = withHeadless({
    name: 'usePlacer',
    defaultProps,
    setup: ({ props }) => {
        const [effectiveSide, setEffectiveSide] = React.useState<SideType | null | undefined>(props.side);
        const [effectiveAlign, setEffectiveAlign] = React.useState<AlignType | null | undefined>(props.align);
        const arrowRef = React.useRef<HTMLElement | null | unknown>(null);
        const anchorRef = React.useRef<HTMLElement | null | unknown>(null);
        const containerRef = React.useRef<HTMLElement | null | unknown>(null);

        const state = {
            effectiveSide,
            effectiveAlign
        };

        const getAnchor = () => {
            if (anchorRef?.current && anchorRef?.current instanceof HTMLElement) {
                return anchorRef?.current;
            }

            // @ts-expect-error - Temporary fix for elementRef property access
            return anchorRef?.current?.elementRef?.current;
        };

        const getContainer = () => {
            if (containerRef?.current && containerRef?.current instanceof HTMLElement) {
                return containerRef?.current;
            }

            // @ts-expect-error - Temporary fix for elementRef property access
            return containerRef?.current?.elementRef?.current;
        };

        const getArrow = () => {
            if (arrowRef?.current && arrowRef?.current instanceof HTMLElement) {
                return arrowRef?.current;
            }

            // @ts-expect-error - Temporary fix for elementRef property access
            return arrowRef?.current?.elementRef?.current;
        };

        const placeTop = (align: AlignType) => {
            const container = getContainer();
            const anchor = getAnchor();

            if (!container || !anchor) return;

            const anchorOffset = getOffset(anchor);
            const tooltipWidth = getOuterWidth(container);
            const anchorWidth = getOuterWidth(anchor);
            const tooltipHeight = getOuterHeight(container);
            const arrowHeight = getOuterHeight(getArrow());

            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

            const left = getLeftByAlign(align, Number(anchorOffset.left), anchorWidth, tooltipWidth);

            const top = Number(anchorOffset.top) - tooltipHeight - (props.sideOffset ?? 0) - arrowHeight;

            container.style.transform = `translate(${left + scrollLeft}px, ${top - scrollTop}px)`;
        };

        const placeBottom = (align: AlignType) => {
            const container = getContainer();
            const anchor = getAnchor();

            if (!container || !anchor) return;

            const anchorOffset = getOffset(anchor);
            const tooltipWidth = getOuterWidth(container);
            const anchorWidth = getOuterWidth(anchor);
            const anchorHeight = getOuterHeight(anchor);
            const arrowHeight = getOuterHeight(getArrow());
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
            const left = getLeftByAlign(align, Number(anchorOffset.left), anchorWidth, tooltipWidth);

            const top = Number(anchorOffset.top) + anchorHeight + (props.sideOffset ?? 0) + arrowHeight;

            container.style.transform = `translate(${left + scrollLeft}px, ${top - scrollTop}px)`;
        };

        const placeLeft = (align: AlignType) => {
            const container = getContainer();
            const anchor = getAnchor();

            if (!container || !anchor) return;

            const anchorOffset = getOffset(anchor);
            const tooltipWidth = getOuterWidth(container);
            const tooltipHeight = getOuterHeight(container);
            const anchorHeight = getOuterHeight(anchor);
            const arrowWidth = getOuterWidth(getArrow());
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
            const top = getTopByAlign(align, Number(anchorOffset.top), anchorHeight, tooltipHeight);

            const left = Number(anchorOffset.left) - tooltipWidth - (props.sideOffset ?? 0) - arrowWidth;

            container.style.transform = `translate(${left + scrollLeft}px, ${top - scrollTop}px)`;
        };

        const placeRight = (align: AlignType) => {
            const container = getContainer();
            const anchor = getAnchor();

            if (!container || !anchor) return;

            const anchorOffset = getOffset(anchor);
            const tooltipHeight = getOuterHeight(container);
            const anchorHeight = getOuterHeight(anchor);
            const anchorWidth = getOuterWidth(anchor);
            const arrowWidth = getOuterWidth(getArrow());

            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
            const top = getTopByAlign(align, Number(anchorOffset.top), anchorHeight, tooltipHeight);

            const left = Number(anchorOffset.left) + anchorWidth + (props.sideOffset ?? 0) + arrowWidth;

            container.style.transform = `translate(${left + scrollLeft}px, ${top - scrollTop}px)`;
        };

        const getLeftByAlign = (align: AlignType, anchorLeft: number, anchorWidth: number, tooltipWidth: number): number => {
            switch (align) {
                case 'start':
                    return anchorLeft + (props.alignOffset ?? 0);
                case 'end':
                    return anchorLeft + anchorWidth - tooltipWidth - (props.alignOffset ?? 0);
                case 'center':
                default:
                    return anchorLeft + (anchorWidth - tooltipWidth) / 2;
            }
        };

        const getTopByAlign = (align: AlignType, anchorTop: number, anchorHeight: number, tooltipHeight: number): number => {
            switch (align) {
                case 'start':
                    return anchorTop + (props.alignOffset ?? 0);
                case 'end':
                    return anchorTop + anchorHeight - tooltipHeight - (props.alignOffset ?? 0);
                case 'center':
                default:
                    return anchorTop + (anchorHeight - tooltipHeight) / 2;
            }
        };

        const applyPlacement = () => {
            const container = getContainer();

            if (!container) return;

            addStyle(container, {
                position: 'fixed',
                left: '0',
                top: '0',
                willChange: 'transform'
            });

            const arrow = getArrow();

            if (arrow) {
                addStyle(arrow, {
                    position: 'absolute'
                });
            }

            const sideOptions = getSideOptions(props.side ?? 'top');
            const alignOptions = getAlignOptions(props.align ?? 'center');

            const { side, align } = tryPlacement(sideOptions, alignOptions);

            setEffectiveSide(side);
            setEffectiveAlign(align);

            container.style.setProperty('--placer-transform-origin', getTransformOrigin(side ?? 'top', align ?? 'center'));
        };

        const updateAttributes = (side: SideType, align: AlignType) => {
            const container = getContainer();

            if (container) {
                container?.setAttribute('data-side', side);
                container?.setAttribute('data-align', align);
            }

            const anchor = getAnchor();

            if (anchor) {
                anchor?.setAttribute('data-side', side);
                anchor?.setAttribute('data-align', align);
            }

            const arrow = getArrow();

            if (arrow) {
                arrow?.setAttribute('data-side', side);
                arrow?.setAttribute('data-align', align);
            }
        };

        const tryPlacement = (sideOptions: SideType[], alignOptions: AlignType[]) => {
            for (const side of sideOptions) {
                for (const align of alignOptions) {
                    updateAttributes(side, align);
                    placeContainer(side, align);
                    updateArrowPosition(side);

                    if (!isOutOfBounds()) {
                        return { side, align };
                    }
                }
            }

            return { side: props.side, align: props.align };
        };

        const getAlignOptions = (align: AlignType): AlignType[] => {
            switch (align) {
                case 'start':
                    return ['start', 'center', 'end'];
                case 'end':
                    return ['end', 'center', 'start'];
                case 'center':
                    return ['center', 'start', 'end'];
                default:
                    return ['center', 'start', 'end'];
            }
        };

        const getSideOptions = (side: SideType): SideType[] => {
            const allSides: SideType[] = ['top', 'right', 'bottom', 'left'];
            const flipped = flipSide(side);
            const remaining = allSides.filter((s) => s !== side && s !== flipped);

            return [side, flipped, ...remaining];
        };

        const flipSide = (side: SideType): SideType => {
            switch (side) {
                case 'top':
                    return 'bottom';
                case 'bottom':
                    return 'top';
                case 'left':
                    return 'right';
                case 'right':
                    return 'left';
                default:
                    return side;
            }
        };

        const placeContainer = (side: SideType, align: AlignType) => {
            switch (side) {
                case 'top':
                    placeTop(align);
                    break;
                case 'bottom':
                    placeBottom(align);
                    break;
                case 'left':
                    placeLeft(align);
                    break;
                case 'right':
                    placeRight(align);
                    break;
            }

            setEffectiveSide(side);
            setEffectiveAlign(align);
        };

        const isOutOfBounds = () => {
            const container = getContainer();
            const arrow = getArrow();

            if (!container) return false;

            const viewport = getViewport();
            const containerRect = container.getBoundingClientRect();
            const arrowRect = arrow?.getBoundingClientRect();

            const combinedRect = {
                top: Math.min(containerRect.top, arrowRect?.top ?? containerRect.top),
                left: Math.min(containerRect.left, arrowRect?.left ?? containerRect.left),
                right: Math.max(containerRect.right, arrowRect?.right ?? containerRect.right),
                bottom: Math.max(containerRect.bottom, arrowRect?.bottom ?? containerRect.bottom)
            };

            return combinedRect.left < 0 || combinedRect.top < 0 || combinedRect.right > viewport.width || combinedRect.bottom > viewport.height;
        };

        const getTransformOrigin = (side: SideType, align: AlignType): string => {
            const container = getContainer();
            const arrow = getArrow();

            if (!container) return 'center center';

            const containerRect = container.getBoundingClientRect();
            const arrowRect = arrow ? (arrow as HTMLElement).getBoundingClientRect() : null;

            let originX = containerRect.width / 2;
            let originY = containerRect.height / 2;

            if (arrowRect) {
                const arrowHeight = arrowRect.height;
                const arrowWidth = arrowRect.width;
                const arrowCenterX = arrowRect.left + arrowWidth / 2 - containerRect.left;
                const arrowCenterY = arrowRect.top + arrowHeight / 2 - containerRect.top;

                switch (side) {
                    case 'top':
                        originX = arrowCenterX;
                        originY = containerRect.height + arrowHeight;
                        break;
                    case 'bottom':
                        originX = arrowCenterX;
                        originY = 0;
                        break;
                    case 'left':
                        originX = containerRect.width + arrowWidth;
                        originY = arrowCenterY;
                        break;
                    case 'right':
                        originX = containerRect.left - arrowRect.left;
                        originY = arrowCenterY;
                        break;
                }
            } else {
                const alignTo = (type: 'x' | 'y', align: AlignType) => {
                    const dim = type === 'x' ? containerRect.width : containerRect.height;

                    switch (align) {
                        case 'start':
                            return 0;
                        case 'end':
                            return dim;
                        case 'center':
                            return dim / 2;
                    }
                };

                switch (side) {
                    case 'top':
                        originY = containerRect.height;
                        originX = alignTo('x', align);
                        break;
                    case 'bottom':
                        originY = 0;
                        originX = alignTo('x', align);

                        break;
                    case 'left':
                        originX = containerRect.width;
                        originY = alignTo('y', align);

                        break;
                    case 'right':
                        originX = 0;
                        originY = alignTo('y', align);

                        break;
                }
            }

            return `${originX}px ${originY}px`;
        };

        const updateArrowPosition = (side: SideType) => {
            const arrow = getArrow();
            const container = getContainer();
            const anchor = getAnchor();

            if (!container || !arrow) return;

            const tooltipRect = container.getBoundingClientRect();
            const anchorRect = anchor.getBoundingClientRect();
            const anchorCenterX = anchorRect.left + anchorRect.width / 2;
            const anchorCenterY = anchorRect.top + anchorRect.height / 2;

            const arrowLeft = anchorCenterX - tooltipRect.left;
            const arrowTop = anchorCenterY - tooltipRect.top;
            const padding = 8;

            if (side === 'top' || side === 'bottom') {
                if (arrowLeft < padding || arrowLeft > tooltipRect.width - padding) {
                    arrow.style.opacity = '0';
                }

                arrow.style.left = `${arrowLeft}px`;
                arrow.style.top = side === 'top' ? '100%' : 'auto';
                arrow.style.bottom = side === 'bottom' ? '100%' : 'auto';
                arrow.style.transform = 'translateX(-50%)';
            }

            if (side === 'left' || side === 'right') {
                if (arrowTop < padding || arrowTop > tooltipRect.height - padding) {
                    arrow.style.opacity = '0';
                }

                arrow.style.top = `${arrowTop}px`;
                arrow.style.left = side === 'left' ? '100%' : 'auto';
                arrow.style.right = side === 'right' ? '100%' : 'auto';
                arrow.style.transform = 'translateY(-50%)';
            }
        };

        // effects

        return {
            state,
            containerRef,
            anchorRef,
            arrowRef,
            applyPlacement
        };
    }
});
