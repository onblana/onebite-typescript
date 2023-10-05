/**
 * Template Literal Type
 * */

type Color = 'red' | 'black' | 'green';

type Animal = 'dog' | 'cat' | 'chicken';

// type ColoredAnimal = 'red-dog' | 'black-cat' | 'green-dog' | 'red-chicken';
type ColoredAnimal = `${Color}-${Animal}`;

const coloredAnimal: ColoredAnimal = 'black-dog'; // 자동완성이 뜬다
