import { useState } from "react";
import EditScreenInfo from "../components/EditScreenInfo";
import { StyleSheet, FlatList } from "react-native";
import { Text, View } from "../components/Themed";
import ProjectItem from "../components/ProjectItem";

export default function ProjectsScreen() {
  const [projects, setProjects] = useState([
    {
      id: "1",
      title: "Project 1",
      createdAt: "2d",
    },
    {
      id: "2",
      title: "Project 2",
      createdAt: "2d",
    },
    {
      id: "3",
      title: "Project 3",
      createdAt: "2d",
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={projects}
        renderItem={({ item }) => <ProjectItem project={item} />}
        style={{ width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
