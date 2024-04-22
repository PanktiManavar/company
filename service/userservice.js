const express = require('express');
const router = express.Router();
const Rg = require('../config/user');

const { check, validationResult } = require('express-validator');

module.exports = {
    rgservice: async (req, resp) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return resp.status(400).json({ errors: errors.array() });
        }

        const { Fname, Lname, Email, Password, MobileNo } = req.body;

        try {
            //check user are exits or not

            let emailfind = await Rg.findOne({ Email });

            if (emailfind) {
                resp.status(400).json({ error: [{ msg: 'user already exits' }] });
            }

            //upar je let variabale ma name che e lakhava nu
            emailfind = new Rg({
                Fname, Lname, Email, Password, MobileNo
            });

            await emailfind.save();


            resp.status(200).json({ error: [{ msg: 'user register' }] });


        } catch (err) {
            // console.error(err.message);
            resp.status(500).send(err);
        }
    },

    login: async (req, res) => {
        try {
            if (req.body.Email && req.body.Password) {
                let result = await Rg.findOne({ Email: req.body.Email });
                if (result) {
                    if (req.body.Password === result.Password) {
                        res.send(JSON.stringify("Login Successfully..."));
                    } else {
                        res.send({ error: "Invalid Username or Password!" });
                    }
                } else {
                    res.send(JSON.stringify("User not found"))
                }
            } else {
                return res.send('Invalid creadential');
            }
        } catch (err) { console.log("server error") }
    },

    posts: async (req, resp) => {
        let posts = new Rg(req.body);

        const result = await posts.save();
        if (result) {
            return resp.send(JSON.stringify('post save Successsfully'));
        }
    }
}

