import { StyledProjectDesc } from '../components/styles/ProjectDesc';
import homeHub from '../assets/images/projects/homehub/home-hub-ss1.png';
import homeHubAuth from '../assets/images/projects/homehub/home-hub-ss2.png';
import homeHubProfile from '../assets/images/projects/homehub/home-hub-ss3-profile.png';
import homeHubListing from '../assets/images/projects/homehub/home-hub-ss4-createListing.png';
import homeHubLocation from '../assets/images/projects/homehub/home-hub-ss5-map.png';
import NavbarSimp from '../components/layouts/NavbarSimp';
import FooterSimp from '../components/layouts/FooterSimp';
const HomeHub = () => {
  return (
    <StyledProjectDesc>
      <NavbarSimp />
      <div className="wrapper container">
        <h2 className="title">Home Hubb</h2>
        <div className="link">
          <a
            href="https://homehubb.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live-site
          </a>
          <a
            href="https://github.com/Ezekwu/HomeHub.git"
            target="_blank"
            rel="noreferrer"
          >
            Repository
          </a>
        </div>
        <div className="thumbnail">
          <img src={homeHub} alt="" />
        </div>

        <div className="div">
          <h3>Intro</h3>
          <p className="padding-0">
            Home hubb is a real estate website where users can view houses
            available for rent or sale and directly contact the hosts.
          </p>
        </div>
        <div className="div">
          <h3>Duration</h3>
          <p className="padding-0">12th Sept - 16th Oct 2022</p>
        </div>
        <div className="div">
          <h3>Technologies used</h3>
          <p className="padding-0">
            React, Styled-Components, Firebase, contextApi
          </p>
        </div>
        <div className="div">
          <h2>Features</h2>
          <div className="div">
            <h3>1. Log-in and aunthentication</h3>
            <p>
              Implemented log-in and google authentication using firebase
              authentication. Users can log-in or sign-in using a username and
              passowrd or log-in directly with their google account. Only
              registered users can put up houses for sale or rent.
            </p>
          </div>
          <div className="thumbnail">
            <img src={homeHubAuth} alt="" />
          </div>

          <div className="div">
            <h3>2. Profile details and edit</h3>
            <p>
              Authenticated users can view their profile details and edit them.
              Users that arent authenticated are redirected back to the
              sign-up/sign-in page
            </p>
          </div>
          <div className="thumbnail">
            <img src={homeHubProfile} alt="" />
          </div>

          <div className="div">
            <h3>3. Listing Upload</h3>
            <p>
              Authenticated users can also upload a listing by providing the
              neccessary data and images for the listing. Once the listing is
              uploaded, it can be views on oue listings page by users. Uploaded
              files are stored in our firebase firestore.
            </p>
          </div>
          <div className="thumbnail">
            <img src={homeHubListing} alt="" />
          </div>
          <div className="div">
            <h3>3. Listings Location</h3>
            <p>
              I used react-leaflet to display the location of listings. This way
              users can know the exact location of the property they are renting
              or buying.
            </p>
          </div>
          <div className="thumbnail">
            <img src={homeHubLocation} alt="" />
          </div>
          <div className="div">
            <h3>Problems I faced building this project</h3>
            <p className="padding-0">
              I faced some issues building this project and they are listed
              below;
              <ul>
                <li>
                  I had some authorization issue uploading images to my
                  firestore. After several hours of debugging and research I
                  came across an article that hinted at updating the firestore
                  rule to allow authenticated users to create, delete and upload
                  files. That pretty much solved the problem.
                </li>
                <li>
                  I used swiper.js to implement and image carousel. swiper came
                  with default pagginations and buttons that didn't suit the
                  theme of the application. after reading the documentation, I
                  realized that they didn't provide a way to edit the buttons
                  and paginations so after several hours of research i came
                  across a you-tube video that showed me exactly how to do that.
                </li>
              </ul>
            </p>
          </div>
          <div className="border"></div>
        </div>
        <FooterSimp />
      </div>
    </StyledProjectDesc>
  );
};

export default HomeHub;
