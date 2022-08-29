import { MaterialIcons } from '@expo/vector-icons'
import { Image, Pressable, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { favoriteCharacter } from '../../store/modules/character/reducer'
import { ICharacter } from '../../types/Character'
import { styles } from './style'

type Props = {
  character: ICharacter
}

export function Card({ character }: Props) {
  const dispatch = useDispatch()

  function handleFavoriteCharacter(character: ICharacter) {
    dispatch(favoriteCharacter(character))
  }
  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.descriptionContainer}>
        <Text style={(styles.text, styles.name)}>Nome: {character.name}</Text>
        <View style={styles.info}>
          <Text style={(styles.text, styles.gender)}>
            Sexo: {character.gender === 'Male' ? 'Masculino' : 'Feminino'}
          </Text>
          <Pressable
            style={styles.favoriteIcon}
            onPress={() => handleFavoriteCharacter(character)}
          >
            <MaterialIcons
              name={character.isFavorite ? 'favorite' : 'favorite-outline'}
              size={30}
              color="yellow"
            />
          </Pressable>
        </View>
      </View>
    </View>
  )
}
