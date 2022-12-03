let data = {
	username: "murtuza_surti", // No leading @ here
	homeLabel: "Murtuzaali Surti",
	homeUrl: "https://murtuzaalisurti.github.io",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;