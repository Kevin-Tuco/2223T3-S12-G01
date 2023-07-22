const controller = {
	getRoot: function(req, res){
		res.render('login');
	},

	redirectToRoot: function(req, res){
		res.render('/');
	},

	getProfile: function(req, res){
		var username = req.params.username;
		var idnum = req.params.idnum;
		res.send(username + ' ' + idnum);
	},

	checkAcc: function(req, res){
		var email = req.body.user_email;
		var password = req.body.user_pw;

		res.render('profile', {email:email});
	},

}
exports.showProfile = async (req, res) =>{
	const username = req.params.username;

	try{
		const user = await User.findOne({uname: username});
		const reviews = await Post.find({uname: username});
		res.render('profile', {user, reviews});
	}catch (err){
		console.error('Error fetching profile data',err);
		res.status(500).send('Error fetching profile data');
	}
};
module.exports = controller