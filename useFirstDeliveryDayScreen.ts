import { useCallback, useEffect, useState } from 'react';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import { DateData } from 'react-native-calendars';
import { shallow } from 'zustand/shallow';

import { analytics } from '@analytics';
import { SuperAppMealsTabNavigationProp, SuperAppMealsTabRoutes } from '@navigations';
import { useOnboardingStore } from '@store';
import { width } from '@utils';

export default () => {
  const navigation =
    useNavigation<SuperAppMealsTabNavigationProp<typeof SuperAppMealsTabRoutes.OnboardingFirstDeliveryDayScreen>>();

  const [size, setSize] = useState<'small' | 'medium' | 'large'>('large');
  const today = new Date();

  const [selectedDate, setSelectedDate] = useState<string>(today as unknown as string);

  useFocusEffect(
    useCallback(() => {
      if (width < 320) {
        setSize('small');
      } else if (width < 375) {
        setSize('medium');
      } else {
        setSize('large');
      }
    }, []),
  );
  const { kitchenStatus, getCurrentOnboarding, updateCurrentOnboarding } = useOnboardingStore(
    (state) => ({
      kitchenStatus: state.kitchenStatus,
      getCurrentOnboarding: state.getCurrentOnboarding,
      updateCurrentOnboarding: state.updateCurrentOnboarding,
    }),
    shallow,
  );

  const isNotUserSelectedDeliveryDay = (date: DateData | undefined) => {
    if (!date) {
      return false;
    }
    const receivedDate = new Date(date.dateString);
    const dayOfWeek = receivedDate.getDay();
    return !userSelectedDeliveryDays.includes(dayOfWeek);
  };

  const isTodayDisabled = (date: DateData | undefined) => {
    if (!date) {
      return false;
    }
    return date.dateString < minDateStr;
  };

  const dateToDateData = (date: Date): DateData => ({
    dateString: format(date, 'yyyy-MM-dd'),
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    timestamp: date.getTime(),
  });

  const currentUser = getCurrentOnboarding();

  const userSelectedDeliveryDays = currentUser.delivery?.days ?? [0, 1, 2, 3, 6];

  const defaultDate = kitchenStatus?.isSupplyCap
    ? null
    : currentUser.delivery?.startDate
      ? new Date(currentUser.delivery.startDate)
      : new Date(today);
  const minDate = new Date(today);

  const minDateStr = format(minDate.setDate(today.getDate() + 2), 'yyyy-MM-dd');
  const maxDate = new Date(today);
  maxDate.setMonth(today.getMonth() + 11);
  const maxDateStr = format(maxDate, 'yyyy-MM-dd');

  useEffect(() => {
    let defaultDateStr: string = defaultDate ? format(defaultDate, 'yyyy-MM-dd') : '';

    if (defaultDate && selectedDate === (today as unknown as string)) {
      if (!userSelectedDeliveryDays.includes(defaultDate.getDay())) {
        while (isNotUserSelectedDeliveryDay(dateToDateData(defaultDate))) {
          defaultDate.setDate(defaultDate.getDate() + 1);
        }
        defaultDateStr = format(defaultDate, 'yyyy-MM-dd');
      } else if (defaultDate <= minDate) {
        defaultDateStr = minDateStr;
      } else {
        const twoDaysAfter = new Date(defaultDate);
        twoDaysAfter.setDate(defaultDate.getDate() + 2);
        if (!userSelectedDeliveryDays.includes(twoDaysAfter.getDay())) {
          while (isNotUserSelectedDeliveryDay(dateToDateData(twoDaysAfter))) {
            twoDaysAfter.setDate(twoDaysAfter.getDate() + 1);
          }
          defaultDateStr = format(twoDaysAfter, 'yyyy-MM-dd');
        }
      }
      setSelectedDate(defaultDateStr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWeekDays = () => {
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(2024, 0, i + 1);
      const dayName = format(date, 'EEEEE');
      weekDays.push(dayName);
    }
    return weekDays;
  };

  const weekDays = getWeekDays();

  const onDatePress = (userSelectedDate: DateData | undefined) => {
    if (userSelectedDate) {
      setSelectedDate(userSelectedDate.dateString);
    }
  };

  useEffect(() => {}, [selectedDate]);

  const onContinuePress = () => {
    if (selectedDate) {
      analytics.firstDeliveryDaySubmitted(selectedDate);
      updateCurrentOnboarding({
        ...currentUser,
        delivery: {
          ...currentUser.delivery,
          startDate: selectedDate,
        },
      });
      navigation.navigate(SuperAppMealsTabRoutes.SuperAppOnboardingDeliverySchedule);
    }
  };
  return {
    onDatePress,
    onContinuePress,
    selectedDate,
    setSelectedDate,
    isSupplyCap: kitchenStatus?.isSupplyCap ?? false,
    minDate: minDateStr,
    maxDate: maxDateStr,
    screenSize: size,
    isTodayDisabled,
    weekDays,
    isNotUserSelectedDeliveryDay,
  };
};
