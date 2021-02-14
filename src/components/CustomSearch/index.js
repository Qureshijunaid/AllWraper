import React, { useEffect } from 'react';
import {
    Text, View, TouchableOpacity, FlatList,
    TextInput
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
const CustomSearch = () => {
    const [state, setState] = React.useState({
        done: false,
        query: null,
        searchData: null
    })
    const inputRef = React.useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })
    const sports = ["Badminton", "Cricket", "Chess", "Kho-Kho", "Kabbadi", "Hockey", "Boxing", "Football", "Basketball", "Volleyball", "Tennis", "Table Tennis"];
    searchText = (e) => {
        let text = e.toLowerCase()
        let trucks = sports

        let filteredName = trucks.filter((item) => {
            return item.toLowerCase().match(text)
        })
        setState({
            ...state,
            searchData:filteredName
        })
        // console.log("filteredName==>", filteredName)
        // console.log("filteredName===>",filteredName)
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome Searchbar
            </Text>
            <TouchableOpacity style={{
                height: 50, width: '80%',
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
                    data={state.searchData===null?sports:state.searchData}
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
    )

}

export default CustomSearch;