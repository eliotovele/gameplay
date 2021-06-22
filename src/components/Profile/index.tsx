import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá</Text>

          <Text style={styles.username}>Elio</Text>
        </View>
        <Text style={styles.message}>Hoje e dia de vitoria</Text>
      </View>
    </View>
  );
}
