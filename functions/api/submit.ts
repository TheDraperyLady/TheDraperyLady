export const onRequestPost: PagesFunction<{
    MAILGUN_API_KEY: string
    MAILGUN_DOMAIN: string
    NOTIFY_TO: string
    FROM_EMAIL: string
  }> = async ({ request, env }) => {
    const data = await (async () => {
      const ct = request.headers.get("content-type") || "";
      if (ct.includes("application/json")) return await request.json();
      if (ct.includes("multipart/form-data")) {
        const fd = await request.formData(); const o: Record<string,string> = {};
        fd.forEach((v,k)=>o[k]=String(v)); return o;
      }
      return Object.fromEntries(new URLSearchParams(await request.text()));
    })();
  
    const form = data._form || "contact";
    const subject = `New ${form} submission`;
    const text = JSON.stringify(data, null, 2);
  
    // send via Mailgun
    const res = await fetch(`https://api.mailgun.net/v3/${env.MAILGUN_DOMAIN}/messages`, {
      method: "POST",
      headers: {
        Authorization: "Basic " + btoa("api:" + env.MAILGUN_API_KEY),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        from: env.FROM_EMAIL,
        to: env.NOTIFY_TO,
        subject,
        text,
      }),
    });
    if (!res.ok) return new Response("Email failed: " + await res.text(), { status: 502 });
  
    const redirect = data._redirect || `/thank-you?form=${encodeURIComponent(form)}`;
    return new Response(null, { status: 303, headers: { Location: redirect } });
  };
  