interface UserCredentials {
  email: string;
  id: string;
  is_active: boolean;
  access_token: string;
  token_type: string;
}

export function saveCredentials(data: UserCredentials) {
  localStorage.setItem("email", data.email);
  localStorage.setItem("id", data.id);
  localStorage.setItem("token", data.access_token);
  localStorage.setItem("isActive", JSON.stringify(data.is_active));
}
