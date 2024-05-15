import { auth } from '@clerk/nextjs/server';

const OrganizationIdPage = () => {
    const {userId, orgId} = auth();
    
    return (
        <div>
            {orgId}
        </div>
    )
}

export default OrganizationIdPage;