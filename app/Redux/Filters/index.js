import { createBlacklistFilter } from 'redux-persist-transform-filter';

const taskListFilter = createBlacklistFilter('TaskList', ['fetchError']);

export const AllFilters = [taskListFilter];
