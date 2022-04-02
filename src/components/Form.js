import React from "react";
import Image from "../images/image.png"
import data from "../memesData.js";

export default function Form() {

    const [memeImg, setMemeImg] = React.useState({
        topText : "",
        bottomText : "",
        randomImage:"http://i.imgflip.com/1bij.jpg",
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setMemeImg({...memeImg, [name]: value});
    }



        function getImageUrl(){
        const arrayIndex = Math.floor(Math.random() * data.data.memes.length);
        setMemeImg(prevState => ({...prevState, randomImage: data.data.memes[arrayIndex].url}));
    }


    return(
        <section className="form-section">
            <div>
                <div className="input--forms">

                    <input
                    type= "text"
                    placeholder="Shut Up"
                    className="input--box"
                    name="topText"
                    value={memeImg.topText}
                    onChange={handleChange}

                    />

                    <input 
                    type= "text" 
                    placeholder="and take my money" 
                    className="input--box" 
                    name="bottomText"
                    value={memeImg.bottomText}
                    onChange = {handleChange}
                    
                    />
                    </div>

                <button onClick={getImageUrl} type="submit" className="generate">Get a new meme image 
                <img src={Image} className="icon"/> 
                </button>

                <div className="meme">
                    <img src={memeImg.randomImage} className="meme--image" />
                    <h2 className="meme--text top">
                        {memeImg.topText}
                    </h2>
                    <h2 className="meme--text bottom">
                        {memeImg.bottomText}
                    </h2>

                    </div>

            </div>
        </section>
    )

}