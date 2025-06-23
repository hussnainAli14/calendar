import React from 'react';
import { View } from 'react-native';

import { Text } from '@teamcalo/healthy-ui';
import { format, isSameMonth } from 'date-fns';

import Icon from '@iconsV2/Icon';
import { isRTL } from '@utils';

import styles from './styles';
import type { HeaderProps } from './types';

const Header = ({ date, weekDays }: HeaderProps) => {
  const today = new Date();
  const currentDate = new Date(date.month);
  const isCurrentMonth = isSameMonth(currentDate, today);

  const handleNextMonth = () => {
    date.addMonth(1);
  };

  const handlePreviousMonth = () => {
    date.addMonth(-1);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTitleContainer}>
        <Text variant="caption-l-bold" style={styles.month}>
          {format(currentDate, 'MMMM')}{' '}
          <Text variant="caption-l-regular" style={styles.year}>
            {format(currentDate, 'yyyy')}
          </Text>
        </Text>
        <View style={styles.iconContainer}>
          {!isCurrentMonth && (
            <Icon
              name={isRTL ? 'caret-right' : 'caret-left'}
              type="ds"
              variant="outline"
              onPress={handlePreviousMonth}
            />
          )}
          <Icon name={isRTL ? 'caret-left' : 'caret-right'} type="ds" variant="outline" onPress={handleNextMonth} />
        </View>
      </View>
      <View style={styles.weekContainer}>
        {weekDays.map((day, index) => (
          <View key={day + index} style={styles.weekItem}>
            <Text variant="caption-m-bold" style={styles.weekDay}>
              {day}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Header;
