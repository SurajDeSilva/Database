const SUPABASE_URL = 'https://zbbdylhqiirjsbbxgaid.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiYmR5bGhxaWlyanNiYnhnYWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMTE0ODgsImV4cCI6MjA2NDg4NzQ4OH0.SpWbXiTsdkqmx5tDElYK2TRipLuy-TVLeWQF-1e_TYw';

document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  const response = await fetch(`${SUPABASE_URL}/rest/v1/submissions`, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify({ name, email, message })
  });

  if (response.ok) {
    alert('Form submitted successfully!');
    form.reset();
  } else {
    alert('Error submitting form');
  }
});
