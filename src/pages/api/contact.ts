import type {APIRoute} from "astro";
import jwt from "jsonwebtoken";

export const POST: APIRoute = async ({request}) => {
  const {API_SECRET_KEY, TOKEN_SECRET_KEY, MAIL_API_URL} = import.meta.env;

  if (!TOKEN_SECRET_KEY) {
    return new Response('TOKEN_SECRET_KEY is not set', {status: 500});
  }

  if (!API_SECRET_KEY) {
    return new Response('API_SECRET_KEY is not set', {status: 500});
  }

  if (!MAIL_API_URL) {
    return new Response('MAIL_API_URL is not set', {status: 500});
  }

  const token = request.headers.get('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return new Response('Authorization header is not set', {status: 401});
  }

  try {
    const decoded = jwt.verify(token, TOKEN_SECRET_KEY) as {api_secret: string};
    if (decoded.api_secret !== API_SECRET_KEY) {
      return new Response('Invalid API secret key', {status: 401});
    }
  } catch (error) {
    return new Response('Invalid token', {status: 401});
  }

  const {name, email, message} = await request.json();

  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('message', message);

  const response = await fetch(MAIL_API_URL, {
    method: 'POST',
    body: formData,
    headers: {
      "Accept": "application/json",
    },
  });

  if (!response.ok) {
    console.error(await response.json());
    return new Response('Something went wrong', {status: 500});
  }

  return new Response(
    JSON.stringify({message: `Hello ${name}! Your message has been sent.`}),
    {
      status: 200,
      headers: {"content-type": "application/json"},
    }
  );
};
