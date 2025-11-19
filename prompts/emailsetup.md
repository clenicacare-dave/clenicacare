**Codex Prompt: Create Contact Form with Resend Integration for ClenicaCare**

You are a senior full-stack engineer helping me add a production-ready **contact form** to my site.

## 1. Tech stack & project context

- The site is deployed on **Vercel**.
- It uses **Next.js (App Router)** with **TypeScript**.
- Emails must be sent via **Resend** using an API key stored in environment variables.
- Domain: `clenicacare.com`
- Public "from" identity: `dave@clenicacare.com`
- All content and messaging should use **UK English**.

Assume the standard Next.js 13/14 App Router layout:

- `app/` directory
- `app/page.tsx` etc.
- TypeScript throughout

If you need to create folders or files, do so following idiomatic Next.js conventions.

---

## 2. Email delivery requirements

I want **two flows**:

### 1. Notification email to me (internal)
- Triggered when a visitor submits the contact form
- Sent via Resend **to**: `clenicacare@gmail.com`
- **From**: `Dave at ClenicaCare <dave@clenicacare.com>`
- `reply_to`: the visitor’s email address
- Contains all submitted fields in both **plain text** and **HTML** versions

### 2. Optional auto-reply to the visitor (external)
- Sent to the visitor’s email
- From: `Dave at ClenicaCare <dave@clenicacare.com>`
- Friendly confirmation that we have received their message and will be in touch
- Short, clear, professional, and in UK English

Use the **Resend SDK**, not direct `fetch` to their API.

Environment variables (already configured in Vercel and `.env.local`):

- `RESEND_API_KEY`
- `CONTACT_FORM_TO` = `clenicacare@gmail.com`
- `CONTACT_FORM_FROM` = `Dave at ClenicaCare <dave@clenicacare.com>`

Use these env vars in the code, do **not** hard-code email addresses.

---

## 3. Backend: API route

Create a **Next.js App Router route** at:

- `app/api/contact/route.ts`

### Requirements:

1. Accept only **POST** with `Content-Type: application/json`.
2. Expected JSON body fields:
   - `name` (string, required)
   - `email` (string, required)
   - `phone` (string, optional)
   - `subject` (string, optional – default to "New enquiry from the ClenicaCare website")
   - `message` (string, required)
   - `consent` (boolean, required, must be `true`)
3. Validate input (trim, basic email check, message length > 5).
4. On success:
   - Send **notification email** to `CONTACT_FORM_TO`.
   - Send **auto-reply** to the visitor.
5. Error handling:
   - Return 500 on email failure, log server-side only.
6. Response:
   - Success: `{ success: true }`
   - Validation error: `{ error: "..." }`
7. Security:
   - Never expose env vars; server-only route.

---

## 4. Frontend: Contact form UI

Create a reusable client component:
- `components/ContactForm.tsx`

Create the contact page:
- `app/contact/page.tsx`

### Form fields:
- Name (required)
- Email (required)
- Phone (optional)
- Subject (optional)
- Message (required)
- Consent checkbox (required)

### Form behaviour:
- Uses React hooks (`useState`).
- Sends POST to `/api/contact` with JSON payload.
- Show `loading`, `success`, `error` states.
- Clean Tailwind styling.

### Page layout:
- Page title: "Contact ClenicaCare"
- Short introduction paragraph.
- Centre the form.

---

## 5. Types & structure

- Use **TypeScript** everywhere.
- Create an interface for the form payload.
- Strongly type API handler + frontend fetch call.

---

## 6. What I want from you (Codex)

1. Inspect project structure and confirm correct file locations.
2. Generate or modify the required files to implement everything end-to-end.
3. Output:
   - File paths
   - Full contents of each new/changed file
4. Provide a brief "How to test" section:
   - Mention installing `resend`
   - Confirm required env vars
   - Instructions to run locally and test submissions

Use UK English throughout and ensure tone is professional and suitable for a care services website.

---

Use this prompt to generate all required code and explanations.
