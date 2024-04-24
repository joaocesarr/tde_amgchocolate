import { StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
        <TextInput style={style.input} placeholder='Digite seu nome'/>
        <TextInput style={style.input} placeholder='Digite sua Senha'/> 
        
        <TouchableOpacity style={style.buttonAcessar}>
        <Text style={style.buttonAcessarText}>ENTRAR!</Text>
        </TouchableOpacity>
        </View>
        
        
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            backgroundColor:"#000"
        },
        content:{
        width: '80%',
        height: '65%',
        alignItems:'center'    
        },
        input:{
            width: '80%',
            height: 50,
            backgroundColor:'#ff0000',
            borderRadius: 10,
            paddingStart: '5%'
            }
        }
)