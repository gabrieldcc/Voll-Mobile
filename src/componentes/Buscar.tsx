import React from 'react'
import { Box, Input, VStack } from 'native-base'
import { Botao } from './Botao'


export function Buscar() {
    return (
        <VStack
        w="100%"
        bg={"white"}
        p="5"
        borderRadius="lg"
        shadow="2"
        mb={5}
        color="blue.500" >
        <Box>
            <Input
                placeholder='Digite a especialidade'
                size='lg'
                width="100%"
                borderRadius='lg'
                backgroundColor='white'
                shadow={3}
            ></Input>

            <Input
                placeholder='Digite a sua localização'
                size='lg'
                width="100%"
                borderRadius='lg'
                backgroundColor='white'
                shadow={3}
                mt={5}
            ></Input>

            <Botao>Buscar</Botao>
        </Box>
    </VStack>
    )
}