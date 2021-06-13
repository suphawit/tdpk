import { AiOutlineTwitter } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

const SocialTooltip = () => {
  const SOCIAL_TITLE = 'True Digital Park';
  const socialUrl =
    process.env.NODE_ENV !== 'production'
      ? process.env.NEXT_PUBLIC_SOCIAL_URL
      : window.location.href;
  return (
    <div className="tooltop relative">
      <div className="border rounded p-2 flex items-center space-x-3">
        <TwitterShareButton url={socialUrl} title={SOCIAL_TITLE}>
          <AiOutlineTwitter />
        </TwitterShareButton>
        <FacebookShareButton url={socialUrl} quote={SOCIAL_TITLE}>
          <GrFacebookOption />
        </FacebookShareButton>
      </div>
      <div className="arrow-tip border-b border-r rounded-br w-3 h-3 p-1 transform rotate-45 absolute bg-white left-1/2 -bottom-1.5"></div>
    </div>
  );
};

export default SocialTooltip;
