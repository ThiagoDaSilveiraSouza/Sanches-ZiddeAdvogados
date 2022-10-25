import styled from "styled-components";

interface ISocialMediaContainer {
  mobileWrap?: boolean;
  padding?: string;
}

export const SocialMediaContainer = styled.div<ISocialMediaContainer>`
  display: flex;
  align-items: center;
  gap: 25px;
  padding: ${({ padding }) => padding || "10px 0;"};
  a {
    color: var(--gold-color);
    text-decoration: none;
    font-size: 15px;
  }
  ${({ mobileWrap }) => {
    return (
      mobileWrap &&
      `
    @media (max-width: 900px) {
        flex-direction: column;
        width: 100%;
        background: var(--dark-color);
        padding-bottom: 20px;
    }`
    );
  }}
  > div {
    display: flex;
    gap: 10px;
  }
`;

interface ISocialMediaAncorIcon {
  haveLink?: string;
}
export const SocialMediaAncorIcon = styled.a<ISocialMediaAncorIcon>`
  display: ${({ haveLink }) => (haveLink?.length ? "flex" : "none")};
  visibility: ${({ haveLink }) => (haveLink?.length ? "visible" : "hidden")};
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: var(--gold-color);
  border-radius: 100%;
  svg {
    color: var(--dark-color);
  }
  :hover {
    box-shadow: 0 0 3px 0 white;
  }
`;
