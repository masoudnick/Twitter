interface Entities {
  id: string;
  username: string;
  fromIndex: number;
  toIndex: number;
}

interface Notification {
  id: string;
  icon: string;
  message: string;
  entities: Entities[];
  fromUsers: Array<{
    id: string;
    username: string;
  }>;
  tweet: string | undefined;
  rtl: boolean;
}

export type { Notification, Entities };
