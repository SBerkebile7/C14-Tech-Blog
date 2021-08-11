const { Post } = require('../models');

const postdata = [
    {
        title: 'Donec posuere metus vitae ipsum.',
        post_content: 'Nulla at ipsum tellus. Fusce aliquam ultricies tempor. Quisque convallis augue eget porta volutpat. Duis mollis feugiat lacinia. Etiam enim tellus, maximus sit amet tincidunt ut, hendrerit eu ex. Sed volutpat luctus nulla, et posuere sem rhoncus vel. Donec elementum varius tincidunt. Morbi ac enim justo. Nunc ullamcorper lacinia fermentum. Nunc scelerisque neque eget ligula interdum tristique. Duis id nunc maximus, luctus turpis vel, elementum ex. Nulla scelerisque, sapien sit amet mattis lobortis, libero eros dignissim sem, quis consequat justo orci vitae odio. Nunc ullamcorper magna vitae quam dictum lobortis. Fusce tortor nibh, placerat eu consectetur et, cursus eget lacus.',
        user_id: 1
    },
    {
        title: 'Pellentesque eget felis eu purus.',
        post_content: 'Phasellus nec tristique nisi. In nec mauris ut quam euismod auctor. Nunc posuere tortor ac tempus aliquam. Ut malesuada auctor augue vel ornare. Ut ut ipsum ac diam faucibus venenatis. Nam porttitor, tortor nec malesuada mattis, diam ante imperdiet lorem, ut molestie leo magna eu augue. Nullam ornare id ex quis faucibus. Duis sed accumsan lectus. Praesent eget nibh a urna bibendum venenatis. Aliquam tincidunt nibh arcu, non placerat purus consectetur ac. Curabitur id tincidunt purus. Nullam sed augue posuere, pretium dui ac, iaculis lectus. Integer tempus nulla eget urna pharetra, at suscipit purus euismod. Suspendisse volutpat sapien quis dolor mattis tempus. Morbi sit amet imperdiet sem, vel porta eros.',
        user_id: 2
    },
    {
        title: 'Vestibulum viverra eget elit ut nunc.',
        post_content: 'Praesent ut odio sed ligula vehicula aliquet sed eleifend erat. Donec at venenatis tortor, non ornare lacus. Fusce et fermentum libero. Pellentesque dignissim urna ac laoreet ultricies. Nam sit amet lobortis nisi, a hendrerit neque. In venenatis nulla sit amet orci rutrum, eget elementum nulla elementum. Sed semper hendrerit risus in convallis. Integer ex ex, ultricies quis sem consequat, pretium lobortis magna. Curabitur scelerisque feugiat lorem. Vivamus facilisis diam mauris, nec scelerisque eros blandit nec. Morbi at nibh nec dolor placerat iaculis lacinia ac nunc. Sed sodales venenatis leo, vitae tincidunt nisi pretium in. Phasellus condimentum tempor dui, quis molestie urna molestie faucibus. Sed nec metus lacinia, vestibulum purus at, suscipit odio.',
        user_id: 4
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
