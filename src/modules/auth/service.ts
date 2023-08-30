import { auth, googleProvider } from 'config'
import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile as baseUpdateProfile,
  User
} from 'firebase/auth'

import { IForm } from './types'

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider)

export const logout = () => auth.signOut()

export const register = ({ email, password }: Pick<IForm.Register, 'email' | 'password'>) => createUserWithEmailAndPassword(auth, email, password)

export const updateProfile = (user: User, { name }: Omit<IForm.Register, 'email' | 'password'>) => baseUpdateProfile(user, { displayName: name })

export const login = ({ email, password }: IForm.Login) => signInWithEmailAndPassword(auth, email, password)

export const confirmResetPassword = (oobCode: string, newPassword: string) => confirmPasswordReset(auth, oobCode, newPassword)

export const sendResetPassword = (email: string) => sendPasswordResetEmail(auth, email)
