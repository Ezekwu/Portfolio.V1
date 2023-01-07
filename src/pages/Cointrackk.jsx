import { StyledProjectDesc } from "../components/styles/ProjectDesc"
import NavbarSimp from "../components/layouts/NavbarSimp"
import FooterSimp from "../components/layouts/FooterSimp"
import cointrack from '../assets/images/projects/cointrackk/coin-track-ss-1.png'
import cointrackDark from '../assets/images/projects/cointrackk/coin-track-ss-2-darkmode.png'
import cointrackNews from '../assets/images/projects/cointrackk/coin-track-ss-3-news.png'
import cointrackEX from '../assets/images/projects/cointrackk/coin-track-ss4-exchanges.png'
import cointrackDets from '../assets/images/projects/cointrackk/coin-track-ss2-cryptodetails.png'
import cointrackChart from '../assets/images/projects/cointrackk/coin-track-ss-5-Chart.png'
const Cointrackk = () => {
    return (
        <StyledProjectDesc>
            <NavbarSimp />
            <div className="wrapper container">
                <h2 className="title">Coin Trackk</h2>
                <div className="link">
                    <a href="https://github.com/Ezekwu/cryptocurrency-tracker.git" target="_blank" rel="noreferrer">Live-site</a>
                    <a href="https://github.com/Ezekwu/HomeHub.git" target="_blank" rel="noreferrer">Repository</a>
                </div>
                <div 
                className="thumbnail">
                    <img src={cointrack} alt="" />
                </div>
                <div className="div">
                    <h3>Intro</h3>
                    <p className="padding-0">Coin trackk is a cryptocurrency web application where users can view details such as price, ranking, price-chart, market-cap e.t.c of up to a hundred different cryptocurrencies. It also provides information about different exchanges as well as trending news relating to several crypto currencies.</p>
                </div>
                <div className="div">
                    <h3>Duration</h3>
                    <p className="padding-0">20th Jul - 2nd Aug 2022</p>
                </div>
                <div className="div">
                    <h3>Technologies used</h3>
                    <p className="padding-0">React, Styled-Components, contextApi</p>
                </div>
                <div className="div">
                    <h2>Features</h2>
                    <div className="div">
                        <h3>1. Display individual data for each coin</h3>
                        <p>I utilized the coin-ranking api to fetch data through rapid-api for all cryptocurrencies.Each individual coin hhas a dedicated page providing more information about them.</p>
                    </div>
                    <div 
                    className="thumbnail">
                        <img src={cointrackDets} alt="" />
                    </div>

                    <div className="div">
                        <h3>2. Displayed price data using line-chart</h3>
                        <p>I displayed all cryptocurrencies data in a line-chart. I used ApexCharts.js and utilized the line-chart option to display the data.</p>
                    </div>
                    <div 
                    className="thumbnail">
                        <img src={cointrackChart} alt="" />
                    </div>

                    <div className="div">
                        <h3>3. Displayed data for top exchanges</h3>
                        <p>I utilized the coin-ranking api to get a list of top ranking exchanges. Exchanges are ranked according to their credibility.</p>
                    </div>
                    <div 
                    className="thumbnail">
                        <img src={cointrackEX} alt="" />
                    </div>
                    <div className="div">
                        <h3>3. Trending news for cryptocurrency</h3>
                        <p>I utilized the binge-news api to fetch news concerning cryptocurrencies. There is a select option to filter news based on specific cryptocurrencies.</p>
                    </div>
                    <div 
                    className="thumbnail">
                        <img src={cointrackNews} alt="" />
                    </div>
                    <div className="div">
                        <h3>4. Implemented light and dark mode</h3>
                        <p>I implemented light and dark mode throughout the application using styled-components themes.</p>
                    </div>
                    <div 
                    className="thumbnail">
                        <img src={cointrackDark} alt="" />
                    </div>
                    <div className="div">
                        <h3>Problems I faced building this project</h3>
                        <p className="padding-0">Building this application was relatively straight forward for me asides the fact that the data coming from coin-ranking api was complex and i had manipulate the data to suit the applications needs. Also, i had to make api calls to different api's coin-ranking and coin-gecko to get the neccessary data i needed.</p>
                    </div>
                    <div className="border"></div>
                </div>
            </div>
            <FooterSimp />
        </StyledProjectDesc>
    )
}

export default Cointrackk