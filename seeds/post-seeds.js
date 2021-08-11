const { Post } = require('../models');

const postdata = [
    {
        title: 'Donec posuere metus vitae ipsum.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ornare risus. Aenean mattis faucibus nisl sed tincidunt. Morbi scelerisque lacus non auctor ultricies. Donec sit amet odio vel tellus congue scelerisque. Nunc imperdiet dui non lacus fermentum imperdiet. Aliquam egestas massa vitae est ornare, non ultrices mi volutpat. Aliquam vitae volutpat urna. Aenean ullamcorper magna quam, a elementum diam vehicula eu. Phasellus posuere neque ligula, vitae auctor quam dapibus sit amet. Fusce lacinia orci in tellus fermentum, at aliquam erat semper.',
        user_id: 1
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
