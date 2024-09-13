import {ReactNode} from 'react';
import {PressableProps, StyleProp, ViewStyle} from 'react-native';

/**
 * The properties of the Button component
 * @memberof module:Button
 */
export type ButtonProps = {
  /** The type of button, affecting it's appearance */
  type?: ButtonType;
  /** The color of button, affecting it's appearance */
  color?: ButtonColor;
  /** The size of the button, affecting it's appearance */
  size?: ButtonSize;
  /** The children to render within the button */
  children?: ReactNode;
  /** The additonal styles of the button */
  style?: StyleProp<ViewStyle>;
} & PressableProps;

/**
 * The button type
 * @memberof module:Button
 */
export type ButtonType = 'filled' | 'outlined' | 'text';

/**
 * The button color
 * @memberof module:Button
 */
export type ButtonColor = 'primary' | 'black' | 'white';

/**
 * The button size
 * @memberof module:Button
 */
export type ButtonSize = 'small' | 'normal' | 'large';
