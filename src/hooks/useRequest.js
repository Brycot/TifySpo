import axios from 'axios'



function useRequest() {

    function getWithToken(endpoint, access_token, cancelSource) {
        async function request() {
            let result;
            const cancelToken = cancelSource.token;
    
            const options = {
                url: endpoint,
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + access_token },
                cancelToken
            };
            try {
                result = await axios(options);
            } catch (err) {
                if (axios.isCancel(err)) return
                return err;
            }
            return result
        }
    
        return request;
    }

    function reqWithToken(endpoint, access_token) {
        let source = axios.CancelToken.source();
    
        const request = async () => {
            let result
            const options = {
                url: endpoint,
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + access_token },
                cancelToken: source.token
            };
            try {
                result = await axios(options);
            } catch (error) {
                if (axios.isCancel(error)) return;
                return error;
            }
            return result;
        }
    
        return request;
    }

    const updateWithToken = (enpoint, token, data) => {
        let source = axios.CancelToken.source();
    
        const request = async () => {
            let result
            const options = {
                url: enpoint,
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                data,
                cancelToken: source.token
            };
            try {
                result = await axios(options);
            } catch (error) {
                if (axios.isCancel(error)) return
                return error;
            }
            return result;
        }
    
        return request;
    };

  return {
    getWithToken,
    reqWithToken,
    updateWithToken
  }
}

export default useRequest