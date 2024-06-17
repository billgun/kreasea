'use client';
import { Button } from '@/components/ui/button';
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from '@/components/ui/credenza';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { createInvoice } from '@/lib/xendit/server';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useRouter } from 'next/navigation';

const donateFormSchema = z.object({
  amount: z.number().min(10000, {
    message: 'Amount must be at least 10000.',
  }),
  message: z.string().optional(),
});

type DonateFormValues = z.infer<typeof donateFormSchema>;

const defaultValues: Partial<DonateFormValues> = {
  amount: 10000,
  message: '',
};

interface DonateButtonProps {}
export default function DonateButton({}: DonateButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<DonateFormValues>({
    resolver: zodResolver(donateFormSchema),
    defaultValues,
  });

  async function onSubmit(formData: DonateFormValues) {
    console.log('onSubmit');
    setIsLoading(true);

    console.log(formData);

    const { invoiceUrl } = await createInvoice({
      amount: formData.amount,
      description: formData.message || 'Donate to Baskoro',
    });

    console.log(invoiceUrl);
    router.push(invoiceUrl);
    setIsLoading(false);
    // if (error) {
    //   console.log(error.message);
    //   form.setError('root', { message: error.message });
    //   throw new Error('Could not authenticate user');
    // }
    // router.push('/');
    // router.refresh();
  }
  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Button>Donate</Button>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>Kasih jajan buat Baskoro</CredenzaTitle>
        </CredenzaHeader>
        <Form {...form}>
          <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
            <CredenzaBody>
              <FormField
                control={form.control}
                name='amount'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input type='number' {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CredenzaBody>
            <CredenzaFooter>
              <Button type='submit' disabled={isLoading}>
                Confirm
              </Button>
              <CredenzaClose asChild>
                <Button>Close</Button>
              </CredenzaClose>
            </CredenzaFooter>
          </form>
        </Form>
      </CredenzaContent>
    </Credenza>
  );
}
