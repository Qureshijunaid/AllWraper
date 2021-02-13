
import React,{useState} from 'react'
import { Button, Text, TextInput, View } from 'react-native'
function MyTest() {
    const [name, setUser] = React.useState('')
    const [age,setAge]=useState('0')
    const [show, setShow] = React.useState(false)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
                value={name}
                onChangeText={setUser} testID="input"
                style={{ height: 100, width: 100, borderWidth: 2, borderColor: 'black' }}
            />
            <TextInput
                value={age}
                keyboardType="numeric"
                onChangeText={setAge} testID="inputAge"
                style={{ height: 100, width: 100, borderWidth: 2, borderColor: 'black' }}
            />
            <Button
                title="Print Username"
                onPress={() => {
                    setTimeout(() => {
                        setShow(!show)
                    }, Math.floor(Math.random() * 200))
                }}
            />
            {show && <Text testID="printed-username">{age}</Text>}
        </View>
    )
}

export default MyTest



