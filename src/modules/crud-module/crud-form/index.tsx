import { toast } from 'sonner';
import { FormData } from '@/types';
import { RootState } from '@/redux';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Iconify from '@/components/iconify';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Navigate, useNavigate } from 'react-router-dom';
import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useAddEntityMutation, useUpdateEntityMutation } from '@/redux/crud';

function CrudForm() {
  const {
    create,
    entity,
    update,
    formSchema,
    initialState,
    ADD_NEW_ENTITY,
    formFields: FormElements,
  } = useSelector((state: RootState) => state.config);
  const navigate = useNavigate();
  const formMethods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: initialState,
  });

  const {
    reset,
    handleSubmit,
    formState: { isDirty },
  } = formMethods;

  // Add new entity
  const [addEntity, { isLoading: isAdding }] = useAddEntityMutation();

  // Update existing entity
  const [updateEntity, { isLoading: isUpdating }] = useUpdateEntityMutation();
  const loading = create ? isAdding : isUpdating;

  const onSubmit = async (formData: FormData) => {
    try {
      const mutationPromise = create
        ? addEntity({ entity, data: formData })
        : updateEntity({ entity, id: initialState.id, data: formData });

      await Promise.all([
        toast.promise(mutationPromise, {
          loading: create ? 'Adding item...' : 'Updating item...',
          success: `Item ${create ? 'added' : 'updated'} successfully`,
          error: `Failed to ${create ? 'add' : 'update'} item`,
        }),
        mutationPromise
          .then(() => reset(initialState))
          .then(() => navigate(-1)),
      ]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onError = (errors: any) => {
    console.log(errors);
  };

  if (!entity && !create && !update) {
    return <Navigate to="/" />;
  }

  return (
    <Form {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Card className="h-[80vh] relative">
          <CardHeader>{ADD_NEW_ENTITY}</CardHeader>
          <ScrollArea className="w-full h-[54vh] border md:h-[60vh]">
            <FormElements data={{ form: formMethods, loading }} />
            <ScrollBar orientation="vertical" />
          </ScrollArea>
          <CardFooter className="flex justify-end pt-4 px-8 mb-4">
            <Button
              type="submit"
              disabled={!isDirty || loading}
              className={`w-full flex items-center md:w-36 m-0 cursor-${
                loading ? 'error' : 'disabled'
              }`}
            >
              {loading && (
                <Iconify
                  className="mr-4 mt-1"
                  icon="svg-spinners:3-dots-scale"
                />
              )}
              {loading ? 'Saving' : 'Save'}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}

export default CrudForm;
