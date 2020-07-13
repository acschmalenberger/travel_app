const router = require("express").Router();
// const User = require("../../controllers/userController");
const User = require('../../models/User');
const bcrypt = require('bcrypt');




//@route   GET api / user
//@desc    Reguster new user
//@access  Public

// Matches with "/api/books"
router.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User already exists' });



            //Create salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) throw err;
                    const newUser = new User({ name, email, password: hash })

                    newUser.save()
                        .then(user => {
                            res.json({
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        })

                })
            })
        })
});


module.exports = router;
