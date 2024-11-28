import React, { useRef, useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

const CameraComponent = ({ navigation, route }) => {
    const cameraRef = useRef(null);
    const [facing, setFacing] = useState(Camera.Constants.Type.front);
    const [hasPermission, setHasPermission] = useState(null);

    // Request camera permissions
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    // Handle image picker
    const openImagePickerAsync = async () => {
        try {
            const data = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                mediaTypes: [ImagePicker.MediaType.IMAGE], // Updated for deprecation
                aspect: [1, 1],
                quality: 1,
            });

            if (data.canceled) return;

            const image = data.assets[0].uri;

            if (route.params?.updateProfile) {
                navigation.navigate("profile", { image });
            } else {
                navigation.navigate("register", { image });
            }
        } catch (error) {
            console.error("Error opening image picker:", error);
        }
    };

    // Handle taking a picture
    const clickPicture = async () => {
        if (!cameraRef.current) return;

        try {
            const data = await cameraRef.current.takePictureAsync({
                quality: 1,
            });

            if (!data.uri) return alert("Error taking picture");

            if (route.params?.updateProfile) {
                navigation.navigate("profile", { image: data.uri });
            } else {
                navigation.navigate("register", { image: data.uri });
            }
        } catch (error) {
            console.error("Error taking picture:", error);
        }
    };

    // Toggle camera facing
    const toggleCameraFacing = () => {
        setFacing((current) =>
            current === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    };

    // Check for camera permission
    if (hasPermission === null) {
        return <View><Text>Requesting for camera permission...</Text></View>;
    }

    if (hasPermission === false) {
        return (
            <View style={styles.noPermissionContainer}>
                <Text style={styles.noPermissionText}>No access to camera</Text>
                <Button mode="contained" onPress={() => Camera.requestCameraPermissionsAsync()}>
                    Grant Permission
                </Button>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <Camera
                ref={cameraRef}
                style={{ flex: 1 }}
                type={facing}
                ratio="1:1"
            />

            <View style={styles.controlContainer}>
                <Icon name="image" size={40} color="#fff" onPress={openImagePickerAsync} />
                <Icon name="camera" size={40} color="#fff" onPress={clickPicture} />
                <Icon name="flip-camera-android" size={40} color="#fff" onPress={toggleCameraFacing} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    noPermissionContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    noPermissionText: {
        fontSize: 18,
        marginBottom: 10,
    },
    controlContainer: {
        flexDirection: "row",
        position: "absolute",
        bottom: 10,
        justifyContent: "space-evenly",
        width: "100%",
    },
});

export default CameraComponent;
