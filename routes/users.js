const express = require('express');
const User = require('../models/users');
const router = express.Router();

router.get("", (req, res) => {
    User.findAll()
        .then(users => {
            res.header("Content-Type", 'application/json');
            res.status(200).send(JSON.stringify(users, null, 4))
        })
        .catch(err => console.log(err))

})

router.get("/:id", (req, res) => {
    let id = req.params.id;
    User.findOne(
        {
            where: {
                id
            }
        }
    )
        .then(user => {
            res.header("Content-Type", 'application/json');
            res.status(200).send(JSON.stringify(user, null, 4))
        })
        .catch(err => console.log(err))

})

router.post("/add", (req, res) => {
    let {
        FirstName,
        LastName,
        isActive,
        ChannelID,
        DesignerID,
        SalesPersonID,
        SalesOfficeID,
        SalesGroupID,
        Company,
        Position,
        Telephone,
        Mobile,
        Email
    } = req.body;

    User.create(
        {
            FirstName,
            LastName,
            isActive,
            ChannelID,
            DesignerID,
            SalesPersonID,
            SalesOfficeID,
            SalesGroupID,
            Company,
            Position,
            Telephone,
            Mobile,
            Email
        }
    )
        .then(user => res.status(201).send(user))
        .catch(err => console.log(err))

})

router.post("/edit/:id", (req, res) => {
    let {
        FirstName,
        LastName,
        isActive,
        ChannelID,
        DesignerID,
        SalesPersonID,
        SalesOfficeID,
        SalesGroupID,
        Company,
        Position,
        Telephone,
        Mobile,
        Email
    } = req.body;

    let id = req.params.id;

    User.update(
        {
            FirstName,
            LastName,
            isActive,
            ChannelID,
            DesignerID,
            SalesPersonID,
            SalesOfficeID,
            SalesGroupID,
            Company,
            Position,
            Telephone,
            Mobile,
            Email
        },
        {
            where: {
                id
            }
        }
    )
        .then(user => res.status(201).send(user))
        .catch(err => console.log(err))

})

module.exports = router;