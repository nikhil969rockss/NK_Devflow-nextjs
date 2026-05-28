import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/route';
import { auth, signOut } from '@/lib/auth';

export default async function Home() {
  const authSession = await auth();
  console.log(authSession);
  return (
    <div>
      <h1 className="font-inter">Welcome to next js</h1>
      <h1 className="font-space-grotesk">Welcome to next js</h1>
      <form
        className="mt-10"
        action={async () => {
          'use server';
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
    </div>
  );
}
