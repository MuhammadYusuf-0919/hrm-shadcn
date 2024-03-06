import { absenceStatus } from '@/data/status';
import { absenceSchema } from '@/lib/schema';
import CrudTable from '@/modules/crud-module/crud-table';
import { columns } from '@/modules/forms/absences/columns';
import AbsenceFields from '@/modules/forms/absences/fields';

function DayOff() {
  const entity = 'absences';

  const initialState = {
    note: '',
    offDay: '',
    inForm: '',
    reason: '',
    approver: '',
    requester: '',
    sessionOff: '',
    dayOffType: '',
  };

  const Labels = {
    PANEL_TITLE: 'Absences Panel',
    DATATABLE_TITLE: 'Absences List',
    ADD_NEW_ENTITY: 'Add new absence',
    ENTITY_NAME: 'absence',
    CREATE_ENTITY: 'Create absence',
    UPDATE_ENTITY: 'Update absence',

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
    formFields: AbsenceFields,
    statusData: absenceStatus,
    formSchema: absenceSchema,
  };
  return <CrudTable config={config} />;
}

export default DayOff;
