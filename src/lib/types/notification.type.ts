export type NotificationType =
  | "reaction-recent-post"
  | "reaction-on-picture"
  | "joined-your-group"
  | "left-your-group"
  | "new-follower"
  | "private-message";

export type User = {
  profilePicture: string;
  username: string;
};

export type Notification = {
  id: number;
  type: NotificationType;
  data?: any;
  createdBy: User;
  createdAt: string;
  read: boolean;
};
