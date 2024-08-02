import React from "react";
import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "@/componentes/Titulo";

export default function Perfil() {
    return (
        //flex={1} serve para ocupar toda área da tela
        <ScrollView flex={1}>
            <VStack
                flex={1}
                alignItems='center'
                padding={5}
            >
                <Titulo color='blue.500'> Meu Perfil </Titulo>

                <Avatar
                    source={{ uri: "https://github.com/gabrieldcc.png" }}
                    marginTop="5"
                    size='xl'
                />
                <Titulo color='blue.500'> Informações Pessoais </Titulo>

                <Titulo 
                fontSize='lg'
                marginBottom={1}> 
                Gabriel Castro 
                </Titulo>

                <Text> 24/11/1998 </Text>
                <Titulo> São Paulo </Titulo>
                <Divider />

                <Titulo
                color='blue.500'
                marginBottom={1}
                > Histórico médico </Titulo>
                <Text> Bronquite</Text>
                <Text> Sinusite</Text>


            </VStack>
        </ScrollView>
    )
}