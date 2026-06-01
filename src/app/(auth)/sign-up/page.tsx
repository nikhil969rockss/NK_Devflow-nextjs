'use client';
import AuthForm from '@/components/forms/AuthForm';
import { signUpSchema } from '@/lib/validations';

const SignupPage = () => {
  return (
    <AuthForm
      formType={'SIGN_UP'}
      schema={signUpSchema}
      defaultValues={{ name: '', username: '', email: '', password: '' }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignupPage;
