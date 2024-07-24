'use client' 

import React from 'react'
import { Button } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

interface SubmitButtonProps {
    label: string;
    [key: string]: any;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label, ...btnProps }) => {
    const { pending } = useFormStatus()
    return (
        <Button {...btnProps} isLoading={pending} type='submit'>
            {label}
        </Button>
    )
}


export default SubmitButton