const resp = {
  data: {
    info: {},
    results: [
      {
        id: 385,
        name: 'Yellow Shirt Rick',
        status: 'unknown',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'unknown',
          url: '',
        },
        location: {
          name: 'Citadel of Ricks',
          url: 'https://rickandmortyapi.com/api/location/3',
          type: 'unknown',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/385.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/22'],
        url: 'https://rickandmortyapi.com/api/character/385',
        created: '2018-01-10T19:51:18.996Z',
      },
    ],
  },
}

const getCharacters = async () => resp

const getLocation = async () => ({
  data: {
    ...resp.data.results[0].location,
  },
})

const getEpisode = async () => ({
  data: {
    id: 22,
    name: 'The Rickshank Rickdemption',
    air_date: 'April 1, 2017',
    episode: 'S03E01',
    url: 'https://rickandmortyapi.com/api/episode/22',
  },
})

export { getCharacters, getLocation, getEpisode }
