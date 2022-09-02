import BoardView from '../view/board-view.js';
import SortView from '../view/sort-view.js';
import ListView from '../view/list-view.js';
import NewPointView from '../view/create-point-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/edit-point-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  boardComponent = new BoardView();
  pointListComponent = new ListView();

  init = (boardContainer, pointsModel) => {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
    this.boardPoints = [...this.pointsModel.getPoints()];

    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(this.pointListComponent, this.boardComponent.getElement());
    render(new PointEditView(), this.pointListComponent.getElement());

    for (let i = 0; i < this.boardPoints.length; i++) {
      render(new PointView(this.boardPoints[i]), this.pointListComponent.getElement());
    }

    render(new NewPointView(), this.boardComponent.getElement());
  };
}
