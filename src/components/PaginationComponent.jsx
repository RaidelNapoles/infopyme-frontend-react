import Pagination from "@mui/material/Pagination";
import { PaginationItem, ThemeProvider, createTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const PaginationComponent = ({
  pages,
  currentPage,
  handlePageChange,
}) => {
  const theme = createTheme({
    typography: { fontSize: 25 },
  });

  return (
    <div className="pagination">
      <ThemeProvider theme={theme}>
        <Pagination
          count={pages}
          variant="outlined"
          color="primary"
          sx={{ button: { color: "#ffffff" } }}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
          page={currentPage}
          onChange={handlePageChange}
        />
      </ThemeProvider>
    </div>
  );
};
