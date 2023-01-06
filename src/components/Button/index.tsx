import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Button( ) {
    return(
        <TouchableOpacity
            style={styles.button}
        >
            <Image
                source={require("../../assets/Plus.png")} 
            />
        </TouchableOpacity>

    )
}