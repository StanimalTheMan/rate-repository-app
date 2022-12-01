import { Image, View, StyleSheet } from "react-native";
import Text from "./Theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  generalSubContainer: {
    display: 'flex',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'baseline',
  }
})

const RepositoryItem = ({item}) => {
    console.log("repo item", item)
    return (
      <View style={styles.container}>
        <View style={styles.generalSubContainer}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: item.ownerAvatarUrl
            }} />
          <Text fontWeight="bold">{item.fullName}</Text>
          <Text>Description: {item.description}</Text>
          <Text>Language: {item.language}</Text>
        </View>
        <Text>Stars: {item.stargazersCount}</Text>
        <Text>Forks: {item.forksCount}</Text>
        <Text>Reviews: {item.reviewCount}</Text>
        <Text>Rating: {item.ratingAverage }</Text>
      </View>
    )
};

export default RepositoryItem;