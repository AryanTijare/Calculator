import { TouchableOpacity, Text } from "react-native";
import { Styles } from '../styles/GlobalStyles' ;

interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
    isGreen?: boolean; // New prop for green background
}

export default function Button({ title, onPress, isBlue, isGray, isGreen }: ButtonProps) {
    return (
        <TouchableOpacity 
            style={
                isGreen
                ? Styles.btnGreen // Green style for the "=" button
                : isBlue 
                ? Styles.btnBlue 
                : isGray 
                ? Styles.btnGray 
                : Styles.btnLight // Only light theme here
            } 
            onPress={onPress}>
            <Text 
               style={
                   isBlue || isGray || isGreen
                   ? Styles.smallTextLight // Light text for these buttons
                   : Styles.smallTextDark // Default to dark text for light background
               }
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}
