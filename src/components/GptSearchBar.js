import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/languageConstants"
import { useRef } from "react";
import client from "../utils/openai"
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSearchSlice";



const GptSearchBar = () => {
  const langKey = useSelector((store)=> store.config.lang);
  const searchGtpText = useRef(null);
  const dispatch = useDispatch();


  const SearchMovieTMDB = async(movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json_data = await data.json();
    return json_data.results;
  };

  const placeholderText = lang[langKey]?.gptSearchPlaceHolder || 
  lang['en']?.gptSearchPlaceHolder ||
   "Enter search query...";
  const searchText = lang[langKey]?.search ||
   lang['en']?.search ||
    "Search";

  const handleGptSearchTextClick = async(movie) => {
    
    const gptQuery = 
    "act as movie Recommendation system and suggest some movies for the query:" 
    + searchGtpText.current.value + 
    ".Only give me names of 5 movies, comma seperated. example Raj, Kuladi, Vishnu, Deva, Ranadeera"; 

    const gptSearchResult = await client.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo'
    });

    const gptMovieList = gptSearchResult.choices?.[0]?.message?.content.split(",");

    if (!gptSearchResult) {
      // TODO: Write error handling
  };

    const promiseArray = gptMovieList.map((movie)=> SearchMovieTMDB(movie));

    const movieTMDBResult = await Promise.all(promiseArray); 
    dispatch(addGptMovieResults({movieNames: gptMovieList, movieResults: movieTMDBResult}));
  };

  return (
    <div className='pt-[10%] flex justify-center'>
    <form className=' bg-blue-500 w-1/2 grid grid-cols-12 rounded-lg' 
    onSubmit={(e) => e.preventDefault()}>
      <input 
      ref={searchGtpText}
      type='text' placeholder={placeholderText}
      className='py-2 m-2 text-white bg-black rounded-lg col-span-9 text-center'>
      </input>
      <button className='bg-red rounded-lg col-span-3 py-2 m-2 text-white' onClick={handleGptSearchTextClick} >
        {searchText}</button>
    </form>
  </div>
  )
};


export default GptSearchBar;