"use server";
export interface ContactState {
  success?: boolean;
  message: string;
}

export default async function sendContact(prevState: ContactState, formData: FormData): Promise<ContactState> {

  const firstName = formData.get("firstName");
  const email = formData.get("email");
  const message = formData.get("userAbout");

  if (!firstName || !email || !message) {
    return {
      success: false,
      message: "همه فیلدها الزامی هستند",
    };
  }

  console.log({ firstName, email, message });

  return {
    success: true,
    message: "پیام با موفقیت ارسال شد",
  };
}