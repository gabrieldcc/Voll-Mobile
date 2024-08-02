const secoes = [
  {
    id: 1,
    titulo: 'Insira alguns dados básicos',
    tituloCheckBox: '',
    entradaTexto: [
      {
        id: 1,
        label: 'Nome',
        placeholder: 'Digite seu nome completo'
      },
      {
        id: 2,
        label: 'Email',
        placeholder: 'Insira seu endereço de email'
      },
      {
        id: 3,
        label: 'Crie uma senha',
        placeholder: 'Insira sua senha'
      },
      {
        id: 4,
        label: 'Repita a senha',
        placeholder: 'Insira sua senha'
      }
    ]
  },
  {
    id: 2,
    titulo: 'Agora, mais alguns dados sobre você:',
    tituloCheckBox: '',
    entradaTexto: [
      {
        id: 1,
        label: 'CEP',
        placeholder: 'Digite seu CEP'
      }
    ],
    checkbox: []
  },
  {
    id: 3,
    titulo: 'Para finalizar, quais são os seus planos:',
    tituloCheckBox: 'Selecione o plano',
    entradaTexto: [],
    checkBox: [
      {
        id: 1,
        value: 'Sulamerica'
      },
      {
        id: 2,
        value: 'Unimed'
      },
      {
        id: 3,
        value: 'Bradesco'
      },
      {
        id: 4,
        value: 'Amil'
      },
      {
        id: 5,
        value: 'Biosaúde'
      },
      {
        id: 6,
        value: 'Biovida'
      },
      {
        id: 7,
        value: 'Outro'
      }
    ]
  }
]

export { secoes }