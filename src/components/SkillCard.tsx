import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
 } from 'react-native';

 interface SkillCardProps extends TouchableOpacityProps{
   skill: string;
 }

export function SkillCard({skill, ...rest}: SkillCardProps) {
  return (
    <TouchableOpacity 
      style={styles.buttonSkill}
      {...rest}
    >
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill:{
    backgroundColor: '#1F1e25',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    marginVertical: 5
  },
  textSkill: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold', 
  }
})