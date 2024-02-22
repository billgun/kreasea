import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { stripe } from '@/config/stripe';
import Stripe from 'stripe';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data } = await supabase.auth.getUser();

  if (true) {
    const account: Stripe.Account = await stripe.accounts.create({
      type: 'standard',
      email: 'privatebill@gmail.com',
      country: 'SG',
      business_type: 'individual',
      individual: {
        email: 'privatebill@gmail.com',
      },
    });

    console.log(account.id);

    const accountLink: Stripe.AccountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: 'http://localhost:3000/account/stripe/connect',
      return_url: 'http://localhost:3000/',
      type: 'account_onboarding',
    });
  }

  return NextResponse.redirect(requestUrl.origin);
}
