import React, { FC, useMemo } from "react";
import { Text, ViewStyle, ActivityIndicator, View } from "react-native";
import styles from "./styles";

import { colors } from "../../constants/palette";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: string;
  loading?: boolean;

  style?: ViewStyle;
}

const EmptyState: FC<EmptyStateProps> = (props) => {
  const shouldShow = useMemo(() => {
    return props.title || props.description || props.icon;
  }, [props.title, props.description, props.icon]);

  return shouldShow ? (
    <View style={[styles.container, props.style]}>
      {props.loading && (
        <ActivityIndicator
          color={colors.blue}
          size="large"
          style={{ marginBottom: 35 }}
        />
      )}
      {props.title && (
        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          minimumFontScale={0.7}
          maxFontSizeMultiplier={1.5}
          style={styles.title}
        >
          {props.title}
        </Text>
      )}
    </View>
  ) : null;
};

EmptyState.defaultProps = {
  loading: false,
};

export default EmptyState;
