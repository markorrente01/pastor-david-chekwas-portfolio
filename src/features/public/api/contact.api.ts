import type { ContactInquiryInput } from "../schemas/contact.schema";

export interface ContactInquiryRecord extends ContactInquiryInput {
  id: string;
  submittedAt: string;
  status: "new";
}

const STORAGE_KEY = "david-chekwas-booking-inquiries";

function createId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `inquiry-${Date.now()}`;
}

export async function createContactInquiry(
  payload: ContactInquiryInput,
): Promise<ContactInquiryRecord> {
  // Simulate a network request until the Django API is connected.
  await new Promise<void>((resolve) => {
    window.setTimeout(resolve, 500);
  });

  const record: ContactInquiryRecord = {
    ...payload,
    id: createId(),
    submittedAt: new Date().toISOString(),
    status: "new",
  };

  const storedValue = window.localStorage.getItem(STORAGE_KEY);

  let existingRecords: ContactInquiryRecord[] = [];

  if (storedValue) {
    try {
      existingRecords = JSON.parse(storedValue) as ContactInquiryRecord[];
    } catch {
      existingRecords = [];
    }
  }

  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([record, ...existingRecords]),
  );

  return record;
}
