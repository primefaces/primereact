/**
 *
 * The color manager provides the core functionality for the color picker component.
 *
 * @module colorManager
 * @group shared
 *
 */

/**
 * The format of the color.
 */
export type ColorHexFormat = 'hex' | 'hexa';

/**
 * The space of the color.
 */
export type ColorSpace = 'rgba' | 'hsla' | 'hsba';

/**
 * The channel of the color.
 */
export type ColorChannel = 'hue' | 'saturation' | 'brightness' | 'lightness' | 'red' | 'green' | 'blue' | 'alpha';

/**
 * The input channel of the color.
 */
export type ColorInputChannel = ColorChannel | 'hex' | 'css';

/**
 * The output channel of the color.
 */
export type ColorOutput = ColorHexFormat | ColorSpace | 'rgb' | 'hsl' | 'hsb' | 'css';

/**
 * The 2D axes of the color.
 */
export interface Color2DAxes {
    xChannel: ColorChannel;
    yChannel: ColorChannel;
}

/**
 * The 3D axes of the color.
 */
export interface Color3DAxes extends Color2DAxes {
    zChannel: ColorChannel;
}

/**
 * The range of the color channel.
 */
export type ColorChannelRange = { min: number; max: number; step: number };

/**
 * The instance of the color.
 */
export interface ColorInstance {
    /**
     * Clones the color instance.
     */
    clone(): ColorInstance;
    /**
     * Converts the color instance to a string.
     */
    toString(format: ColorOutput): string;
    /**
     * Converts the color instance to a format.
     */
    toFormat(format: ColorSpace): ColorInstance;
    /**
     * Converts the color instance to a JSON object.
     */
    toJSON(): Record<string, number>;
    /**
     * Gets the range of the color channel.
     */
    getChannelRange(channel: ColorChannel): ColorChannelRange;
    /**
     * Gets the format of the color instance.
     */
    getFormat(): ColorSpace;
    /**
     * Gets the channels of the color instance.
     */
    getChannels(): [ColorChannel, ColorChannel, ColorChannel];
    /**
     * Gets the value of the color channel.
     */
    getChannelValue(channel: ColorChannel): number;
    /**
     * Sets the value of the color channel.
     */
    withChannelValue(channel: ColorChannel, value: number): ColorInstance;
    /**
     * Gets the color axes of the color instance.
     */
    getColorAxes(xyChannels: Color2DAxes): Color3DAxes;
    /**
     * Increments the value of the color channel.
     */
    incChannelValue(channel: ColorChannel, step: number): ColorInstance;
    /**
     * Decrements the value of the color channel.
     */
    decChannelValue(channel: ColorChannel, step: number): ColorInstance;
}
