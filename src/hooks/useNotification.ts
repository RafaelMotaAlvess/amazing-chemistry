import { create } from 'zustand';

interface NotificationStore {
  isNotification: boolean;
  launchNotification: () => void;
}

export const useNotification = create<NotificationStore>((set, get) => ({
  isNotification: false,
  launchNotification: () => {
    const { isNotification } = get();

    const newNotificationState = !isNotification;

    if (newNotificationState) {
      set({
        isNotification: true,
      });

      setTimeout(() => {
        set({ isNotification: false });
      }, 5000);
    } else {
      set({
        isNotification: false,
      });
    }
  },
}));
