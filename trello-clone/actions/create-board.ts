'use server'
import db from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export type State = {
    errors?: {
        title?: string[];
    };
    message?: string | null;
}
const CreateBoard = z.object({
    title: z.string().min(3, {
        message: 'min 3 characters required'
    })
});

export async function create(prevState: State, formData: FormData) {
    const validatedFields = CreateBoard.safeParse({
        title: formData.get('title')
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing required fields'
        }
    }

    const { title } = validatedFields.data;

    try {
        await db.board.create({
            data: {
                title,
            }
        });
    } catch (error) {
        return {
            message: 'database error'
        }
    }



    revalidatePath('/organization/org_2gRvCAItNfxtBMBnl6LEGbUJN7A')
    redirect('/organization/org_2gRvCAItNfxtBMBnl6LEGbUJN7A')
}