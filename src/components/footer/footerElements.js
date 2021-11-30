import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #24003b;
`;

export const FooterWrapper = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top:32px;
  };
`;

export const FooterLinksWrap = styled.div `
  display: flex;

  @media screen and (max-width: 820px ) {
    flex-direction: column;
  };
`;

export const FooterLinkItems = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #ddd8ff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  };
`;

export const FooterLinkTitle = styled.h1 `
  font-size: 12px;
  margin-bottom: 10px;
`;

export const FooterLink = styled(Link) `
  color: #ddd8ff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 10px;

  &:hover {
    color: #e4405f;
    transition: 0.3s ease-out;
  };
`;

export const FooterSocialLink = styled.a `
  color: #ddd8ff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 10px;
  cursor: pointer;;
  &:hover {
    color: #e4405f;
    transition: 0.3s ease-out;
  };
`;


export const SocialMedia = styled.section `
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 20px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  };
`;

export const SocialLogo = styled(Link) `
  color: #ddd8ff;
  justify-content: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small `
  color: #ddd8ff;
  margin-bottom: 16px;

`;

export const SocialIcons = styled.div `
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100px; 
  `;

export const SocialIconLinkFb = styled(Link) `
  color: #ddd8ff;
  font-size: 12px;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #4267B2;
    margin-bottom: .3em;
    transform: scale(1.5);
  };
`;

export const SocialIconLinkInsta = styled(Link) `
  color: #ddd8ff;
  font-size: 12px;

  &:hover {
  transition: all 0.2s ease-in-out;
  color: #e4405f;
  margin-bottom: .3em;
  transform: scale(1.5);
};
  `;

export const JB = styled(Link) `
  text-decoration: none;
  color: #ddd8ff;
  &:hover {
    color: #e4405f;
    transition: 0.3s ease-out;
  };
`;
  