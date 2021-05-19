import React from "react";
import { Container } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import { CSSTransition } from "react-transition-group";
import useSearch from "../helpefunctions/search";
import { useRef } from "react";
import { IconButton } from "@material-ui/core";
const Search = ({ openSearch, setOpenSearch }) => {
  const searchRef = useRef();
  const { searchHandler } = useSearch(searchRef);
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={openSearch}
      timeout={{
        enter: 500,
        exit: 500,
      }}
      classNames={{
        enter: "",
        enterActive: "openSearch",
        enterDone: "",
        exit: "",
        exitActive: "closeSearch",
        exitDone: "",
      }}
    >
      <div className="search_wrapper">
        <Container className="search_container">
          <form
            onSubmit={(e) => {
              searchHandler(e);
            }}
            className="input_div"
          >
            <IconButton style={{ outline: "none" }} type="submit">
              <SearchIcon className="text-white" />
            </IconButton>

            <input
              ref={searchRef}
              type="text"
              placeholder="Search..."
              className="text-white"
            />
          </form>
          <div className="cancel">
            <button
              type="button"
              onClick={() => {
                setOpenSearch((currentValue) => false);
              }}
              className="text-white"
            >
              CANCEL
            </button>
          </div>
        </Container>
      </div>
    </CSSTransition>
  );
};

export default Search;
