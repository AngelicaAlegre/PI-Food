const SearchBotton = () => {
    return ( 
    <form action="https://api.spoonacular.com/recipes/complexSearch">
        <input type="text" placeholder="Search Recipes" name="q"></input>
        <button type="submit">See</button>
    </form>
    )
};

export default SearchBotton;