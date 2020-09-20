import React, { useEffect } from 'react'; 
import alanBtn from '@alan-ai/alan-sdk-web'; // importing the alan btn from the dependency that we just installed

const alanKey = '293605cf81593945a63559dc10b162c12e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {

    useEffect(() => {// now initialise the alan bottun, use effect is a function once our application starts
        alanBtn({ 

            key: alanKey, // key that allows us to use alan

        onCommand: ( {command, articles}) => {
            if(command === 'newHeadlines') {
                console.log(articles);
            }


        }
        
        
    })
    

    }, [])

    return (
        <div>
           <h1>Alan AI News Application</h1> 
        </div>
    );
    
}



export default App;
