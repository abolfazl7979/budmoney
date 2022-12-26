import aboutSvg from '../../../resources/landingPage/svgs/aboutSvg.svg';
import discoverSvg from '../../../resources/landingPage/svgs/discoverSvg.svg';
import signUpSvg from '../../../resources/landingPage/svgs/signUpSvg.svg';

export const aboutSectionData = {
  sectionName: "about",
  sectionId: 'about',
  sectionParagraph: "Expense Manager",
  sectionTitle: "Unlimited Management with zero fees.",
  sectionSubtitle:
    "Get access to our exclusive app that allows you to manage and view your expenses without getting charged any fees.",
    linkToValue : '/signup',
    linkTextValue : 'Get started',
    imgFirst : false,
    imgAlt : 'a svg of a Car',
    imgSrc : aboutSvg
};

export const discoverSectionData = {
  sectionName: "discover",
  sectionId: 'discover',
  sectionParagraph: "Unlimited Access",
  sectionTitle: "Login to your account at any time",
  sectionSubtitle:
    "We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.",
    linkToValue : '/login',
    linkTextValue : 'Learn more',
    imgFirst : true,
    imgAlt : 'a svg of a rain',
    imgSrc : discoverSvg
}

export const signUpSectionData = {
  sectionName: "signUp",
  sectionId: 'signup',
  sectionParagraph: "You are our team",
  sectionTitle: "Creating an account is extremely easy",
  sectionSubtitle:
    "Get everything set up and ready in under 1 minute. You can create an account using gmail and password or automatic google sign up with no password.",
    linkToValue : '/signup',
    linkTextValue : 'Start Now',
    imgFirst : false,
    imgAlt : 'a svg of a payment',
    imgSrc : signUpSvg
}