import { absenceSchema } from '@/lib/schema';
import CrudTable from '@/modules/crud-module/crud-table';
import { columns } from '@/modules/forms/absences/columns';
import AbsenceFields from '@/modules/forms/absences/fields';

function AbsenceForm() {
  const entity = 'absences';

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
    PANEL_TITLE: 'Absence Panel',
    DATATABLE_TITLE: 'Absences List',
    ADD_NEW_ENTITY: 'Add new absence',
    ENTITY_NAME: 'absence',
    CREATE_ENTITY: 'Create absence',
    UPDATE_ENTITY: 'Update absence',

    RECORD_ENTITY: 'record_absence',
  };

  const configPage = {
    entity,
    ...Labels,
  };

  const config = {
    columns,
    initialState,
    ...configPage,
    formFields: AbsenceFields,
    formSchema: absenceSchema,
  };
  
  return <CrudTable config={config} />;
}

export default AbsenceForm;
