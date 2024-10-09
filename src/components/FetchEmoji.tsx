"use client";

import getCaption from '@/utils/getCaption';
import { FC, useState, useEffect } from 'react';

interface Emoji {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
  unicode: string[];
}

const FetchEmoji: FC = () => {
  const [data, setData] = useState<Emoji | null>(null);
  const [newEmoji, setNewEmoji] = useState<boolean>(false)

  useEffect(() => {
    const fetchAllEmoji = async () => {
      const response = await fetch('https://emojihub-1001447344924.asia-southeast2.run.app/api/random');
      if (!response.ok) {
        throw new Error('Failed to fetch emoji');
      }
      const data = await response.json();
      setData(data);
    };

    fetchAllEmoji();
  }, [newEmoji]);

  const handleEmojiClick = ()=> {
    setNewEmoji(!newEmoji)
  }

  return (
    <div className='px-[100px]'>
      {data ? (
        <div className='flex flex-col items-center' onClick={handleEmojiClick}>
          <div>
            {data.htmlCode.map((code, index) => (
              <span key={index} dangerouslySetInnerHTML={{ __html: code }} className='text-[160px]' />
            ))}
          </div>
          <div className='italic text-[14px] text-center'>{getCaption(data.category)}</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchEmoji;
