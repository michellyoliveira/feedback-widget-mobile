import { Camera, Trash } from "phosphor-react-native";
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import successImge from '../../assets/success.png';
import { theme } from "../../theme";
import { Copyright } from "../Copyright";

import { styles } from "./styles";

interface Props {
  onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: Props) {
  return (
    <View 
      style={styles.container}
    >
      <Image 
      source={successImge}
        style={styles.image}
      />

      <Text style={styles.title}>
        Agradecemos o feedback
      </Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={onSendAnotherFeedback}
      >
        <Text style={styles.buttonTitle}>
          Enviar outro feedback
        </Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
};
