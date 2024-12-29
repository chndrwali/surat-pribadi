'use client';

import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { practiceSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { useTransition } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export const FormStart = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof practiceSchema>>({
    resolver: zodResolver(practiceSchema),
    defaultValues: {
      name: '',
      classes: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof practiceSchema>) => {
    console.log(values);
    startTransition(() => {
      axios
        .post(`/api/practice`, values)
        .then(() => {
          toast.success('Nama berhasil di input');
          router.push('/practice/activity-one');
        })
        .catch((error) => {
          toast.error('Gagal input');
          console.log(error);
        });
    });
  };

  return (
    <Form {...form}>
      <form className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-white rounded-lg mt-[350px] sm:mt-2 p-4 max-w-[200px] sm:max-w-none">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormLabel>Nama</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="" disabled={isPending} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="classes"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormLabel>Kelas</FormLabel>
                <FormControl>
                  <Input {...field} type="number" placeholder="" disabled={isPending} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <button onClick={form.handleSubmit(onSubmit)} disabled={isPending} className="mt-4 transform transition-transform duration-300 hover:scale-110">
          <Image src="/bg/button-practice.png" alt="" width={100} height={100} />
        </button>
      </form>
    </Form>
  );
};
