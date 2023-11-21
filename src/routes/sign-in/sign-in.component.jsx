import { signInWithGooglePopup } from '../../utils/firebase/firebase.util.js';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();

    console.log(response);
  };
  return (
    <div>
      <h1>I am a signIn page</h1>
      <button onClick={logGoogleUser}>SignIn with Google</button>
    </div>
  );
};

export default SignIn;
