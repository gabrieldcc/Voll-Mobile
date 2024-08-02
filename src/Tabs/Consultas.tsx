import React from "react";
import { VStack, Text, Divider } from "native-base";
import { CardConsulta } from "@/componentes/CardConsulta";
import { Titulo } from "@/componentes/Titulo";
import { Botao } from "@/componentes/Botao";


export default function Consultas() {
    return (
        <VStack>
            <Titulo color="blue.500" >  Minha consulta  </Titulo>
            <Botao mt={5} mb={5}> Angedar nova consulta </Botao>

            <Titulo 
            color="blue.500" 
            fontSize="lg" 
            alignSelf="flex-start" 
            mb={2}> 
            Proximas consultar
             </Titulo>

            <CardConsulta 
            nome="Dr Gabriel"
            foto="https://github.com/gabrieldcc.png"
            especialidade="Cardiologista" 
            data="20/04/2023"
            foiAgendado={true}
            foiAntendido={true}
            />
            <Divider mt={5} />
        </VStack>
    )
}