import React from 'react';
import { View } from 'react-native';

import { Button, Text } from '@teamcalo/healthy-ui';

import Layout from '@components/LayoutV2';
import { useTabsHider } from '@hooks';
import useI18n from '@i18n';

import Calendar from './components/Calendar';
import styles from './styles';
import useFirstDeliveryDayScreen from './useFirstDeliveryDayScreen';

const FirstDeliveryDayScreen = () => {
  useTabsHider();
  const i18n = useI18n();
  const {
    onContinuePress,
    isSupplyCap,
    onDatePress,
    selectedDate,
    minDate,
    maxDate,
    screenSize,
    isTodayDisabled,
    weekDays,
    isNotUserSelectedDeliveryDay,
  } = useFirstDeliveryDayScreen();

  return (
    <Layout topBar={true} style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text variant="h1" style={styles.title}>
            {i18n('page.onboarding.firstDeliveryDayScreen.title')}
          </Text>
          <Text variant="paragraph-m-regular" style={styles.description}>
            {isSupplyCap
              ? i18n('page.onboarding.firstDeliveryDayScreen.supplyCap')
              : i18n('page.onboarding.firstDeliveryDayScreen.description')}
          </Text>
        </View>
        <Calendar
          onDatePress={onDatePress}
          selectedDate={selectedDate}
          minDate={minDate}
          maxDate={maxDate}
          screenSize={screenSize}
          isTodayDisabled={isTodayDisabled}
          weekDays={weekDays}
          isNotUserSelectedDeliveryDay={isNotUserSelectedDeliveryDay}
        />
      </View>
      <View style={styles.footer}>
        <Button
          variant="primary"
          label={i18n('page.onboarding.firstDeliveryDayScreen.continue')}
          onPress={onContinuePress}
          size="large"
        />
      </View>
    </Layout>
  );
};

export default FirstDeliveryDayScreen;
