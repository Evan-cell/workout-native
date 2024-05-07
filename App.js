import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json'

export default function App() {

 console.log(exercises[0])
  return (
    <View style={styles.container}>
      <FlatList 
      data={exercises}
      renderItem={({item,index})=>{
        return(
          <View style={styles.exerciseContainer}>
          <Text style={styles.exerciseName}>{item.name}</Text>
          <Text style={styles.exerciseSubtitle}>Muscle: {item.muscle.toLocaleUpperCase()} | Equipment: {item.equipment.toLocaleUpperCase()}</Text>
          </View>
        )
      }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  exerciseContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  exerciseName: {fontSize: 20,
     fontWeight: 'bold',
    },
    exerciseSubtitle: {
      color: 'dimgray'
    }
});
