import { AiOutlineTwitter, AiOutlineGoogle } from 'react-icons/ai';
import { FaLine } from 'react-icons/fa';
import { GrFacebookOption, GrLinkedinOption, GrYoutube } from 'react-icons/gr';
import { RiInstagramLine } from 'react-icons/ri';

import { Blockdit } from '@resources/icons';

const SocialNetworks = () => {
  return (
    <div className="flex items-center space-x-4 lg:space-x-6 text-lg">
      <a href="https://www.facebook.com/TrueDigitalPark/" target="_blank">
        <GrFacebookOption />
      </a>
      <a href="https://www.instagram.com/truedigitalpark/" target="_blank">
        <RiInstagramLine />
      </a>
      <a
        href="https://www.linkedin.com/company/true-digital-park/"
        target="_blank"
      >
        <GrLinkedinOption />
      </a>
      <a href="https://twitter.com/TDigitalpark" target="_blank">
        <AiOutlineTwitter />
      </a>
      <a href="https://www.youtube.com/c/TrueDigitalPark" target="_blank">
        <GrYoutube />
      </a>
      <a href="https://lin.ee/rPpgy85" target="_blank">
        <FaLine />
      </a>
      <a href="https://www.blockdit.com/truedigitalpark" target="_blank">
        <Blockdit />
      </a>
      <a href="https://g.page/TrueDigitalPark?share" target="_blank">
        <AiOutlineGoogle />
      </a>
    </div>
  );
};

export default SocialNetworks;
