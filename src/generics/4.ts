type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialState: Partial<User>) {
  const defaultUser = {
    name: "",
    surname: "",
  };
  return { ...defaultUser, ...initialState };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
