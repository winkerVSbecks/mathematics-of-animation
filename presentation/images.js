import preloader from 'spectacle/lib/utils/preloader';

const images = {
  crop: require('../assets/iconmonstr-crop-10.svg'),
  ruler19: require('../assets/iconmonstr-ruler-19.svg'),
  ruler25: require('../assets/iconmonstr-ruler-25.svg'),
  ruler26: require('../assets/iconmonstr-ruler-26.svg'),
  ruler32: require('../assets/iconmonstr-ruler-32.svg'),
  parrot: require('../assets/parrots/hd/parrot.gif'),
  colouredSucculents: require('../assets/andrew-phillips-22549.jpg'),
  winkervsbecks: require('../assets/winkervsbecks.jpg'),
  gems: require('../assets/gems.png'),
  shadow: require('../assets/shadow.gif'),
  glossy: require('../assets/glossy.gif'),
  chrome: require('../assets/chrome.gif'),
  card: require('../assets/card.gif'),
  someWords: require('../assets/some-words.gif'),
  uber: require('../assets/uber.gif'),
};

preloader(images);

export default images;
