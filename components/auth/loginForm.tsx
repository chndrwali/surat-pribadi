'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormSuccess } from '@/components/ui/form-success';
import { FormError } from '@/components/ui/form-error';
import { login } from '@/actions/login';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { CheckCircle, CircleAlert, EyeIcon, EyeOffIcon, LoaderIcon } from 'lucide-react';

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    setError('');
    setSuccess('');
    startTransition(() => {
      login(values).then((data) => {
        if (data.error) {
          setError(data.error);
          toast.error('Ada yang salah!');
        } else if (data.success) {
          setSuccess(data.success);
          toast.success('Login berhasil');
        }
      });
    });
  };

  const validatePassword = (password: string) => ({
    hasLowerCase: /[a-z]/.test(password),
    hasUpperCase: /[A-Z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[@$!%*?&#]/.test(password),
    isMinLength: password.length >= 8,
  });

  const passwordStrength = validatePassword(password);

  const calculateStrength = () => {
    let strength = 0;
    if (passwordStrength.hasLowerCase) strength += 1;
    if (passwordStrength.hasUpperCase) strength += 1;
    if (passwordStrength.hasNumber) strength += 1;
    if (passwordStrength.hasSpecialChar) strength += 1;
    if (passwordStrength.isMinLength) strength += 1;
    return (strength / 5) * 100; // Convert to percentage
  };

  const progressBarColor = () => {
    const strength = calculateStrength();
    if (strength <= 40) return 'bg-red-500';
    if (strength <= 80) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Masukan email Anda" type="email" disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        placeholder="Masukkan password Anda"
                        type={passwordVisible ? 'text' : 'password'}
                        disabled={isPending}
                        onChange={(e) => {
                          field.onChange(e);
                          setPassword(e.target.value);
                        }}
                      />
                      <button type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none">
                        {passwordVisible ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-4">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className={`h-full ${progressBarColor()}`} style={{ width: `${calculateStrength()}%` }}></div>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium">Kriteria Password:</p>
              <ul className="text-sm space-y-1">
                <li className={`flex items-center gap-x-2 ${passwordStrength.hasLowerCase ? 'text-green-500' : 'text-red-500'}`}>
                  {passwordStrength.hasLowerCase ? <CheckCircle size={15} /> : <CircleAlert size={15} />}
                  Mengandung huruf kecil
                </li>
                <li className={`flex items-center gap-x-2 ${passwordStrength.hasUpperCase ? 'text-green-500' : 'text-red-500'}`}>
                  {passwordStrength.hasUpperCase ? <CheckCircle size={15} /> : <CircleAlert size={15} />}
                  Mengandung huruf besar
                </li>
                <li className={`flex items-center gap-x-2 ${passwordStrength.hasNumber ? 'text-green-500' : 'text-red-500'}`}>
                  {passwordStrength.hasNumber ? <CheckCircle size={15} /> : <CircleAlert size={15} />}
                  Mengandung angka (0-9)
                </li>
                <li className={`flex items-center gap-x-2 ${passwordStrength.hasSpecialChar ? 'text-green-500' : 'text-red-500'}`}>
                  {passwordStrength.hasSpecialChar ? <CheckCircle size={15} /> : <CircleAlert size={15} />}
                  Mengandung karakter khusus (@$!%*?&)
                </li>
                <li className={`flex items-center gap-x-2 ${passwordStrength.isMinLength ? 'text-green-500' : 'text-red-500'}`}>
                  {passwordStrength.isMinLength ? <CheckCircle size={15} /> : <CircleAlert size={15} />}
                  Minimal 8 karakter
                </li>
              </ul>
            </div>
          </div>
          <FormSuccess message={success} />
          <FormError message={error} />
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? (
              <>
                <LoaderIcon className="size-4 animate-spin" />
                Loading...
              </>
            ) : (
              'Masuk'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};
