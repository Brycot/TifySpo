import React from "react";
import useAuth from "../../hooks/useAuth";

function Search() {
    const { handleAuthentication, getAuthToken } = useAuth();

    useEffect(() => {
        
    }, []);

    return <div>Search</div>;
}

export default Search;
