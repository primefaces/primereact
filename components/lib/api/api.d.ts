/**
 *
 * @todo Write the documentation.
 *
 * @module api
 *
 */

import { AccordionPassThroughOptions, AccordionTabPassThroughOptions } from '../accordion/accordion';
import { AutoCompletePassThroughOptions } from '../autocomplete/autocomplete';
import { AvatarPassThroughOptions } from '../avatar/avatar';
import { AvatarGroupPassThroughOptions } from '../avatargroup/avatargroup';
import { BadgePassThroughOptions } from '../badge/badge';
import { BlockUIPassThroughOptions } from '../blockui/blockui';
import { BreadCrumbPassThroughOptions } from '../breadcrumb/breadcrumb';
import { ButtonPassThroughOptions } from '../button/button';
import { CalendarPassThroughOptions } from '../calendar/calendar';
import { PanelPassThroughOptions } from '../panel/panel';
import { CardPassThroughOptions } from '../card/card';
import { CarouselPassThroughOptions } from '../carousel/carousel';
import { CascadeSelectPassThroughOptions } from '../cascadeselect/cascadeselect';
import { ChartPassThroughOptions } from '../chart/chart';
import { CheckboxPassThroughOptions } from '../checkbox/checkbox';
import { ChipPassThroughOptions } from '../chip/chip';
import { ChipsPassThroughOptions } from '../chips/chips';
import { ColorPickerPassThroughOptions } from '../colorpicker/colorpicker';
import { ColumnGroupPassThroughOptions } from '../columngroup/columngroup';
import { ConfirmDialogPassThroughOptions } from '../confirmdialog/confirmdialog';
import { ConfirmPopupPassThroughOptions } from '../confirmpopup/confirmpopup';
import { ContextMenuPassThroughOptions } from '../contextmenu/contextmenu';
import { DataTablePassThroughOptions } from '../datatable/datatable';
import { DataViewLayoutOptionsPassThroughOptions, DataViewPassThroughOptions } from '../dataview/dataview';
import { DeferredContentPassThroughOptions } from '../deferredcontent/deferredcontent';
import { DividerPassThroughOptions } from '../divider/divider';
import { DockPassThroughOptions } from '../dock/dock';
import { DialogPassThroughOptions } from '../dialog/dialog';
import { DropdownPassThroughOptions } from '../dropdown/dropdown';
import { EditorPassThroughOptions } from '../editor/editor';
import { FieldsetPassThroughOptions } from '../fieldset/fieldset';
import { FileUploadPassThroughOptions } from '../fileupload/fileupload';
import { GalleriaPassThroughOptions } from '../galleria/galleria';
import { ImagePassThroughOptions } from '../image/image';
import { InplacePassThroughOptions } from '../inplace/inplace';
import { InputNumberPassThroughOptions } from '../inputnumber/inputnumber';
import { InputSwitchPassThroughOptions } from '../inputswitch/inputswitch';
import { InputTextPassThroughOptions } from '../inputtext/inputtext';
import { KnobPassThroughOptions } from '../knob/knob';
import { ListboxPassThroughOptions } from '../listbox/listbox';
import { MegaMenuPassThroughOptions } from '../megamenu/megamenu';
import { MenuPassThroughOptions } from '../menu/menu';
import { MenubarPassThroughOptions } from '../menubar/menubar';
import { MessagePassThroughOptions } from '../message/message';
import { MultiSelectPassThroughOptions } from '../multiselect/multiselect';
import { OrderListPassThroughOptions } from '../orderlist/orderlist';
import { OrganizationChartPassThroughOptions } from '../organizationchart/organizationchart';
import { OverlayPanelPassThroughOptions } from '../overlaypanel/overlaypanel';
import { PaginatorPassThroughOptions } from '../paginator/paginator';
import { PanelMenuPassThroughOptions } from '../panelmenu/panelmenu';
import { PasswordPassThroughOptions } from '../password/password';
import { PickListPassThroughOptions } from '../picklist/picklist';
import { ProgressBarPassThroughOptions } from '../progressbar/progressbar';
import { ProgressSpinnerPassThroughOptions } from '../progressspinner/progressspinner';
import { RadioButtonPassThroughOptions } from '../radiobutton/radiobutton';
import { RowPassThroughOptions } from '../row/row';
import { ScrollPanelPassThroughOptions } from '../scrollpanel/scrollpanel';
import { ScrollTopPassThroughOptions } from '../scrolltop/scrolltop';
import { SelectButtonPassThroughOptions } from '../selectbutton/selectbutton';
import { SidebarPassThroughOptions } from '../sidebar/sidebar';
import { SkeletonPassThroughOptions } from '../skeleton/skeleton';
import { SpeedDialPassThroughOptions } from '../speeddial/speeddial';
import { SplitButtonPassThroughOptions } from '../splitbutton/splitbutton';
import { SplitterPassThroughOptions } from '../splitter/splitter';
import { TabMenuPassThroughOptions } from '../tabmenu/tabmenu';
import { TabPanelPassThroughOptions, TabViewPassThroughOptions } from '../tabview/tabview';
import { TagPassThroughOptions } from '../tag/tag';
import { TerminalPassThroughOptions } from '../terminal/terminal';
import { TieredMenuPassThroughOptions } from '../tieredmenu/tieredmenu';
import { TimelinePassThroughOptions } from '../timeline/timeline';
import { ToastPassThroughOptions } from '../toast/toast';
import { ToolbarPassThroughOptions } from '../toolbar/toolbar';
import { TreePassThroughOptions } from '../tree/tree';
import { TreeSelectPassThroughOptions } from '../treeselect/treeselect';
import { TreeTablePassThroughOptions } from '../treetable/treetable';
import { VirtualScrollerPassThroughOptions } from '../virtualscroller/virtualscroller';
import { InputTextareaPassThroughOptions } from '../inputtextarea/inputtextarea';
import { MessagesPassThroughOptions } from '../messages/messages';
import { ColumnPassThroughOptions } from '../column/column';
import { MentionPassThroughOptions } from '../mention/mention';
import { MultiStateCheckboxPassThroughOptions } from '../multistatecheckbox/multistatecheckbox';
import { RatingPassThroughOptions } from '../rating/rating';
import { SlideMenuPassThroughOptions } from '../slidemenu/slidemenu';
import { SliderPassThroughOptions } from '../slider/slider';
import { StepsPassThroughOptions } from '../steps/steps';
import { ToggleButtonPassThroughOptions } from '../togglebutton/togglebutton';
import { TooltipPassThroughOptions } from '../tooltip/tooltip';
import { Dispatch, SetStateAction } from 'react';

// Config
export interface ZIndexOptions {
    modal: number;
    overlay: number;
    menu: number;
    tooltip: number;
    toast: number;
}

export type InputStyleType = 'outlined' | 'filled';

export type AppendToType = 'self' | HTMLElement | undefined | null;

export interface FilterMatchModeOptions {
    text: any[];
    numeric: any[];
    date: any[];
}

export interface APIOptions {
    appendTo?: AppendToType;
    autoZIndex?: boolean;
    cssTransition?: boolean;
    filterMatchModeOptions?: FilterMatchModeOptions;
    hideOverlaysOnDocumentScrolling?: boolean;
    inputStyle?: InputStyleType;
    locale?: string;
    nonce?: string;
    nullSortOrder?: number;
    ripple?: boolean;
    zIndex?: ZIndexOptions;
    pt?: PrimeReactPTOptions;
    changeTheme?(theme?: string, newTheme?: string, linkElementId?: string, callback?: () => void): void;
}

export interface ContextAPIOptions extends APIOptions {
    setAppendTo: Dispatch<SetStateAction<AppendToType>>;
    setAutoZIndex: Dispatch<SetStateAction<boolean>>;
    setCssTransition: Dispatch<SetStateAction<boolean>>;
    setFilterMatchModeOptions: Dispatch<SetStateAction<FilterMatchModeOptions>>;
    setHideOverlaysOnDocumentScrolling: Dispatch<SetStateAction<boolean>>;
    setInputStyle: Dispatch<SetStateAction<InputStyleType>>;
    setLocale: Dispatch<SetStateAction<string>>;
    setNonce: Dispatch<SetStateAction<string>>;
    setNullSortOrder: Dispatch<SetStateAction<number>>;
    setRipple: Dispatch<SetStateAction<boolean>>;
    setZIndex: Dispatch<SetStateAction<ZIndexOptions>>;
    setPt: Dispatch<SetStateAction<PrimeReactPTOptions>>;
}

export interface PrimeReactPTOptions {
    accordion?: AccordionPassThroughOptions;
    accordiontab?: AccordionTabPassThroughOptions;
    autocomplete?: AutoCompletePassThroughOptions;
    avatar?: AvatarPassThroughOptions;
    avatargroup?: AvatarGroupPassThroughOptions;
    badge?: BadgePassThroughOptions;
    blockui?: BlockUIPassThroughOptions;
    breadcrumb?: BreadCrumbPassThroughOptions;
    button?: ButtonPassThroughOptions;
    calendar?: CalendarPassThroughOptions;
    card?: CardPassThroughOptions;
    carousel?: CarouselPassThroughOptions;
    cascadeselect?: CascadeSelectPassThroughOptions;
    chart?: ChartPassThroughOptions;
    checkbox?: CheckboxPassThroughOptions;
    chip?: ChipPassThroughOptions;
    chips?: ChipsPassThroughOptions;
    colorpicker?: ColorPickerPassThroughOptions;
    column?: ColumnPassThroughOptions;
    columngroup?: ColumnGroupPassThroughOptions;
    confirmdialog?: ConfirmDialogPassThroughOptions;
    confirmpopup?: ConfirmPopupPassThroughOptions;
    contextmenu?: ContextMenuPassThroughOptions;
    datatable?: DataTablePassThroughOptions;
    dataview?: DataViewPassThroughOptions;
    dataviewlayoutoptions?: DataViewLayoutOptionsPassThroughOptions;
    deferredcontent?: DeferredContentPassThroughOptions;
    dialog?: DialogPassThroughOptions;
    divider?: DividerPassThroughOptions;
    dock?: DockPassThroughOptions;
    dropdown?: DropdownPassThroughOptions;
    editor?: EditorPassThroughOptions;
    fieldset?: FieldsetPassThroughOptions;
    fileupload?: FileUploadPassThroughOptions;
    galleria?: GalleriaPassThroughOptions;
    image?: ImagePassThroughOptions;
    inplace?: InplacePassThroughOptions;
    inputmask?: InputTextPassThroughOptions;
    inputnumber?: InputNumberPassThroughOptions;
    inputswitch?: InputSwitchPassThroughOptions;
    inputtext?: InputTextPassThroughOptions;
    inputtextarea?: InputTextareaPassThroughOptions;
    knob?: KnobPassThroughOptions;
    listbox?: ListboxPassThroughOptions;
    megamenu?: MegaMenuPassThroughOptions;
    mention?: MentionPassThroughOptions;
    menu?: MenuPassThroughOptions;
    menubar?: MenubarPassThroughOptions;
    message?: MessagePassThroughOptions;
    messages?: MessagesPassThroughOptions;
    multiselect?: MultiSelectPassThroughOptions;
    multisatecheckbox?: MultiStateCheckboxPassThroughOptions;
    orderlist?: OrderListPassThroughOptions;
    organizationchart?: OrganizationChartPassThroughOptions;
    overlaypanel?: OverlayPanelPassThroughOptions;
    paginator?: PaginatorPassThroughOptions;
    panel?: PanelPassThroughOptions;
    panelmenu?: PanelMenuPassThroughOptions;
    password?: PasswordPassThroughOptions;
    picklist?: PickListPassThroughOptions;
    progressbar?: ProgressBarPassThroughOptions;
    progressspinner?: ProgressSpinnerPassThroughOptions;
    radiobutton?: RadioButtonPassThroughOptions;
    rating?: RatingPassThroughOptions;
    row?: RowPassThroughOptions;
    scrollpanel?: ScrollPanelPassThroughOptions;
    scrolltop?: ScrollTopPassThroughOptions;
    selectbutton?: SelectButtonPassThroughOptions;
    sidebar?: SidebarPassThroughOptions;
    skeleton?: SkeletonPassThroughOptions;
    slidemenu?: SlideMenuPassThroughOptions;
    slider?: SliderPassThroughOptions;
    speeddial?: SpeedDialPassThroughOptions;
    splitbutton?: SplitButtonPassThroughOptions;
    splitter?: SplitterPassThroughOptions;
    steps?: StepsPassThroughOptions;
    tabmenu?: TabMenuPassThroughOptions;
    tabpanel?: TabPanelPassThroughOptions;
    tabview?: TabViewPassThroughOptions;
    tag?: TagPassThroughOptions;
    terminal?: TerminalPassThroughOptions;
    tieredmenu?: TieredMenuPassThroughOptions;
    timeline?: TimelinePassThroughOptions;
    toast?: ToastPassThroughOptions;
    togglebutton?: ToggleButtonPassThroughOptions;
    toolbar?: ToolbarPassThroughOptions;
    tooltip?: TooltipPassThroughOptions;
    tree?: TreePassThroughOptions;
    treeselect?: TreeSelectPassThroughOptions;
    treetable?: TreeTablePassThroughOptions;
    virtualscroller?: VirtualScrollerPassThroughOptions;
}

/**
 * @deprecated since version 9.6.0. Use PrimeReactContext instead.
 */
declare const PrimeReact: APIOptions;

export default PrimeReact;

type PrimeReactProviderProps = {
    children: React.ReactNode;
};

declare const PrimeReactProvider: React.FC<PrimeReactProviderProps>;
declare const PrimeReactContext: React.Context<ContextAPIOptions>;

export { PrimeReactProvider, PrimeReactContext };

// Locale
export declare function locale(locale: string): { locale: string; options: object };
export declare function addLocale(locale: string, options: object): void;
export declare function updateLocaleOption(key: string, value: any, locale: string): void;
export declare function updateLocaleOptions(options: object, locale: string): void;
export declare function localeOption(key: string, locale: string): any;
export declare function localeOptions(locale: string): object;

// Icons
export interface PrimeIconsOptions {
    readonly ALIGN_CENTER: string;
    readonly ALIGN_JUSTIFY: string;
    readonly ALIGN_LEFT: string;
    readonly ALIGN_RIGHT: string;
    readonly AMAZON: string;
    readonly ANDROID: string;
    readonly ANGLE_DOUBLE_DOWN: string;
    readonly ANGLE_DOUBLE_LEFT: string;
    readonly ANGLE_DOUBLE_RIGHT: string;
    readonly ANGLE_DOUBLE_UP: string;
    readonly ANGLE_DOWN: string;
    readonly ANGLE_LEFT: string;
    readonly ANGLE_RIGHT: string;
    readonly ANGLE_UP: string;
    readonly APPLE: string;
    readonly ARROW_CIRCLE_DOWN: string;
    readonly ARROW_CIRCLE_LEFT: string;
    readonly ARROW_CIRCLE_RIGHT: string;
    readonly ARROW_CIRCLE_UP: string;
    readonly ARROW_DOWN: string;
    readonly ARROW_DOWN_LEFT: string;
    readonly ARROW_DOWN_RIGHT: string;
    readonly ARROW_LEFT: string;
    readonly ARROW_RIGHT: string;
    readonly ARROW_UP: string;
    readonly ARROW_UP_LEFT: string;
    readonly ARROW_UP_RIGHT: string;
    readonly ARROWS_H: string;
    readonly ARROWS_V: string;
    readonly AT: string;
    readonly BACKWARD: string;
    readonly BAN: string;
    readonly BARS: string;
    readonly BELL: string;
    readonly BOLT: string;
    readonly BOOK: string;
    readonly BOOKMARK: string;
    readonly BOOKMARK_FILL: string;
    readonly BOX: string;
    readonly BRIEFCASE: string;
    readonly BUILDING: string;
    readonly CALENDAR: string;
    readonly CALENDAR_MINUS: string;
    readonly CALENDAR_PLUS: string;
    readonly CALENDAR_TIMES: string;
    readonly CAMERA: string;
    readonly CAR: string;
    readonly CARET_DOWN: string;
    readonly CARET_LEFT: string;
    readonly CARET_RIGHT: string;
    readonly CARET_UP: string;
    readonly CHART_BAR: string;
    readonly CHART_LINE: string;
    readonly CHART_PIE: string;
    readonly CHECK: string;
    readonly CHECK_CIRCLE: string;
    readonly CHECK_SQUARE: string;
    readonly CHEVRON_CIRCLE_DOWN: string;
    readonly CHEVRON_CIRCLE_LEFT: string;
    readonly CHEVRON_CIRCLE_RIGHT: string;
    readonly CHEVRON_CIRCLE_UP: string;
    readonly CHEVRON_DOWN: string;
    readonly CHEVRON_LEFT: string;
    readonly CHEVRON_RIGHT: string;
    readonly CHEVRON_UP: string;
    readonly CIRCLE: string;
    readonly CIRCLE_FILL: string;
    readonly CLOCK: string;
    readonly CLONE: string;
    readonly CLOUD: string;
    readonly CLOUD_DOWNLOAD: string;
    readonly CLOUD_UPLOAD: string;
    readonly CODE: string;
    readonly COG: string;
    readonly COMMENT: string;
    readonly COMMENTS: string;
    readonly COMPASS: string;
    readonly COPY: string;
    readonly CREDIT_CARD: string;
    readonly DATABASE: string;
    readonly DESKTOP: string;
    readonly DIRECTIONS: string;
    readonly DIRECTIONS_ALT: string;
    readonly DISCORD: string;
    readonly DOLLAR: string;
    readonly DOWNLOAD: string;
    readonly EJECT: string;
    readonly ELLIPSIS_H: string;
    readonly ELLIPSIS_V: string;
    readonly ENVELOPE: string;
    readonly EURO: string;
    readonly EXCLAMATION_CIRCLE: string;
    readonly EXCLAMATION_TRIANGLE: string;
    readonly EXTERNAL_LINK: string;
    readonly EYE: string;
    readonly EYE_SLASH: string;
    readonly FACEBOOK: string;
    readonly FAST_BACKWARD: string;
    readonly FAST_FORWARD: string;
    readonly FILE: string;
    readonly FILE_EXCEL: string;
    readonly FILE_PDF: string;
    readonly FILTER: string;
    readonly FILTER_FILL: string;
    readonly FILTER_SLASH: string;
    readonly FLAG: string;
    readonly FLAG_FILL: string;
    readonly FOLDER: string;
    readonly FOLDER_OPEN: string;
    readonly FORWARD: string;
    readonly GITHUB: string;
    readonly GLOBE: string;
    readonly GOOGLE: string;
    readonly HASHTAG: string;
    readonly HEART: string;
    readonly HEART_FILL: string;
    readonly HISTORY: string;
    readonly HOME: string;
    readonly ID_CARD: string;
    readonly IMAGE: string;
    readonly IMAGES: string;
    readonly INBOX: string;
    readonly INFO: string;
    readonly INFO_CIRCLE: string;
    readonly INSTAGRAM: string;
    readonly KEY: string;
    readonly LINK: string;
    readonly LINKEDIN: string;
    readonly LIST: string;
    readonly LOCK: string;
    readonly LOCK_OPEN: string;
    readonly MAP: string;
    readonly MAP_MARKER: string;
    readonly MICROSOFT: string;
    readonly MINUS: string;
    readonly MINUS_CIRCLE: string;
    readonly MOBILE: string;
    readonly MONEY_BILL: string;
    readonly MOON: string;
    readonly PALETTE: string;
    readonly PAPERCLIP: string;
    readonly PAUSE: string;
    readonly PAYPAL: string;
    readonly PENCIL: string;
    readonly PERCENTAGE: string;
    readonly PHONE: string;
    readonly PLAY: string;
    readonly PLUS: string;
    readonly PLUS_CIRCLE: string;
    readonly POUND: string;
    readonly POWER_OFF: string;
    readonly PRIME: string;
    readonly PRINT: string;
    readonly QRCODE: string;
    readonly QUESTION: string;
    readonly QUESTION_CIRCLE: string;
    readonly REDDIT: string;
    readonly REFRESH: string;
    readonly REPLAY: string;
    readonly REPLY: string;
    readonly SAVE: string;
    readonly SEARCH: string;
    readonly SEARCH_MINUS: string;
    readonly SEARCH_PLUS: string;
    readonly SEND: string;
    readonly SERVER: string;
    readonly SHARE_ALT: string;
    readonly SHIELD: string;
    readonly SHOPPING_BAG: string;
    readonly SHOPPING_CART: string;
    readonly SIGN_IN: string;
    readonly SIGN_OUT: string;
    readonly SITEMAP: string;
    readonly SLACK: string;
    readonly SLIDERS_H: string;
    readonly SLIDERS_V: string;
    readonly SORT: string;
    readonly SORT_ALPHA_DOWN: string;
    readonly SORT_ALPHA_ALT_DOWN: string;
    readonly SORT_ALPHA_UP: string;
    readonly SORT_ALPHA_ALT_UP: string;
    readonly SORT_ALT: string;
    readonly SORT_ALT_SLASH: string;
    readonly SORT_AMOUNT_DOWN: string;
    readonly SORT_AMOUNT_DOWN_ALT: string;
    readonly SORT_AMOUNT_UP: string;
    readonly SORT_AMOUNT_UP_ALT: string;
    readonly SORT_DOWN: string;
    readonly SORT_NUMERIC_DOWN: string;
    readonly SORT_NUMERIC_ALT_DOWN: string;
    readonly SORT_NUMERIC_UP: string;
    readonly SORT_NUMERIC_ALT_UP: string;
    readonly SORT_UP: string;
    readonly SPINNER: string;
    readonly STAR: string;
    readonly STAR_FILL: string;
    readonly STEP_BACKWARD: string;
    readonly STEP_BACKWARD_ALT: string;
    readonly STEP_FORWARD: string;
    readonly STEP_FORWARD_ALT: string;
    readonly STOP: string;
    readonly STOP_CIRCLE: string;
    readonly SUN: string;
    readonly SYNC: string;
    readonly TABLE: string;
    readonly TABLET: string;
    readonly TAG: string;
    readonly TAGS: string;
    readonly TELEGRAM: string;
    readonly TH_LARGE: string;
    readonly THUMBS_DOWN: string;
    readonly THUMBS_UP: string;
    readonly TICKET: string;
    readonly TIMES: string;
    readonly TIMES_CIRCLE: string;
    readonly TRASH: string;
    readonly TWITTER: string;
    readonly UNDO: string;
    readonly UNLOCK: string;
    readonly UPLOAD: string;
    readonly USER: string;
    readonly USER_EDIT: string;
    readonly USER_MINUS: string;
    readonly USER_PLUS: string;
    readonly USERS: string;
    readonly VIDEO: string;
    readonly VIMEO: string;
    readonly VOLUME_DOWN: string;
    readonly VOLUME_OFF: string;
    readonly VOLUME_UP: string;
    readonly WALLET: string;
    readonly WHATSAPP: string;
    readonly WIFI: string;
    readonly WINDOW_MAXIMIZE: string;
    readonly WINDOW_MINIMIZE: string;
    readonly YOUTUBE: string;
}

export declare const PrimeIcons: PrimeIconsOptions;

// Severity
export declare enum MessageSeverity {
    SUCCESS = 'success',
    INFO = 'info',
    WARN = 'warn',
    ERROR = 'error'
}

// Filter
export declare enum FilterMatchMode {
    STARTS_WITH = 'startsWith',
    CONTAINS = 'contains',
    NOT_CONTAINS = 'notContains',
    ENDS_WITH = 'endsWith',
    EQUALS = 'equals',
    NOT_EQUALS = 'notEquals',
    IN = 'in',
    LESS_THAN = 'lt',
    LESS_THAN_OR_EQUAL_TO = 'lte',
    GREATER_THAN = 'gt',
    GREATER_THAN_OR_EQUAL_TO = 'gte',
    BETWEEN = 'between',
    DATE_IS = 'dateIs',
    DATE_IS_NOT = 'dateIsNot',
    DATE_BEFORE = 'dateBefore',
    DATE_AFTER = 'dateAfter',
    CUSTOM = 'custom'
}

export declare enum FilterOperator {
    AND = 'and',
    OR = 'or'
}

export declare enum SortOrder {
    DESC = -1,
    UNSORTED = 0,
    ASC = 1
}

export declare namespace FilterService {
    export function filter(value: any, fields: string[], filterValue: any, filterMatchMode: string, filterLocale?: string): any[];
    export const filters: {
        startsWith(value: any, filter: string, filterLocale?: string): boolean;
        contains(value: any, filter: string, filterLocale?: string): boolean;
        notContains(value: any, filter: string, filterLocale?: string): boolean;
        endsWith(value: any, filter: string, filterLocale?: string): boolean;
        equals(value: any, filter: string, filterLocale?: string): boolean;
        notEquals(value: any, filter: string, filterLocale?: string): boolean;
        in(value: any, filter: string): boolean;
        between(value: any, filter: string): boolean;
        lt(value: any, filter: string): boolean;
        lte(value: any, filter: string): boolean;
        gt(value: any, filter: string): boolean;
        gte(value: any, filter: string): boolean;
        dateIs(value: any, filter: string): boolean;
        dateIsNot(value: any, filter: string): boolean;
        dateBefore(value: any, filter: string): boolean;
        dateAfter(value: any, filter: string): boolean;
    };
    export function register(rule: string, fn: (...arg: any[]) => boolean): void;
}
