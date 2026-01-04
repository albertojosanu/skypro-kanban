import PopExit from "../components/PopUser/PopUser.jsx";

const SignOutPage = ({ setIsAuth, setTasks, setError }) => {
  return (
    <PopExit setIsAuth={setIsAuth} setTasks={setTasks} setError={setError} />
  );
};

export default SignOutPage;
