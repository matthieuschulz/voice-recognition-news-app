import React, { useEffect } from 'react'; 
import alanBtn from '@alan-ai/alan-sdk-web'; // importing the alan btn from the dependency that we just installed

const alanKey = '293605cf81593945a63559dc10b162c12e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {

    useEffect(() => { // now initialise the alan bottn, use effect is a function once our application starts
    // first paratmeter is a callback function
        alanBtn({ 

            key: alanKey, // key that allows us to use alan

        onCommand: ( {command, articles}) => { // when alan heres this command...,
            if(command === 'newHeadlines') {
                console.log(articles);
            }
        }


        
    })

    }, [])//second parameter is a dependency array)
    return (
        <div>
           <h1>Voice Recognition New App using AlanAI</h1> 
        </div>
    );    
}

export default App;

