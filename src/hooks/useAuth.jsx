const useAuth = () => {
  const user = { name: "kms" };
  //api usid
  return {
    user,
    isAuth: user ? true : false,
  };
};

export default useAuth;
