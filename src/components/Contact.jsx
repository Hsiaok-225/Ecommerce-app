import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const ContactContainer = styled.div`
  background-color: #2879fe;
  color: white;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MailBox = styled.div`
  input {
    padding: 10px;
    border: none;
    border-radius: 5px 0 0 5px;
  }
  button {
    padding: 10px;
    color: white;
    background: #333;
    border-radius: 0 5px 5px 0;
    border: none;
    cursor: pointer;
  }
`;
const IconsBox = styled.div`
  display: flex;
  gap: 10px;
`;

export default function Contact() {
  return (
    <ContactContainer>
      <span>BE IN TOUCH WITH US:</span>
      <MailBox>
        <input type="text" placeholder="Enter your e-mail..." />
        <button>JOIN US</button>
      </MailBox>
      <IconsBox>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <GoogleIcon />
        <PinterestIcon />
      </IconsBox>
    </ContactContainer>
  );
}
