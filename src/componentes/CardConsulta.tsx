import React from "react";
import { Avatar, Text, VStack } from "native-base";
import { Botao } from "./Botao";

interface CardProps {
    nome: string;
    foto: string;
    especialidade: string;
    data?: string;
    foiAntendido?: boolean;
    foiAgendado?: boolean;
}

export function CardConsulta({
nome,
foto,
data,
especialidade,
foiAgendado,
foiAntendido
}: CardProps) {
    return (
        <VStack
            w="100%"
            bg={foiAntendido ? "blue.100" : "white"}
            p="5"
            borderRadius="lg"
            shadow="1"
            mb={5}
        >
            <VStack flexDir="row">
                <Avatar
                    size='xl'
                    source={{ uri: foto }}
                />
                <VStack pl="4">
                    <Text fontSize="md" fontWeight="bold">{nome}</Text>
                    <Text>{especialidade}</Text>
                    <Text>{data}</Text>
                </VStack>
            </VStack>
            <Botao mt={4}>
                {foiAgendado ? "Cancelar" :  "Agendar consulta"}
            </Botao>
        </VStack>
    )
}