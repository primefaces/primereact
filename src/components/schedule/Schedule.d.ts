import * as React from 'react';;

interface ScheduleProps {
    id?: string;
    events?: any[];
    header?: any;
    style?: object;
    className?: string;
    isRTL?: boolean;
    weekends?: boolean;
    hiddenDays?: any[];
    fixedWeekCount?: boolean;
    weekNumbers?: boolean;
    businessHours?: any;
    height?: any;
    contentHeight?: any;
    aspectRatio?: number;
    eventLimit?: any;
    defaultDate?: any;
    editable?: boolean;
    droppable?: boolean;
    eventStartEditable?: boolean;
    eventDurationEditable?: boolean;
    defaultView?: string;
    allDaySlot?: boolean;
    allDayText?: string;
    slotDuration?: any;
    slotLabelInterval?: any;
    snapDuration?: any;
    scrollTime?: any;
    minTime?: any;
    maxTime?: any;
    slotEventOverlap?: boolean;
    nowIndicator?: boolean;
    dragRevertDuration?: number;
    dragOpacity?: number;
    dragScroll?: boolean;
    eventOverlap?: any;
    eventConstraint?: any;
    locale?: object;
    timezone?: any;
    options?: object;
    eventRender?(): void;
    dayRender?(): void;
    onDayClick?(): void;
    onEventClick?(): void;
    onEventMouseover?(): void;
    onEventMouseout?(): void;
    onEventDragStart?(): void;
    onEventDragStop?(): void;
    onEventDrop?(): void;
    onEventResizeStart?(): void;
    onEventResizeStop?(): void;
    onEventResize?(): void;
    onViewRender?(): void;
    onDrop?(): void;
}

export class Schedule extends React.Component<ScheduleProps,any> {}