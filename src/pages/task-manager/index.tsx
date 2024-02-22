import CrudTable from '@/modules/crud-module/crud-table';
import { usersSchema } from '@/lib/validations';
import UserFields from '@/modules/forms/users/fields';
import { columns } from '@/modules/forms/users/columns';

export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

function TaskManager() {
  const entity = 'tasks';
  const endpoint = 'tasks';

  const searchConfig = {
    displayLabels: ['name', 'surname'],
    searchFields: 'email,name,surname',
    outputValue: '_id',
  };

  const PANEL_TITLE = 'Task Panel';
  const dataTableTitle = 'Task Lists';
  const entityDisplayLabels = ['email'];

  const ADD_NEW_ENTITY = 'Add new task';
  const DATATABLE_TITLE = 'Tasks List';
  const ENTITY_NAME = 'task';
  const CREATE_ENTITY = 'Create task';
  const UPDATE_ENTITY = 'Update task';

  const config = {
    entity,
    columns,
    endpoint,
    PANEL_TITLE,
    ENTITY_NAME,
    searchConfig,
    CREATE_ENTITY,
    UPDATE_ENTITY,
    ADD_NEW_ENTITY,
    dataTableTitle,
    DATATABLE_TITLE,
    entityDisplayLabels,
    formFields: UserFields,
    formSchema: usersSchema,
  };
  return <CrudTable config={config} />
}

export default TaskManager;
