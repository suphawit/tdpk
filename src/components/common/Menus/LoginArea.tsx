import { GoX as CloseIcon } from 'react-icons/go';

const LoginArea = ({ onToggle }) => (
  <div className="fixed p-4 w-full h-full z-30 bg-gray-50 lg:hidden">
    <div className="flex justify-between">
      <p>Login</p>
      <CloseIcon className="text-2xl" onClick={onToggle} />
    </div>
    <p className="mt-4">Sign up</p>
  </div>
);

export default LoginArea;
