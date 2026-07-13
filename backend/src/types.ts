export interface Env {
  SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  SMTP_HOST: string;
  SMTP_PORT: string;
  SMTP_USERNAME: string;
  SMTP_PASSWORD: string;
  MAIL_FROM: string;
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
