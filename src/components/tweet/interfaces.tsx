interface Media {
  media_key: string;
  media_url: {
    tiny: string;
    small: string;
  };
  alt_text: string | undefined;
}

interface Tweet {
  id: number;
  created_at: string;
  full_text: string;
  reply_count: number;
  retweet_count: number;
  favorite_count: number;
  hashtags: Array<{
    text: string;
  }>;
  media: Media[];
}

export type { Tweet, Media };
