import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils.js';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign In with google popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
