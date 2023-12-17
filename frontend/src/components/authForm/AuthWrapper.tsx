import { FC, ReactNode } from "react";

type TAuthWrapperProps = { children: ReactNode }

export const AuthWrapper: FC<TAuthWrapperProps> = ({ children }) => {
  return (
    <div className='flex justify-center'>
      <div className='w-96 mt-12'>
        {children}
      </div>
    </div>
  )
}

