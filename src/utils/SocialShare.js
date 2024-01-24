import React from 'react';
import { Facebook, Twitter, Linkedin } from 'react-feather';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';

const SocialShare = ({ url, title, description }) => {
  return (
    <div className="mb-8 post-meta-share-icons">
      <FacebookShareButton url={url} quote={description} className="mr-2">
        <Facebook strokeWidth={1.25} className="text-gray-800 hover:text-blue-700" />
      </FacebookShareButton>

      <LinkedinShareButton url={url} title={title} summary={description} className="mr-3">
        <Linkedin strokeWidth={1.25} className="text-gray-800 hover:text-blue-700" />
      </LinkedinShareButton>

      <TwitterShareButton url={url} title={description} className="mr-2">
        <Twitter strokeWidth={1.25} className="text-gray-800 hover:text-blue-700" />
      </TwitterShareButton>
    </div>
  );
};

export default SocialShare;
