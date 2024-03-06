import { userStatus } from '@/data/status';
import { usersSchema } from '@/lib/schema';
import UserFields from '@/modules/forms/users/fields';
import { columns } from '@/modules/forms/users/columns';
import CrudTable from '@/modules/crud-module/crud-table';

function UserManager() {
  const entity = 'users';

  const initialState = {
    name: '',
    role: '',
    email: ' ',
    imgUrl: '',
    gender: '',
    address: '',
    position: '',
    brithday: '',
    username: '',
    phoneNumber: '',
  };

  const Labels = {
    PANEL_TITLE: 'User Panel',
    DATATABLE_TITLE: 'Users List',
    ADD_NEW_ENTITY: 'Add new user',
    ENTITY_NAME: 'user',
    CREATE_ENTITY: 'Create user',
    UPDATE_ENTITY: 'Update user',

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
    statusData: userStatus,
    formFields: UserFields,
    formSchema: usersSchema,
  };
  return <CrudTable config={config} />;
}

export default UserManager;
