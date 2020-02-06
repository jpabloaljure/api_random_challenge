import l from '../../common/logger';

let id = 0;
var randomNames = [
    { id: id++, name: 'random 1' }, 
    { id: id++, name: 'random 2' }
];

export class RandomNamesService {

  
  random(n){
    l.info(`${this.constructor.name}.random(${n})`);
    
    const shuffled = randomNames.slice().sort(() => 0.5 - Math.random());
    var randomElements = n == undefined ? randomNames :
                         n == 0 ? shuffled : 
                       shuffled.slice(0, n) ;
    return Promise.resolve(randomElements);
  }

  create(names) {
    id = 0;
    randomNames = names.map(x =>
    { 
      return {
        id: id++,
        name: x
      }
    });

    l.info(`${this.constructor.name}.create(${names})`);
    
    return Promise.resolve(randomNames);
  }
}

export default new RandomNamesService();