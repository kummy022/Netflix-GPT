import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { useSelector } from 'react-redux';

const GptSearch = () => {
  const currentTheme = useSelector((store) => store.config.currentTheme);
  return (
    <div className={currentTheme === 'dark' ? 'dark' : ''}> {/* Apply 'dark' class conditionally */}
      <div className='min-h-screen bg-white dark:bg-black'> {/* Full-screen background */}
        <div className='absolute z-10'>
          {/* You can add background elements like a logo here */}
        </div>

        {/* GPT Search Bar and Movie Suggestion */}
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;