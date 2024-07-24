'use client'
import { Input } from '@nextui-org/react'
import Link from 'next/link'
import SubmitButton from './SubmitButton'
import { signinUser } from '@/actions/auth'
import { useFormState } from 'react-dom'

const initialState = {
  message : null
}

const SigninForm = () => {
  const [formState, action] = useFormState<{message : string | null}>(signinUser, initialState)
  return (
    <form action={action} className="bg-content1 border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2 ">
      <h3 className="my-4">Sign in</h3>
      <Input
        fullWidth
        required
        size="lg"
        placeholder="Email"
        name="email"
        type="email"
      />
      <Input
        name="password"
        fullWidth
        required
        size="lg"
        type="password"
        placeholder="Password"
      />
      <SubmitButton label="Sign in" />
      <div>
        <Link href="/signup">{`Don't have an account?`}</Link>
      </div>
      {formState.message && <p className="text-red-500">{formState.message}</p>}
    </form>
  )
}

export default SigninForm
