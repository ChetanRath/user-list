import { HandleDelete } from './types';

const tableData = (handleDelete: HandleDelete) => [
  {
    label: 'Name',
    id: 'name',
    type: 'text',
  },
  {
    label: 'Email',
    id: 'email',
    type: 'text',
  },
  {
    label: 'Phone Number',
    id: 'phone',
    type: 'number',
  },
  {
    label: 'Delete',
    id: 'delete',
    type: 'button',
    onAction: handleDelete,
  },
];

export default tableData;
