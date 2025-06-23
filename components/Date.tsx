import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Text } from '@teamcalo/healthy-ui';

import styles from './styles';
import { DateProps } from './types';

const DateComponent = ({
  date,
  handleDateSelect,
  sizeStyles,
  isDisabled,
  selectedDate,
  isTodayDisabled,
  state,
}: DateProps) => {
  const isSelected = selectedDate === date?.dateString;
  const isTodayAndDisabled = state === 'today' && isTodayDisabled(date);
  return (
    <TouchableOpacity
      style={[styles.item, isSelected && styles.selectedItem, sizeStyles.itemSize]}
      onPress={() => handleDateSelect(date)}
      disabled={isDisabled || isTodayAndDisabled}>
      <Text
        variant={sizeStyles.dateTextVariant}
        style={[
          styles.dayText,
          isDisabled || isTodayAndDisabled ? styles.disabledText : isSelected ? styles.selectedText : styles.dayText,
        ]}>
        {date?.day}
      </Text>
    </TouchableOpacity>
  );
};

export default DateComponent;
