import SocialLinksForm from './social-links-form';
import { getUserSocialLinks } from '@/lib/auth';

export default async function SocialLinksPage() {
  const userSocialLinks = await getUserSocialLinks();

  return <SocialLinksForm userSocialLinks={userSocialLinks} />;
}
