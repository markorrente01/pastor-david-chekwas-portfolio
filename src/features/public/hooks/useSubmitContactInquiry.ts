import { useMutation } from "@tanstack/react-query";

import { createContactInquiry } from "../api/contact.api";
import type { ContactInquiryInput } from "../schemas/contact.schema";

export function useSubmitContactInquiry() {
  return useMutation({
    mutationFn: (payload: ContactInquiryInput) =>
      createContactInquiry(payload),
  });
}
