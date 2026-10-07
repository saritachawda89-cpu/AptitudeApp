import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

const symbols = ['+', '-', '%', '×', '÷', '=', 'π'];

const createParticles = () =>
    Array.from({ length: 12 }, (_, index) => ({
        id: index,
        symbol: symbols[index % symbols.length],
        left: 4 + ((index * 9) % 85),
        top: 8 + ((index * 13) % 72),
        size: 20 + (index % 4) * 8,
        drift: 18 + (index % 5) * 10,
        duration: 5000 + index * 650,
        delay: index * 220,
        opacity: 0.18 + (index % 4) * 0.12,
    }));

export function MathBackground() {
    const particles = useMemo(() => createParticles(), []);
    const animatedValues = useRef(
        particles.map((particle) => ({
            x: new Animated.Value((particle.left / 100) * 0),
            y: new Animated.Value((particle.top / 100) * 0),
            rotate: new Animated.Value(0),
        }))
    ).current;

    useEffect(() => {
        const animations = particles.map((particle, index) => {
            const motion = animatedValues[index];

            return Animated.loop(
                Animated.parallel([
                    Animated.sequence([
                        Animated.timing(motion.x, {
                            toValue: particle.drift,
                            duration: particle.duration,
                            delay: particle.delay,
                            useNativeDriver: true,
                        }),
                        Animated.timing(motion.x, {
                            toValue: -particle.drift,
                            duration: particle.duration,
                            useNativeDriver: true,
                        }),
                    ]),
                    Animated.sequence([
                        Animated.timing(motion.y, {
                            toValue: -particle.drift,
                            duration: particle.duration + 1000,
                            delay: particle.delay,
                            useNativeDriver: true,
                        }),
                        Animated.timing(motion.y, {
                            toValue: particle.drift,
                            duration: particle.duration + 1000,
                            useNativeDriver: true,
                        }),
                    ]),
                    Animated.sequence([
                        Animated.timing(motion.rotate, {
                            toValue: 1,
                            duration: particle.duration,
                            delay: particle.delay,
                            useNativeDriver: true,
                        }),
                        Animated.timing(motion.rotate, {
                            toValue: 0,
                            duration: particle.duration,
                            useNativeDriver: true,
                        }),
                    ]),
                ])
            );
        });

        animations.forEach((animation) => animation.start());

        return () => {
            animations.forEach((animation) => animation.stop());
        };
    }, [animatedValues, particles]);

    return (
        <View pointerEvents="none" style={styles.layer}>
            {particles.map((particle, index) => {
                const motion = animatedValues[index];

                return (
                    <Animated.Text
                        key={`${particle.symbol}-${particle.id}`}
                        style={[
                            styles.symbol,
                            {
                                left: `${particle.left}%`,
                                top: `${particle.top}%`,
                                fontSize: particle.size,
                                opacity: particle.opacity,
                                transform: [
                                    { translateX: motion.x },
                                    { translateY: motion.y },
                                    {
                                        rotate: motion.rotate.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ['0deg', '360deg'],
                                        }),
                                    },
                                ],
                            },
                        ]}>
                        {particle.symbol}
                    </Animated.Text>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    layer: {
        ...StyleSheet.absoluteFill,
        overflow: 'hidden',
    },
    symbol: {
        position: 'absolute',
        color: '#9EC7FF',
        fontWeight: '700',
        textShadowColor: 'rgba(158, 199, 255, 0.25)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
    },
});
