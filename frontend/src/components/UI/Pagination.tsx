import { FC } from 'react'
import { AppButton } from './appButton/AppButton'

type TPaginationProps = {
  length: number
  current: number
  setCurrent: (x: number) => void
}

export const Pagination: FC<TPaginationProps> = ({
  length, current, setCurrent
}) => {
  const max = Math.ceil(length / 15)

  return (
    <div className='text-center mt-3'>
      {current !== 1
        ? <>
          <AppButton
            variant='secondary'
            onClick={() => setCurrent(current - 1)}>
            &lsaquo;
          </AppButton>
          <AppButton
            onClick={() => setCurrent(1)}
            variant='secondary'>1</AppButton>
        </>
        : null}
      <AppButton>
        {current}
      </AppButton>
      {current !== max
        ? <>
          <AppButton
            onClick={() => setCurrent(max)}
            variant='secondary'>{max}</AppButton>
          <AppButton
            variant='secondary'
            onClick={() => setCurrent(current + 1)}>
            &rsaquo;
          </AppButton></>
        : null}
    </div>
  )
}
