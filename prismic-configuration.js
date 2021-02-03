import Prismic from '@prismicio/client'

export const apiEndpoint = 'https://temcrase.cdn.prismic.io/api/v2'

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req))
)

const createClientOptions = (req = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}