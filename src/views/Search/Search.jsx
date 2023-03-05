import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { SectionSearch, Title } from './Search.styled';
import useRequest from '../../hooks/useRequest';

function Search() {
    const { querySearch } = useParams();
    const [searchResults, setSearchResults] = useState({});
    const cancelSource = axios.CancelToken.source();
    const accessToken = localStorage.getItem('access_token');
    const { getWithToken } = useRequest();

    useEffect(() => {
        const makeRequest = async () => {
            console.log(
                `https://api.spotify.com/v1/search?q=${querySearch}&type=album,track,artist`
            );
            const searchItems = getWithToken(
                `https://api.spotify.com/v1/search?q=${querySearch}&type=album,track,artist`,
                accessToken,
                cancelSource
            );
            if (querySearch.length > 1) {
                try {
                    const searchedItems = await searchItems();

                    if (typeof searchedItems !== 'undefined') {
                        console.log(searchedItems);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        };

        makeRequest();
    }, [querySearch]);

    return (
        <>
            <SectionSearch>
                <Title>
                    <h2>Explorar todo</h2>
                </Title>
            </SectionSearch>
        </>
    );
}

export default Search;
