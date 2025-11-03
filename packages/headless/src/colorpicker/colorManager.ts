import type { Color2DAxes, Color3DAxes, ColorChannel, ColorChannelRange, ColorInputChannel, ColorInstance, ColorOutput, ColorSpace } from '@primereact/types/shared/colorpicker';

// CONSTANTS
const HSB_REGEX = /hsb\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsba\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/;
const HSL_REGEX = /hsl\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsla\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/;
const HEX_REGEX = /^#?([a-fA-F0-9]{3,8})$/;
const RGB_REGEX = /^rgba?\(\s*([^)]+)\s*\)$/;

// UTILS
function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
}

export const isEqual = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

/**
 * Snaps a value to the nearest step increment within min/max bounds
 * @example snap(23.7, 0, 100, 5) => 25
 * @example snap(0.234, 0, 1, 0.01) => 0.23
 */
function snap(value: number, min: number, max: number, step: number) {
    const clamped = clamp(value, min, max);

    const offset = clamped - min;
    const steps = Math.round(offset / step);

    const snapped = min + steps * step;

    const precision = (step.toString().split('.')[1] || '').length;

    return parseFloat(snapped.toFixed(precision));
}

abstract class Color {
    abstract clone(): ColorInstance;
    abstract toString(format: ColorOutput): string;
    abstract toFormat(format: ColorSpace): ColorInstance;
    abstract toJSON(): Record<string, number>;
    abstract getChannelRange(channel: ColorChannel): ColorChannelRange;
    abstract getFormat(): ColorSpace;
    abstract getChannels(): [ColorChannel, ColorChannel, ColorChannel];

    getChannelValue(channel: ColorChannel): number {
        if (channel in this) {
            return this[channel as keyof this] as number;
        }

        throw new Error(`Channel ${channel} not found`);
    }

    withChannelValue(channel: ColorChannel, value: number): ColorInstance {
        const { min, max } = this.getChannelRange(channel);

        if (channel in this) {
            const clone = this.clone();

            // @ts-expect-error - channel is a valid key of this
            clone[channel] = clamp(value, min, max);

            return clone;
        }

        throw new Error(`Channel ${channel} not found`);
    }

    getColorAxes(xyChannels: Color2DAxes): Color3DAxes {
        const { xChannel, yChannel } = xyChannels;

        if (xChannel === yChannel) {
            throw new Error('xChannel and yChannel cannot be the same');
        }

        const zChannel = this.getChannels().find((channel) => channel !== xChannel && channel !== yChannel);

        if (!zChannel) {
            throw new Error('zChannel not found');
        }

        return { xChannel, yChannel, zChannel };
    }

    incChannelValue(channel: ColorChannel, step: number): ColorInstance {
        const { min, max, step: availableStep } = this.getChannelRange(channel);

        const value = snap(clamp(this.getChannelValue(channel) + step, min, max), min, max, availableStep);

        return this.withChannelValue(channel, value);
    }

    decChannelValue(channel: ColorChannel, step: number): ColorInstance {
        return this.incChannelValue(channel, -step);
    }
}

export class HSBColor extends Color {
    private hue: number;
    private saturation: number;
    private brightness: number;
    private alpha: number;

    constructor(hue: number, saturation: number, brightness: number, alpha: number) {
        super();
        this.hue = hue;
        this.saturation = saturation;
        this.brightness = brightness;
        this.alpha = alpha;
    }

    static parse(value: string): HSBColor | undefined {
        const match = value.match(HSB_REGEX);

        if (!match) return undefined;

        const [h, s, b, a] = (match[1] ?? match[2]).split(',').map((n) => Number(n.trim().replace('%', '')));

        return new HSBColor(h % 360, clamp(s, 0, 100), clamp(b, 0, 100), clamp(a ?? 1, 0, 1));
    }

    private toRGB(): RGBColor {
        const h = this.hue;
        const s = this.saturation / 100;
        const b = this.brightness / 100;

        function f(n: number) {
            const k = (n + h / 60) % 6;

            return b - b * s * Math.max(0, Math.min(k, 4 - k, 1));
        }

        const scale = 255;

        return new RGBColor(Math.round(f(5) * scale), Math.round(f(3) * scale), Math.round(f(1) * scale), Number(this.alpha.toFixed(2)));
    }

    private toHSL(): HSLColor {
        const h = this.hue;
        let s = this.saturation / 100;
        const b = this.brightness / 100;

        const l = b * (1 - s / 2);

        if (l === 0 || l === 1) {
            s = 0;
        } else {
            s = (b - l) / Math.min(l, 1 - l);
        }

        return new HSLColor(Number(h.toFixed(2)), Number((s * 100).toFixed(2)), Number((l * 100).toFixed(2)), Number(this.alpha.toFixed(2)));
    }

    toFormat(format: ColorSpace): ColorInstance {
        switch (format) {
            case 'hsba':
                return this;
            case 'rgba':
                return this.toRGB();
            case 'hsla':
                return this.toHSL();
            default:
                throw new Error(`Invalid format: ${format}`);
        }
    }

    toString(format: ColorOutput): string {
        switch (format) {
            case 'css':
                return this.toHSL().toString('css');
            case 'hex':
                return this.toRGB().toString('hex');
            case 'hexa':
                return this.toRGB().toString('hexa');
            case 'hsb':
                return `hsb(${this.hue}, ${this.saturation.toFixed(2)}%, ${this.brightness.toFixed(2)}%)`;
            case 'hsba':
                return `hsba(${this.hue}, ${this.saturation.toFixed(2)}%, ${this.brightness.toFixed(2)}%, ${this.alpha})`;
            case 'hsl':
                return this.toHSL().toString('hsl');
            case 'rgb':
                return this.toRGB().toString('rgb');
            default:
                return this.toFormat(format).toString(format);
        }
    }

    toJSON() {
        return {
            hue: this.hue,
            saturation: this.saturation,
            brightness: this.brightness,
            alpha: this.alpha
        };
    }

    clone(): ColorInstance {
        return new HSBColor(this.hue, this.saturation, this.brightness, this.alpha);
    }

    getChannelRange(channel: ColorChannel): ColorChannelRange {
        switch (channel) {
            case 'hue':
                return { min: 0, max: 360, step: 1 };
            case 'saturation':
            case 'brightness':
                return { min: 0, max: 100, step: 1 };
            case 'alpha':
                return { min: 0, max: 1, step: 0.01 };
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
    }

    getFormat(): ColorSpace {
        return 'hsba';
    }

    getChannels(): [ColorChannel, ColorChannel, ColorChannel] {
        return ['hue', 'saturation', 'brightness'];
    }
}

export class HSLColor extends Color {
    private hue: number;
    private saturation: number;
    private lightness: number;
    private alpha: number;

    constructor(hue: number, saturation: number, lightness: number, alpha: number) {
        super();
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
        this.alpha = alpha;
    }

    static parse(value: string): HSLColor | undefined {
        const match = value.match(HSL_REGEX);

        if (!match) return undefined;

        const [h, s, l, a] = (match[1] || match[2])?.split(',').map((n) => Number(n.trim().replace('%', ''))) ?? [];

        return new HSLColor(h % 360, clamp(s, 0, 100), clamp(l, 0, 100), clamp(a ?? 1, 0, 1));
    }

    private toRGB(): RGBColor {
        const h = this.hue;
        const s = this.saturation / 100;
        const l = this.lightness / 100;

        function f(n: number) {
            const k = (n + h / 30) % 12;
            const a = s * Math.min(l, 1 - l);

            return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
        }

        const scale = 255;

        return new RGBColor(Math.round(f(0) * scale), Math.round(f(8) * scale), Math.round(f(4) * scale), Number(this.alpha.toFixed(2)));
    }

    private toHSB(): HSBColor {
        const h = this.hue;
        let s = this.saturation / 100;
        const l = this.lightness / 100;

        const b = l + s * Math.min(l, 1 - l);

        if (b === 0) {
            s = 0;
        } else {
            s = 2 * (1 - l / b);
        }

        return new HSBColor(Number(h.toFixed(2)), Number((s * 100).toFixed(2)), Number((b * 100).toFixed(2)), Number(this.alpha.toFixed(2)));
    }

    toFormat(format: ColorSpace): ColorInstance {
        switch (format) {
            case 'hsla':
                return this;
            case 'rgba':
                return this.toRGB();
            case 'hsba':
                return this.toHSB();
            default:
                throw new Error(`Invalid format: ${format}`);
        }
    }

    toString(format: ColorOutput): string {
        switch (format) {
            case 'hex':
                return this.toRGB().toString('hex');
            case 'hexa':
                return this.toRGB().toString('hexa');
            case 'hsl':
                return `hsl(${this.hue}, ${this.saturation.toFixed(2)}%, ${this.lightness.toFixed(2)}%)`;
            case 'css':
            case 'hsla':
                return `hsla(${this.hue}, ${this.saturation.toFixed(2)}%, ${this.lightness.toFixed(2)}%, ${this.alpha})`;
            case 'rgb':
                return this.toRGB().toString('rgb');
            case 'hsb':
                return this.toHSB().toString('hsb');
            default:
                return this.toFormat(format).toString(format);
        }
    }

    toJSON(): Record<string, number> {
        return {
            hue: this.hue,
            saturation: this.saturation,
            lightness: this.lightness,
            alpha: this.alpha
        };
    }

    clone(): ColorInstance {
        return new HSLColor(this.hue, this.saturation, this.lightness, this.alpha);
    }

    getChannelRange(channel: ColorChannel): ColorChannelRange {
        switch (channel) {
            case 'hue':
                return { min: 0, max: 360, step: 1 };
            case 'saturation':
            case 'lightness':
                return { min: 0, max: 100, step: 1 };
            case 'alpha':
                return { min: 0, max: 1, step: 0.01 };
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
    }

    getFormat(): ColorSpace {
        return 'hsla';
    }

    getChannels(): [ColorChannel, ColorChannel, ColorChannel] {
        return ['hue', 'saturation', 'lightness'];
    }
}

export class RGBColor extends Color {
    private red: number;
    private green: number;
    private blue: number;
    private alpha: number;

    constructor(red: number, green: number, blue: number, alpha: number) {
        super();
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }

    static parse(value: string): RGBColor | undefined {
        if (!value) return undefined;

        const input = value.trim();

        return this.parseHexColor(input) ?? this.parseRgbFunction(input);
    }

    private static parseHexColor(input: string): RGBColor | undefined {
        const match = input.match(HEX_REGEX);

        if (!match) return undefined;

        let hex = match[1];

        // Expand shorthand (#abc -> #aabbcc)
        if (hex.length <= 4) {
            hex = hex
                .split('')
                .map((c) => c + c)
                .join('');
        }

        if (![6, 8].includes(hex.length)) return undefined;

        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        const a = hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;

        return new RGBColor(r, g, b, a);
    }

    private static parseRgbFunction(input: string): RGBColor | undefined {
        const match = input.match(RGB_REGEX);

        if (!match?.[1]) return undefined;

        const [rStr, gStr, bStr, aStr] = match[1].split(',').map((v) => v.trim());

        const r = clamp(Number(rStr), 0, 255);
        const g = clamp(Number(gStr), 0, 255);
        const b = clamp(Number(bStr), 0, 255);
        const a = aStr !== undefined ? clamp(Number(aStr), 0, 1) : 1;

        if ([r, g, b, a].some((v) => Number.isNaN(v))) return undefined;

        return new RGBColor(r, g, b, a);
    }

    private toHSB(): HSBColor {
        const scale = 255;
        const [r, g, b] = [this.red / scale, this.green / scale, this.blue / scale];

        const mmax = Math.max(r, g, b);
        const mmin = Math.min(r, g, b);

        const chroma = mmax - mmin;
        const brightness = mmax;

        const saturation = mmax === 0 ? 0 : chroma / mmax;

        let hue = 0;

        if (chroma !== 0) {
            switch (mmax) {
                case r:
                    hue = ((g - b) / chroma) % 6;
                    break;
                case g:
                    hue = (b - r) / chroma + 2;
                    break;
                case b:
                    hue = (r - g) / chroma + 4;
                    break;
            }

            hue *= 60;

            if (hue < 0) {
                hue += 360;
            }
        }

        return new HSBColor(Number(hue.toFixed(2)), Number((saturation * 100).toFixed(2)), Number((brightness * 100).toFixed(2)), Number(this.alpha.toFixed(2)));
    }

    private toHSL(): HSLColor {
        const scale = 255;
        const [r, g, b] = [this.red / scale, this.green / scale, this.blue / scale];

        const mmax = Math.max(r, g, b);
        const mmin = Math.min(r, g, b);

        const lightness = (mmax + mmin) / 2;
        const chroma = mmax - mmin;

        let hue = 0;
        let saturation = -1;

        if (chroma !== 0) {
            switch (mmax) {
                case r:
                    hue = ((g - b) / chroma) % 6;
                    break;
                case g:
                    hue = (b - r) / chroma + 2;
                    break;
                case b:
                    hue = (r - g) / chroma + 4;
                    break;
            }

            hue *= 60;

            if (hue < 0) {
                hue += 360;
            }
        }

        if (lightness === 0 || lightness === 1) {
            saturation = 0;
        } else {
            saturation = chroma / (1 - Math.abs(2 * mmax - chroma - 1));
        }

        return new HSLColor(Number(hue.toFixed(2)), Number((saturation * 100).toFixed(2)), Number((lightness * 100).toFixed(2)), Number(this.alpha.toFixed(2)));
    }

    toHexInt(): number {
        return (this.red << 16) | (this.green << 8) | this.blue;
    }

    toFormat(format: ColorSpace): ColorInstance {
        switch (format) {
            case 'rgba':
                return this;
            case 'hsla':
                return this.toHSL();
            case 'hsba':
                return this.toHSB();
            default:
                throw new Error(`Invalid format: ${format}`);
        }
    }

    toString(format: ColorOutput): string {
        switch (format) {
            case 'hex':
                return `#${this.red.toString(16).padStart(2, '0')}${this.green.toString(16).padStart(2, '0')}${this.blue.toString(16).padStart(2, '0')}`;
            case 'hexa':
                return `#${this.red.toString(16).padStart(2, '0')}${this.green.toString(16).padStart(2, '0')}${this.blue.toString(16).padStart(2, '0')}${Math.round(this.alpha * 255)
                    .toString(16)
                    .padStart(2, '0')}`;
            case 'rgb':
                return `rgb(${this.red}, ${this.green}, ${this.blue})`;
            case 'rgba':
            case 'css':
                return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
            case 'hsl':
                return this.toHSL().toString('hsl');
            case 'hsb':
                return this.toHSB().toString('hsb');
            default:
                return this.toFormat(format).toString(format);
        }
    }

    toJSON(): Record<string, number> {
        return {
            red: this.red,
            green: this.green,
            blue: this.blue,
            alpha: this.alpha
        };
    }

    clone(): ColorInstance {
        return new RGBColor(this.red, this.green, this.blue, this.alpha);
    }

    getChannelRange(channel: ColorChannel): ColorChannelRange {
        switch (channel) {
            case 'red':
            case 'green':
            case 'blue':
                return { min: 0, max: 255, step: 1 };
            case 'alpha':
                return { min: 0, max: 1, step: 0.01 };
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
    }

    getFormat(): ColorSpace {
        return 'rgba';
    }

    getChannels(): [ColorChannel, ColorChannel, ColorChannel] {
        return ['red', 'green', 'blue'];
    }
}

export const parseColor = (color: string): ColorInstance => {
    const parsedColor = RGBColor.parse(color) ?? HSLColor.parse(color) ?? HSBColor.parse(color) ?? undefined;

    if (!parsedColor) {
        throw new Error(`Invalid color: ${color}`);
    }

    return parsedColor;
};

export function getChannelGradient(channel: ColorChannel, value: ColorInstance, orientation: 'horizontal' | 'vertical') {
    const { min, max } = value.getChannelRange(channel);

    const direction = orientation === 'horizontal' ? 'right' : 'bottom';

    switch (channel) {
        case 'hue':
            return `linear-gradient(to ${direction}, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)`;

        case 'lightness': {
            const start = value.withChannelValue(channel, min).toString('css');
            const middle = value.withChannelValue(channel, (max - min) / 2).toString('css');
            const end = value.withChannelValue(channel, max).toString('css');

            return `linear-gradient(to ${direction}, ${start}, ${middle}, ${end})`;
        }

        case 'saturation':
        case 'brightness':
        case 'red':
        case 'green':
        case 'blue':

        case 'alpha': {
            const start = value.withChannelValue(channel, min).toString('css');
            const end = value.withChannelValue(channel, max).toString('css');

            return `linear-gradient(to ${direction}, ${start}, ${end})`;
        }

        default:
            throw new Error(`Unknown color channel: ${channel}`);
    }
}

export function getChannelColor(color: ColorInstance, channel: ColorChannel) {
    switch (channel) {
        case 'hue':
            return parseColor(`hsl(${color.getChannelValue('hue')}, 100%, 50%)`);
        case 'lightness':
        case 'brightness':
        case 'saturation':
        case 'red':
        case 'green':
        case 'blue':
            return color.withChannelValue('alpha', 1);

        case 'alpha': {
            return color;
        }

        default:
            throw new Error('Unknown color channel: ' + channel);
    }
}

const hue = (color: ColorInstance) => [0, 60, 120, 180, 240, 300, 360].map((hue) => color.withChannelValue('hue', hue).toString('css')).join(', ');
const saturation = (color: ColorInstance) => `${color.withChannelValue('saturation', 0).toString('css')}, transparent`;

const hslChannels = {
    hue,
    saturation,
    lightness: () => 'black, transparent, white'
};

const hsbChannels = {
    hue,
    saturation,
    brightness: () => 'black, transparent'
};

export function getAreaGradient(color: ColorInstance, channels: Color2DAxes, dir: 'rtl' | 'ltr' = 'ltr') {
    const { xChannel, yChannel, zChannel } = color.getColorAxes(channels);
    const zValue = color.getChannelValue(zChannel);

    const isRTL = dir === 'rtl';
    let areaStyles: Record<string, string> = {};
    const format = color.getFormat();

    switch (format) {
        case 'rgba': {
            const rgb = parseColor('rgb(0, 0, 0)') as RGBColor;

            areaStyles = {
                '--area-gradient': [
                    `linear-gradient(to ${isRTL ? 'left' : 'right'}, ${rgb.withChannelValue(xChannel, 0)}, ${rgb.withChannelValue(xChannel, 255)})`,
                    `linear-gradient(to top, ${rgb.withChannelValue(yChannel, 0)}, ${rgb.withChannelValue(yChannel, 255)})`,
                    rgb.withChannelValue(zChannel, zValue)
                ].join(','),
                '--area-gradient-blend-mode': 'screen'
            };
            break;
        }

        case 'hsla': {
            const channels = color.getChannels();
            const value = (parseColor('hsl(0, 100%, 50%)') as HSLColor).withChannelValue(zChannel, zValue);

            const bg = channels
                .filter((c) => c !== zChannel)
                .map((c) => `linear-gradient(to ${c === xChannel ? (isRTL ? 'left' : 'right') : 'top'}, ${hslChannels[c as keyof typeof hslChannels](value)})`)
                .reverse();

            if (zChannel === 'hue') {
                bg.push(value.toString('css'));
            }

            areaStyles = {
                '--area-gradient': bg.join(', ')
            };
            break;
        }

        case 'hsba': {
            const channels = color.getChannels();
            const value = (parseColor('hsb(0, 100%, 100%)') as HSBColor).withChannelValue(zChannel, zValue);

            const bg = channels
                .filter((c) => c !== zChannel)
                .map((c) => `linear-gradient(to ${c === xChannel ? (isRTL ? 'left' : 'right') : 'top'}, ${hsbChannels[c as keyof typeof hsbChannels](value)})`)
                .reverse();

            if (zChannel === 'hue') {
                bg.push(value.toString('css'));
            }

            areaStyles = {
                '--area-gradient': bg.join(', ')
            };
            break;
        }
    }

    return areaStyles;
}

export function getInputChannelValue(color: ColorInstance, channel: ColorInputChannel) {
    const isHSL = color.getFormat() === 'hsla';

    switch (channel) {
        case 'hex': {
            if (color.getChannelValue('alpha') < color.getChannelRange('alpha').max) {
                return color.toString('hexa');
            }

            return color.toString('hex');
        }

        case 'css':
            return color.toString('css');
        case 'hue':
            return color
                .toFormat(isHSL ? 'hsla' : 'hsba')
                .getChannelValue('hue')
                .toString();
        case 'saturation':
            return color
                .toFormat(isHSL ? 'hsla' : 'hsba')
                .getChannelValue('saturation')
                .toString();
        case 'lightness':
            return color.toFormat('hsla').getChannelValue('lightness').toString();
        case 'brightness':
            return color.toFormat('hsba').getChannelValue('brightness').toString();
        case 'red':
        case 'green':
        case 'blue':
            return color.toFormat('rgba').getChannelValue(channel).toString();
        default:
            return color.getChannelValue(channel).toString();
    }
}

export function getInputChannelRange(color: ColorInstance, channel: ColorInputChannel = 'hex'): ColorChannelRange | undefined {
    switch (channel) {
        case 'hex': {
            return {
                min: (parseColor('#000000') as RGBColor).toHexInt(),
                max: (parseColor('#FFFFFF') as RGBColor).toHexInt(),
                step: 1
            };
        }

        case 'css':
            return undefined;

        case 'hue':
        case 'saturation':
        case 'lightness':
            return color.toFormat('hsla').getChannelRange(channel);

        case 'brightness':
            return color.toFormat('hsba').getChannelRange(channel);

        case 'red':
        case 'green':
        case 'blue':
            return color.toFormat('rgba').getChannelRange(channel);

        default:
            return color.getChannelRange(channel);
    }
}
