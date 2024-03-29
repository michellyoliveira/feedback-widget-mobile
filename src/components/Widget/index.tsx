import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { Options } from '../Options';
import { Form } from '../Form';
import { Success } from '../Success';

import { styles } from './styles';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSend, setFeedbackSend] = useState(false);

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSend(false);
  }

  function handleFeedbackSend() {
    setFeedbackSend(true);
  }

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={handleOpen}
      >
        <ChatTeardropDots
          size={24}
          color={theme.colors.text_on_brand_color}
          weight='bold'
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >

        {
          feedbackSend
          ?
          <Success onSendAnotherFeedback={handleRestartFeedback} />
          :
          <>
          {
            feedbackType
            ?
            <Form 
              feedbackType={feedbackType}    
              onFeedbackCanceled={handleRestartFeedback}  
              onFeedbackSent={handleFeedbackSend}        
            />
            :
            <Options onFeedbackTypeChanged={setFeedbackType} />
          }
          </>          
        }     

      </BottomSheet>
    </>
  );
};

export default gestureHandlerRootHOC(Widget);
