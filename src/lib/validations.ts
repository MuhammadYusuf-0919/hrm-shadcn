import * as z from "zod";

export const IMG_MAX_LIMIT = 3;

export const usersSchema = z.object({
  imgUrl: z.string(),
  name: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  username: z.string(),
  role: z.enum(['user', 'manager']),
  position: z.enum(['Developer', 'Tester', 'Comtor', 'HR', 'BrSE']),
  gender: z.enum(['Male', 'Female']),
  brithday: z.date(),
  address: z.string(),
});

export type UsersFormTypes = z.infer<typeof usersSchema>;

export const projectsSchema = z.object({
  type: z.string(),
  name: z.string(),
  key: z.string(),
  customer: z.string(),
  description: z.string(),
  status: z.enum(['not-started', 'pending', 'processing']),
  priority: z.enum(['low', 'medium', 'high', 'urgen']),
  periodEnd: z.date(),
  periodStart: z.date(),
});

export type ProjectsFormTypes = z.infer<typeof projectsSchema>;

export const issuesSchema = z.object({
  type: z.string(),
  name: z.string(),
  key: z.string(),
  customer: z.string(),
  description: z.string(),
  status: z.enum(['not-started', 'pending', 'processing']),
  priority: z.enum(['low', 'medium', 'high', 'urgen']),
  periodEnd: z.date(),
  periodStart: z.date(),
});

export type IssuesFormTypes = z.infer<typeof issuesSchema>;
