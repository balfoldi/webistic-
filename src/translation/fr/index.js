import about from './about.json';
import works from './works.json';
import home from './home.json';

const en = {
    ...about, ...works, ...home //On concatène tous nos objets JSON en un seul
};

export default en;