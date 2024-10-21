import { useSelector } from "react-redux"
import lang from "../utils/languageConstants"


const GptSearchBar = () => {
  const langKey = useSelector((store)=> store.config.lang);

  const placeholderText = lang[langKey]?.gptSearchPlaceHolder || 
  lang['en']?.gptSearchPlaceHolder ||
   "Enter search query...";
  const searchText = lang[langKey]?.search ||
   lang['en']?.search ||
    "Search";

  return (
    <div className='pt-[10%] flex justify-center'>
    <form className=' bg-blue-500 w-1/2 grid grid-cols-12 rounded-lg'>
      <input 
      type='text' placeholder={placeholderText}
      className='py-2 m-2 text-white bg-black rounded-lg col-span-9 text-center'>
      </input>
      <button className='bg-red rounded-lg col-span-3 py-2 m-2 text-white'>
        {searchText}</button>
    </form>
  </div>
  )
}

export default GptSearchBar