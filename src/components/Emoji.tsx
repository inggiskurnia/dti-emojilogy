"use client";

import EmojiContext from '@/context/EmojiContext';
import getCaption from '@/utils/getCaption';
import { FC, useContext } from 'react';

const FetchEmoji: FC = () => {
  const emojiContext = useContext(EmojiContext);

  if (!emojiContext) {
    return <p>Loading...</p>; 
  }

  const { emoji, fetchEmoji, loading, error } = emojiContext;

  const copyToClipboard = (text: string) => {
    if (text) {
      navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard!");
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }
  };

  return (
    <div className='flex flex-col items-center px-[100px]'>
      <h1 className="text-[20px] italic cursor-pointer" onClick={() => fetchEmoji()}>Click it!</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading emoji.</p>
      ) : (
        <div className='flex flex-col items-center'>
          <div onClick={() => copyToClipboard(emoji?.htmlCode.join('') || '')}>
            {emoji?.htmlCode.map((code: string, index: number) => (
              <span key={index} dangerouslySetInnerHTML={{ __html: code }} className='text-[160px]' />
            ))}
          </div>
          <div className='italic text-[14px] text-center' onClick={() =>  copyToClipboard(emoji?.category || '')}>
            {getCaption(emoji?.category || '')}
          </div>
        </div>
      )}
    </div>
  );
};

export default FetchEmoji;
