import { createSlice, current } from '@reduxjs/toolkit'
import { ICharacter } from '../../../types/Character'

type initialStateProps = {
  characters: ICharacter[]
}

const initialState: initialStateProps = {
  characters: [],
}

const characterDataSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    loadCharacterData: (state, action) => {
      state.characters = action.payload
    },
    favoriteCharacter: (state, action) => {
      const favoriteCharacter: ICharacter = action.payload
      state.characters = state.characters.map(character => {
        if (character.id === favoriteCharacter.id)
          character.isFavorite = !character.isFavorite
        return character
      })
    },
  },
})

export const { favoriteCharacter, loadCharacterData } =
  characterDataSlice.actions
export const charactersStateData = (state: initialStateProps) =>
  state.characters

export default characterDataSlice.reducer
