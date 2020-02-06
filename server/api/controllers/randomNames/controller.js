import RandomNamesService from '../../services/randomNames.service';
export class Controller {
  
  
  random(req, res) {
    RandomNamesService
    .random(req.query.n)
    .then(r => res.json(r));
  }

  create(req, res) {
    RandomNamesService
      .create(req.body)
      .then(r => res
        .status(201)
        .location(`/api/v1/randomNames/${r.id}`)
        .json(r))
  } 
}
export default new Controller();