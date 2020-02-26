import * as React from 'react';

interface GalleriaProps {
    id?: string;
    value?: any[];
    activeIndex?: number;
    fullScreen?: boolean;
    previewItemTemplate?: any;
    thumbnailItemTemplate?: any;
    indicatorItemTemplate?: any;
    className?: string;
    style?: object;
    header?: any;
    footer?: any;
    numVisible?: number;
    responsiveOptions?: any;
    showPreviewNavButtons?: boolean;
    showThumbnailNavButtons?: boolean;
    showNavButtonsOnPreviewHover?: boolean;
    changePreviewOnIndicatorHover?: boolean;
    circular?: boolean;
    autoPlay?: boolean;
    transitionInterval?: number;
    captionTemplate?: any;
    showThumbnails?: boolean;
    thumbnailsPosition?: string;
    showIndicators?: boolean;
    showIndicatorsOnPreview?: boolean;
    indicatorsPosition?: string;
    baseZIndex?: number;
    onItemChange?(e: {index: number}): void;
}

export class Galleria extends React.Component<GalleriaProps,any> {
    public show():void;
    public hide():void;
    public isAutoPlayActive():boolean;
    public startSlideShow():void;
    public stopSlideShow():void;
}
