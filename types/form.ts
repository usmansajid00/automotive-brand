import { ContactFormValues } from "@/validations/contactSchema";

export type { ContactFormValues };

export interface FormSubmissionState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}
