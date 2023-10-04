import useMediaQuery from "@mui/material/useMediaQuery";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export const TextFieldComponent = ({
  value,
  handleClearClick,
  handleInputChange,
  handleFilterButtonClick,
}) => {
  const matches = useMediaQuery("(max-width: 668px)");
  return (
    <div className="search-input-container">
      <TextField
        id="enterprise-name-input"
        name="name"
        onChange={handleInputChange}
        variant="outlined"
        value={value}
        sx={{ width: matches ? "100%" : "65%" }}
        InputProps={{
          startAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
          endAdornment: (
            <>
              <IconButton
                sx={{ visibility: value ? "visible" : "hidden" }}
                onClick={handleClearClick}
              >
                <ClearIcon />
              </IconButton>
              <IconButton
                sx={{ backgroundColor: "#aca8a8" }}
                onClick={handleFilterButtonClick}
              >
                <FilterAltIcon />
              </IconButton>
            </>
          ),
          style: {
            borderRadius: "30px",
          },
        }}
      />
    </div>
  );
};
