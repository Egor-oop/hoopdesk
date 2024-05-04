import * as ToastPrimitive from '@radix-ui/react-toast'
import clsx from 'clsx'
import { FC, ReactNode, useState } from 'react'

interface ToastProps {
  title?: string
  description?: string
  variant: 'success' | 'warning'
}

export const Toast: FC<ToastProps> = ({ title, description, variant }) => {
  const [open, setOpen] = useState(false);

  return (
    // TODO: Provider shouldn't be here because it must be outside

    <ToastPrimitive.Provider swipeDirection="right">
      <button
        className="inline-flex items-center justify-center rounded font-medium text-[15px] px-[15px] leading-[35px] h-[35px] bg-white text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black"
        onClick={() => {
          setOpen(!open);
        }}
      >
        Add to calendar
      </button>
      <ToastPrimitive.Root
        className={clsx(
          {
            'bg-green-600': variant === "success",
            'bg-red-600': variant === "warning"
          },
          " text-slate-50 rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-4 grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
        )}
        open={open}
        onOpenChange={setOpen}
      >
        <div className='flex justify-between'>
          <ToastPrimitive.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
            {title}
          </ToastPrimitive.Title>
          <ToastPrimitive.Description asChild>
            <p>{description}</p>
          </ToastPrimitive.Description>
        </div>
        <div className="flex">
          <div className="flex flex-col px-3 py-2 space-y-1">
            <div className="h-0 flex-1 flex">
              {/* <ToastPrimitive.Action className="[grid-area:_action]" asChild altText="Goto schedule to undo">
              </ToastPrimitive.Action> */}
              <ToastPrimitive.Action altText='Ok'
                className={clsx(
                  'hover:underline',
                  "text-slate-50 w-full border border-transparent rounded-lg px-3 py-2 flex items-center justify-center text-sm font-medium focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                )}>
                Понятно
              </ToastPrimitive.Action>
            </div>
          </div>
        </div>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </ToastPrimitive.Provider>
  );
}
