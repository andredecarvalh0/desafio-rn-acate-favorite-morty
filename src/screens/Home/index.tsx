import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../../components/Card'
import INFO_PERSON from '../../queries'
import { RootState } from '../../store'
import { loadCharacterData } from '../../store/modules/character/reducer'
import { styles } from './style'

export function Home() {
  const dispatch = useDispatch()
  const { characters } = useSelector((state: RootState) => state.characters)
  const { loading, error, data } = useQuery(INFO_PERSON)

  useEffect(() => {
    if (data) {
      dispatch(loadCharacterData(data.characters.results))
    }
  }, [data])

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Ocorreu um erro...</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}> Mortypedia</Text>
      <Text style={styles.normalText}> Sua enciclopédia de Mortys</Text>
      {characters && (
        <FlatList
          data={characters}
          renderItem={({ item }) => <Card character={item} key={item.id} />}
        />
      )}
    </View>
  )
}
