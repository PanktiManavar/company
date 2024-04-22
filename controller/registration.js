const express = require('express');
const service = require('../service/userservice')


module.exports = {

    registration: async (req, resp) => {
        service.rg(req.body).then(data => {
            return resp.send(data);
        }
        ).catch(err => {
            return resp.send(err);
        })
    },

    login: async (req, resp) => {
        service.login(req.body).then(data => {
            return resp.send(data);
        }
        ).catch(err => {
            return resp.send(err);
        })
    },
    posts: async (req, resp) => {
        service.post(req.body).then(data => {
            return resp.send(data);
        }
        ).catch(err => {
            return resp.send(err);
        })
    },
}