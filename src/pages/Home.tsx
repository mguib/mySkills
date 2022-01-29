import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
  ScrollView,
 
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData{
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greetting, setGretting] = useState('');

  function handleAddNewSkill() {
    const data ={
      id: String(new Date().getTime()),
      name: newSkill

    }

    setMySkills(oldState => [...oldState, data]);
  }

  //Remover usando um id de cada string
  //O id é setado como como string
  //Pega a lista de skills (estado passado 'oldState) 
  //Percorre usando o filter e extrai cada elemento 
  //Para cada elemento recupera todas as skills que tem o id != do id informado
  function handelRemoveSkill(id: string){
    setMySkills(oldState => oldState.filter(
      skill => skill.id != id
    ));
  }

  useEffect(()=>{
    const currentHour = new Date().getHours();
    // console.log(currentHour);
    if(currentHour < 12){
      setGretting('Good morning');
    }
    else if(currentHour >=12 && currentHour < 18 ){
      setGretting('Good afternoon')
    }
    else{
      setGretting('Good Night')
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
      >
        Welcome, Guibson
      </Text>

      <Text style={styles.greeting}>
        {greetting}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button
        title='Add' 
        onPress={handleAddNewSkill}       
      />

      <Text style={[styles.title, { marginVertical: 30 }]}>
        My Skills
      </Text>    

      <FlatList
        data={mySkills}
        keyExtractor={item=> item.id}
        renderItem={({item})=> (
          <SkillCard 
            skill={item.name} 
            onPress={() => handelRemoveSkill(item.id)}
          />
        )}  
      >
      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
    // paddingHorizontal: 30

  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  greeting:{
    color: '#fff'
  }
})