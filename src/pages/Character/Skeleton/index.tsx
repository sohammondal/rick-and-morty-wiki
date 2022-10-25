import Skeleton from '@mui/material/Skeleton'
import React from 'react'

import { CharInfo } from '../styles'

export const CharacterModalSkeleton: React.FC<{ charInfo: Record<string, string> }> = ({
  charInfo,
}) => (
  <>
    <div className='character-information'>
      <Skeleton variant='rounded' component='img' />
      <div style={{ width: '40%' }}>
        {Object.keys(charInfo).map((charInfoKey) => {
          return (
            <CharInfo key={charInfoKey}>
              <Skeleton variant='text' component='div' width='100%' />
            </CharInfo>
          )
        })}
      </div>
    </div>
    <div className='character-episodes'>
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <Skeleton
            key={`episode-skeletion-${index}`}
            variant='text'
            component='div'
            width='100%'
            height={50}
          />
        ))}
    </div>
  </>
)
