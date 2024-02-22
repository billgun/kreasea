'use server';

import { stripe } from '@/config/stripe';
import Stripe from 'stripe';

export async function account() {
  console.log('account');
  //  TODO: Check if user has stripe_account_id else go next
  const account: Stripe.Account = await stripe.accounts.create({
    type: 'standard',
    email: 'email@.com',
    country: 'SG',
    business_type: 'individual',
    individual: {
      email: 'email@.com',
    },
  });
  return account;
}

export async function accountLinks({ accountId }: { accountId: string }) {
  const accountLink: Stripe.AccountLink = await stripe.accountLinks.create({
    account: accountId,
    refresh_url: 'http://localhost:3000/',
    return_url: 'http://localhost:3000/',
    type: 'account_onboarding',
  });
}
