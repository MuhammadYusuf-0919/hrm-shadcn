import React from 'react';
import { useForm } from 'react-hook-form';
import Iconify from '@/components/iconify';
import { Form } from '@/components/ui/form';
import { profileSchema } from '@/lib/schema';
import { Button } from '@/components/ui/button';
import ChangePassword from './components/password';
import BankingInfo from './components/banking-info';
import { zodResolver } from '@hookform/resolvers/zod';
import MainInfo from '@/modules/forms/profile/fields/main-info';
import AccountInfo from '@/modules/forms/profile/fields/account-info';
import ContractForm from '@/modules/forms/profile/fields/contract-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FormData } from '@/types';

const initialState: Partial<FormData> = {
  role: '',
  email: '',
  gender: '',
  imgUrl: '',
  address: '',
  fullName: '',
  username: '',
  password: '',
  position: '',
  birthday: '',
  phoneNumber: '',
};

function Profile() {
  const form = useForm<FormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: initialState,
  });
  const [loading, setLoading] = React.useState<boolean>(false);
  const {
    reset,
    handleSubmit,
    formState: { isDirty },
  } = form;

  const onSubmit = (formData: FormData) => {
    setLoading(true);
    try {
      console.log(formData);
      reset(initialState);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Tabs defaultValue="profile">
      <div className="flex items-center justify-between mb-4 lg:mb-8">
        <TabsList className="bg-card">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="contract">Contract</TabsTrigger>
          <TabsTrigger value="banking-info">Banking Info</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="profile" className="grid gap-6">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AccountInfo data={{ form, loading }} />
              <MainInfo data={{ form, loading }} />
            </div>
            <Button
              type="submit"
              disabled={!isDirty || loading}
              className={`w-full flex items-center !ml-auto md:w-36 m-0 cursor-${
                loading ? 'error' : 'disabled'
              }`}
            >
              {loading && (
                <Iconify
                  className="mr-4 mt-1"
                  icon="svg-spinners:3-dots-scale"
                />
              )}
              {loading ? 'Saving' : 'Update Profile'}
            </Button>
          </form>
        </Form>
      </TabsContent>
      <TabsContent value="password">
        <ChangePassword />
      </TabsContent>
      <TabsContent value="contract">
        <ContractForm />
      </TabsContent>
      <TabsContent value="banking-info">
        <BankingInfo />
      </TabsContent>
    </Tabs>
  );
}

export default Profile;
