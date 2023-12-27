import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar: React.FC = () => {
  return (
    <div className='w-full px-8 relative'>
        <span className='absolute my-4 text-slate-400 mx-4'>
            <FaSearch/>
        </span>
        <input type="search"  className='bg-search w-full outline-none rounded-full p-2 text-fg text-xl placeholder:pl-10' placeholder='search'/>
    </div>
  )
}

export default SearchBar