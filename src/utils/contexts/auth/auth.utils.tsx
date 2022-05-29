export const retriveDataFromLocalStorage = () => {
  const user = sessionStorage.getItem("user") ?? localStorage.getItem("user");
  const token =
    sessionStorage.getItem("token") ?? localStorage.getItem("token");
  if (user && token) {
    return { user: JSON.parse(user), token };
  }
};
