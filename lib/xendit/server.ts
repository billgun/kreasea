import { Xendit } from 'xendit-node';

const xenditClient = new Xendit({
  secretKey: process.env.XENDIT_SECRET_KEY!,
});

export { xenditClient };
