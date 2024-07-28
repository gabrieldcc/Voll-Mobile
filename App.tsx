import { NativeBaseProvider, StatusBar } from 'native-base'
import { TEMAS } from './src/estilos/temas';
import Rotas from '@/Rotas';

export default function App() {
  return (
    <NativeBaseProvider>
      {/* TODO: Alterar cor da StatusBar, necessita de configuracoes no info.plist */}
      <StatusBar /> 
      < Rotas />
    </NativeBaseProvider>
  );
}
