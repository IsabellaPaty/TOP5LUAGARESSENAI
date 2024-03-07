import * as React from 'react'; import { View, Text , Image, StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {
return (
  <View style={styles.container5}>
<Text style={styles.container6}>Top 4 lugares preferidos do senai</Text>
<Button
title="Entrada"
onPress={() => navigation.navigate('Entrada')} />
<Button
title="Cantina"
onPress={() => navigation.navigate('Cantina')} />
<Button
title="AreaVerde"
onPress={() => navigation.navigate('AreaVerde')} />
<Button
title="Quiosque"
onPress={() => navigation.navigate('Quiosque')} />
  <Button
title="Sala"
onPress={() => navigation.navigate('Sala')} />
</View>
 );
}
 function Entrada({ navigation }) {
  return (
    <View style={styles.container}>
      <text>
        Entrada
      </text>
      <Image
        source={{ uri: 'https://raw.githubusercontent.com/IsabellaPaty/TOP5LUAGARESSENAI/main/Entrada.jpeg' }}
        style={styles.imagem}
      />
      <Text style={styles.descricao}>
        Eu amo esse lugar porque é onde encontro paz e tranquilidade. A vista
        é incrível e sempre me faz sentir em paz. Isabella Maria
      </Text>
      <Button
title="Sair"
onPress={() => navigation.navigate('Home')} />

    </View>
    
   );
}
function Cantina({ navigation }) {
  return (
    <View style={styles.container2}>
      <text>
        cantina
      </text>
      <Image
        source={{ uri: 'https://raw.githubusercontent.com/IsabellaPaty/TOP5LUAGARESSENAI/main/Cantina.jpeg' }}
        style={styles.imagem2}
      />
      <Text style={styles.descricao2}>
      A cantina é um ambiente legal por ser um ponto de encontro para desfrutar de boa comida e socializar, oferecendo variedade gastronômica e uma atmosfera acolhedora. Pietra
      </Text>
      <Button
title="Sair"
onPress={() => navigation.navigate('Home')} />

    </View>
    
   );
}
function Sala({ navigation }) {
  return (
    <View style={styles.container2}>
      <text>
        cantina
      </text>
      <Image
        source={{ uri: '' }}
        style={styles.imagem2}
      />
      <Text style={styles.descricao2}>
      A cantina é um ambiente legal por ser um ponto de encontro para desfrutar de boa comida e socializar, oferecendo variedade gastronômica e uma atmosfera acolhedora. Pietra
      </Text>
      <Button
title="Sair"
onPress={() => navigation.navigate('Home')} />

    </View>
    
   );
}
function AreaVerde({ navigation }) {
  return (
    <View style={styles.container3}>
      <text>
        Área Verde
      </text>
      <Image
        source={{ uri: 'https://raw.githubusercontent.com/IsabellaPaty/TOP5LUAGARESSENAI/main/AreaVerde.jpeg' }}
        style={styles.imagem3}
      />
      <Text style={styles.descricao3}>
      A área verde é um ambiente legal por proporcionar contato direto com a natureza, promovendo relaxamento e bem-estar em meio a espaços naturais tranquilos e revitalizantes.Isabella ALmeida
      </Text>
      <Button
title="Sair"
onPress={() => navigation.navigate('Home')} />

    </View>
    
   );
}

function Quiosque({ navigation }) {
  return (
    <View style={styles.container4}>
      <text>
        Quiosque
      </text>
      <Image
        source={{ uri: 'https://raw.githubusercontent.com/IsabellaPaty/TOP5LUAGARESSENAI/main/Quiosque.jpeg' }}
        style={styles.imagem4}
      />O quiosque de comida é um lugar atrativo devido , ambiente descontraído, proporcionando conveniência e experiências sociais. Annely
      <Text style={styles.descricao4}>

      </Text>
      <Button
title="Sair"
onPress={() => navigation.navigate('Home')} />

    </View>
    
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container5: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  container6:{
  fontSize: 80,
  },
  imagem: {
    width: 800,
    height: 600,
    marginBottom: 20,
    borderRadius: 10,
  },
  descricao: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
  },


  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem2: {
    width: 800,
    height: 600,
    marginBottom: 20,
    borderRadius: 10,
  },
  descricao2: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
  },
  container3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem3: {
    width: 800,
    height: 600,
    marginBottom: 20,
    borderRadius: 10,
  },
  descricao3: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
  },

  container4: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem4: {
    width: 800,
    height: 600,
    marginBottom: 20,
    borderRadius: 10,
  },
  descricao4: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
  },
});

const Stack = createNativeStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Entrada" component={Entrada} />
<Stack.Screen name="Cantina" component={Cantina} />
<Stack.Screen name="AreaVerde" component={AreaVerde} />
<Stack.Screen name="Quiosque" component={Quiosque} />
<Stack.Screen name="Sala" component={Sala} />


</Stack.Navigator>
</NavigationContainer>
);
}
export default App;
