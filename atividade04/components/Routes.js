import Home from './Home';
import Cadastro from './Cadastro';
import Perfil from './Perfil';
import IMC from './IMC';
import Resultado from './Resultado';
import Sobre from './Sobre';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

const Routes = createAppContainer(
    createStackNavigator({
        Home: Home,
        Cadastro: Cadastro,
        Perfil: Perfil,
        IMC: IMC,
        Resultado: Resultado,
        Sobre: Sobre
    },
    { initialRouteName: 'Home'}
    )
);

export default Routes;