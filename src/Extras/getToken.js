export const getToken = async () => {
  try {
    let user = localStorage.getItem("user");
    if (!user) {
      return null;
    }
    const userInfo = JSON.parse(user);
    const { token } = userInfo;
    return token;
  } catch (error) {
    console.log("Error while getting token", error);
  }
  return null;
};
