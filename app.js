
// Initialising values
const github = new GitHub;
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== '') {
        ui.clearAlert();

        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    // Show Alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    // Show Profile
                    ui.clearAlert();
                    ui.showProfile(data.profile);
                }
            });
    } else {
        ui.clearProfile();
    }
});
