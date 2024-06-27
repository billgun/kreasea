'use server';
import { Xendit } from 'xendit-node';
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
  externalId: string;
};

const createInvoice = async ({
  amount,
  description,
  externalId,
}: InvoiceProps) => {
  const { Invoice } = xenditClient;

  const data: CreateInvoiceRequest = {
    amount: amount,
    invoiceDuration: '172800',
    externalId,
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
