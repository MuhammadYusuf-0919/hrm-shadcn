import { tasksSchema } from '@/lib/schema';
import TasksFields from '@/modules/forms/tasks/fields';
import { columns } from '@/modules/forms/tasks/columns';
import CrudTable from '@/modules/crud-module/crud-table';

function TaskManager() {
  const entity = 'tasks';
  const Labels = {
    PANEL_TITLE: 'Task Panel',
    DATATABLE_TITLE: 'Tasks List',
    ADD_NEW_ENTITY: 'Add new task',
    ENTITY_NAME: 'task',
    CREATE_ENTITY: 'Create task',
    UPDATE_ENTITY: 'Update task',

    RECORD_ENTITY: 'record_user',
  };

  const configPage = {
    entity,
    ...Labels,
  };

  const config = {
    columns,
    ...configPage,
    formFields: TasksFields,
    formSchema: tasksSchema,
  };
  return <CrudTable config={config} />
}

export default TaskManager;
