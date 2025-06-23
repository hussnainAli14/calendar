import { base, systemScale } from '@teamcalo/healthy-ui/foundations';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: base[0],
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: systemScale.size20,
    paddingHorizontal: systemScale.size20,
    backgroundColor: base[0],
  },
  calendarContainer: {
    width: '100%',
  },
  textContainer: {
    paddingBottom: systemScale.size20,
  },
  title: {
    color: base[80],
  },
  description: {
    color: base[70],
  },
  footer: {
    paddingVertical: systemScale.size16,
    paddingHorizontal: systemScale.size20,
  },
});
