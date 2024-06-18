import React from 'react';

const useMedia = (media: string) => {
  const [match, setMatch] = React.useState<boolean>(false);

  /*  aqui significa que o hook useEffect está sendo usado fora de um componente
   o que ta acontecendo aqui na funcao changeMatch é que ele
   ta pegando o valor do media query e setando no estado match */
  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;
