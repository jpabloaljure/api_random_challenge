import ExamplesService from '../../services/examples.service';
export class Controller {
  all(req, res) {
    ExamplesService
    .all()
    .then(r => res.json(r));
  }

  create(req, res) {
    ExamplesService
      .create(req.body.name)
      .then(r => res
        .status(201)
        .location(`/api/v1/examples/${r.id}`)
        .json(r))
  } 
}
export default new Controller();