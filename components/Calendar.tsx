import React from 'react';

import { TextVariant } from '@teamcalo/healthy-ui';
import { systemScale } from '@teamcalo/healthy-ui/foundations';
import { format } from 'date-fns';
import { Calendar as RNCalendar } from 'react-native-calendars';

import DateComponent from './Date';
import Header from './Header';
import styles from './styles';
import { CalendarDayComponentProps, CalendarProps } from './types';

const SIZE_STYLES = {
  small: {
    headerContainerPadding: styles.smallHeaderContainerPadding,
    daysContainerPadding: styles.smallDaysContainerPadding,
    itemSize: styles.smallItemSize,
    innerContainerGap: styles.smallInnerContainerGap,
    monthTextVariant: 'paragraph-m-bold' as TextVariant,
    yearTextVariant: 'paragraph-m-regular' as TextVariant,
    dateTextVariant: 'caption-s-regular' as TextVariant,
  },
  medium: {
    headerContainerPadding: styles.mediumHeaderContainerPadding,
    daysContainerPadding: styles.mediumDaysContainerPadding,
    itemSize: styles.mediumItemSize,
    innerContainerGap: styles.mediumInnerContainerGap,
    monthTextVariant: 'paragraph-l-bold' as TextVariant,
    yearTextVariant: 'paragraph-l-regular' as TextVariant,
    dateTextVariant: 'caption-m-regular' as TextVariant,
  },
  large: {
    headerContainerPadding: styles.largeHeaderContainerPadding,
    daysContainerPadding: styles.largeDaysContainerPadding,
    itemSize: styles.largeItemSize,
    innerContainerGap: styles.largeInnerContainerGap,
    monthTextVariant: 'paragraph-l-bold' as TextVariant,
    yearTextVariant: 'paragraph-l-regular' as TextVariant,
    dateTextVariant: 'caption-m-regular' as TextVariant,
  },
};

const Calendar = ({
  onDatePress,
  selectedDate,
  minDate,
  maxDate,
  screenSize,
  isTodayDisabled,
  weekDays,
  isNotUserSelectedDeliveryDay,
}: CalendarProps) => {
  return (
    <RNCalendar
      firstDay={1}
      hideArrows={true}
      hideExtraDays={true}
      current={format(new Date(selectedDate), 'yyyy-MM-dd')}
      customHeader={(date: { addMonth: (months: number) => void; month: string }) => {
        return <Header date={date} weekDays={weekDays} />;
      }}
      style={styles.calendar}
      initialDate={selectedDate}
      minDate={minDate}
      maxDate={maxDate}
      disableAllTouchEventsForDisabledDays={true}
      dayComponent={(props: CalendarDayComponentProps) => (
        <DateComponent
          date={props.date}
          state={props.state}
          handleDateSelect={onDatePress}
          isDisabled={props.state === 'disabled' || isNotUserSelectedDeliveryDay(props?.date)}
          selectedDate={selectedDate}
          sizeStyles={SIZE_STYLES[screenSize]}
          isTodayDisabled={isTodayDisabled}
        />
      )}
      theme={{
        stylesheet: {
          calendar: {
            main: {
              container: {
                paddingLeft: 0,
                paddingRight: 0,
              },
              dayContainer: {
                flex: 1,
                alignItems: 'center',
                marginTop: -10,
              },
              monthView: {
                paddingHorizontal: systemScale.size8,
              },
            },
          },
        },
      }}
    />
  );
};

export default Calendar;
