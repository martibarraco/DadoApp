import { Image, StyleSheet } from 'react-native';

const diceImages = {
  1: require('../../assets/dice/Dice1.jpg'),
  2: require('../../assets/dice/Dice2.jpg'),
  3: require('../../assets/dice/Dice3.jpg'),
  4: require('../../assets/dice/Dice4.jpg'),
  5: require('../../assets/dice/Dice5.jpg'),
  6: require('../../assets/dice/Dice6.jpg'),
};

export default function Dice({ number }) {
  return <Image source={diceImages[number]} style={styles.dice} />;
}

const styles = StyleSheet.create({
  dice: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});
