import styled from "styled-components";

// interface
import { IFooterContent } from "./interface";

export const FooterContent = styled.section<IFooterContent>`
  min-height: 862px;
  background-image: ${({ footerBg }) => (footerBg ? `url(${footerBg})` : "")};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 143px;
  box-sizing: border-box;

  > .centralizer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    > img {
      max-width: 305px;
      width: 100%;
    }
    p {
      color: var(--gold-color);
      margin: 0;
    }
  }
`;

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px 0;
  > * {
    flex: 0 1 456px;
  }
`;

export const DataContainer = styled.div`
  h3 {
    color: var(--gold-color);
    margin: 0;
    font-size: 47px;
    font-family: var(--secondary-font);
  }
`;
export const PhoneContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0;
    font-size: 18px;
    color: white;
    svg {
      fill: var(--gold-color);
    }
  }
`;

export const SocialMediaContent = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background: var(--gold-color);
    cursor: pointer;
    svg {
      fill: var(--dark-color);
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;


export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 12px;
  span {
    color: red;
  }
  input,
  textarea {
    font-size: 14px;
  }
  input {
    font-size: 12px;
    height: 35px;
  }
`;

export const DeveloperLink = styled.p`
  strong {
    a {
      color: #bbcc35;
    }
  }
`;
