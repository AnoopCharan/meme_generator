// new line comment
import memesData from "../assets/memesData";
import { useState } from "react";
export default function Meme() {

    const [memeUrl, setMemeUrl] = useState("");
    function randomMeme(){
        const memeArray = memesData.data.memes
        let randomNumber = Math.floor(Math.random() * memeArray.length) +1;
        console.log(memeArray.length);
        console.log(memesData.data.memes[randomNumber].url);
        setMemeUrl(memesData.data.memes[randomNumber].url);

    }
    return (
        // <div className="meme">
        //     <form action="" className="meme--form">
        //         <div className="meme--form--inputs">
        //             <input type="text" placeholder="Enter text"/>
        //             <input type="text" placeholder="Enter text"/>

        //         </div>
        //         <button type="submit" className="meme--form--submit">Generate meme!</button>
        //     </form>
        //     <div className="meme--disp">
        //         <img src="" alt="" />

        //     </div>
        // </div>  
        // as main
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text" />
                <input type="text" className="form--input" placeholder="Bottom text" />
                <button className="form--button" onClick={randomMeme}>Generate!</button>
            </div>
            
            <img src={memeUrl} alt="" srcset="" className="meme--img"/>
                
            
        </main>
    )
}