import CrudTable from '@/modules/crud-module/crud-table';
import { projectsSchema } from '@/lib/validations';
import { columns } from '@/modules/forms/projects/columns';
import ProjectFields from '@/modules/forms/projects/fields';

export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

function ProjectManager() {
  const entity = 'projects';
  const endpoint = 'projects';

  const searchConfig = {
    displayLabels: ['name', 'surname'],
    searchFields: 'email,name,surname',
    outputValue: '_id',
  };

  const PANEL_TITLE = 'Project Panel';
  const dataTableTitle = 'Project Lists';
  const entityDisplayLabels = ['email'];

  const ADD_NEW_ENTITY = 'Add new project';
  const DATATABLE_TITLE = 'Projects List';
  const ENTITY_NAME = 'project';
  const CREATE_ENTITY = 'Create project';
  const UPDATE_ENTITY = 'Update project';

  const initialState = {
    key: '',
    type: '',
    name: '',
    status: '',
    customer: '',
    priority: '',
    periodEnd: '',
    periodStart: '',
    description: '',
  }

  const config = {
    entity,
    columns,
    endpoint,
    PANEL_TITLE,
    ENTITY_NAME,
    initialState,
    searchConfig,
    CREATE_ENTITY,
    UPDATE_ENTITY,
    ADD_NEW_ENTITY,
    dataTableTitle,
    DATATABLE_TITLE,
    entityDisplayLabels,
    formFields: ProjectFields,
    formSchema: projectsSchema,
  };
  return <CrudTable config={config} />
}

export default ProjectManager;
