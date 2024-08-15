export const loadUserFromLocalStorage = () => {
  try {
    const serializedUser = localStorage.getItem("user");
    if (serializedUser === null) {
      return null;
    }
    return JSON.parse(serializedUser);
  } catch (err) {
    console.error("Error al cargar el usuario desde localStorage:", err);
    return null;
  }
};

export const saveUserToLocalStorage = (user) => {
  try {
    localStorage.setItem("user", JSON.stringify(user));
  } catch (err) {
    console.error("Error al guardar el usuario en localStorage:", err);
  }
};

export const removeUserFromLocalStorage = () => {
  try {
    localStorage.removeItem("user");
  } catch (err) {
    console.error("Error al eliminar el usuario del localStorage:", err);
  }
};
