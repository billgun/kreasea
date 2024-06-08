'use server';
import { Invoice, Xendit } from 'xendit-node';
import {
  CreateInvoiceRequest,
  Invoice as InvoiceType,
} from 'xendit-node/invoice/models';

const xenditClient = new Xendit({
  secretKey: process.env.XENDIT_SECRET_KEY!,
});

const createInvoice = async () => {
  console.log('create invoice');
  const { Invoice } = xenditClient;

  const data: CreateInvoiceRequest = {
    amount: 10000,
    invoiceDuration: '172800',
    externalId: 'test1234',
    description: 'Test Invoice',
    currency: 'IDR',
    reminderTime: 1,
  };

  const response: InvoiceType = await Invoice.createInvoice({
    data,
  });

  return response;
};

export { createInvoice };
