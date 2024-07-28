import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { SafeAreaView } from 'react-native';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import { useState } from 'react';

export default function Cadastro() {

  const [numeroSecao, setNumSecao] = useState(0);

  const secoes = [
    {
      id: 1,
      titulo: 'Insira alguns dados básicos',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 1,
          label: 'Email',
          placeholder: 'Digite seu email'
        }
      ]
    },

    {
      id: 2,
      titulo: 'Agora, mais alguns dados sobre você:',
      entradaTexto: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Digite seu CEP'
        }
      ]
    }
  ]

  function avancarSecao() {
    console.log("Botão pressionado!");
    if (numeroSecao < secoes.length - 1) {
      setNumSecao(numeroSecao + 1)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <VStack
        flex={1}
        alignItems={"center"}
        p={5}
        justifyContent="center"
      >
        <Image
          source={Logo} alt={"Logo Voll"} />

        <Titulo> {secoes[numeroSecao].titulo} </Titulo>

        <Box>

          {
            secoes[numeroSecao].entradaTexto.map(entrada => {
              return <EntradaTexto
                key={entrada.id}
                label={entrada.label}
                placeholder={entrada.placeholder}
              />
            })
          }

        </Box>

        <Botao onPress={avancarSecao}>
          Avançar
        </Botao>

      </VStack>

    </SafeAreaView>

  );
}

