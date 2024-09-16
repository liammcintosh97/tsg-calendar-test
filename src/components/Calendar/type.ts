import { LayoutRectangle } from "react-native";
import { CalendarProps as RNCalendarProps} from "react-native-calendars";
import { DayProps as RNDayProps} from "react-native-calendars/src/calendar/day";
import { ContextProp, DateData } from "react-native-calendars/src/types";

export type CalenderProps = {
  onApply?: (selection: DateData[]) => void
} & RNCalendarProps & ContextProp

export type DaySelectProps = {
  onApply?: (selection: DateData[]) => void
  onSelectionChange?: (selection: DateData[]) => void
  calendarMonth: Date
} & RNCalendarProps & ContextProp

export type MonthSelectProps = {
  onSelectMonth?: (month: number) => void
  onCancel?: () => void
  initialMonth: number
}

export type DayProps = {
  calendarDimensions?: LayoutRectangle
} & RNDayProps & {
  date?: DateData;
}