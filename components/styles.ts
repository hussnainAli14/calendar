import { base, brand, systemScale } from '@teamcalo/healthy-ui/foundations';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  smallHeaderContainerPadding: {
    padding: systemScale.size12,
  },
  mediumHeaderContainerPadding: {
    padding: systemScale.size16,
  },
  largeHeaderContainerPadding: {
    padding: systemScale.size20,
  },

  smallDaysContainerPadding: {
    padding: systemScale.size12,
  },
  mediumDaysContainerPadding: {
    padding: systemScale.size16,
  },
  largeDaysContainerPadding: {
    padding: systemScale.size20,
  },

  smallItemSize: {
    height: systemScale.size32,
    width: systemScale.size32,
  },
  mediumItemSize: {
    height: systemScale.size36,
    width: systemScale.size36,
  },
  largeItemSize: {
    height: systemScale.size40,
    width: systemScale.size40,
  },

  smallInnerContainerGap: {
    gap: systemScale.size2,
  },
  mediumInnerContainerGap: {
    gap: systemScale.size4,
  },

  largeInnerContainerGap: {
    gap: systemScale.size6,
  },
  calendar: {
    borderWidth: 1,
    borderColor: base[20],
    borderRadius: systemScale.size20,
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: systemScale.size10,
  },
  headerContainer: {
    gap: systemScale.size20,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: systemScale.size24,
    width: '100%',
    backgroundColor: base[20],
    borderWidth: 1,
    borderColor: base[20],
    borderTopLeftRadius: systemScale.size20,
    borderTopRightRadius: systemScale.size20,
    paddingVertical: systemScale.size20,
    paddingHorizontal: systemScale.size28,
  },
  month: {
    color: base[80],
    verticalAlign: 'middle',
  },
  year: {
    color: base[70],
    verticalAlign: 'middle',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: systemScale.size12,
  },
  weekContainer: {
    flexDirection: 'row',
    gap: systemScale.size14,
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: systemScale.size28,
  },
  weekDay: {
    color: base[80],
    textAlign: 'center',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: systemScale.size52,
  },
  weekItem: {
    justifyContent: 'center',
    alignItems: 'center',
    height: systemScale.size40,
  },
  selectedItem: {
    backgroundColor: brand[90],
  },
  dayText: {
    color: base[80],
    textAlign: 'center',
  },
  selectedText: {
    color: base[0],
    textAlign: 'center',
  },
  disabledText: {
    color: base[50],
    textAlign: 'center',
  },
});
