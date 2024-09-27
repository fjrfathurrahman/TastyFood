import { PropsForm } from "../types/types";


/**
 * * Fungsi untuk mengirim data ke server dengan metode POST.
 * @param {{url: string, data: object}}  - objek yang berisi url dan data yang akan dikirimkan ke server.
 * @returns {Promise<void>}
 */
async function handlePost({ url, formData }: { url: string | URL, formData: FormData }) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log(result);
  } catch (error: unknown) {
    console.error("Upload failed:", error);
    return {success: false, message: "Username, email atau password tidak valid" };
  }
}

/**
 * * Fungsi untuk mengirimkan data ke server untuk proses login.
 * @param {{url: string, data: object}}  -  objek yang berisi url dan data yang akan dikirimkan ke server.
 * Jika proses login berhasil maka akan disimpan di local storage dan akan di redirect ke halaman dashboard admin.
 * Jika gagal maka akan di tampilkan pesan error di console.
 * @returns {Promise<void>}
 */
async function handleLogin({ url, formData }: PropsForm) {
  
  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    localStorage.setItem("isLogin", JSON.stringify(result.data));
    window.location.href = "/admin/dashboard";
  } catch (error: unknown) {
    console.error("Login failed:", error);
    return {success: false, message: "Username, email atau password tidak valid" };
  }
}

export { handlePost, handleLogin };
