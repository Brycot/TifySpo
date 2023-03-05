export const getTimePlayer = (num) => {
    const segundos = Math.floor((num / 1000) % 60);
    const minutos = Math.floor((num / (1000 * 60)) % 60);
    const tiempo = `${minutos.toString().padStart(2, '0')}:${segundos
        .toString()
        .padStart(2, '0')}`;
    return tiempo;
};
