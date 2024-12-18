import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="text-white flex justify-center mt-8 bg-[#141414] py-8">
      <Link to="https://www.facebook.com/" target="_blank" className="mx-3">
        <FacebookOutlinedIcon />
      </Link>
      <Link to="https://www.instagram.com/" target="_blank" className="mx-3">
        <InstagramIcon />
      </Link>
      <Link to="https://www.twitter.com/ " target="_blank" className="mx-3">
        <TwitterIcon />
      </Link>{" "}
      <Link to="https://www.youtube.com/" target="_blank" className="mx-3">
        <YouTubeIcon />
      </Link>
    </div>
  );
};
export default Footer;
