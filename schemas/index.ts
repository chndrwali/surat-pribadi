import * as z from 'zod';

function extractTextFromHTML(html: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  return doc.body.textContent?.trim() || '';
}

export const loginSchema = z.object({
  email: z.string().email({
    message: 'Email harus diisi dengan format yang valid.',
  }),
  password: z
    .string()
    .min(8, 'Password harus memiliki minimal 8 karakter')
    .regex(/[a-z]/, 'Harus mengandung huruf kecil')
    .regex(/[A-Z]/, 'Harus mengandung huruf besar')
    .regex(/[0-9]/, 'Harus mengandung angka')
    .regex(/[@$!%*?&#]/, 'Harus mengandung karakter khusus'),
});

export const newPasswordSchema = z.object({
  password: z.string().min(1, {
    message: 'Password wajib diisi.',
  }),
  newPassword: z.string().min(1, {
    message: 'Password baru harus diisi',
  }),
});

export const registerSchema = z.object({
  email: z.string().email({
    message: 'Email harus diisi dengan format yang valid.',
  }),
  password: z
    .string()
    .min(8, 'Password harus memiliki minimal 8 karakter')
    .regex(/[a-z]/, 'Harus mengandung huruf kecil')
    .regex(/[A-Z]/, 'Harus mengandung huruf besar')
    .regex(/[0-9]/, 'Harus mengandung angka')
    .regex(/[@$!%*?&#]/, 'Harus mengandung karakter khusus'),
  name: z.string().min(1, {
    message: 'Nama harus diisi',
  }),
});

export const updateUserSchema = z.object({
  email: z.string().email({
    message: 'Email harus diisi dengan format yang valid.',
  }),
  image: z.string().min(1, {
    message: 'Password wajib diisi.',
  }),
  name: z.string().min(1, {
    message: 'Nama harus diisi',
  }),
});

export const practiceSchema = z.object({
  name: z.string().min(1, 'Nama harus diisi'),
  classes: z.string().min(1, 'Kelas harus diisi'),
});
