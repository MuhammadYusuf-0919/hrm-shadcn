import { issuesSchema } from '@/lib/validations';
import IssueFields from '@/modules/forms/issues/fields';
import CrudTable from '@/modules/crud-module/crud-table';
import { columns } from '@/modules/forms/issues/columns';

export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

function IssueManager() {
  const entity = 'issues';
  const endpoint = 'issues';

  const searchConfig = {
    displayLabels: ['name', 'surname'],
    searchFields: 'email,name,surname',
    outputValue: '_id',
  };

  const PANEL_TITLE = 'Issue Panel';
  const dataTableTitle = 'Issue Lists';
  const entityDisplayLabels = ['email'];

  const ADD_NEW_ENTITY = 'Add new issue';
  const DATATABLE_TITLE = 'Issues List';
  const ENTITY_NAME = 'issue';
  const CREATE_ENTITY = 'Create issue';
  const UPDATE_ENTITY = 'Update issue';

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
    formFields: IssueFields,
    formSchema: issuesSchema,
  };
  return <CrudTable config={config} />
}

export default IssueManager;
