import { BookmarkPlus } from 'lucide-react'
import React from 'react'

const SuggestionItem = () => {
  return (
    <article className='relative flex-ic h-18 px-4 gap-4'>
        <div className='icon size-10 rounded-lg bg-linear-to-t from-primary-shade-100 to-primary-tint-700'></div>
        <div className='grow flex-between text-sm'>
            <p>
                عنوان کمپانی
            </p>

            <button className='cursor-pointer text-neutral-600'>
                <BookmarkPlus className='size-5'/>
            </button>
        </div>

        <div className='w-[calc(100%_-_70px)] h-px bg-neutral-100 absolute left-0 bottom-0'/>
    </article>
  )
}

export default SuggestionItem