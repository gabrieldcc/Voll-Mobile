 //import Login from './src/Login';
import Login from './src/Cadastro';

import { NativeBaseProvider, StatusBar } from 'native-base'
import { TEMAS } from './src/estilos/temas';

export default function App() {
  return (
    <NativeBaseProvider>
      {/* TODO: Alterar cor da StatusBar, necessita de configuracoes no info.plist */}
      <StatusBar /> 
      < Login />
    </NativeBaseProvider>
  );
}
