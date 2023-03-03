function useHashParams() {
    const hashParams = {};
    const urlParams = new URLSearchParams(window.location.search);
    hashParams.code = urlParams.get('code');
    hashParams.state = urlParams.get('state');

    return hashParams;
}

export { useHashParams };
