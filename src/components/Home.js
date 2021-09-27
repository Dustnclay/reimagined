import '../styles/Home.css'
function Home() {
    return(
        <>
            <iframe title="headervid"
                width="100%" height="560"
                src="https://www.youtube.com/embed/Ibcxi9Q84pw?autoplay=1&mute=1&playlist=Ibcxi9Q84pw&loop=1">
            </iframe>
            <div className='content'>
                <p className="projectLine">Have a Video Project? <button className='projectButton'>Lets Talk!</button></p>
            </div>
            <div className='aboutMe'>
                <div >
                    <img className='aboutMeImg' src={'/About-Me-IMAGE.png'}/>
                </div>
                <div>
                    <h2 className='aboutMeHeader'>I'm Lauren</h2>
                    <p>
                        I'm a filmmaker based out of Colorado Springs. Since 2015, woring on a variety of projects, I have 
                        found that filming events is my passion. Why? because there is nothing I love more than a celebration.<br/>
                    </p>   
                    <p> 
                        Life is an adventure. It's full of joy, love, reverence, excitment, and the unknown surrounded by the people we
                        love. How often do we wish we could go back and relive the moments like these?<br/>
                    </p> 
                    <p>   
                        Whether it be your wedding, a trip, a conference or concert, my goal is to capture the greatest parts of your event
                        for you to look back on after the party's over. so let's get together and create memories that last!
                    </p>     
                </div>
            </div>
        </>
    )
}

export default Home