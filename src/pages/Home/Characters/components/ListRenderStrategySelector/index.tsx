import { InfoSharp } from '@mui/icons-material'
import { Tooltip, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import React from 'react'

import { useCharactersContext } from '../../context'

export const ListRenderStrategySelector: React.FC = () => {
  const { loadingStrategy, setLoadingStrategy } = useCharactersContext()

  return (
    <>
      <Typography
        variant='body1'
        align='center'
        sx={{ paddingTop: '1.8rem', color: 'rgb(32, 35, 41)' }}
      >
        Pick a strategy below to see how this character list can be rendered - each one loads and
        displays the same data differently.
      </Typography>
      <ButtonGroup sx={{ padding: '1.8rem' }} size='small'>
        <Button
          variant={loadingStrategy === 'infinite-scroll' ? 'contained' : 'outlined'}
          style={{
            color: loadingStrategy === 'infinite-scroll' ? 'white' : 'inherit',
          }}
          onClick={() => {
            setLoadingStrategy('infinite-scroll')
          }}
          endIcon={
            <Tooltip
              title={`Infinite scroll is a web design technique that automatically loads new content as a user scrolls down a page, creating a seemingly endless supply of information. This method eliminates the need for pagination or clicking "Next" to access more content.`}
            >
              <InfoSharp />
            </Tooltip>
          }
        >
          infinite scroll
        </Button>
        <Button
          style={{
            color: loadingStrategy === 'virtualized-list' ? 'white' : 'inherit',
          }}
          onClick={() => {
            setLoadingStrategy('virtualized-list')
          }}
          variant={loadingStrategy === 'virtualized-list' ? 'contained' : 'outlined'}
          endIcon={
            <Tooltip
              title={`A virtualized list is a technique used in React to improve the performance of rendering large lists of data. It works by only rendering the items that are currently visible in the viewport, and keeping the rest of the items in a virtual state. This can significantly improve the performance of applications with large lists, as it reduces the amount of work that the browser has to do.`}
            >
              <InfoSharp />
            </Tooltip>
          }
        >
          virtualized list
        </Button>
        <Button
          style={{
            color: loadingStrategy === 'pagination' ? 'white' : 'inherit',
          }}
          onClick={() => {
            setLoadingStrategy('pagination')
          }}
          variant={loadingStrategy === 'pagination' ? 'contained' : 'outlined'}
          endIcon={
            <Tooltip
              title={`Pagination splits content across discrete, numbered pages and lets the user jump directly to any of them. Unlike infinite scroll, it only ever loads one page of data at a time and gives the user explicit control over navigation.`}
            >
              <InfoSharp />
            </Tooltip>
          }
        >
          pagination
        </Button>
      </ButtonGroup>
    </>
  )
}
