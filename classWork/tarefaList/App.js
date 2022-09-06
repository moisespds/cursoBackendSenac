import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, CheckBox } from 'react-native';

export default function App() {

  const [tarefa, setTarefa] = React.useState()
  const [listaTarefas, setListaTarefas] =React.useState([])
  const [isSelected, setSelection] = useState(false)

  const adicionar =() => {
    listaTarefas.push(tarefa)
    setTarefa('')
  } 


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>Tarefas!</Text>
      </View>
        <Text style={styles.txt}>Adicionar Tarefa:</Text>
      <View style={styles.viewCaixa}>
        <TextInput style={styles.input} placeholder='Oque vai fazer hoje?' onChangeText={setTarefa} value={tarefa}/>
        <TouchableOpacity style={styles.button} onPress={() => adicionar()}><Text style={styles.txt}>Adicionar</Text></TouchableOpacity>
      </View>
      <View>
        {listaTarefas.map((Tarefas) =>
          <View style={styles.checkboxContainer}>
         <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox}/>
        <Text style={styles.txt}>{Tarefas}</Text>
          </View>
)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    width: '100%',
    height: 100,
    backgroundColor: '#CACACA',
    padding: 10,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewCaixa:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    width: 350,
    height:50,
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  button:{
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  txt: {
    fontSize: 25,
    paddingLeft: 20
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
});
