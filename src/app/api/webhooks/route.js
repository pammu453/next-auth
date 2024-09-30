import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { createUser, deleteUser, updateUser } from '../../../lib/actions/user'

export async function POST(req) {
    // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

    if (!WEBHOOK_SECRET) {
        throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
    }

    // Get the headers
    const headerPayload = headers()
    const svix_id = headerPayload.get('svix-id')
    const svix_timestamp = headerPayload.get('svix-timestamp')
    const svix_signature = headerPayload.get('svix-signature')

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
            status: 400,
        })
    }

    // Get the body
    const payload = await req.json()
    const body = JSON.stringify(payload)

    // Create a new Svix instance with your secret.
    const wh = new Webhook(WEBHOOK_SECRET)

    let evt

    // Verify the payload with the headers
    try {
        evt = wh.verify(body, {
            'svix-id': svix_id,
            'svix-timestamp': svix_timestamp,
            'svix-signature': svix_signature,
        })
    } catch (err) {
        console.error('Error verifying webhook:', err)
        return new Response('Error occured', {
            status: 400,
        })
    }

    // Do something with the payload
    // For this guide, you simply log the payload to the console
    const { id } = evt.data
    const eventType = evt.type
    console.log(`Webhook with and ID of ${id} and type of ${eventType}`)
    console.log('Webhook body:', body)

    if (eventType === 'user.created') {
        try {
            const { id, email_addresses, first_name, last_name, username, image_url } = evt.data
            await createUser(id, email_addresses[0].email_address, first_name, last_name, username, image_url)

            return new Response('User created successfully', {
                status: 200,
            })

        } catch (error) {
            console.error('Error creating user:', error.message)
            return new Response('Error creating user', {
                status: 500,
            })
        }
    }

    // if (eventType === 'user.updated') {
    //     try {
    //         const { id, email_addresses, firstName, lastName, username, image_url } = evt.data
    //         await updateUser(id, email_addresses[0].email_address, firstName, lastName, username, image_url)
    //         return new Response('User updated successfully', {
    //             status: 200,
    //         })
    //     } catch (error) {
    //         console.error('Error updating user:', error.message)
    //         return new Response('Error updating user', {
    //             status: 500,
    //         })
    //     }
    // }

    // if (eventType === 'user.deleted') {
    //     try {
    //         const { id } = evt.data
    //         await deleteUser(id)
    //         return new Response('User deleted successfully', {
    //             status: 200,
    //         })
    //     } catch (error) {
    //         console.error('Error deleting user:', error.message)
    //         return new Response('Error deleting user', {
    //             status: 500,
    //         })
    //     }
    // }
}