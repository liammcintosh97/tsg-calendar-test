import { CalendarProps as RNCalendarProps} from "react-native-calendars";
import { ContextProp, DateData, } from "react-native-calendars/src/types";

export type CalenderProps = {
  onApply?: (selection: DateData[]) => void
} & RNCalendarProps & ContextProp

export type DaySelectProps = {
  onApply?: (selection: DateData[]) => void
  onSelectionChange?: (selection: DateData[]) => void
  calendarMonth: Date
  selection: DateData[]
} & RNCalendarProps & ContextProp

export type MonthSelectProps = {
  onSelectMonth?: (month: number) => void
  onCancel?: () => void
  initialMonth: number
}