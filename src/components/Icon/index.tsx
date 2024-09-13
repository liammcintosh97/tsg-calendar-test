/** @module Icon */
import React, {ReactElement} from 'react';
import {IconName, IconProps} from './type';
import Book from '../../../assets/icons/book.svg';
import Home from '../../../assets/icons/home.svg';
import More from '../../../assets/icons/more.svg';
import Offers from '../../../assets/icons/offers.svg';
import Order from '../../../assets/icons/order.svg';
import ChevronLeftFilled from '../../../assets/icons/chevronLeftFilled.svg';
import ChevronRightFilled from '../../../assets/icons/chevronRightFilled.svg';
import LocationOnFilled from '../../../assets/icons/locationOnFilled.svg';
import Unselected from '../../../assets/icons/unselected.svg';
import CheckCircleFilled from '../../../assets/icons/checkCircleFilled.svg';
import AccountCircleFilled from '../../../assets/icons/accountCircleFilled.svg';
import CalendarTodayFilled from '../../../assets/icons/calendarTodayFilled.svg';
import AFL from '../../../assets/icons/afl.svg';
import Baseball from '../../../assets/icons/baseball.svg';
import Basketball from '../../../assets/icons/basketball.svg';
import Criket from '../../../assets/icons/cricket.svg';
import Events from '../../../assets/icons/events.svg';
import Sports from '../../../assets/icons/sports.svg';
import Cross from '../../../assets/icons/cross.svg';
import Alert from '../../../assets/icons/alert.svg';
import Logo from '../../../assets/icons/logo.svg';
import Tiktok from '../../../assets/icons/tiktok.svg';
import Instagram from '../../../assets/icons/insta.svg';
import Facebook from '../../../assets/icons/facebook.svg';
import SignOut from '../../../assets/icons/signOut.svg';
import Trash from '../../../assets/icons/trash.svg';
import TrashFilled from '../../../assets/icons/trashFilled.svg';
import Heart from '../../../assets/icons/heart.svg';
import Lock from '../../../assets/icons/lock.svg';
import Notification from '../../../assets/icons/notification.svg';
import User from '../../../assets/icons/user.svg';
import Star from '../../../assets/icons/star.svg';
import StarFilled from '../../../assets/icons/starFilled.svg';
import Direction from '../../../assets/icons/direction.svg';
import Phone from '../../../assets/icons/phone.svg';
import Mail from '../../../assets/icons/mail.svg';
import DateRangeFilled from '../../../assets/icons/dateRangeFilled.svg';
import EventDateFilled from '../../../assets/icons/eventDateFilled.svg';
import Rugby from '../../../assets/icons/rugby.svg';
import Racing from '../../../assets/icons/racing.svg';
import NFL from '../../../assets/icons/nfl.svg';
import EditFilled from '../../../assets/icons/editFilled.svg';
import EditOff from '../../../assets/icons/editOff.svg';
import CaretUp from '../../../assets/icons/caretUp.svg';
import CaretDown from '../../../assets/icons/caretDown.svg';

/**
 * Renders an SVG icon
 * @memberof module:Icon
 * @param {IconProps} props - The properties of the component
 * @returns {JSX.Element}
 */
export default function Icon({
  iconName,
  width,
  height,
  fill,
}: IconProps): JSX.Element {
  return React.cloneElement(icons[iconName], {
    width,
    height,
    fill,
  });
}

const icons: Record<IconName, ReactElement> = {
  book: <Book />,
  home: <Home />,
  more: <More />,
  offers: <Offers />,
  order: <Order />,
  chevronLeftFilled: <ChevronLeftFilled />,
  chevronRightFilled: <ChevronRightFilled />,
  locationOnFilled: <LocationOnFilled />,
  unselected: <Unselected />,
  checkCircleFilled: <CheckCircleFilled />,
  accountCircleFilled: <AccountCircleFilled />,
  calendarTodayFilled: <CalendarTodayFilled />,
  afl: <AFL />,
  baseball: <Baseball />,
  basketball: <Basketball />,
  cricket: <Criket />,
  events: <Events />,
  sports: <Sports />,
  cross: <Cross />,
  alert: <Alert />,
  logo: <Logo />,
  tiktok: <Tiktok />,
  instagram: <Instagram />,
  facebook: <Facebook />,
  signOut: <SignOut />,
  trash: <Trash />,
  trashFilled: <TrashFilled />,
  heart: <Heart />,
  lock: <Lock />,
  notification: <Notification />,
  user: <User />,
  star: <Star />,
  starFilled: <StarFilled />,
  direction: <Direction />,
  phone: <Phone />,
  mail: <Mail />,
  dateRangeFilled: <DateRangeFilled />,
  eventDateFilled: <EventDateFilled />,
  rugby: <Rugby />,
  racing: <Racing />,
  nfl: <NFL />,
  editFilled: <EditFilled />,
  editOff: <EditOff />,
  caretUp: <CaretUp />,
  caretDown: <CaretDown />,
};
