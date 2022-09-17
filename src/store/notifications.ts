import type { Notification } from "../lib/types/notification.type";
import { defineStore } from "pinia";

export interface NotificationStoreState {
  notifications: Notification[];
}

export const useNotificationsStore = defineStore("notifications", {
  state: (): NotificationStoreState => {
    return {
      notifications: [
        {
          id: 1,
          type: "reaction-recent-post",
          data: {
            post: {
              id: 1,
              title: "My first tournament today!",
            },
          },
          createdBy: {
            profilePicture: "mark-webber",
            username: "Mark Webber",
          },
          createdAt: "1m ago",
          read: false,
        },
        {
          id: 2,
          type: "new-follower",
          createdBy: {
            profilePicture: "angela-gray",
            username: "Angela Gray",
          },
          createdAt: "5m ago",
          read: false,
        },
        {
          id: 3,
          type: "joined-your-group",
          data: {
            group: {
              id: 1,
              name: "Chess Club",
            },
          },
          createdBy: {
            profilePicture: "jacob-thompson",
            username: "Jacob Thompson",
          },
          createdAt: "1 day ago",
          read: false,
        },
        {
          id: 4,
          type: "private-message",
          data: {
            message: {
              data: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
            },
          },
          createdBy: {
            profilePicture: "rizky-hasanuddin",
            username: "Rizky Hasanuddin",
          },
          createdAt: "5 days ago",
          read: true,
        },
        {
          id: 5,
          type: "reaction-on-picture",
          data: {
            post: {
              id: 1,
              picture: "image-chess",
            },
          },
          createdBy: {
            profilePicture: "kimberly-smith",
            username: "Kimberly Smith",
          },
          createdAt: "1 week ago",
          read: true,
        },
        {
          id: 6,
          type: "reaction-recent-post",
          data: {
            post: {
              id: 1,
              title: "5 end-game strategies to increase your win rate",
            },
          },
          createdBy: {
            profilePicture: "nathan-peterson",
            username: "Nathan Peterson",
          },
          createdAt: "2 weeks agon",
          read: true,
        },
        {
          id: 7,
          type: "left-your-group",
          data: {
            group: {
              id: 1,
              name: "Chess Club",
            },
          },
          createdBy: {
            profilePicture: "anna-kim",
            username: "Anna Kim",
          },
          createdAt: "2 weeks ago",
          read: true,
        },
      ],
    };
  },
  getters: {
    allNotifications: (state) => state.notifications,
  },
  actions: {
    markAsRead(id: number) {
      const notification = this.notifications.find((n) => n.id === id);

      if (notification) {
        notification.read = true;
      }
    },
    markAllAsRead() {
      this.notifications.forEach((n) => {
        n.read = true;
      });
    },
  },
});
