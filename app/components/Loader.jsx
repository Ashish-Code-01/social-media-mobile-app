import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const Loader = () => {
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Create the bouncing animation using an infinite loop
        Animated.loop(
            Animated.sequence([
                Animated.timing(animation, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(animation, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [animation]);

    // Interpolating the animation to get the box-shadow-like effect
    const translateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-38, 38],
    });

    const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-12, 12],
    });

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.loader,
                    {
                        transform: [
                            { translateX },
                            { translateY },
                        ],
                    },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loader: {
        width: 12,
        height: 12,
        borderRadius: 50,
        backgroundColor: '#FFF',
        margin: 15,
    },
});

export default Loader;
