export interface Env {
  SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  BREVO_API_KEY: string;
  MAIL_FROM: string;
  MAIL_FROM_NAME: string;
  MAIL_TO: string;
  ALLOWED_ORIGINS: string;
}

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
};
