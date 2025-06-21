let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if (hours>=0 && hours<12){
        speak("Good Morning")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon")
    }else{
       speak("Good Evening") 
    }
}
window.addEventListener('load',()=>{
wishMe()
})
let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    console.log(event)
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",() =>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")){
        speak("hello sir, how can I help you?")
    }
    else if(message.includes("who are you")){
        speak("I am virtual assistant, created by Utkarsh Sir.")
    }
    else if(message.includes("open youtube")){
        speak("Opening YouTube")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("open google")){
        speak("Opening Google")
        window.open("https://www.google.com")
    }
    else if(message.includes("open facebook")){
        speak("Opening Facebook")
        window.open("https://www.facebook.com")
    }
    else if(message.includes("open instagram")){
        speak("Opening Instagram")
        window.open("https://www.instagram.com")
    }
    else if(message.includes("open whatsapp")){
        speak("Opening WhatsApp")
        window.open("whatsapp://")
    }
    else if(message.includes("open calculator")){
        speak("Opening Calculator")
        window.open("calculator://")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleTimeString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
        else{
        speak(`this is what i found on internet regarding ${message}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }

}