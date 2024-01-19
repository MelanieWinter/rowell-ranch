import * as usersService from '../../utilities/users-service';

export default function OrderHistoryPage() {

    async function handleCheckToken(checkToken) {
        try {
            const expDate = await usersService.checkToken()
            console.log(expDate)
        } catch(err) {
            console.log("Error checking token")
        }
        
        
    }

    return (
        <div>
            <h1>OrderHistoryPage</h1>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </div>
    )
}

