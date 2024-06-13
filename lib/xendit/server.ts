'use server';
import { Invoice, Xendit } from 'xendit-node';
import {
  CreateInvoiceRequest,
  Invoice as InvoiceType,
} from 'xendit-node/invoice/models';

const xenditClient = new Xendit({
  secretKey: process.env.XENDIT_SECRET_KEY!,
});

type InvoiceProps = {
  amount: number;
  description: string;
};

const createInvoice = async ({ amount, description }: InvoiceProps) => {
  const { Invoice } = xenditClient;

  const data: CreateInvoiceRequest = {
    amount: amount,
    invoiceDuration: '172800',
    externalId: 'test1234',
    description: description,
    currency: 'IDR',
    reminderTime: 1,
  };

  const response: InvoiceType = await Invoice.createInvoice({
    data,
  });

  return response;
};

export { createInvoice };
