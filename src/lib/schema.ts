// schemas.ts
import * as z from 'zod';
import { EMAIL_REGEX, PHONE_REGEX, PWD_REGEX, USER_REGEX } from '@/utils/regexs';

// constants.ts
export const IMG_MAX_LIMIT = 3;
export const MIN_MAX_MESSAGE = 'Length must be between 3 and 255 characters';
export const END_DATE_AFTER_START_DATE_MESSAGE = 'End date must be after the start date';

// Helper function to check if a date is valid
function isValidDate(date: any): boolean {
  return date instanceof Date && !isNaN(date.getTime());
}

const commonStringSchema = z.string().min(3).max(255, { message: MIN_MAX_MESSAGE });

export const usersSchema = z.object({
  address: commonStringSchema,
  fullName: commonStringSchema,
  role: z.enum(['user', 'manager']),
  gender: z.enum(['male', 'female']),
  imgUrl: commonStringSchema.nonempty(),
  username: commonStringSchema.regex(USER_REGEX),
  phoneNumber: commonStringSchema.regex(PHONE_REGEX),
  email: commonStringSchema.email().regex(EMAIL_REGEX),
  position: z.enum(['developer', 'tester', 'comtor', 'hr', 'brse']),
  birthday: z.date().refine(data => isValidDate(data), { message: 'Please provide a valid birthday' }),
});

export const profileSchema = z.object({
  address: commonStringSchema,
  fullName: commonStringSchema,
  role: z.enum(['user', 'manager']),
  gender: z.enum(['male', 'female']),
  imgUrl: commonStringSchema.nonempty(),
  username: commonStringSchema.regex(USER_REGEX),
  password: commonStringSchema.regex(PWD_REGEX),
  phoneNumber: commonStringSchema.regex(PHONE_REGEX),
  email: commonStringSchema.email().regex(EMAIL_REGEX),
  position: z.enum(['developer', 'tester', 'comtor', 'hr', 'brse']),
  birthday: z.date().refine(data => isValidDate(data), { message: 'Please provide a valid birthday' }),
});

const commonProjectSchema = z.object({
  periodStart: z.date(),
  key: commonStringSchema,
  projectName: commonStringSchema,
  customer: commonStringSchema,
  projectType: z.enum(['company', 'project']),
  priority: z.enum(['low', 'medium', 'high', 'urgent']),
  status: z.enum(['not started', 'in progress', 'processing', 'done', 'cancelled']),
  description: z.string().min(3).max(500, { message: MIN_MAX_MESSAGE }),
  periodEnd: z.date().refine((data) => data > new Date(), { message: END_DATE_AFTER_START_DATE_MESSAGE }),
});

const commonTaskSchema = z.object({
  startDate: z.date(),
  actualStartDate: z.date(),
  effort: commonStringSchema,
  subTask: commonStringSchema,
  workType: commonStringSchema,
  assignor: commonStringSchema,
  assignee: commonStringSchema,
  taskName: commonStringSchema,
  description: z.string().min(3).max(500, { message: MIN_MAX_MESSAGE }),
  status: z.enum(['not started', 'pending', 'processing']),
  category: z.enum(['low', 'medium', 'high', 'urgent']),
  dueDate: z.date().refine((data) => data > new Date(), { message: END_DATE_AFTER_START_DATE_MESSAGE }),
  actualEndDate: z.date().refine((data) => data > new Date(), { message: END_DATE_AFTER_START_DATE_MESSAGE }),
});

const commonIssuechema = z.object({
  fixDate: z.date(),
  reviewDate: z.date(),
  fixer: commonStringSchema,
  taskId: commonStringSchema,
  reviewer: commonStringSchema,
  assignee: commonStringSchema,
  issueName: commonStringSchema,
  projectId: commonStringSchema,
  reason: z.enum(['reasonIssue1', 'reasonIssue2', 'reasonIssue3']),
  contentBug: z.string().min(3).max(500, { message: MIN_MAX_MESSAGE }),
  contentFix: z.string().min(3).max(500, { message: MIN_MAX_MESSAGE }),
});

const commonContractSchema = z.object({
  signDay: z.date(),
  salary: commonStringSchema,
  contractName: commonStringSchema,
  contractNumber: commonStringSchema,
  staffType: z.enum(['part time', 'full time']),
  contractType: z.enum(['probationary', 'offical']),
  paymentMethod: z.enum(['bank transfer', 'receive directly']),
  note: z.string().min(3).max(500, { message: MIN_MAX_MESSAGE }),
  contractPeriod: z.enum(['6 months', '1 year', '2 years', 'open-ended contract']),
});

const commonAbsenceSchema = z.object({
  offDay: z.date(),
  inForm: commonStringSchema,
  approver: z.enum(['approver1', 'approver2', 'approver3']),
  sessionOff: z.enum(['morning', 'afternoon', 'full day']),
  requester: z.enum(['requester1', 'requester2', 'requester3']),
  note: z.string().min(3).max(500, { message: MIN_MAX_MESSAGE }),
  reason: z.string().min(3).max(500, { message: MIN_MAX_MESSAGE }),
  dayOffType: z.enum(['sick leave', 'unpaid leave', 'maternity leave', 'wedding leave', 'paid leave', 'paternity leave', 'composionate leave']),
});

export const loginSchema = z.object({
  username: commonStringSchema,
  password: commonStringSchema.regex(PWD_REGEX),
});

export const passwordSchema = z.object({
  newPassword: commonStringSchema.regex(PWD_REGEX),
  repeatPassword: commonStringSchema.regex(PWD_REGEX),
  currentPassword: commonStringSchema.regex(PWD_REGEX),
});

export const tasksSchema = commonTaskSchema;
export const issuesSchema = commonIssuechema;
export const absenceSchema = commonAbsenceSchema;
export const projectsSchema = commonProjectSchema;
export const contractSchema = commonContractSchema;

export type UsersFormTypes = z.infer<typeof usersSchema>;
export type TasksFormTypes = z.infer<typeof tasksSchema>;
export type LoginFormTypes = z.infer<typeof loginSchema>;
export type IssuesFormTypes = z.infer<typeof issuesSchema>;
export type AbsencesFormTypes = z.infer<typeof absenceSchema>;
export type PasswordFormTypes = z.infer<typeof passwordSchema>;
export type ProjectsFormTypes = z.infer<typeof projectsSchema>;
export type ContractsFormTypes = z.infer<typeof contractSchema>;
