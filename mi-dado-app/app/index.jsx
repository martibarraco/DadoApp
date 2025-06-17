import { useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import Dice from './components/Dice'; // Asegurate que la ruta sea correcta

export default function App() {
  const [number, setNumber] = useState(1);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setNumber(randomNumber);
  };

  return (
    <Pressable style={styles.container} onPress={rollDice}>
      <Dice number={number} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
