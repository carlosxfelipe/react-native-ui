import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

interface CarouselSkeletonProps {
  width: number;
  height: number;
  isDarkMode?: boolean;
}

export const CarouselSkeleton = ({
  width,
  height,
  isDarkMode = false,
}: CarouselSkeletonProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim]);

  const baseColor = isDarkMode ? "#333" : "#e0e0e0";
  const highlightColor = isDarkMode ? "#555" : "#f5f5f5";

  return (
    <View
      style={{
        width,
        height,
        borderRadius: 18,
        backgroundColor: baseColor,
        position: "absolute",
        overflow: "hidden",
      }}
    >
      <Animated.View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: highlightColor,
          opacity: fadeAnim,
          borderRadius: 18,
        }}
      />
    </View>
  );
};
