'use server'

import { db } from '@/db/db'
import { events } from '@/db/schema'
import { delay } from '@/utils/delay'
import { getCurrentUser } from '@/utils/users'
import { revalidateTag } from 'next/cache'
import randomName from '@scaleway/random-name'

export const createNewEvent = async () =>{
    await delay(200)
     const user = await getCurrentUser()

     await db.insert(events).values({
        startOn: new Date().toUTCString(),
        createdById: user.id,
        isPrivate: false,
        name: randomName('event', ' '),
      })

     revalidateTag('dashboard:events')
}