import { TextField } from '@mui/material'
import React from 'react'

const SearchTruck = ({ search, setSearch }) => {
    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <TextField

              sx={{
                ".MuiFormLabel-root.Mui-focused": {
                  color: '#ffc107'
                },
                '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                  borderColor: '#ffc107',
                },
                mb:1
              }}
                
                label="Search..."
                id='search'
                type='text'
                role='searchbox'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                size="small"
            /> 
        </form>
    );
};

export default SearchTruck