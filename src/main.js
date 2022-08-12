import FilterView from './view/filter-view.js';
import { render } from './render.js';
import BoardPresenter from './presenter/presenter.js';

const boardLocation = document.querySelector('.trip-events');
const headerElement = document.querySelector('.page-header');
const siteHeaderElement = headerElement.querySelector('.trip-controls__filters');
const boardPresenter = new BoardPresenter();

render(new FilterView(), siteHeaderElement);

boardPresenter.init(boardLocation);
