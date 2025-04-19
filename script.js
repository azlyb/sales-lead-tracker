document.getElementById("leadForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const form = e.target;
  
  const data = {
    client: form.client.value,
    email: form.email.value,
    phone: form.phone.value,
    product: form.product.value,
    followUpDate: form.followUpDate.value,
    target: form.target.value
  };

  const response = await fetch("YOUR_GOOGLE_APPS_SCRIPT_WEBAPP_URL", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const result = await response.json();
  document.getElementById("response").innerText = result.result === "success" 
    ? "Lead submitted!" 
    : "Error submitting lead.";

  form.reset();
});
