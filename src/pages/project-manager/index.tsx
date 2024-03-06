import { projectStatus } from '@/data/status';
import { projectsSchema } from '@/lib/schema';
import CrudTable from '@/modules/crud-module/crud-table';
import { columns } from '@/modules/forms/projects/columns';
import ProjectFields from '@/modules/forms/projects/fields';

function ProjectManager() {
  const entity = 'projects';

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
  };

  const Labels = {
    PANEL_TITLE: 'Project Panel',
    DATATABLE_TITLE: 'Projects List',
    ADD_NEW_ENTITY: 'Add new project',
    ENTITY_NAME: 'project',
    CREATE_ENTITY: 'Create project',
    UPDATE_ENTITY: 'Update project',

    RECORD_ENTITY: 'record_user',
  };

  const configPage = {
    entity,
    ...Labels,
  };

  const config = {
    columns,
    initialState,
    ...configPage,
    formFields: ProjectFields,
    statusData: projectStatus,
    formSchema: projectsSchema,
  };
  return <CrudTable config={config} />;
}

export default ProjectManager;
