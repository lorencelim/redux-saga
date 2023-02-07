import { TextField } from '@mui/material'
import React from 'react'

const SearchTruck = ({ search, setSearch }) => {
    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <TextField
                sx={{
                    ".MuiFormLabel-root.Mui-focused": {
                        color: '#ffb300'
                    },
                    '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                        borderColor: '#ffb300',
                    },
                    m: "0px 0px 16px 16px"
                }}
                
                label="Search..."
                id='search'
                type='text'
                role='searchbox'
                placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                size="small"
            />
        </form>
    )
}

export default SearchTruck