import type { RegisteredStyle, ViewStyle } from 'react-native';

import { TextVariant } from '@teamcalo/healthy-ui';
import { DateData } from 'react-native-calendars';
import { DayProps } from 'react-native-calendars/src/calendar/day';
import { DayState } from 'react-native-calendars/src/types';

export type Locale = 'en' | 'ar';

type SizeStyles = {
  headerContainerPadding: RegisteredStyle<ViewStyle>;
  daysContainerPadding: RegisteredStyle<ViewStyle>;
  itemSize: RegisteredStyle<ViewStyle>;
  innerContainerGap: RegisteredStyle<ViewStyle>;
  monthTextVariant: TextVariant;
  yearTextVariant: TextVariant;
  dateTextVariant: TextVariant;
};

export type CalendarProps = {
  onDatePress: (userSelectedDate: DateData | undefined) => void;
  selectedDate: string;
  minDate: string;
  maxDate: string;
  screenSize: 'small' | 'medium' | 'large';
  isTodayDisabled: (date: DateData | undefined) => boolean;
  weekDays: string[];
  isNotUserSelectedDeliveryDay: (date: DateData | undefined) => boolean;
};
export interface HeaderProps {
  date: {
    addMonth: (months: number) => void;
    month: string;
  };
  weekDays: string[];
}

export type DaysAndDateContainerProps = {
  matrix: (string | number)[][];
  selectedDate: Date | null;
  handleDateSelect: (date: number) => void;
  currentDate: Date;
  sizeStyles: SizeStyles;
  isDateDisabled: (date: Date) => boolean;
};

export type WeekDayProps = {
  item: string | number;
  colIndex: number;
  sizeStyles: SizeStyles;
};

export type CalendarDayComponentProps = DayProps & {
  date?: DateData;
};
export type DateProps = {
  date?: DateData;
  handleDateSelect: (date: DateData | undefined) => void;
  sizeStyles: SizeStyles;
  isDisabled: boolean;
  state?: DayState;
  selectedDate: string | null;
  isTodayDisabled: (date: DateData | undefined) => boolean;
};

export type ItemRendererProps = {
  item: string | number;
  rowIndex: number;
  colIndex: number;
  selectedDate: Date | null;
  currentDate: Date;
  handleDateSelect: (date: number) => void;
  sizeStyles: SizeStyles;
  isDateDisabled: (date: Date) => boolean;
};

export type UseCalendarProps = {
  onDateSelect?: (date: Date) => void;
  isSupplyCap?: boolean;
  locale: Locale;
  userSelectedDeliveryDays?: number[];
};
