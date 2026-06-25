/**
 * Google Form submission utility.
 *
 * Submits form data to the GrowthSpeed Google Form via a hidden iframe
 * to avoid CORS restrictions and page redirects.
 *
 * Form: Growth Speed Customer Intake Form
 * Entry ID: entry.1378752842 (email field)
 */

const GOOGLE_FORM_ID =
  "1FAIpQLSeng0BLDvHeKtSxoWX41kt5_CCFBwR6RlLV4DS5M6QJ36tMaw";
const GOOGLE_FORM_ACTION = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

/**
 * Submits data to the connected Google Form.
 * Uses a hidden iframe technique so the browser doesn't navigate away.
 *
 * @param email - The user's email address
 * @returns Promise that resolves when submission is sent
 */
export function submitToGoogleForm(email: string): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      // Create a unique iframe name
      const iframeName = `gform-${Date.now()}`;
      const iframe = document.createElement("iframe");
      iframe.name = iframeName;
      iframe.id = iframeName;
      iframe.style.display = "none";
      iframe.setAttribute("aria-hidden", "true");
      document.body.appendChild(iframe);

      // Create a hidden form that targets the iframe
      const form = document.createElement("form");
      form.method = "POST";
      form.action = GOOGLE_FORM_ACTION;
      form.target = iframeName;
      form.style.display = "none";

      // Add the email field
      const emailInput = document.createElement("input");
      emailInput.type = "text";
      emailInput.name = "entry.1378752842";
      emailInput.value = email;
      form.appendChild(emailInput);

      // Add a hidden submit flag (required by some Google Form setups)
      const submitFlag = document.createElement("input");
      submitFlag.type = "hidden";
      submitFlag.name = "fvv";
      submitFlag.value = "1";
      form.appendChild(submitFlag);

      document.body.appendChild(form);
      form.submit();

      // Clean up after a delay (give time for submission)
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
        resolve();
      }, 2500);
    } catch (err) {
      reject(err);
    }
  });
}
