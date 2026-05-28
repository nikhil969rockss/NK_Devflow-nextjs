'use client';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import Image from 'next/image';
import { ROUTES } from '@/constants/route';
import { signIn } from 'next-auth/react';

const SocialAuthForm = () => {
  const handleSocialSignIn = async (provider: 'github' | 'google') => {
    try {
      // throw new Error('Not implemented');
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
      });
    } catch (error: unknown) {
      console.log(error);
      const message =
        error instanceof Error
          ? error.message
          : 'An error occurred during sign in';
      toast.error(message, {
        description: 'Please try again later',
        position: 'top-center',
        duration: 3000,
      });
    }
  };
  const buttonClassName =
    'background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5 cursor-pointer';

  return (
    <div className="mt-10 flex flex-wrap gap-2.5 ">
      <Button
        onClick={() => handleSocialSignIn('github')}
        className={buttonClassName}
      >
        <Image
          src={'icons/github.svg'}
          alt="github logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with GithHub</span>
      </Button>
      <Button className={buttonClassName}>
        <Image
          src={'icons/google.svg'}
          alt="google logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
