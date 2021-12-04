import React from 'react';
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const Search = ({ onSearch, searchValue }) => {
   
    return (
        <TextField
        value={searchValue}
        placeholder="Search"
        sx={{
          width: "80%",
          margin: "15px 40px",
        }}
        InputProps={{
            startAdornment: <SearchIcon />,
            endAdornment: searchValue &&  <CloseIcon 
            onClick={() => {
                onSearch("");
              }} />            
          }}
   
        onChange={(e) => onSearch(e.target.value)}

      />
   
    )
}

export default Search
