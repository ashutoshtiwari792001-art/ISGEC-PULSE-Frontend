const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await api.post("/auth/login", { email, password });
    login(res.data.user, res.data.token);
    navigate("/");
  } catch (err) {
    alert(err.response?.data?.error || "Login failed");
  }
};
