import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '293605cf81593945a63559dc10b162c12e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {

    useEffect(() => {
        alanBtn({ 


            
            key: alanKey,
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
