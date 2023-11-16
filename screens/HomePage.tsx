import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Text, ImageBackground, Image, ScrollView } from "react-native";
import Layout from "../constants/Layout";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { HStack, VStack, NativeBaseProvider } from "native-base";
import { debounce } from 'lodash';
import { fetchLocations, fetchWeatherForecast } from "../api/weather";
import { weatherImages } from "../constants";
const HomePage: React.FC = () => {



    const [showSearch, toogleSearch] = useState(false);
    const [locations, setLocations] = useState([1, 2, 3]);
    const [weather, setWeather] = useState({})

    const handleLocation = (loc: any) => {
        console.log('location :' + loc)
        setLocations([]);
        toogleSearch(false);
        fetchWeatherForecast({
            cityName: loc.name,
            days: '7'
        }).then(data => {
            setWeather(data);
            console.log('got forecast:', data);
        })
    }
    const handleSearch = (value: any) => {

        if (value.length > 2) {
            console.log('value :', value)
            fetchLocations({ cityName: value }).then(data => {
                setLocations(data);
            })
        }
    }
    useEffect(() => {
        fetchMyWeatherData();
    }, []);

    const fetchMyWeatherData = async () => {
        let myCity = await getData('city');
        let cityName = 'Bursa';
        if (myCity) {
            cityName = myCity;
        }
        fetchWeatherForecast({
            cityName,
            days: '7'
        }).then(data => {
            // console.log('got data: ',data.forecast.forecastday);
            setWeather(data);
            setLoading(false);
        })

    }

    const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

    const { current, location } = weather;
    return (
        <NativeBaseProvider>
            <View>
                <ImageBackground source={require("../assets/images/bg.png")} style={styles.bg} blurRadius={70}>
                    {/* SearchBar */}
                    <View style={[styles.bar, { backgroundColor: showSearch ? "#597375" : 'transparent' }]}>
                        {/* TEXTINPUT */}

                        {
                            showSearch ? (
                                <TextInput
                                    onChangeText={handleTextDebounce}
                                    placeholder="Search city"
                                    placeholderTextColor={'lightgray'}
                                    style={{ marginLeft: 10, color: "lightgray", fontSize: 16, width: 280 }}
                                />
                            ) : null
                        }
                        {/* ICON */}
                        <TouchableOpacity onPress={() => toogleSearch(!showSearch)}>
                            <View style={{ marginLeft: showSearch ? 32 : 320 }}>
                                <View style={styles.icon}>
                                    <Image
                                        source={require("../assets/icon/searchIcon.png")}
                                        style={styles.sIcon}
                                        alt=""
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {
                        locations.length > 0 && showSearch ? (
                            <View style={styles.other}>
                                {locations.map((loc, index) => {
                                    let showBorder = index + 1 !== locations.length;
                                    let borderClass = showBorder ? 'color: "#303030",' : null;
                                    return (
                                        <View key={index}>
                                            <TouchableOpacity onPress={() => handleLocation(loc)}>
                                                <Text style={[styles.oText]}> {loc?.name + " , "}{loc?.country} </Text>
                                            </TouchableOpacity>
                                            {showBorder && <View style={styles.line}></View>}
                                        </View>
                                    );
                                })}
                            </View>
                        ) : null
                    }
                    {/* CITY NAME */}
                    <View style={styles.nContainer}>
                        <HStack style={{ justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.name}>{location?.name + " / "}</Text>
                            <Text style={[styles.name, { fontWeight: "normal", fontSize: 22, marginTop: 5 }]}>{location?.country}</Text>
                        </HStack>
                    </View>
                    {/* IMAGE */}
                    <View style={styles.iContainer}>
                        <Image
                            source={weatherImages[current?.condition?.text]}
                            // source={require("../assets/images/partlycloudy.png")}
                            style={styles.image}
                            alt=""
                        />
                    </View>
                    {/* DEGREE */}
                    <View style={styles.dContainer}>
                        <VStack style={{ justifyContent: "center", alignItems: "center" }}>
                            {/* DEGREE TEXT */}
                            <Text style={styles.dText}>{current?.temp_c}{'\u00B0C'}</Text>
                            {/* STATE */}
                            <Text style={[styles.dText, { fontSize: 17, fontWeight: "normal" }]}>{current?.condition?.text}</Text>
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
                                    <Text style={[styles.dText, { fontSize: 14, fontWeight: "normal" }]}>{current?.wind_kph}km</Text>
                                </HStack>
                            </View>
                            <View style={styles.container}>
                                <HStack space={3}>
                                    <Image
                                        source={require("../assets/icon/drop.png")}
                                        style={styles.sIcon}
                                        alt=""
                                    />
                                    <Text style={[styles.dText, { fontSize: 14, fontWeight: "normal" }]}>{current?.humidity}%</Text>
                                </HStack>
                            </View>
                            <View style={styles.container}>
                                <HStack space={3}>
                                    <Image
                                        source={require("../assets/icon/sun.png")}
                                        style={styles.sIcon}
                                        alt=""
                                    />
                                    <Text style={[styles.dText, { fontSize: 14, fontWeight: "normal" }]}>   {weather?.forecast?.forecastday[0]?.astro?.sunrise}</Text>
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
                            {
                                weather?.forecast?.forecastday?.map((item, index) => {
                                    const date = new Date(item.date);
                                    const options = { weekday: 'long' };
                                    let dayName = date.toLocaleDateString('en-US', options);
                                    dayName = dayName.split(',')[0];

                                    return (
                                        <View style={styles.dGround} key={index}>
                                            <Image
                                                source={weatherImages[item?.day?.condition?.text]}
                                                alt=""
                                                style={styles.dImage}
                                            />
                                            <Text style={styles.sText}>{item.date}</Text>
                                            <Text style={styles.sText}>{item?.day?.avgtemp_c}{'\u00B0C'}</Text>
                                        </View>
                                    )
                                })
                            }
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
        flexDirection: "row"
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
    other: {
        width: Layout.window.width * 0.9,
        alignSelf: "center",
        height: 120,
        borderRadius: 20,
        backgroundColor: "white",
        position: "absolute",
        marginTop: 105
    },
    oText: {
        fontSize: 20,
        fontWeight: "500",
        letterSpacing: 0.5,
        marginLeft: 10,
        marginTop: 11,
    },
    line: {
        borderBottomWidth: 1,
        width: Layout.window.width * 0.9,
        opacity: 0.5,
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
        fontSize: 26,
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
        width: Layout.window.width * 0.95,
        alignSelf: "center",
        marginTop: 20,
        marginLeft: 10
    },
    dGround: {
        height: 100,
        width: 100,
        borderRadius: 15,
        backgroundColor: "#2F5B63",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5,
    },
    dImage: {
        width: 40,
        height: 40,
        resizeMode: "contain"
    },
    sText: {
        fontSize: 15,
        color: "white"
    }
});
