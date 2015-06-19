if (Notes.find().count() === 0) {
    Notes.insert({text: "webdev in 2020 is cool"});
    Notes.insert({text: "you might not need a framework"});
    Notes.insert({text: "start using Docker"});
};