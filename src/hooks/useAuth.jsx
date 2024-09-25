const useAuth = () => {
  const user =null;
  //api usid
  return {
    user,
    isAuth: user ? true : false,
  };
};

export default useAuth;
