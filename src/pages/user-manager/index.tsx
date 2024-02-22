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

function UserManager() {
  const entity = 'users';
  const endpoint = 'users';

  const searchConfig = {
    displayLabels: ['name', 'surname'],
    searchFields: 'email,name,surname',
    outputValue: '_id',
  };

  const PANEL_TITLE = 'User Panel';
  const dataTableTitle = 'User Lists';
  const entityDisplayLabels = ['email'];

  const ADD_NEW_ENTITY = 'Add new user';
  const DATATABLE_TITLE = 'Users List';
  const ENTITY_NAME = 'user';
  const CREATE_ENTITY = 'Create user';
  const UPDATE_ENTITY = 'Update user';

  const initialState = {
    name: '',
    role: '',
    email:' ',
    imgUrl: '',
    gender: '',
    address: '',
    position: '',
    brithday: '',
    username: '',
    phoneNumber: '',
  }

  const config = {
    entity,
    columns,
    endpoint,
    PANEL_TITLE,
    ENTITY_NAME,
    searchConfig,
    initialState,
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

export default UserManager;
