function Search() {
  return(
    <div className="h-100 d-flex align-items-center justify-content-center">
        <div className="search-close-switch">+</div>
        <form className="search-model-form">
            <input type="text" id="search-input" placeholder="Search here....."/>
        </form>
    </div>
  );
}
export default Search;