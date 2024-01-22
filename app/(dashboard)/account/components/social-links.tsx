import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import SocialLinksForm from './social-links-form';
import { getUserSocialLinks } from '@/lib/auth';

export default async function SocialLinksPage() {
  const userSocialLinks = await getUserSocialLinks();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Links</CardTitle>
        <CardDescription>
          Add your social accounts to display them on your public profile.
        </CardDescription>
      </CardHeader>
      <SocialLinksForm userSocialLinks={userSocialLinks} />
    </Card>
  );
}
