const router = require("express").Router();
let Post = require("../../models/post.model");

// Get all posts
router.route("/").get((req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Add a post
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newPost = new Post({
    username,
    title,
    description,
    date,
  });

  newPost
    .save()
    .then(() => res.json("Post added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get post by ID
router.route("/:id").get((req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Delete post by ID
router.route("/:id").delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json("Post deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//  Update post by ID of course :)
router.route("/update/:id").post((req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      post.username = req.body.username;
      post.title = req.body.title;
      post.description = req.body.description;
      post.date = Date.parse(req.body.date);

      post
        .save()
        .then(() => res.json("Post Updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
