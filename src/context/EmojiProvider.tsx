'use client'

import {FC, useState, useEffect} from 'react'
import EmojiContext, { Emoji, EmojiContextType } from './EmojiContext'

const EmojiProvider:FC<{children: JSX.Element}> = ({children}) => {
    const [emoji, setEmoji] = useState<Emoji | null>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<unknown>(null)

    
    const fetchEmoji = async () => {
        setLoading(true);
        try{
            const response = await fetch('https://emojihub-1001447344924.asia-southeast2.run.app/api/random');
            if (!response.ok) {
                throw new Error('Failed to fetch emoji');
            }
            const data = await response.json();
            setEmoji(data);
            setLoading(false);
            console.log('fetch succees')
        } catch (error){
            setError(error);
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchEmoji();
        console.log('i call once')
      }, []);


    const value:EmojiContextType = {
        emoji,
        loading,
        error,
        fetchEmoji
    }

    return <EmojiContext.Provider value={value}>{children}</EmojiContext.Provider>
}

export default EmojiProvider
