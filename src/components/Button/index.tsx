/** @module Button */
import React, {useState} from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {ButtonProps} from './type';
import colors from '../../styles/colors';
import {style as baseStyle} from './style';
import {textStyles} from '../../styles';
import {Padding} from '../../types';
import Icon from '../Icon';

/**
 * Renders a clickable button
 * @memberof module:Button
 * @param {ButtonProps} props - The properties of the component
 * @returns {JSX.Element}
 */
export default function Button({
  type = 'filled',
  color = 'primary',
  size = 'normal',
  children,
  style,
  disabled,
  onPressIn,
  onPressOut,
  ...restProps
}: ButtonProps): JSX.Element {
  const [pressing, setPressing] = useState(false);
  const iconSize = getIconSize();
  const colorStyle = getColorStyle();
  const textStyle = getTextStyle();
  const _style: StyleProp<ViewStyle> = {
    borderRadius: type === 'filled' || type === 'outlined' ? 4 : 0,
    backgroundColor: getBackgroundColor(),
    borderWidth: type === 'outlined' ? 1 : 0,
    borderColor: getBorderColor(),
    flexDirection: size === 'large' ? 'column' : 'row',
    height: size === 'large' ? 80 : undefined,
    width: size === 'large' ? 100 : undefined,
    gap: getGap(),
    ...getPadding(),
  };

  function getGap(): number {
    switch (size) {
      case 'small':
        return 0;
      case 'normal':
        return 8;
      case 'large':
        return 4;
    }
  }

  function getPadding(): Padding | undefined {
    switch (size) {
      case 'small':
        return undefined;
      case 'normal':
        return {
          padding: 12,
        };
      case 'large':
        return {
          paddingTop: 4,
          paddingRight: 8,
          paddingBottom: 4,
          paddingLeft: 8,
        };
    }
  }

  function getIconSize(): number {
    switch (size) {
      case 'small':
        return 14;
      case 'normal':
        return 18;
      case 'large':
        return 20;
    }
  }

  function getTextStyle(): TextStyle {
    const baseTextStyle: TextStyle = {
      textAlign: 'center',
      textAlignVertical: 'center',
    };

    switch (size) {
      case 'small':
        return {
          ...textStyles.label[3],
          ...baseTextStyle,
        };
      case 'normal':
        return {
          ...textStyles.label[2],
          ...baseTextStyle,
        };
      case 'large':
        return {
          ...textStyles.label[3],
          ...baseTextStyle,
          textTransform: 'uppercase',
        };
    }
  }

  function getBorderColor(): string {
    if (type !== 'outlined') {
      return '';
    }

    if (disabled) {
      return colors.hex.charcoal[60];
    }

    switch (color) {
      case 'primary':
        return pressing ? colors.hex.primaryShade : colors.hex.primary;
      case 'black':
        return pressing ? colors.hex.charcoal[90] : colors.hex.black;
      case 'white':
        return pressing ? colors.hex.charcoal[20] : colors.hex.white;
    }
  }

  function getColorStyle(): string {
    if (disabled) {
      return colors.hex.charcoal[60];
    }

    if (type === 'outlined' || type === 'text') {
      switch (color) {
        case 'primary':
          return pressing ? colors.hex.primaryShade : colors.hex.primary;
        case 'black':
          return pressing ? colors.hex.charcoal[90] : colors.hex.black;
        case 'white':
          return pressing ? colors.hex.charcoal[20] : colors.hex.white;
      }
    } else if (type === 'filled') {
      return color === 'primary' || color === 'black'
        ? colors.hex.charcoal[20]
        : colors.hex.black;
    }

    return '';
  }

  function getBackgroundColor(): string {
    if (disabled) {
      return type === 'filled' ? colors.hex.charcoal[40] : 'transparent';
    }

    if (type === 'filled') {
      switch (color) {
        case 'primary':
          return pressing ? colors.hex.primaryShade : colors.hex.primary;
        case 'black':
          return pressing ? colors.hex.charcoal[70] : colors.hex.charcoal[80];
        case 'white':
          return pressing ? colors.hex.charcoal[20] : colors.hex.white;
      }
    } else if (type === 'outlined') {
      return pressing ? colors.hex.charcoal[70] : 'transparent';
    } else if (type === 'text') {
      return 'transparent';
    }

    return '';
  }

  function _onPressOut(event: GestureResponderEvent) {
    setPressing(false);
    if (onPressOut) {
      onPressOut(event);
    }
  }

  function _onPressIn(event: GestureResponderEvent) {
    setPressing(true);
    if (onPressIn) {
      onPressIn(event);
    }
  }

  return (
    <Pressable
      {...restProps}
      disabled={disabled}
      style={[baseStyle, _style, style]}
      onPressIn={_onPressIn}
      onPressOut={_onPressOut}>
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
          return <></>;
        }

        let props: any = {};

        if (!child.props.style) {
          props.style = {
            ...textStyle,
            color: colorStyle,
          };
        }

        if (child.type === Icon) {
          if (!child.props.fill) {
            props.fill = colorStyle;
          }

          if (!child.props.width) {
            props.width = iconSize;
          }

          if (!child.props.height) {
            props.height = iconSize;
          }
        }
        return React.cloneElement(child, props);
      })}
    </Pressable>
  );
}
