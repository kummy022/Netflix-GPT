export const LOGO = 
   "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"


export const USER_AVATAR = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHKBsI-eTU9-QGrwnJDo5d2ZnmNgytK0Z2w&s"

export const BODY_LOGO = "https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"

export const CDN_URL_POSTER = "https://image.tmdb.org/t/p/w500/"

export const SUPPPORTED_LANGUAGES = [
  {identifier: "en", name:"English"},
  {identifier: "kannada", name: "Kannada"},
  {identifier: "hindi", name: "Hindi"},
]

export const THEME = [
  {identifier: "light", name: "Light"},
  {identifier: "dark", name: "Dark"},
]

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer' + process.env.REACT_APP_TMDB_KEY,
  }
};

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

