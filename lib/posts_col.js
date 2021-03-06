Posts = new Mongo.Collection('posts');
// it defenetly should be another. another ways to create 4 different
// methods of insert, but how?

Posts.allow({
  remove: ownsDocument
});

Meteor.methods({
  removeIt: function(id) {
    console.log("id",id);
    var ownerPost = Posts.findOne(id).userId;
    if(ownerPost == Meteor.userId())
      Posts.remove(id);
    else
      throwError("Oops..");
  },
  textInsert: function(postAttributes) {
    check(this.userId,String);
    check(postAttributes, {
      title:String,
      text:String,
      tags: Match.Optional([String])
    });

    var errors = validateText(postAttributes);

    _.values(errors).forEach(function(e) {
      throwDangerError(e);
    });

    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author:user.username,
      submitted: new Date(),
      commentsCount: 0
    });

    var postId = Posts.insert(post);

    return {
      _id: postId
    }
  },

  linkInsert: function(postAttributes) {
    check(this.userId,String);
    check(postAttributes, {
      title: String,
      link : String,
      nameLink: String,
      text : String,
      domain:String,
      tags: Match.Optional([String])
    });

    var errors = validateLink(postAttributes);

    _.values(errors).forEach(function(e) {
      throwDangerError(e);
    });

    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author:user.username,
      submitted: new Date(),
      commentsCount: 0
    });

    var postId = Posts.insert(post);

    return {
      _id: postId
    }
  },

  imageInsert: function(postAttributes) {
    check(this.userId,String);
    check(postAttributes, {
      title:String,
      text:String,
      image: String,
      tags: Match.Optional([String])
    });

    var errors = validateImage(postAttributes);

    _.values(errors).forEach(function(e) {
      throwDangerError(e);
    });

    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author:user.username,
      submitted: new Date(),
      commentsCount: 0
    });

    var postId = Posts.insert(post);

    return {
      _id: postId
    }
  },

  youtubeInsert: function(postAttributes) {
    check(this.userId,String);
    check(postAttributes, {
      title:String,
      text:String,
      youtubeId: String,
      tags: Match.Optional([String])
    });

    var errors = validateYoutube(postAttributes);
    _.values(errors).forEach(function(e) {
      throwDangerError(e);
    });

    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author:user.username,
      submitted: new Date(),
      commentsCount: 0
    });

    var postId = Posts.insert(post);

    return {
      _id: postId
    }
  },

  facebookInsert: function(postAttributes) {
    check(this.userId,String);
    check(postAttributes, {
      title:String,
      text:String,
      profileName: String,
      profileGender: String,
      profileImgUrl: String,
      profileLink: String,
      tags: Match.Optional([String])
    });

    var errors = validateFacebook(postAttributes);
    _.values(errors).forEach(function(e) {
      throwDangerError(e);
    });

    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author:user.username,
      submitted: new Date(),
      commentsCount: 0
    });

    var postId = Posts.insert(post);

    return {
      _id: postId
    }
  },

  vkInsert: function(postAttributes) {
    check(this.userId,String);
    check(postAttributes, {
      title:String,
      text:String,
      profileLink: String,
      profileBdate: String,
      profileName: String,
      profileGender: String,
      profileImgUrl: String,
      profileCity: String,
      profileCountry:String,
      tags: Match.Optional([String])
    });

    var errors = validateVk(postAttributes);
    _.values(errors).forEach(function(e) {
      throwDangerError(e);
    });

    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author:user.username,
      submitted: new Date(),
      commentsCount: 0
    });

    var postId = Posts.insert(post);

    return {
      _id: postId
    }

  }



});
