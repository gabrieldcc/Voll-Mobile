import React from "react";
import { VStack, Text, ScrollView, Box, Input } from "native-base";
import { Botao } from "@/componentes/Botao";
import { Buscar } from "@/componentes/Buscar";
import { Titulo } from "@/componentes/Titulo";
import { CardConsulta } from "@/componentes/CardConsulta";

export default function Explorar() {
    return (
        <ScrollView p={5}>

            <Buscar />

            < Titulo
            color="blue.500"
            mb={5}
            > Resultado da busca
            </Titulo>

        <CardConsulta 
        nome="Gabriel"
        foto="https://github.com/gabrieldcc.png"
        data="20/10/2024"
        especialidade="Cardiologista"
        foiAgendado={false}
        foiAntendido={false}
        />

<CardConsulta 
        nome="Gabriel"
        foto="https://github.com/gabrieldcc.png"
        data="20/10/2024"
        especialidade="Cardiologista"
        foiAgendado={false}
        foiAntendido={false}
        />

<CardConsulta 
        nome="Gabriel"
        foto="https://github.com/gabrieldcc.png"
        data="20/10/2024"
        especialidade="Cardiologista"
        foiAgendado={false}
        foiAntendido={false}
        />
        </ScrollView>
    )
}