import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function ExerciseListItem  ({item}) {
    return(
      <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseSubtitle}>Muscle: {item.muscle.toLocaleUpperCase()} | Equipment: {item.equipment.toLocaleUpperCase()}</Text>
      </View>
    )
  }
  const styles = StyleSheet.create({

    exerciseContainer: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      gap: 5,
      marginHorizontal: 2,
    },
    exerciseName: {fontSize: 20,
       fontWeight: 'bold',
      },
      exerciseSubtitle: {
        color: 'dimgray'
      }
  });
  
