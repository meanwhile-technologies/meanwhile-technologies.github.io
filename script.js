// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Current year
  document.getElementById('y').textContent = new Date().getFullYear();

  // Lightweight client-side validation + graceful UX.
  // If you keep FORM_ACTION, we prevent actual POST and show a demo success.
  // Once you replace it with a real endpoint (e.g., Formspree), the submission will POST and this handler
  // will display the server response if available.
  const form = document.getElementById('signup');
  const note = document.getElementById('form-note');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    note.textContent = '';
    note.className = 'note';
    const email = (document.getElementById('email').value || '').trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      note.textContent = 'Please enter a valid email address.';
      note.classList.add('error');
      return;
    }

    const action = form.getAttribute('action');
    if (action && action !== 'FORM_ACTION') {
      try {
        const res = await fetch(action, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        });
        if (res.ok) {
          form.reset();
          note.textContent = "Thanks! We'll let you know when the beta is ready.";
          note.classList.add('success');
        } else {
          note.textContent = 'Something went wrong. Please try again later.';
          note.classList.add('error');
        }
      } catch (err) {
        note.textContent = 'Network error. Please try again later.';
        note.classList.add('error');
      }
    } else {
      // Demo success if no real action is configured
      form.reset();
      note.textContent = "Thanks! We'll let you know when the beta is ready.";
      note.classList.add('success');
    }
  });
});