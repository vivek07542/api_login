export function autoFilterFunction(needle, heystacks, searchProperty) {
    
    let query = needle.toLowerCase();

    if (searchProperty !== "" && searchProperty !== null && searchProperty.length > 0)
    {
        return heystacks.filter(item => item[searchProperty].toLowerCase().indexOf(query) >= 0);
    }
    else {
        return heystacks.filter(item => item.toLowerCase().indexOf(query) >= 0);    
    }
    
}