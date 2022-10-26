import React from 'react'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList, ListChildComponentProps } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import { Character, Location } from 'rickmortyapi/dist/interfaces'

import { useDeviceDetect } from 'hooks/useDeviceDetect'

import { CharacterCard } from './CharacterCard'
import { CharacterCards, Section } from './styles'
import { useCharacters } from './useCharacters'

type ListItemProps = ListChildComponentProps<{
  characters: Character[][]
  locations: Record<string, Location>
}>
const ListItem: React.FC<ListItemProps> = ({ index, style, data }) => {
  const { characters, locations } = data || { characters: [] }
  const characterList = characters[index]
  if (!characterList) return null
  return (
    <CharacterCards style={style}>
      {characterList.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          location={locations[character.location.url]}
          origin={locations[character.origin.url]}
        />
      ))}
    </CharacterCards>
  )
}

export const Characters: React.FC = () => {
  const device = useDeviceDetect()

  const gridCols = (() => {
    let cols = 1
    if (!device) return cols

    if (device.desktopLarge) cols = 3
    else if (device.desktop) cols = 2
    else if (device.tabletLandscape) cols = 1
    else if (device.tabletPortrait) cols = 1
    else if (device.phone) cols = 1
    return cols
  })()

  const cardSize = (() => {
    let size = 550 //px
    if (!device) return size
    if (device.desktop) size = 250
    else if (device.tabletLandscape) size = 250
    else if (device.tabletPortrait) size = 250
    else if (device.phone) size = 550
    return size
  })()

  const { characters, locations, loadMore, totalCharacters } = useCharacters({ groupOf: gridCols })

  return (
    <Section>
      <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            isItemLoaded={(index) => index < characters.length && characters[index] !== null}
            itemCount={totalCharacters}
            loadMoreItems={loadMore}
          >
            {({ onItemsRendered, ref }) => (
              <FixedSizeList
                height={height}
                width={width}
                itemCount={totalCharacters}
                itemSize={cardSize}
                itemData={{ characters, locations }}
                onItemsRendered={onItemsRendered}
                ref={ref}
              >
                {ListItem}
              </FixedSizeList>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </Section>
  )
}
