interface ContactFormData {
  fullName: string;
  inquiry: string;
  email: string;
  phone: string;
  message: string;
  subscribed: 'Yes' | 'No';
}

export const submitContactForm = async (data: ContactFormData): Promise<Response> => {
  return fetch('https://hook.eu2.make.com/5igaflhul9qo5xti5dx1qf8vflxbw1yk', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};