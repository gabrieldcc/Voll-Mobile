import React from "react";
import { VStack, Text, ScrollView, Box, Input } from "native-base";
import { Botao } from "@/componentes/Botao";
import { CardBuscar } from "@/componentes/CardBuscar";
import { Titulo } from "@/componentes/Titulo";
import { CardConsulta } from "@/componentes/CardConsulta";

export default function Explorar() {
    return (
        <ScrollView p={5}>

            <CardBuscar />

            < Titulo
                color="blue.500"
                mb={5}
            > Resultado da busca
            </Titulo>

            <CardConsulta
            shadow={1}
                nome="Gabriel"
                foto="https://github.com/gabrieldcc.png"
                especialidade="Cardiologista"
            />

            <CardConsulta
                nome="Gabriel"
                foto="https://github.com/gabrieldcc.png"
                especialidade="Cardiologista"
            />

            <CardConsulta
                nome="Gabriel"
                foto="https://github.com/gabrieldcc.png"
                especialidade="Cardiologista"
            />
        </ScrollView>
    )
}