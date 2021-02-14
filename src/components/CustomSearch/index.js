import React, { useEffect } from 'react';
import {
    Text, View, TouchableOpacity, FlatList,
    TextInput, Modal
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";;
const CustomSearch = () => {
    const [state, setState] = React.useState({
        done: false,
        query: null,
        searchData: null,
        modalVisible: false
    })
    const inputRef = React.useRef(null)
    // useEffect(() => {
    //     inputRef.current.focus()
    // })
    const sports = ["Badminton", "Cricket", "Chess", "Kho-Kho", "Kabbadi", "Hockey", "Boxing", "Football", "Basketball", "Volleyball", "Tennis", "Table Tennis"];
    searchText = (e) => {
        let text = e.toLowerCase()
        let trucks = sports

        let filteredName = trucks.filter((item) => {
            return item.toLowerCase().match(text)
        })
        setState({
            ...state,
            searchData: filteredName
        })
        // if (!text || text === '')
        //   this.setState({
        //     data: initial
        //   })
        // } else if (!Array.isArray(filteredName) && !filteredName.length) {
        //   // set no data flag to true so as to render flatlist conditionally
        //   this.setState({
        //     noData: true
        //   })
        // } else if (Array.isArray(filteredName)) {
        //   this.setState({
        //     noData: false,
        //     data: filteredName
        //   })
        // }
    }
    return (
        <View style={{
            flex: 1, justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TouchableOpacity onPress={() => setState({
                ...state,
                modalVisible: !state.modalVisible
            })}>
                <Text>Welcome Searchbar
            </Text>
            </TouchableOpacity>
            <View style={{
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setState({
                            ...state,
                            modalVisible: false
                        })
                    }}
                >

                    <View style={{
                        backgroundColor: "white",
                        borderRadius: 20,
                        padding: 35,
                        alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                        height: 300,
                        marginTop: '50%'
                    }}>
                        <Entypo
                            name='cross'
                            size={30}
                            onPress={()=>setState({
                                ...state,
                                modalVisible:false
                            })}
                        />
                        <TouchableOpacity style={{
                            width: '80%',
                            borderWidth: 2, borderColor: 'black',
                            marginTop: 20,
                            flexDirection: "row",
                            alignItems: 'center'

                        }}>
                            <Feather
                                name='search'
                                size={35}
                            // onPress={()=>predict()}
                            />
                            <TextInput
                                placeholder={"search here"}
                                style={{ marginStart: 50 }}
                                ref={inputRef}
                                onChangeText={(text) => { searchText(text) }}

                            />
                        </TouchableOpacity>
                        <View style={{ flex: 1, width: '80%' }}>
                            <FlatList
                                data={state.searchData === null ? sports : state.searchData}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={{}}>
                                            <Text>{item}</Text>
                                        </View>
                                    )
                                }}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )

}

export default CustomSearch;