class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // Show user profile
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}" />
                        <a href="${user.html_url}" target="blank" class="btn btn-primary btn-block mb-5">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>

                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>

                        <span class="badge badge-success">Followers: ${user.followers}</span>

                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">
                                Company: ${user.company}
                            </li>
                            <li class="list-group-item">
                                Website/Blog: <a href="${user.blog}">${user.blog}</a>
                            </li>
                            <li class="list-group-item">
                                Location: ${user.location}
                            </li>
                            <li class="list-group-item">
                                Member since: ${user.created_at}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    // Shows alert message
    showAlert(message, className) {
        this.clearProfile();
        this.clearAlert();

        // Create div
        const div = document.createElement('div');
        // Add classes to div
        div.className = className;
        // Add text to div
        div.appendChild(document.createTextNode(`${message}`));

        // Get parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');

        // Insert alert
        container.insertBefore(div, search);
    }

    // Clears aleart messages
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }

    //Clear Profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}