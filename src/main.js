import FilterView from './view/filter-view';
import { render } from './render';

const siteMainElement = document.querySelector('.page-header');
const siteHeaderElement = siteMainElement.querySelector('.trip-controls__filters');

render(new FilterView(), siteHeaderElement);
