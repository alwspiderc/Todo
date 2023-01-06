import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { styles } from "./styles";

type Itasks = {
    id: string;
    description: string;
}

export function Home( ) {
    const [tasks, setTasks] = useState<Itasks[]>(
        [
            {
                id: "1",
                description: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
            },
            {
                id: "2",
                description: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
            },
            {
                id: "3",
                description: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
            },
            {
                id: "4",
                description: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
            },
            {
                id: "5",
                description: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
            },
            {
                id: "6",
                description: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
            },
            {
                id: "7",
                description: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
            },
            {
                id: "8",
                description: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
            },
            {
                id: "9",
                description: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
            },
            {
                id: "10",
                description: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
            },
            {
                id: "11",
                description: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
            },
            {
                id: "12",
                description: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
            },
            {
                id: "13",
                description: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
            },
            {
                id: "14",
                description: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
            },
        ]
    );

    return(
        <View style={styles.container}>
            <Header/>
            
            <View style={styles.containerInput}>
                <Input/>
                <Button/>
            </View>
            
            <View style={styles.containerStatus}>
                <View style={styles.containerCreate}>
                    <Text style={styles.TextCreate}>Criadas</Text>
                    <View style={styles.containerScoreCreate}>
                        <Text style={styles.TextScoreCreate}>0</Text>
                    </View>
                </View>

                <View style={styles.containerCreate}>
                    <Text style={styles.TextCompleted}>Concluídas</Text>
                    <View style={styles.containerScoreCreate}>
                        <Text style={styles.TextScoreCreate}>0</Text>
                    </View>
                </View>
            </View>

            <View style={styles.containerTasks}>
                <FlatList
                    data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.contentTasks}> 
                            <Text style={styles.textTasks}>{item.description}</Text>
                        </View>
                    )}
                    
                    showsVerticalScrollIndicator={false}

                    ListEmptyComponent={() => (
                        <View style={styles.containerEmpty}>
                            <View style={styles.decoration}/>
                            <Image
                                source={require("../../assets/Clipboard.png")} 
                            />
                            <View style={styles.containerTextEmpty}>
                                <Text style={styles.textEmptyBold}>
                                    Você ainda não tem tarefas cadastradas
                                </Text>
                                <Text style={styles.textEmptyNormal}>
                                    Crie tarefas e organize seus itens a fazer
                                </Text>
                            </View>
                        </View>
                    )}
                />
            </View>

        </View>    
    )
}