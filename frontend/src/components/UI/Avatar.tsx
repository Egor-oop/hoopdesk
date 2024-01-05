import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { FC } from 'react'

type TAvatarProps = { fallback: string }

export const Avatar: FC<TAvatarProps> = ({ fallback }) => {
  return (
    <AvatarPrimitive.Root
     className='inline-flex items-center justify-center align-middle overflow-hidden select-none w-7 h-7 rounded-md bg-sky-200 text-sky-600'>
      <AvatarPrimitive.Fallback>
        {fallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}
