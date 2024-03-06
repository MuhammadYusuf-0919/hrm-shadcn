import { issuesSchema } from '@/lib/schema';
import IssueFields from '@/modules/forms/issues/fields';
import CrudTable from '@/modules/crud-module/crud-table';
import { columns } from '@/modules/forms/issues/columns';

function IssueManager() {
  const entity = 'issues';

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
  const Labels = {
    PANEL_TITLE: 'Issue Panel',
    DATATABLE_TITLE: 'Issues List',
    ADD_NEW_ENTITY: 'Add new issue',
    ENTITY_NAME: 'issue',
    CREATE_ENTITY: 'Create issue',
    UPDATE_ENTITY: 'Update issue',

    RECORD_ENTITY: 'record_issue',
  };

  const configPage = {
    entity,
    ...Labels,
  };

  const config = {
    columns,
    initialState,
    ...configPage,
    formFields: IssueFields,
    formSchema: issuesSchema,
  };
  return <CrudTable config={config} />
}

export default IssueManager;
