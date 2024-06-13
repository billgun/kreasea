import PasswordChangeForm from './_components/password-change-form';
import ChangeUsernameForm from './_components/username-change-form';

export default function SettingsPage() {
  return (
    <div className='container grid grid-cols-3 py-6'>
      <div className='col-span-3 w-full space-y-4 lg:col-span-2'>
        <ChangeUsernameForm />
        <PasswordChangeForm />
      </div>
    </div>
  );
}
