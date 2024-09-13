/**
 * The properties of the Icon component
 * @memberof module:Icon
 */
export type IconProps = {
  /** The name of the icon file */
  iconName: IconName;
  /** The width of the icon */
  width?: number;
  /** The height of the icon */
  height?: number;
  /** The fill color of the icon */
  fill?: string;
};

/**
 * The Icon names
 * @memberof module:Icon
 */
export type IconName =
  | 'book'
  | 'home'
  | 'more'
  | 'offers'
  | 'order'
  | 'locationOnFilled'
  | 'chevronLeftFilled'
  | 'chevronLeftFilled'
  | 'chevronRightFilled'
  | 'checkCircleFilled'
  | 'unselected'
  | 'accountCircleFilled'
  | 'calendarTodayFilled'
  | 'afl'
  | 'baseball'
  | 'basketball'
  | 'cricket'
  | 'events'
  | 'sports'
  | 'cross'
  | 'alert'
  | 'logo'
  | 'editFilled'
  | 'editOff'
  | 'star'
  | 'starFilled'
  | 'direction'
  | 'phone'
  | 'mail'
  | 'tiktok'
  | 'instagram'
  | 'facebook'
  | 'signOut'
  | 'signOut'
  | 'trash'
  | 'trashFilled'
  | 'heart'
  | 'lock'
  | 'notification'
  | 'user'
  | 'dateRangeFilled'
  | 'eventDateFilled'
  | 'rugby'
  | 'racing'
  | 'nfl'
  | 'caretUp'
  | 'caretDown';
