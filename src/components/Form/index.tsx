import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import { captureScreen } from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system';

import { FeedbackType } from '../../components/Widget';
import { ScreenshotButton } from '../../components/ScreenshotButton';
import { Button } from '../../components/Button';

import { feedbackTypes } from '../../utils/feedbackTypes';
import { theme } from "../../theme";

import { styles } from "./styles";
import { api } from "../../libs/api";

interface Props {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({ feedbackType, onFeedbackCanceled, onFeedbackSent }: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  function handleScreenshot() {
    captureScreen({
      format: 'png',
      quality: 0.8
    })
    .then(uri => setScreenshot(uri))
    .catch(error => console.log(error));
  }

  function handleScreenshotRemove() {
    setScreenshot(null);
  }

  async function handleSendFeedback() {
    console.log('entrou');
    if(isSendingFeedback){
      return;
    }
    setIsSendingFeedback(true);
    console.log('setou');

    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64'});

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment
      });

      onFeedbackSent();

    } catch (error) {
      console.log(error);
      setIsSendingFeedback(false);
    }
   /*  finally {
      setIsSendingFeedback(false);
    } */
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={onFeedbackCanceled}>
          <ArrowLeft
            size={24}
            weight='bold'
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image
            style={styles.image}
            source={feedbackTypeInfo.image}
          />
          <Text
            style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <TextInput
        multiline
        autoCorrect={false}
        style={styles.input}
        placeholder={feedbackTypeInfo.text}
        placeholderTextColor={theme.colors.text_secondary}
        onChangeText={setComment}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
          screenshot={screenshot}
        />
        <Button
          onPress={handleSendFeedback}
          isLoading={isSendingFeedback}
        />
      </View>      
    </View>
  );
}
