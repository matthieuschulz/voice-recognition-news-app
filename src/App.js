import React, { useState, useEffect } from 'react'; 
import alanBtn from '@alan-ai/alan-sdk-web'; // importing the alan btn from the dependency that we just installed
import NewsCards from './Components/NewsCards/NewsCards';

const alanKey = '293605cf81593945a63559dc10b162c12e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
    const [newsArticles, setNewsArticles] = useState([]); // goal is to set articles to the state, to then display them in newscards


    useEffect(() => { // now initialise the alan bottn, use effect is a function once our application starts
    // first paratmeter is a callback function
        alanBtn({ 


            key: alanKey, // key that allows us to use alan

        onCommand: ( {command, articles}) => { // when alan heres this command...,
            if(command === 'newHeadlines') {
                setNewsArticles(articles);
            }

        }


        





    })

    }, [])//second parameter is a dependency array)
    return (
        <div>
           <h1>Voice Recognition New App using AlanAI</h1> 

           <NewsCards articles = {newsArticles}/>
        </div>
    );    
    
}

export default App;

