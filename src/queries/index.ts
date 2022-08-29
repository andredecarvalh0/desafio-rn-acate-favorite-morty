import { gql } from '@apollo/client'

const INFO_PERSON = gql`
  query {
    characters(page: 1, filter: { name: "morty" }) {
      info {
        count
      }
      results {
        id
        name
        gender
        image
      }
    }
  }
`

export default INFO_PERSON
