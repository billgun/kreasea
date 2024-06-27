import { createClient } from '@/lib/supabase/server';
import { Json, Tables } from '@/types/database';
import { NextResponse } from 'next/server';
import { InvoiceCallback, InvoiceFee } from 'xendit-node/invoice/models';

function calculateTotalFee(fees?: Array<InvoiceFee>): number {
  if (!fees) {
    return 0;
  }
  return fees.reduce((total, fee) => total + fee.value, 0);
}

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const callbackToken = request.headers.get('x-callback-token');
  const code = requestUrl.searchParams.get('code');

  if (callbackToken !== process.env.XENDIT_WEBHOOK_KEY) {
    throw new Error('Invalid callback token');
  }

  const payload = (await request.json()) as InvoiceCallback;

  const totalFee = calculateTotalFee(payload.fees);

  const transaction: Partial<Tables<'user_transaction'>> = {
    id: payload.externalId,
    invoice_id: payload.id,
    amount: payload.amount,
    paid_amount: payload.paidAmount,
    fees: payload.fees as Json[] | undefined,
    adjusted_received_amount: payload.amount - totalFee,
    paid_at: payload.paidAt,
    payer_email: payload.payerEmail,
    updated_at: payload.updated,
    currency: payload.currency,
    status: payload.status,
    payment_method: payload.paymentMethod,
    payment_channel: payload.paymentChannel,
  };
  const supabase = createClient();

  const { error } = await supabase.from('user_transaction').update(transaction);

  if (error) {
    throw error;
  }
  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin);
}
