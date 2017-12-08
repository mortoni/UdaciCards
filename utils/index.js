import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo'

export const checkStatus = (state) => state === null || state.trim() !== '' ? {} :  { error: true };
export const isNullOrBlank = (v) => v === null || (v.trim && v.trim() === '');

const NOTIFICATION_KEY = 'UDACICARDS_NOTIFICATION';
const createNotification = () => ({
  title: 'It is time to practice your skills',
  body: "👋 don't forget to do a quiz today!",
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    sticky: false,
    vibrate: true,
  }
});

export async function setNotification () {

  const data = JSON.parse(await AsyncStorage.getItem(NOTIFICATION_KEY));
  if (data !== null) return; // already set
  const { status } = Permissions.askAsync(Permissions.NOTIFICATIONS)
  if (status !== 'granted') return;// nothing to see here
  Notifications.cancelAllScheduledNotificationsAsync()
  let tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(10)
  tomorrow.setMinutes(0)

  Notifications.scheduleLocalNotificationAsync(
    createNotification(),
    {
      time: tomorrow,
      repeat: 'day',
    }
  )

  AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
}
