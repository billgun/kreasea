import { createClient } from '@/lib/supabase/server';
import { Tables } from '@/types/database';
import { NextResponse } from 'next/server';
import { InvoiceCallback } from 'xendit-node/invoice/models';

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const callbackToken = request.headers.get('x-callback-token');
  const code = requestUrl.searchParams.get('code');

  if (callbackToken !== process.env.XENDIT_WEBHOOK_KEY) {
    throw new Error('Invalid callback token');
  }

  const payload = (await request.json()) as InvoiceCallback;

  const transaction: Partial<Tables<'user_transaction'>> = {
    id: payload.externalId,
    amount: payload.amount,
    paid_at: new Date().toString(),
    updated_at: new Date().toString(),
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
