import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ListAluno from './ListAluno'
import EditAluno from './EditAluno'
import AddAluno from './AddAluno'


const MainStack = createStackNavigator()


function MainStackScreens() {
    return (
        <NavigationContainer>
            <MainStack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#621FF7",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                }}
            >
                <MainStack.Screen
                    name='AddAluno'
                    component={AddAluno}
                    options={{ title: 'Adicionar novo Aluno' }}
                />
                <MainStack.Screen
                    name='ListAluno'
                    component={ListAluno}
                    options={{ title : 'Listar Aluno' }}
                />
                <MainStack.Screen
                    name='EditAluno'
                    component={EditAluno}
                    options={{ title: 'Detalhes do Aluno' }}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}


export default MainStackScreens