import React from 'react';
import { View, Text, Image } from 'react-native';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { style } from './styles';

export function SignIn() {
  return (
    <View style={style.container}>
      <Image
        source={IllustrationImg}
        style={style.image}
        resizeMode='stretch'
      />

      <View style={style.content}>
        <Text style={style.title}>
          Conecte-se {`\n`}e organize{`\n`}
          suas jogatinas
        </Text>

        <Text style={style.subtitle}>
          Crie Grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon title='Entrar com Discord' activeOpacity={0.7} />
      </View>
    </View>
  );
}
