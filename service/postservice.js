const express = require('express');
const router = express.Router();
const post = require('../config/post');

const { check, validationResult } = require('express-validator');

module.exports = {
    posts: async (req, resp) => {
        let posts = new post(req.body);

        const result = await posts.save();
        if (result) {
            return resp.send({ result: 'post save Successsfully' });
        }
    },
    posts_get: async (req, resp) => {
        const result = await post.find({ created_by: req.params.Fname });
        if (result) {
            resp.send({ result: result });
        }
    },
    postupdate: async (req, resp) => {
        try {
            const result = await post.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (result) {
                resp.send({ result: result });
            }
            else {
                resp.send("Not found");
                return;
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },
    post_count: async (req, resp) => {
        try {
            const count = []
            const Active_result = await post.find({ created_by: req.params.Fname, Status: "Active" }).count();
            const Inactive_result = await post.find({ created_by: req.params.Fname, Status: "inactive" }).count();

            count.push({
                Active: Active_result,
                Inactive: Inactive_result
            })

            resp.send({ data: count });
        }
        catch (err) {
            console.log(err.message);
        }
    },
}

