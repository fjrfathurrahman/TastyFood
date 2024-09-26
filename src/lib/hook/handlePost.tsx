interface getFormData {
  url: string | URL;
  data: object;
}

async function handlePost({ url, data }: getFormData) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
    localStorage.setItem("isLogin", JSON.stringify(result.data));
    window.location.href = "/admin/dashboard";
  } catch (error: unknown) {
    console.error("Login failed:", error);
  }
}

async function handleLogin({ url, data }: getFormData) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
    localStorage.setItem("isLogin", JSON.stringify(result.data));
    window.location.href = "/admin/dashboard";
  } catch (error: unknown) {
    console.error("Login failed:", error);
  }
}

export { handlePost, handleLogin };
