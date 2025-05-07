// app/(tabs)/calculadora.tsx

import { SafeAreaView } from 'react-native';
import CalculatorComponent from '../../components/CalculatorComponent';

export default function CalculadoraPage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CalculatorComponent />
    </SafeAreaView>
  );
  
}


