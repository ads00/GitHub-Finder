class GitHub {
    constructor() {
        this.client_id = 'f5ccbb96646c040f4ef6';
        this.client_secret = '488ccc5d5821811a5200793ee73859d72219aadd';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        };
    }
}