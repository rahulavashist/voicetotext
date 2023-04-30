
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
const Practice = () => {
  const startListening = () => SpeechRecognition.startListening({ continuous: true })
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return (
    <>
      <div className='container'>
        <h2>Speech To Taxt Converter</h2>
        <br />
        <p>This is a convert your speech into text  </p>

        <div className="main-content">
          {transcript}
        </div>


        <div>
          <button className='btn btn-outline-secondary m-2'> Copy</button>
          <button className='btn btn-outline-secondary m-2' onClick={startListening}> Start Listening</button>
          <button className='btn btn-outline-secondary m-2' onClick={SpeechRecognition.stopListening}> Stop Listening</button>
        </div>
      </div>
    </>
  );
}

export default Practice;
