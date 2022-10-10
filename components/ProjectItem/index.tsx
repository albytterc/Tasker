import React from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "../../assets/styles/ProjectItemStyle";
import { useNavigation } from "@react-navigation/native";

interface ProjectItemProps {
  project: {
    id: string;
    title: string;
    createdAt: string;
  };
}

export default function ProjectItem({ project }: ProjectItemProps) {
  const navigation = useNavigation();


  const onPress = () => {
    navigation.navigate('Tasks', {id: project.id})
  };
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="file-outline" size={24} color="grey" />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.time}>{project.createdAt}</Text>
      </View>
    </Pressable>
  );
}
