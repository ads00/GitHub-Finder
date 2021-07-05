// 6943add37915006ce89b223a216a0b147a0d256

// Initialising values
const a = new GitHub();

// Search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== '') {
        a.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    // Show Alert
                    alert('error');
                } else {
                    // Show Profile
                    console.log(data);
                }
                
            });
    } else {
        // Clear Profile
    }
});
