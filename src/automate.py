from uiautomator import Device
import requests
import speech_recognition as sr
import pyaudio
import pyttsx3
import pyttsx3
import webbrowser

engine = pyttsx3.init()
engine.setProperty("rate", 190)
engine.setProperty('voice', 'tamil') 
engine.setProperty("volume", 0.5)
engine.say("How can I help you?")
engine.runAndWait()
 

d=Device('emulator-5554')

r = sr.Recognizer()


try:
    request = requests.get("https://www.google.com",timeout=10)
except (requests.ConnectionError,
        requests.Timeout) as exception:
    engine.say("Sorry! You are not Connected to internet")
    engine.say("Should i connect to LPU wireless")
    engine.runAndWait()
    with sr.Microphone() as source:
         print("Speak")
         audio_text = r.listen(source)
         try:
           # print("Processing.....")
            print("Text: "+r.recognize_google(audio_text))
         except:
            engine.say("Sorry, I did not get that.")
            engine.say("Please try again")
            engine.runAndWait()
            webbrowser.open_new_tab('https://10.10.0.1')
d.drag(50,600,50,200)        

'''with sr.Microphone() as source:
    audio_text = r.listen(source)
    
    try:
        print("Processing.....")
        print("Text: "+r.recognize_google(audio_text))
    except:
        engine.say("Sorry, I did not get that.")
        engine.say("Please try again")
        engine.runAndWait()'''
