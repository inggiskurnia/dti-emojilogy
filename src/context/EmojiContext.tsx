import { createContext } from "react";

export interface Emoji {
    name: string;
    category: string;
    group: string;
    htmlCode: string[];
    unicode: string[];
  }

  export interface EmojiContextType {
    emoji: Emoji | null;
    loading: boolean;
    error: unknown;
    fetchEmoji: () => void;
  }

  const EmojiContext = createContext<EmojiContextType | undefined>(undefined);

  export default EmojiContext