'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Controller,
  DefaultValues,
  FieldValues,
  Path,
  Resolver,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { z } from 'zod';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ROUTES } from '@/constants/route';

interface AuthFormProps<T extends FieldValues> {
  schema: z.ZodType<T, FieldValues>;
  defaultValues: DefaultValues<T>;
  onSubmit: (data: T) => Promise<{ success: boolean }>;
  formType: 'SIGN_IN' | 'SIGN_UP';
}

const AuthForm = <T extends FieldValues>({
  formType,
  schema,
  defaultValues,
  onSubmit,
}: AuthFormProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<T>({
    resolver: zodResolver(schema) as Resolver<T>,
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async () => {
    //TODO
  };

  const buttonText = formType === 'SIGN_IN' ? 'Sign In' : 'Sign Up';

  return (
    <form
      className="mt-10 space-y-6"
      id="form-rhf-demo"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      {Object.keys(defaultValues).map((field) => (
        <FieldGroup key={field}>
          <Controller
            name={field as Path<T>}
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                className="flex flex-col w-full gap-2.5"
                data-invalid={fieldState.invalid}
              >
                <FieldLabel
                  className="paragraph-medium text-dark400_light700"
                  htmlFor="form-rhf-demo-title"
                >
                  {field.name === 'email'
                    ? 'Email Address'
                    : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                </FieldLabel>
                <div className="relative">
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    type={
                      field.name === 'password' && !showPassword
                        ? 'password'
                        : 'text'
                    }
                    autoComplete="off"
                    className={cn(
                      'paragraph-regular background-light900_dark300 light-border-2 no-focus text-dark300_light700 min-h-12 rounded-1.5 border',
                      field.name === 'password' && 'pr-9'
                    )}
                  />
                  {field.name === 'password' && (
                    <span
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </span>
                  )}
                </div>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
      ))}
      <Button
        disabled={form.formState.isSubmitting}
        className="w-full primary-gradient paragraph-medium min-h-12 rounded-2 px-4 py-3 font-inter cursor-pointer text-light-900! flex-center"
      >
        {form.formState.isSubmitting ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          buttonText
        )}
      </Button>
      {formType === 'SIGN_IN' ? (
        <p>
          {"Don't"} have an account?{' '}
          <Link
            className="paragraph-semibold primary-text-gradient"
            href={ROUTES.SIGN_UP}
          >
            Sign up
          </Link>
        </p>
      ) : (
        <p>
          Already have an account?{' '}
          <Link
            className="paragraph-semibold primary-text-gradient"
            href={ROUTES.SIGN_IN}
          >
            Sign in
          </Link>
        </p>
      )}
    </form>
  );
};

export default AuthForm;
