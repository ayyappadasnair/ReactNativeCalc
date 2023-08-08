import {useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ThemeContext } from './styles/context/ThemeContext';
import { Styles} from './styles/GlobalStyles';

interface ButtonProps {
    onPress: () =>void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
    isRed?: boolean; 
    isGreen?: boolean;
    isDark?:boolean
    isWhite?:boolean
}

export default function Button({title, onPress,isBlue,isGray,isGreen,isRed,isDark,isWhite}:ButtonProps){
    const theme = useContext (ThemeContext);
    return (
        <TouchableOpacity
        style={
            isBlue
            ? Styles.btnBlue
            :isGray
            ?Styles.btnGray
            : isRed
            ? Styles.btnRed
            : isGreen
            ? Styles.btnGreen
            :isWhite
            ?Styles.btnLight
            : isDark
            ?Styles.btnDark
            :theme === 'light'
            ?Styles.btnLight
            :Styles.btnDark
        }

        
        onPress={onPress}>
        <Text
           style={
            (isBlue || isGray || isRed || isGreen || isDark)
            ?Styles.smallTextLight
            :theme === 'dark'
            ?Styles.smallTextLight
            :Styles.smallTextLight
           }
        >
            {title}
        </Text>
        
        </TouchableOpacity>
    )
}

