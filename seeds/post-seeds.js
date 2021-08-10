const { Post } = require('../models');

const postdata = [
    {
        title: 'Donec posuere metus vitae ipsum.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ornare risus. Aenean mattis faucibus nisl sed tincidunt. Morbi scelerisque lacus non auctor ultricies. Donec sit amet odio vel tellus congue scelerisque. Nunc imperdiet dui non lacus fermentum imperdiet. Aliquam egestas massa vitae est ornare, non ultrices mi volutpat. Aliquam vitae volutpat urna. Aenean ullamcorper magna quam, a elementum diam vehicula eu. Phasellus posuere neque ligula, vitae auctor quam dapibus sit amet. Fusce lacinia orci in tellus fermentum, at aliquam erat semper.',
        user_id: 10
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat enim, rhoncus a placerat ut, bibendum at sapien. Pellentesque lacinia est et finibus eleifend. Nullam quam ipsum, pulvinar vel leo sed, tristique pellentesque eros. Pellentesque vulputate sem sed mollis sagittis. Nullam ullamcorper malesuada aliquet. In sagittis lectus nec ornare finibus. Sed auctor ornare tellus, et aliquet ex tincidunt eu. Maecenas ac erat nec velit pharetra blandit eu nec turpis. Fusce sit amet diam vitae nunc molestie scelerisque. Suspendisse porttitor risus nibh, ac placerat erat scelerisque quis. Nam consequat turpis vel enim aliquet gravida. Vivamus varius metus eu nisi hendrerit, id finibus lectus vestibulum.',
        user_id: 8
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum dapibus tortor. Nulla id est nulla. Nunc ac tortor mollis, tristique mauris et, interdum urna. Integer ac mattis odio, eu convallis mauris. Nunc ac orci odio. Fusce eu sodales turpis. Maecenas vehicula maximus ligula a lobortis. Integer lacinia mi in rutrum consectetur. Duis at interdum orci. Integer leo nulla, hendrerit nec fringilla a, sollicitudin nec mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        user_id: 1
    },
    {
        title: 'Nunc purus.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu bibendum nisl. Sed tristique condimentum faucibus. Sed porta vestibulum felis et vulputate. Morbi aliquam risus quis aliquam sollicitudin. In hac habitasse platea dictumst. Vestibulum volutpat vitae magna vitae aliquet. Duis eu sem eros. Aliquam blandit sem vitae bibendum imperdiet. Etiam eget vulputate sapien. Integer bibendum est ultricies odio mattis, a malesuada sapien lobortis. Cras interdum ullamcorper mauris vitae hendrerit.',
        user_id: 4
    },
    {
        title: 'Pellentesque eget nunc.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper, turpis sed fringilla laoreet, dui massa viverra urna, vel sagittis metus metus ac ex. Sed sit amet ultricies lacus. Morbi dictum lorem in viverra ultrices. Maecenas vitae leo mauris. Morbi euismod in velit eget cursus. Phasellus tempor finibus tempus. In euismod pellentesque lacus eu porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
        user_id: 7
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam at leo quis blandit. Curabitur sit amet ante aliquam, tristique odio quis, laoreet massa. Sed sagittis volutpat neque, nec pretium urna. Integer a blandit libero, eget dapibus eros. Nullam vestibulum rhoncus tincidunt. Proin eget lacus ultrices, lacinia nisl at, malesuada nibh. Nunc convallis mollis sollicitudin. Integer pharetra tincidunt lorem sit amet placerat. Vivamus sodales lectus laoreet tempor gravida. Suspendisse ligula est, blandit et purus at, imperdiet fringilla libero. Ut sit amet nisl eget velit semper semper. Vivamus et tincidunt orci, vel dapibus urna. Pellentesque ultricies turpis vel condimentum posuere. In felis nisi, rhoncus vitae sapien non, efficitur lacinia mi. Nam a nulla at elit lacinia euismod non sit amet elit. Mauris vel augue leo.',
        user_id: 4
    },
    {
        title: 'In hac habitasse platea dictumst.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel malesuada nunc. Aliquam erat volutpat. Cras libero lectus, posuere at maximus vitae, venenatis in arcu. Praesent sollicitudin ornare aliquam. Duis imperdiet sollicitudin bibendum. Nunc facilisis, nisi in fermentum egestas, nibh mi tincidunt tortor, eu mattis eros nisi sed ex. Curabitur aliquet in neque vitae lacinia. Nunc in felis sapien. Maecenas eu cursus nunc. Duis lobortis consequat ipsum, at auctor mauris tristique a.',
        user_id: 1
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus turpis arcu, nec convallis sapien maximus ac. Ut pellentesque enim id accumsan imperdiet. Nullam lobortis elit justo, ac pellentesque nisi dapibus eget. Suspendisse convallis egestas bibendum. Proin leo augue, sollicitudin a dapibus et, facilisis et purus. Pellentesque vitae diam eget tellus rhoncus rhoncus non sit amet mauris. Nulla facilisi. Integer in enim vel orci iaculis vulputate. Praesent efficitur odio eget consectetur volutpat.',
        user_id: 1
    },
    {
        title: 'Duis ac nibh.',
        post_content: '',
        user_id: 9
    },
    {
        title: 'Curabitur at ipsum ac tellus semper interdum.',
        post_content: '',
        user_id: 5
    },
    {
        title: 'In hac habitasse platea dictumst.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu est et mi vestibulum hendrerit ac a metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vitae fermentum massa, id sodales metus. Aliquam id lorem ac sem aliquam mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas non magna ac neque porta finibus a vitae turpis. Nam sem quam, interdum ac quam et, faucibus consequat ligula. Mauris facilisis lacinia dictum. Mauris ultricies massa eget viverra elementum. Curabitur feugiat turpis eu metus tempus imperdiet. Nunc euismod, odio ut malesuada ornare, tellus ex ultrices sem, nec euismod ante neque semper nulla. Sed venenatis lacus volutpat turpis interdum, vel aliquet massa sollicitudin. In euismod lobortis tellus ac lobortis. Fusce porta accumsan diam ac rutrum. Cras ullamcorper mi et neque hendrerit, ut rhoncus quam imperdiet. Aliquam pulvinar lacus rutrum scelerisque varius.',
        user_id: 3
    },
    {
        title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis est sit amet mi bibendum, et consectetur turpis porta. Donec feugiat fringilla mauris, eget cursus orci aliquet sit amet. Proin mattis dui in justo auctor, non blandit orci aliquam. Phasellus commodo est in magna gravida, ac pellentesque sapien auctor. Curabitur eu efficitur velit. Ut scelerisque purus at lectus auctor sagittis. Suspendisse potenti. Aliquam convallis arcu ut mi dictum ornare. Sed sit amet tincidunt magna. Praesent accumsan nisi in diam interdum rhoncus. Ut ultrices tortor mattis ipsum pellentesque, eget tincidunt urna vestibulum. Fusce auctor sed urna pulvinar facilisis. Ut congue facilisis commodo. Proin ipsum neque, sollicitudin at faucibus at, vestibulum non enim.',
        user_id: 10
    },
    {
        title: 'Donec dapibus.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus, lorem vel sagittis tincidunt, urna nisi rutrum orci, eget tempus mauris odio ac nibh. Cras sed erat et mi dictum malesuada nec sed nulla. Vestibulum eu justo blandit, congue metus eget, placerat dolor. Maecenas gravida elementum libero eu placerat. Nam mi enim, consectetur sit amet tincidunt eget, varius vitae libero. Proin ac urna sem. Etiam risus nunc, fringilla at semper eget, molestie sit amet nulla. Ut porta lobortis dui, in tempor sem interdum gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus diam magna, vulputate at erat porta, luctus finibus mi.',
        user_id: 8
    },
    {
        title: 'Nulla tellus.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur arcu diam, ut tincidunt leo pulvinar quis. Etiam in dui cursus, consectetur neque non, lobortis massa. Ut eget augue eu lorem pulvinar vulputate. Nullam consequat neque nisl, vehicula placerat enim euismod vitae. Donec venenatis, dui ac fermentum sodales, neque leo blandit massa, eget dignissim mauris justo sit amet libero. Phasellus tincidunt felis commodo lobortis vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean mollis facilisis aliquam. Nulla a interdum ex.',
        user_id: 3
    },
    {
        title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et augue hendrerit, cursus elit eget, placerat justo. In commodo suscipit enim et lacinia. Nullam scelerisque purus mi, nec euismod sapien lobortis ut. Fusce quis augue euismod, porttitor eros id, vulputate justo. Pellentesque eleifend faucibus mi eu scelerisque. Nullam tincidunt aliquet nisl aliquet molestie. Cras sed elit rhoncus, mattis augue sit amet, porta justo. Aenean tristique laoreet dui, in fringilla magna luctus ac.',
        user_id: 3
    },
    {
        title:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget metus quis orci egestas tincidunt eget eu erat. Suspendisse porttitor eget diam at ultricies. Duis et dapibus augue, id vestibulum nibh. Vivamus mollis enim libero, a semper est dapibus vitae. Duis in efficitur dolor. Etiam a arcu et magna eleifend luctus quis quis magna. Cras fermentum quam metus, eu egestas massa consequat et. Etiam ac semper neque. Phasellus volutpat purus vitae maximus consequat. Sed vitae sapien pharetra, luctus odio at, ornare elit. Donec lacus ipsum, pellentesque at placerat vitae, fermentum id lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        user_id: 7
    },
    {
        title: 'In hac habitasse platea dictumst.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae congue turpis. Integer dictum sit amet magna ac commodo. Curabitur risus est, laoreet id porta quis, dictum nec lorem. Nunc feugiat ut purus vel euismod. Sed maximus tortor justo, quis venenatis ex tristique id. Mauris in augue ut justo aliquet elementum nec ut ante. Nunc nunc justo, ornare ut vestibulum sed, placerat sed magna. Curabitur malesuada consectetur nibh, a blandit augue euismod vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec egestas nunc lectus, at pretium mi commodo in.',
        user_id: 6
    },
    {
        title: 'Etiam justo.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi ipsum, imperdiet id venenatis placerat, scelerisque vel tellus. Vivamus auctor convallis posuere. Aliquam pharetra elit magna, consectetur congue diam cursus nec. Fusce egestas risus non ligula vulputate, et tempus augue mattis. Vestibulum sem erat, vulputate non ante sit amet, vehicula fermentum tellus. Duis sed vulputate magna, a consequat lacus. Vivamus sed odio ultricies, vehicula magna nec, venenatis risus. Duis tincidunt, ipsum nec tristique fringilla, turpis libero facilisis ex, non scelerisque orci velit vitae lacus. Donec placerat nisl ut nulla condimentum, ut lobortis ipsum fringilla.',
        user_id: 4
    },
    {
        title: 'Nulla ut erat id mauris vulputate elementum.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a neque sem. Vestibulum gravida viverra dapibus. Sed viverra ex vitae ex ullamcorper, vitae imperdiet diam fermentum. Integer in maximus turpis. In accumsan pretium ante, vitae lacinia ex tristique ac. Ut maximus metus dui, a elementum eros molestie ac. Proin sed sollicitudin dolor. Sed quis finibus risus, eget sodales augue. Aliquam porta nulla id sem dapibus, cursus elementum lacus fermentum. Maecenas euismod dui et turpis venenatis maximus. Morbi laoreet, sapien interdum porta dictum, dui metus pharetra eros, ut laoreet ex urna eget tortor. Curabitur enim risus, iaculis eu urna ac, imperdiet blandit odio. Vestibulum elementum consectetur nunc, in ornare lacus tristique quis. Praesent sit amet hendrerit elit. Vivamus eget enim id lacus sollicitudin venenatis.',
        user_id: 6
    },
    {
        title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum feugiat mauris, efficitur cursus lacus. Fusce a efficitur enim. Etiam vestibulum lectus quis lacus dignissim euismod. Aenean in ultricies urna, ut iaculis nulla. Cras bibendum a odio in sodales. Integer vitae tortor velit. Cras pulvinar molestie sollicitudin. Ut in orci a nunc dapibus varius. Maecenas tempor odio nunc, at commodo lacus sagittis in. Fusce tempor feugiat dolor eu sodales. Maecenas ultricies mi erat, a sodales sem viverra eget. Sed aliquam vehicula erat, a dictum turpis dictum vitae. Morbi eget consectetur eros. Vivamus finibus porta lorem. Sed interdum mauris quis est imperdiet luctus. Vestibulum ut ullamcorper quam, ut aliquam elit.',
        user_id: 7
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
