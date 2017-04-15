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
};

preloader(images);

export default images;
