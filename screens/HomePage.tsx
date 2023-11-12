import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, ScrollView } from "react-native";
import Layout from "../constants/Layout";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { HStack, VStack, NativeBaseProvider } from "native-base";

const HomePage: React.FC = () => {
    return (
        <NativeBaseProvider>
            <View>
                <ImageBackground source={require("../assets/images/bg.png")} style={styles.bg} blurRadius={70}>
                    {/* SearchBar */}
                    <View style={styles.bar}>
                        <HStack>
                            {/* TEXTINPUT */}
                            <TextInput
                                placeholder="Search city"
                                placeholderTextColor={'lightgray'}
                                style={{ marginLeft: 10, color: "lightgray", fontSize: 16, width: 280 }}
                            />
                            {/* ICON */}
                            <TouchableOpacity >
                                <View style={{ marginLeft: 32 }}>
                                    <View style={styles.icon}>
                                        <Image
                                            source={require("../assets/icon/searchIcon.png")}
                                            style={styles.sIcon}
                                            alt=""
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </HStack>
                    </View>
                    {/* CITY NAME */}
                    <View style={styles.nContainer}>
                        <HStack style={{ justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.name}>Bursa ,</Text>
                            <Text style={[styles.name, { fontWeight: "normal" }]}>Türkiye</Text>
                        </HStack>
                    </View>
                    {/* IMAGE */}
                    <View style={styles.iContainer}>
                        <Image
                            source={require("../assets/images/partlycloudy.png")}
                            style={styles.image}
                            alt=""
                        />
                    </View>
                    {/* DEGREE */}
                    <View style={styles.dContainer}>
                        <VStack style={{ justifyContent: "center", alignItems: "center" }}>
                            {/* DEGREE TEXT */}
                            <Text style={styles.dText}>11{'\u00B0C'}</Text>
                            {/* STATE */}
                            <Text style={[styles.dText, { fontSize: 17, fontWeight: "normal" }]}>Rainy</Text>
                        </VStack>
                    </View>
                    {/* INFO */}
                    <View style={styles.inContainer}>
                        <HStack space={9}>
                            <View style={styles.container}>
                                <HStack space={3}>
                                    <Image
                                        source={require("../assets/icon/wind.png")}
                                        style={styles.sIcon}
                                        alt=""
                                    />
                                    <Text style={[styles.dText, { fontSize: 14, fontWeight: "normal" }]}>6.1 Km</Text>
                                </HStack>
                            </View>
                            <View style={styles.container}>
                                <HStack space={3}>
                                    <Image
                                        source={require("../assets/icon/drop.png")}
                                        style={styles.sIcon}
                                        alt=""
                                    />
                                    <Text style={[styles.dText, { fontSize: 14, fontWeight: "normal" }]}>94%</Text>
                                </HStack>
                            </View>
                            <View style={styles.container}>
                                <HStack space={3}>
                                    <Image
                                        source={require("../assets/icon/sun.png")}
                                        style={styles.sIcon}
                                        alt=""
                                    />
                                    <Text style={[styles.dText, { fontSize: 14, fontWeight: "normal" }]}>05.05 AM</Text>
                                </HStack>
                            </View>
                        </HStack>
                    </View>
                    {/* OTHER DAYS LIST*/}
                    <View style={styles.list}>
                        {/* SCROLLIST */}
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            <HStack space={5}>
                                <View style={styles.dGround}>
                                    <Image
                                        source={require("../assets/images/moderaterain.png")}
                                        alt=""
                                        style={styles.dImage}
                                    />
                                    <Text style={styles.sText}>Thursday</Text>
                                    <Text style={styles.sText}>10{'\u00B0C'}</Text>

                                </View>
                                <View style={styles.dGround}>
                                    <Image
                                        source={require("../assets/images/moderaterain.png")}
                                        alt=""
                                        style={styles.dImage}
                                    />
                                    <Text style={styles.sText}>Thursday</Text>
                                    <Text style={styles.sText}>10{'\u00B0C'}</Text>

                                </View>
                                <View style={styles.dGround}>
                                    <Image
                                        source={require("../assets/images/moderaterain.png")}
                                        alt=""
                                        style={styles.dImage}
                                    />
                                    <Text style={styles.sText}>Thursday</Text>
                                    <Text style={styles.sText}>10{'\u00B0C'}</Text>

                                </View>
                                <View style={styles.dGround}>
                                    <Image
                                        source={require("../assets/images/moderaterain.png")}
                                        alt=""
                                        style={styles.dImage}
                                    />
                                    <Text style={styles.sText}>Thursday</Text>
                                    <Text style={styles.sText}>10{'\u00B0C'}</Text>

                                </View>
                                <View style={styles.dGround}>
                                    <Image
                                        source={require("../assets/images/moderaterain.png")}
                                        alt=""
                                        style={styles.dImage}
                                    />
                                    <Text style={styles.sText}>Thursday</Text>
                                    <Text style={styles.sText}>10{'\u00B0C'}</Text>

                                </View>
                                <View style={styles.dGround}>
                                    <Image
                                        source={require("../assets/images/moderaterain.png")}
                                        alt=""
                                        style={styles.dImage}
                                    />
                                    <Text style={styles.sText}>Thursday</Text>
                                    <Text style={styles.sText}>10{'\u00B0C'}</Text>

                                </View>
                                <View style={styles.dGround}>
                                    <Image
                                        source={require("../assets/images/moderaterain.png")}
                                        alt=""
                                        style={styles.dImage}
                                    />
                                    <Text style={styles.sText}>Thursday</Text>
                                    <Text style={styles.sText}>10{'\u00B0C'}</Text>

                                </View>
                            </HStack>


                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
        </NativeBaseProvider>
    )
}
export default HomePage;
const styles = StyleSheet.create({
    bg: {
        width: Layout.window.width,
        height: Layout.window.height,
    },
    bar: {
        height: 50,
        width: Layout.window.width * 0.9,
        alignSelf: "center",
        marginTop: 50,
        backgroundColor: "#597375",
        borderRadius: 50,
    },
    icon: {
        height: 45,
        width: 45,
        alignSelf: "flex-end",
        marginRight: 5,
        borderRadius: 100,
        marginTop: 3,
        backgroundColor: "#354445",
        justifyContent: "center",
        alignItems: "center"
    },
    sIcon: {
        width: 20,
        height: 20,
        resizeMode: "contain",

    },
    nContainer: {
        height: 50,
        width: Layout.window.width * 0.9,
        alignSelf: "center",
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        letterSpacing: 0.5
    },
    iContainer: {
        height: 250,
        width: 250,
        alignSelf: "center",
        marginTop: 70
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: "contain",
    },
    dContainer: {
        alignSelf: "center",
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    dText: {
        fontSize: 28,
        fontWeight: "bold",
        color: "white"
    },
    inContainer: {
        width: Layout.window.width * 0.9,
        alignSelf: "center",
        marginTop: 20
    },
    container: {
        height: 50,
        width: 99,
        justifyContent: "center",
        alignItems: "center"
    },
    list: {
        width: Layout.window.width * 0.9,
        alignSelf: "center",
        marginTop: 20,
    },
    dGround: {
        height: 100,
        width: 100,
        borderRadius:15, 
        backgroundColor:"#2F5B63",
        justifyContent:"center",
        alignItems:"center"
    },
    dImage:{
        width:40, 
        height:40, 
        resizeMode:"contain"
    },
    sText:{
        fontSize:15, 
        color:"white"
    }
});
