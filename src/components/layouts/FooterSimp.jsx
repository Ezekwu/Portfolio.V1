import { StyledFooter } from '../styles/Footer.styled';

const FooterSimp = () => {
  const date = new Date().getFullYear();
  return (
    <StyledFooter>
      <div className="container wrapper ">
        <div className="col-1 ">
          <h3>Ezekwu.</h3>
          <p className="padding-0">Designed by Ezekwu Jeremiah &copy; {date}</p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default FooterSimp;
