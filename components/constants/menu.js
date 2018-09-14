import { testAlphaUrl } from './';

export const mobileMenu = [{
    name: "How it Works",
    path: "how-it-works"
  },{
    name: "Products",
    path: "products"
  },{
    name: "Token",
    path: "access-layer"
  },{
    name: "About",
    path: "about-us"
  },{
    name: "Community",
    path: "community"
  },{
    name: "Blog",
    path: "https://medium.com/mybit-dapp",
    external: true
}];

/*TODO: update path*/
export const headerMenu = [{
    name: "Developer",
    path: "products"
  },{
    name: "Fund",
    path: "access-layer"
  },{
    name: "Applications",
    path: "about-us"
}];

export const resourcesDropDown = [
  {
    name: "Tokensale",
    path: "products"
  },{
    name: "Whitepaper",
    path: "mybit.io/whitepaperv2.0"
  },{
    name: "Github",
    path: "https://github.com/MyBitFoundation/",
    external: true
}];

export const aboutDropDown = [
  {
    name: "Componay",
    path: "about_page"
  },{
    name: "Token",
    path: "token_page"
  },{
    name: "Blog",
    path: "https://medium.com/mybit-dapp",
    external: true
}];

export const headerMenuDropDown = [{
    name: "Resources",
    path: "about-us",
    list: resourcesDropDown
  },{
    name: "About",
    path: "about-us",
    list: aboutDropDown
}];


export const headerMenuLanguage = [
  {
    name: "Eng",
    path: "about-us"
  },{
    name: "Сhn",
    path: "about-us"
  }
]

export const headerMenuButton = [
  {
    name: "Contribute",
    url: "https://ddf.mybit.io",
    expternal: true
  }
]
