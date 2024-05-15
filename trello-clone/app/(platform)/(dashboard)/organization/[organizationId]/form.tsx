'use client'
import { create } from '@/actions/create-board';
import { Button } from '@/components/ui/button';


export const Form = () => {
    return (
        <form action={create}>
        <input
            id='title'
            name='title'
            required
            placeholder='enter a board title'
            className='border-black border p-1'
            />
        <Button type='submit'>
            Submit
        </Button>
    </form>

    )
}