import React from 'react';
import { Image, Box, Checkbox, ScrollView, Text } from 'native-base'
import Logo from './assets/Logo.png'
import { SafeAreaView } from 'react-native';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import { useState } from 'react';
import { secoes } from './utils/CadastroEntradaTexto'

export default function Cadastro() {

  const [numeroSecao, setNumSecao] = useState(0);



  function avancarSecao() {
    console.log("Botão pressionado!");
    if (numeroSecao < secoes.length - 1) {
      setNumSecao(numeroSecao + 1)
    }
  }

  function voltarSecao() {
    console.log("Botão pressionado!");
    if (numeroSecao > 0) {
      setNumSecao(numeroSecao - 1)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <ScrollView
        flex={1}
        p={5}
      >
        <Image
          source={Logo} 
          alt={"Logo Voll"}
          alignSelf="center"
           />

        <Titulo> {secoes[numeroSecao].titulo} </Titulo>

        <Box>
          {
            secoes[numeroSecao].entradaTexto?.map(entrada => {
              return <EntradaTexto
                key={entrada.id}
                label={entrada.label}
                placeholder={entrada.placeholder}
              />
            })
          }
        </Box>

        <Box>
          <Text 
          marginTop='2'
          marginBottom='2'
          color="blue.800"
          fontWeight='bold'
          fontSize='md'>
            {secoes[numeroSecao].tituloCheckBox}
          </Text>
          {
            secoes[numeroSecao].checkBox?.map(checkbox => {
              return <Checkbox
                key={checkbox.id}
                value={checkbox.value}>
                {checkbox.value}
              </Checkbox>
            })
          }
        </Box>

        {
          numeroSecao > 0 && <Botao
            bgColor="gray.400"
            onPress={voltarSecao}>
            Voltar
          </Botao>
        }

        <Botao
          onPress={avancarSecao}
          marginTop={4}
          marginBottom={20}>
          Avançar
        </Botao>

      </ScrollView>

    </SafeAreaView>

  );
}

