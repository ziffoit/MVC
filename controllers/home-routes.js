const router = require("express").Router();
const { Post } = require("../models");

router.get("/", (req, res) => {
    Post.findAll({
        include: [{
            model: User,
            attributes: ['name'],
        }],
        order: [['date_created', 'DESC']]
    })
        .then((data) => {
            const allPosts = data.map((post) => post.get({ plain: true }));
            res.render("all-posts", {
                layout: "main",
                allPosts,
            });
        })
        .catch((err) => res.redirect("login"));
});
